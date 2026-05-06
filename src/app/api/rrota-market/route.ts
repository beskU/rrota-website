import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const DEXSCREENER_API =
  `https://api.dexscreener.com/token-pairs/v1/solana/${RROTA_MINT}`;

const FALLBACK_CHART =
  `https://dexscreener.com/solana/${RROTA_MINT}`;

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

  return [...pairs].sort((a, b) => {
    const aLiq = safeNumber(a.liquidity?.usd) ?? 0;
    const bLiq = safeNumber(b.liquidity?.usd) ?? 0;

    const aVol = safeNumber(a.volume?.h24) ?? 0;
    const bVol = safeNumber(b.volume?.h24) ?? 0;

    return bLiq + bVol - (aLiq + aVol);
  })[0];
}

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(DEXSCREENER_API, {
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
      next: {
        revalidate: 60,
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`DexScreener responded with ${response.status}`);
    }

    const data = await response.json();

    const pairs: DexPair[] = Array.isArray(data)
      ? data
      : Array.isArray(data?.pairs)
        ? data.pairs
        : [];

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
    clearTimeout(timeout);

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
