"use client";

// Client-side token data helper
// IMPORTANT: Do NOT put SolanaTracker API key in client code.
// This file calls our server route: /api/token-data?token=...

// ============================
// Config
// ============================
export const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
const CACHE_KEY_PREFIX = "rrota_token_cache_";

// If you want to force one pool as "primary"
export const TARGET_POOL_ID = "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";

// ============================
// Types
// ============================
interface CacheEntry {
  data: TokenDataResponse;
  timestamp: number;
}

interface Pool {
  poolId: string;
  liquidity?: { quote?: number; usd?: number };
  price?: { quote?: number; usd?: number };
  marketCap?: { quote?: number; usd?: number };
  tokenSupply?: number;
  lastUpdated?: number;
}

interface TokenData {
  token?: {
    name?: string;
    symbol?: string;
    mint?: string;
    decimals?: number;
  };
  pools?: Pool[];
  events?: Record<string, { priceChangePercentage?: number }>;
  holders?: number;
}

export interface TokenDataResponse {
  price: number;
  liquidity: number;
  marketCap: number;
  tokenSupply: number;
  holders: number;
  lastUpdated: number;
  priceChange24h: number;
}

// ============================
// Cache helpers (localStorage)
// ============================
const getCacheKey = (tokenAddress: string): string =>
  `${CACHE_KEY_PREFIX}${tokenAddress}`;

const getCachedData = (tokenAddress: string): CacheEntry | null => {
  if (typeof window === "undefined") return null;

  try {
    const cached = localStorage.getItem(getCacheKey(tokenAddress));
    return cached ? (JSON.parse(cached) as CacheEntry) : null;
  } catch (error) {
    console.warn("Failed to read from cache:", error);
    return null;
  }
};

const setCachedData = (
  tokenAddress: string,
  data: TokenDataResponse,
  timestamp: number
): void => {
  if (typeof window === "undefined") return;

  try {
    const entry: CacheEntry = { data, timestamp };
    localStorage.setItem(getCacheKey(tokenAddress), JSON.stringify(entry));
  } catch (error) {
    console.warn("Failed to write to cache:", error);
  }
};

// ============================
// Fallback data
// ============================
const getDefaultTokenData = (): TokenDataResponse => ({
  price: 0,
  liquidity: 0,
  marketCap: 0,
  tokenSupply: 17400000000,
  holders: 0,
  lastUpdated: Date.now(),
  priceChange24h: 0,
});

// ============================
// Retry helper (backoff)
// ============================
const retryWithBackoff = async <T,>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 800
): Promise<T> => {
  let lastError: unknown;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt === maxRetries - 1) break;

      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError ?? new Error("Max retries exceeded");
};

// ============================
// Main function
// ============================
export async function getTokenData(
  tokenAddress: string
): Promise<TokenDataResponse> {
  const now = Date.now();

  // 1) Use cache first (fresh)
  const cachedEntry = getCachedData(tokenAddress);
  if (cachedEntry && now - cachedEntry.timestamp < CACHE_DURATION) {
    return cachedEntry.data;
  }

  // 2) Fetch from our server route (API key stays server-side)
  try {
    const tokenData = await retryWithBackoff(async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const url = `/api/token-data?token=${encodeURIComponent(tokenAddress)}`;

      const res = await fetch(url, {
        signal: controller.signal,
        cache: "no-store", // IMPORTANT: avoid sticky caching in Next
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`API failed: ${res.status} ${res.statusText}`);
      }

      const data = (await res.json()) as TokenData;

      const pools = Array.isArray(data.pools) ? data.pools : [];
      if (!pools.length) {
        throw new Error("No pools returned from API");
      }

      const targetPool = pools.find((p) => p.poolId === TARGET_POOL_ID);
      const primaryPool = targetPool ?? pools[0];

      const price = Number(primaryPool.price?.usd ?? 0);
      const liquidity = Number(primaryPool.liquidity?.usd ?? 0);
      const marketCap = Number(primaryPool.marketCap?.usd ?? 0);
      const tokenSupply = Number(primaryPool.tokenSupply ?? 0);
      const holders = Number(data.holders ?? 0);
      const lastUpdated = Number(primaryPool.lastUpdated ?? Date.now());

      const priceChange24h = Number(
        data.events?.["24h"]?.priceChangePercentage ?? 0
      );

      return {
        price,
        liquidity,
        marketCap,
        tokenSupply,
        holders,
        lastUpdated,
        priceChange24h,
      };
    });

    // 3) Save fresh result in cache
    setCachedData(tokenAddress, tokenData, now);
    return tokenData;
  } catch (error) {
    console.error("Error fetching token data:", error);

    // 4) If we have ANY cached data (even expired), use it
    if (cachedEntry) return cachedEntry.data;

    // 5) Otherwise fallback
    const defaultData = getDefaultTokenData();
    setCachedData(tokenAddress, defaultData, now);
    return defaultData;
  }
}
