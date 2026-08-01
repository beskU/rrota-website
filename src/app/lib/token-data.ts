"use client";

export const RROTA_MINT =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

export const TARGET_POOL_ID =
  "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";

export const CACHE_DURATION = 5 * 60 * 1000;

const REQUEST_TIMEOUT = 8_000;
const MAX_ATTEMPTS = 2;
const RETRY_DELAY = 500;
const CACHE_VERSION = 2;
const CACHE_KEY_PREFIX = `rrota_token_data_v${CACHE_VERSION}_`;

type NumericValue = number | string | null | undefined;

type CacheEntry = {
  version: number;
  tokenAddress: string;
  cachedAt: number;
  data: TokenDataResponse;
};

type Pool = {
  poolId?: string;
  id?: string;
  address?: string;
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

type RawTokenData = {
  token?: {
    name?: string;
    symbol?: string;
    mint?: string;
    decimals?: NumericValue;
  };
  pools?: Pool[];
  events?: Record<
    string,
    {
      priceChangePercentage?: NumericValue;
    }
  >;
  holders?: NumericValue;
};

type NormalizedApiData = Partial<TokenDataResponse>;

export interface TokenDataResponse {
  price: number;
  liquidity: number;
  marketCap: number;
  tokenSupply: number;
  holders: number;
  lastUpdated: number;
  priceChange24h: number;
}

let memoryCache: CacheEntry | null = null;
let activeRequest: Promise<TokenDataResponse> | null = null;

function getCacheKey(tokenAddress: string): string {
  return `${CACHE_KEY_PREFIX}${tokenAddress}`;
}

function isSupportedToken(tokenAddress: string): boolean {
  return tokenAddress.trim() === RROTA_MINT;
}

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

function isTokenDataResponse(value: unknown): value is TokenDataResponse {
  if (!value || typeof value !== "object") return false;

  const data = value as Record<string, unknown>;

  return (
    safeNumber(data.price) !== null &&
    safeNumber(data.liquidity) !== null &&
    safeNumber(data.marketCap) !== null &&
    safeNumber(data.tokenSupply) !== null &&
    safeNumber(data.holders) !== null &&
    safeNumber(data.lastUpdated) !== null &&
    safeNumber(data.priceChange24h) !== null
  );
}

function normalizeResponse(value: unknown): TokenDataResponse | null {
  if (!value || typeof value !== "object") return null;

  const data = value as NormalizedApiData;

  if (
    !("price" in data) &&
    !("liquidity" in data) &&
    !("marketCap" in data) &&
    !("tokenSupply" in data)
  ) {
    return null;
  }

  return {
    price: nonNegativeNumber(data.price),
    liquidity: nonNegativeNumber(data.liquidity),
    marketCap: nonNegativeNumber(data.marketCap),
    tokenSupply: nonNegativeNumber(data.tokenSupply),
    holders: Math.floor(nonNegativeNumber(data.holders)),
    lastUpdated: normalizeTimestamp(data.lastUpdated),
    priceChange24h: safeNumber(data.priceChange24h) ?? 0,
  };
}

function getPoolId(pool: Pool): string {
  return pool.poolId ?? pool.id ?? pool.address ?? "";
}

function selectPrimaryPool(pools: Pool[]): Pool | null {
  if (!pools.length) return null;

  const targetPool = pools.find(
    (pool) => getPoolId(pool) === TARGET_POOL_ID
  );

  if (targetPool) return targetPool;

  return [...pools].sort(
    (a, b) =>
      nonNegativeNumber(b.liquidity?.usd) -
      nonNegativeNumber(a.liquidity?.usd)
  )[0];
}

function normalizeRawTokenData(value: unknown): TokenDataResponse | null {
  if (!value || typeof value !== "object") return null;

  const data = value as RawTokenData;
  const pools = Array.isArray(data.pools) ? data.pools : [];
  const primaryPool = selectPrimaryPool(pools);

  if (!primaryPool) return null;

  const mint = data.token?.mint?.trim();

  if (mint && mint !== RROTA_MINT) {
    throw new Error("Token data response contained an unexpected mint address.");
  }

  const priceChange24h =
    safeNumber(data.events?.["24h"]?.priceChangePercentage) ??
    safeNumber(data.events?.h24?.priceChangePercentage) ??
    0;

  return {
    price: nonNegativeNumber(primaryPool.price?.usd),
    liquidity: nonNegativeNumber(primaryPool.liquidity?.usd),
    marketCap: nonNegativeNumber(primaryPool.marketCap?.usd),
    tokenSupply: nonNegativeNumber(primaryPool.tokenSupply),
    holders: Math.floor(nonNegativeNumber(data.holders)),
    lastUpdated: normalizeTimestamp(primaryPool.lastUpdated),
    priceChange24h,
  };
}

function parseApiResponse(value: unknown): TokenDataResponse {
  const normalized =
    normalizeResponse(value) ?? normalizeRawTokenData(value);

  if (!normalized) {
    throw new Error("Token data endpoint returned an unsupported response.");
  }

  const hasUsefulData =
    normalized.price > 0 ||
    normalized.liquidity > 0 ||
    normalized.marketCap > 0 ||
    normalized.tokenSupply > 0 ||
    normalized.holders > 0;

  if (!hasUsefulData) {
    throw new Error("Token data endpoint returned no usable RROTA data.");
  }

  return normalized;
}

function isCacheEntry(value: unknown): value is CacheEntry {
  if (!value || typeof value !== "object") return false;

  const entry = value as Partial<CacheEntry>;

  return (
    entry.version === CACHE_VERSION &&
    entry.tokenAddress === RROTA_MINT &&
    typeof entry.cachedAt === "number" &&
    Number.isFinite(entry.cachedAt) &&
    isTokenDataResponse(entry.data)
  );
}

function isFresh(entry: CacheEntry, now = Date.now()): boolean {
  return now - entry.cachedAt >= 0 && now - entry.cachedAt < CACHE_DURATION;
}

function readLocalCache(): CacheEntry | null {
  if (typeof window === "undefined") return null;

  const key = getCacheKey(RROTA_MINT);

  try {
    const raw = window.localStorage.getItem(key);

    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);

    if (!isCacheEntry(parsed)) {
      window.localStorage.removeItem(key);
      return null;
    }

    return parsed;
  } catch (error) {
    console.warn("Unable to read RROTA token cache:", error);

    try {
      window.localStorage.removeItem(key);
    } catch {
      // Storage may be unavailable in privacy-restricted environments.
    }

    return null;
  }
}

function writeCache(data: TokenDataResponse): void {
  const entry: CacheEntry = {
    version: CACHE_VERSION,
    tokenAddress: RROTA_MINT,
    cachedAt: Date.now(),
    data,
  };

  memoryCache = entry;

  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      getCacheKey(RROTA_MINT),
      JSON.stringify(entry)
    );
  } catch (error) {
    console.warn("Unable to write RROTA token cache:", error);
  }
}

function getFreshCachedData(): TokenDataResponse | null {
  const now = Date.now();

  if (memoryCache && isFresh(memoryCache, now)) {
    return memoryCache.data;
  }

  const localEntry = readLocalCache();

  if (localEntry && isFresh(localEntry, now)) {
    memoryCache = localEntry;
    return localEntry.data;
  }

  return null;
}

function shouldRetryStatus(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

async function requestTokenData(): Promise<TokenDataResponse> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeout = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT
    );

    try {
      const response = await fetch(
        `/api/token-data?token=${encodeURIComponent(RROTA_MINT)}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        const error = new Error(
          `Token data request failed with status ${response.status}.`
        );

        if (!shouldRetryStatus(response.status) || attempt === MAX_ATTEMPTS) {
          throw error;
        }

        lastError = error;
      } else {
        const payload: unknown = await response.json();
        return parseApiResponse(payload);
      }
    } catch (error) {
      lastError = error;

      const isAbort =
        error instanceof Error && error.name === "AbortError";

      if (attempt === MAX_ATTEMPTS) {
        throw isAbort
          ? new Error("Token data request timed out.")
          : error;
      }
    } finally {
      window.clearTimeout(timeout);
    }

    await wait(RETRY_DELAY * attempt);
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Unable to load RROTA token data.");
}

export async function getTokenData(
  tokenAddress: string
): Promise<TokenDataResponse> {
  if (!isSupportedToken(tokenAddress)) {
    throw new Error("Unsupported token address requested.");
  }

  const cached = getFreshCachedData();

  if (cached) {
    return cached;
  }

  if (!activeRequest) {
    activeRequest = requestTokenData()
      .then((data) => {
        writeCache(data);
        return data;
      })
      .finally(() => {
        activeRequest = null;
      });
  }

  return activeRequest;
}

export function clearTokenDataCache(): void {
  memoryCache = null;
  activeRequest = null;

  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(getCacheKey(RROTA_MINT));
  } catch (error) {
    console.warn("Unable to clear RROTA token cache:", error);
  }
}
