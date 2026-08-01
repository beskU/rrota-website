import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

const RROTA_MINT =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const TARGET_POOL_ID =
  "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";

const SOLANA_TRACKER_ENDPOINT =
  `https://data.solanatracker.io/tokens/${RROTA_MINT}`;

const REQUEST_TIMEOUT = 7_000;

const SUCCESS_CACHE_CONTROL =
  "public, s-maxage=300, stale-while-revalidate=900";

const ERROR_CACHE_CONTROL = "no-store";

type NumericValue = number | string | null | undefined;

type SolanaTrackerPool = {
  poolId?: string;
  tokenAddress?: string;
  liquidity?: {
    quote?: NumericValue;
    usd?: NumericValue;
  };
  price?: {
    quote?: NumericValue;
    usd?: NumericValue;
  };
  marketCap?: {
    quote?: NumericValue;
    usd?: NumericValue;
  };
  tokenSupply?: NumericValue;
  lastUpdated?: number | string;
};

type SolanaTrackerResponse = {
  token?: {
    mint?: string;
  };
  pools?: SolanaTrackerPool[];
  events?: Record<
    string,
    {
      priceChangePercentage?: NumericValue;
    }
  >;
  holders?: NumericValue;
};

type TokenDataResponse = {
  price: number;
  liquidity: number;
  marketCap: number;
  tokenSupply: number;
  holders: number;
  lastUpdated: number;
  priceChange24h: number;
};

type ErrorResponse = {
  error: string;
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

function nonNegativeNumber(value: unknown): number {
  const parsed = safeNumber(value);
  return parsed !== null && parsed >= 0 ? parsed : 0;
}

function normalizeTimestamp(value: unknown): number {
  if (typeof value === "string") {
    const numeric = safeNumber(value);

    if (numeric !== null) {
      return normalizeTimestamp(numeric);
    }

    const parsedDate = Date.parse(value);
    return Number.isFinite(parsedDate) ? parsedDate : Date.now();
  }

  const numeric = safeNumber(value);

  if (numeric === null || numeric <= 0) {
    return Date.now();
  }

  return numeric < 1_000_000_000_000 ? numeric * 1000 : numeric;
}

function isUsablePool(pool: SolanaTrackerPool): boolean {
  return (
    nonNegativeNumber(pool.price?.usd) > 0 ||
    nonNegativeNumber(pool.liquidity?.usd) > 0 ||
    nonNegativeNumber(pool.marketCap?.usd) > 0 ||
    nonNegativeNumber(pool.tokenSupply) > 0
  );
}

function belongsToRrota(pool: SolanaTrackerPool): boolean {
  return !pool.tokenAddress || pool.tokenAddress === RROTA_MINT;
}

function selectPrimaryPool(
  pools: SolanaTrackerPool[]
): SolanaTrackerPool | null {
  const eligiblePools = pools.filter(
    (pool) => belongsToRrota(pool) && isUsablePool(pool)
  );

  if (!eligiblePools.length) return null;

  const configuredPool = eligiblePools.find(
    (pool) => pool.poolId === TARGET_POOL_ID
  );

  if (configuredPool) {
    return configuredPool;
  }

  return [...eligiblePools].sort((a, b) => {
    const liquidityDifference =
      nonNegativeNumber(b.liquidity?.usd) -
      nonNegativeNumber(a.liquidity?.usd);

    if (liquidityDifference !== 0) {
      return liquidityDifference;
    }

    return (
      nonNegativeNumber(b.marketCap?.usd) -
      nonNegativeNumber(a.marketCap?.usd)
    );
  })[0];
}

function successResponse(
  payload: TokenDataResponse
): NextResponse<TokenDataResponse> {
  return NextResponse.json(payload, {
    status: 200,
    headers: {
      "Cache-Control": SUCCESS_CACHE_CONTROL,
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function errorResponse(
  message: string,
  status: number
): NextResponse<ErrorResponse> {
  return NextResponse.json(
    {
      error: message,
    },
    {
      status,
      headers: {
        "Cache-Control": ERROR_CACHE_CONTROL,
        "X-Content-Type-Options": "nosniff",
      },
    }
  );
}

function normalizeTokenData(
  value: unknown
): TokenDataResponse {
  if (!value || typeof value !== "object") {
    throw new Error("Unsupported SolanaTracker response.");
  }

  const data = value as SolanaTrackerResponse;
  const returnedMint = data.token?.mint?.trim();

  if (returnedMint && returnedMint !== RROTA_MINT) {
    throw new Error("SolanaTracker returned an unexpected token.");
  }

  const pools = Array.isArray(data.pools) ? data.pools : [];
  const primaryPool = selectPrimaryPool(pools);

  if (!primaryPool) {
    throw new Error("No usable RROTA pool was returned.");
  }

  const normalized: TokenDataResponse = {
    price: nonNegativeNumber(primaryPool.price?.usd),
    liquidity: nonNegativeNumber(primaryPool.liquidity?.usd),
    marketCap: nonNegativeNumber(primaryPool.marketCap?.usd),
    tokenSupply: nonNegativeNumber(primaryPool.tokenSupply),
    holders: Math.floor(nonNegativeNumber(data.holders)),
    lastUpdated: normalizeTimestamp(primaryPool.lastUpdated),
    priceChange24h:
      safeNumber(
        data.events?.["24h"]?.priceChangePercentage
      ) ?? 0,
  };

  const hasUsefulData =
    normalized.price > 0 ||
    normalized.liquidity > 0 ||
    normalized.marketCap > 0 ||
    normalized.tokenSupply > 0 ||
    normalized.holders > 0;

  if (!hasUsefulData) {
    throw new Error("SolanaTracker returned no usable RROTA data.");
  }

  return normalized;
}

export async function GET(
  request: Request
): Promise<
  NextResponse<TokenDataResponse | ErrorResponse>
> {
  const requestUrl = new URL(request.url);
  const requestedToken = requestUrl.searchParams
    .get("token")
    ?.trim();

  if (!requestedToken) {
    return errorResponse("Missing token address.", 400);
  }

  if (requestedToken !== RROTA_MINT) {
    return errorResponse("Unsupported token address.", 400);
  }

  const apiKey = process.env.SOLANATRACKER_API_KEY?.trim();

  if (!apiKey) {
    console.error(
      "SOLANATRACKER_API_KEY is not configured."
    );

    return errorResponse(
      "Token data service is temporarily unavailable.",
      503
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT
  );

  try {
    const upstream = await fetch(
      SOLANA_TRACKER_ENDPOINT,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": apiKey,
        },
        signal: controller.signal,
        cache: "force-cache",
        next: {
          revalidate: 300,
        },
      }
    );

    if (!upstream.ok) {
      console.error(
        `SolanaTracker request failed with status ${upstream.status}.`
      );

      return errorResponse(
        "Token data provider is temporarily unavailable.",
        upstream.status === 429 ? 503 : 502
      );
    }

    const payload: unknown = await upstream.json();
    const normalized = normalizeTokenData(payload);

    return successResponse(normalized);
  } catch (error) {
    const isTimeout =
      error instanceof Error &&
      (error.name === "AbortError" ||
        error.name === "TimeoutError");

    console.error(
      "Failed to load RROTA token data:",
      isTimeout
        ? "SolanaTracker request timed out."
        : error
    );

    return errorResponse(
      isTimeout
        ? "Token data request timed out."
        : "Token data is temporarily unavailable.",
      isTimeout ? 504 : 502
    );
  } finally {
    clearTimeout(timeout);
  }
}
