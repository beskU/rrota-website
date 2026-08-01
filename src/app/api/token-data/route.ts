import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 60;

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const DEXSCREENER_API = `https://api.dexscreener.com/token-pairs/v1/solana/${RROTA_MINT}`;
const FALLBACK_CHART = `https://dexscreener.com/solana/${RROTA_MINT}`;

const SUCCESS_CACHE_CONTROL =
  "public, s-maxage=60, stale-while-revalidate=300";
const FALLBACK_CACHE_CONTROL =
  "public, s-maxage=30, stale-while-revalidate=120";

type DexToken = {
  address?: string;
  name?: string;
  symbol?: string;
};

type DexPair = {
  chainId?: string;
  dexId?: string;
  url?: string;
  pairAddress?: string;
  baseToken?: DexToken;
  quoteToken?: DexToken;
  priceUsd?: string | number;
  priceNative?: string | number;
  marketCap?: string | number;
  fdv?: string | number;
  liquidity?: {
    usd?: string | number;
    base?: string | number;
    quote?: string | number;
  };
  volume?: {
    h24?: string | number;
    h6?: string | number;
    h1?: string | number;
    m5?: string | number;
  };
  priceChange?: {
    h24?: string | number;
    h6?: string | number;
    h1?: string | number;
    m5?: string | number;
  };
};

type MarketResponse =
  | {
      ok: true;
      source: "dexscreener";
      mint: string;
      dexId: string | null;
      pairAddress: string | null;
      chartUrl: string;
      priceUsd: number | null;
      marketCap: number | null;
      fdv: number | null;
      liquidityUsd: number | null;
      volume24h: number | null;
      priceChange24h: number | null;
      updatedAt: string;
    }
  | {
      ok: false;
      source: "dexscreener";
      message: string;
      chartUrl: string;
      updatedAt: string;
    };

function safeNumber(value: unknown): number | null {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function safeString(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const normalized = value.trim();
  return normalized || null;
}

function isExpectedPair(pair: DexPair): boolean {
  if (pair.chainId && pair.chainId.toLowerCase() !== "solana") {
    return false;
  }

  const tokenAddresses = [
    pair.baseToken?.address,
    pair.quoteToken?.address,
  ]
    .filter((address): address is string => typeof address === "string")
    .map((address) => address.trim());

  return (
    tokenAddresses.length === 0 ||
    tokenAddresses.some((address) => address === RROTA_MINT)
  );
}

function pickBestPair(pairs: DexPair[]): DexPair | null {
  const candidates = pairs.filter(isExpectedPair);

  if (!candidates.length) return null;

  return [...candidates].sort((a, b) => {
    const liquidityDifference =
      (safeNumber(b.liquidity?.usd) ?? 0) -
      (safeNumber(a.liquidity?.usd) ?? 0);

    if (liquidityDifference !== 0) {
      return liquidityDifference;
    }

    return (
      (safeNumber(b.volume?.h24) ?? 0) -
      (safeNumber(a.volume?.h24) ?? 0)
    );
  })[0];
}

function getChartUrl(pair: DexPair): string {
  const apiUrl = safeString(pair.url);

  if (apiUrl) {
    try {
      const parsed = new URL(apiUrl);
      const hostname = parsed.hostname.toLowerCase();

      if (
        parsed.protocol === "https:" &&
        (hostname === "dexscreener.com" ||
          hostname === "www.dexscreener.com")
      ) {
        return parsed.toString();
      }
    } catch {
      // Fall through to a URL built from the verified pair address.
    }
  }

  const pairAddress = safeString(pair.pairAddress);

  if (pairAddress && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(pairAddress)) {
    return `https://dexscreener.com/solana/${pairAddress}`;
  }

  return FALLBACK_CHART;
}

function jsonResponse(
  payload: MarketResponse,
  cacheControl: string
): NextResponse<MarketResponse> {
  return NextResponse.json(payload, {
    status: 200,
    headers: {
      "Cache-Control": cacheControl,
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export async function GET(): Promise<NextResponse<MarketResponse>> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6_500);

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

    if (!response.ok) {
      throw new Error(`DexScreener request failed with status ${response.status}`);
    }

    const data: unknown = await response.json();

    const pairs: DexPair[] = Array.isArray(data)
      ? (data as DexPair[])
      : data &&
          typeof data === "object" &&
          "pairs" in data &&
          Array.isArray((data as { pairs?: unknown }).pairs)
        ? ((data as { pairs: DexPair[] }).pairs)
        : [];

    const pair = pickBestPair(pairs);
    const updatedAt = new Date().toISOString();

    if (!pair) {
      return jsonResponse(
        {
          ok: false,
          source: "dexscreener",
          message: "No active RROTA market pair is currently available.",
          chartUrl: FALLBACK_CHART,
          updatedAt,
        },
        FALLBACK_CACHE_CONTROL
      );
    }

    return jsonResponse(
      {
        ok: true,
        source: "dexscreener",
        mint: RROTA_MINT,
        dexId: safeString(pair.dexId),
        pairAddress: safeString(pair.pairAddress),
        chartUrl: getChartUrl(pair),
        priceUsd: safeNumber(pair.priceUsd),
        marketCap: safeNumber(pair.marketCap),
        fdv: safeNumber(pair.fdv),
        liquidityUsd: safeNumber(pair.liquidity?.usd),
        volume24h: safeNumber(pair.volume?.h24),
        priceChange24h: safeNumber(pair.priceChange?.h24),
        updatedAt,
      },
      SUCCESS_CACHE_CONTROL
    );
  } catch (error) {
    const isTimeout =
      error instanceof Error &&
      (error.name === "AbortError" || error.name === "TimeoutError");

    console.error(
      "Failed to load RROTA market data:",
      isTimeout ? "DexScreener request timed out." : error
    );

    return jsonResponse(
      {
        ok: false,
        source: "dexscreener",
        message: isTimeout
          ? "Market data request timed out. Use the direct chart for current data."
          : "Market data is temporarily unavailable. Use the direct chart for current data.",
        chartUrl: FALLBACK_CHART,
        updatedAt: new Date().toISOString(),
      },
      FALLBACK_CACHE_CONTROL
    );
  } finally {
    clearTimeout(timeout);
  }
}
