import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const RROTA_POOL = "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";

const DEXSCREENER_ENDPOINTS = [
  `https://api.dexscreener.com/latest/dex/pairs/solana/${RROTA_POOL}`,
  `https://api.dexscreener.com/token-pairs/v1/solana/${RROTA_MINT}`,
  `https://api.dexscreener.com/tokens/v1/solana/${RROTA_MINT}`,
] as const;

const FALLBACK_CHART =
  `https://dexscreener.com/solana/${RROTA_POOL}`;

type DexPair = {
  chainId?: string;
  dexId?: string;
  url?: string;
  pairAddress?: string;
  priceUsd?: string;
  priceNative?: string;
  marketCap?: number;
  fdv?: number;
  liquidity?: {
    usd?: number;
    base?: number;
    quote?: number;
  };
  volume?: {
    h24?: number;
    h6?: number;
    h1?: number;
    m5?: number;
  };
  priceChange?: {
    h24?: number;
    h6?: number;
    h1?: number;
    m5?: number;
  };
};

function safeNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;

  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }

  return null;
}

function pickBestPair(pairs: DexPair[]): DexPair | null {
  if (!Array.isArray(pairs) || pairs.length === 0) return null;

  const configured = pairs.find((pair) => pair.pairAddress === RROTA_POOL);
  if (configured) return configured;

  return [...pairs].sort((a, b) => {
    const aLiq = safeNumber(a.liquidity?.usd) ?? 0;
    const bLiq = safeNumber(b.liquidity?.usd) ?? 0;

    const aVol = safeNumber(a.volume?.h24) ?? 0;
    const bVol = safeNumber(b.volume?.h24) ?? 0;

    return bLiq + bVol - (aLiq + aVol);
  })[0];
}

async function fetchPairsFromDexScreener(): Promise<DexPair[]> {
  let lastError: Error | null = null;

  for (const endpoint of DEXSCREENER_ENDPOINTS) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);

    try {
      const response = await fetch(endpoint, {
        headers: { Accept: "application/json" },
        signal: controller.signal,
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        lastError = new Error(`DexScreener responded with ${response.status}`);
        continue;
      }

      const data = await response.json();
      const pairs: DexPair[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.pairs)
          ? data.pairs
          : [];

      if (pairs.length > 0) return pairs;
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error("DexScreener request failed");
    } finally {
      clearTimeout(timeout);
    }
  }

  if (lastError) throw lastError;
  return [];
}

export async function GET() {
  try {
    const pairs = await fetchPairsFromDexScreener();
    const pair = pickBestPair(pairs);

    if (!pair) {
      return NextResponse.json(
        {
          ok: false,
          source: "dexscreener",
          message: "No active RROTA pair found.",
          chartUrl: FALLBACK_CHART,
        },
        {
          status: 200,
          headers: {
            "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
          },
        },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        source: "dexscreener",
        mint: RROTA_MINT,
        dexId: pair.dexId ?? null,
        pairAddress: pair.pairAddress ?? null,
        chartUrl: pair.url ?? FALLBACK_CHART,
        priceUsd: safeNumber(pair.priceUsd),
        marketCap: safeNumber(pair.marketCap) ?? safeNumber(pair.fdv),
        liquidityUsd: safeNumber(pair.liquidity?.usd),
        volume24h: safeNumber(pair.volume?.h24),
        priceChange24h: safeNumber(pair.priceChange?.h24),
        updatedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        source: "dexscreener",
        message:
          error instanceof Error
            ? error.message
            : "Market data temporarily unavailable.",
        chartUrl: FALLBACK_CHART,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=30, stale-while-revalidate=120",
        },
      },
    );
  }
}
