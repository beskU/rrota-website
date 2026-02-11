"use client";

// Client-side token data helper
// IMPORTANT: Do NOT put SolanaTracker API key in client code.
// This file calls our server route: /api/token-data?token=...

// Cache interface
interface CacheEntry {
  data: TokenDataResponse;
  timestamp: number;
}

// Persistent cache using localStorage
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
const CACHE_KEY_PREFIX = "rrota_token_cache_";

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

// Default fallback data for when API fails and no cache exists
const getDefaultTokenData = (): TokenDataResponse => ({
  price: 0,
  liquidity: 0,
  marketCap: 0,
  tokenSupply: 17400000000,
  holders: 0,
  lastUpdated: Date.now(),
  priceChange24h: 0,
});

// Retry function with exponential backoff
const retryWithBackoff = async <T,>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error("Max retries exceeded");
};

export async function getTokenData(
  tokenAddress: string
): Promise<TokenDataResponse> {
  const cachedEntry = getCachedData(tokenAddress);
  const now = Date.now();

  // Use fresh cache
  if (cachedEntry && now - cachedEntry.timestamp < CACHE_DURATION) {
    return cachedEntry.data;
  }

  try {
    const tokenData = await retryWithBackoff(async () => {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 10000);

      // Call YOUR server route (API key lives on server)
      const res = await fetch(`/api/token-data?token=${tokenAddress}`, {
        signal: controller.signal,
      });

      window.clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`API request failed: ${res.status} ${res.statusText}`);
      }

      const data = (await res.json()) as TokenData;

      const pools = Array.isArray(data.pools) ? data.pools : [];
      const targetPoolId = "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
      const targetPool = pools.find((p) => p.poolId === targetPoolId);
      const primaryPool = targetPool || pools[0];

      if (!primaryPool) {
        throw new Error("No pool data found for this token");
      }

      const price = Number(primaryPool.price?.usd ?? 0);
      const liquidity = Number(primaryPool.liquidity?.usd ?? 0);
      const marketCap = Number(primaryPool.marketCap?.usd ?? 0);
      const tokenSupply = Number(primaryPool.tokenSupply ?? 0);
      const holders = Number(data.holders ?? 0);
      const lastUpdated = Number(primaryPool.lastUpdated ?? Date.now());

      // Guard if events or 24h is missing
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

    setCachedData(tokenAddress, tokenData, now);
    return tokenData;
  } catch (error) {
    console.error("Error fetching token data:", error);

    // Return expired cache if we have it
    if (cachedEntry) return cachedEntry.data;

    // Otherwise return default, and cache it to avoid hammering API
    const defaultData = getDefaultTokenData();
    setCachedData(tokenAddress, defaultData, now);
    return defaultData;
  }
}
