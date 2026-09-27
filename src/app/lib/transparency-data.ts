import { Buffer } from "node:buffer";
import { unstable_cache } from "next/cache";
import { RACE_HISTORY } from "./reward-history";
import {
  WEEKLY_REWARDS,
  getCurrentWeeklyRace,
} from "./race-schedule";
import type {
  CompetitionWindow,
  DataStatus,
  SourceState,
  TransparencyData,
  TransparencyMetric,
} from "./transparency-types";

export const RROTA_MINT =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
export const RROTA_POOL =
  "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";

const LINKS = {
  dexscreener: `https://dexscreener.com/solana/${RROTA_POOL}`,
  solscanToken: `https://solscan.io/token/${RROTA_MINT}`,
  solscanPool: `https://solscan.io/account/${RROTA_POOL}`,
  geckoPool: `https://www.geckoterminal.com/solana/pools/${RROTA_POOL}`,
  proof: "https://rrota.xyz/proof",
  rewards: "https://rrota.xyz/rewards",
  spinLeaderboard: "https://spin.rrota.xyz/leaderboard",
  solidproof: "https://app.solidproof.io/projects/rrota",
  freshcoins: "https://freshcoins.io/audit/rrota",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
} as const;

const DEXSCREENER_API =
  `https://api.dexscreener.com/token-pairs/v1/solana/${RROTA_MINT}`;
const SOLANA_TRACKER_ENDPOINT =
  `https://data.solanatracker.io/tokens/${RROTA_MINT}`;
const DEFAULT_SOLANA_RPC = "https://api.mainnet-beta.solana.com";
const DEFAULT_GAME_STATS_URL =
  "https://spin.rrota.xyz/api/public/ecosystem-stats";
const DEFAULT_LEADERBOARD_PERIODS_URL =
  "https://spin.rrota.xyz/api/leaderboard/periods";

const REQUEST_TIMEOUT_MS = 6_500;
const GAME_REQUEST_TIMEOUT_MS = 4_500;
const YEARLY_LAUNCH_FLOOR = new Date("2026-05-30T16:00:00.000Z");

function safeNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }

  return null;
}

function nonNegative(value: unknown): number | null {
  const parsed = safeNumber(value);
  return parsed !== null && parsed >= 0 ? parsed : null;
}

function integerOrNull(value: unknown): number | null {
  const parsed = nonNegative(value);
  return parsed === null ? null : Math.floor(parsed);
}

function normalizeIso(value: unknown): string | null {
  if (typeof value === "string" && value.trim()) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
  }

  const numeric = safeNumber(value);
  if (numeric !== null && numeric > 0) {
    const milliseconds = numeric < 1_000_000_000_000 ? numeric * 1000 : numeric;
    const date = new Date(milliseconds);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
  }

  return null;
}

function metric<T>(
  value: T | null,
  status: DataStatus,
  source: string,
  updatedAt: string | null,
  options: Pick<TransparencyMetric<T>, "href" | "note"> = {},
): TransparencyMetric<T> {
  return {
    value,
    status,
    source,
    updatedAt,
    ...options,
  };
}

function unavailableMetric<T = number>(
  source: string,
  note: string,
  href?: string,
): TransparencyMetric<T> {
  return metric<T>(null, "unavailable", source, null, { note, href });
}

async function fetchJson(
  url: string,
  options: RequestInit & { timeoutMs?: number; revalidate?: number } = {},
): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? REQUEST_TIMEOUT_MS,
  );

  try {
    const response = await fetch(url, {
      method: options.method ?? "GET",
      headers: options.headers,
      body: options.body,
      signal: controller.signal,
      cache: options.cache,
      next:
        options.revalidate !== undefined
          ? { revalidate: options.revalidate }
          : undefined,
    });

    if (!response.ok) {
      throw new Error(`${url} responded with ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

type DexPair = {
  dexId?: string;
  pairAddress?: string;
  url?: string;
  priceUsd?: string;
  marketCap?: number;
  fdv?: number;
  liquidity?: { usd?: number };
  volume?: { h24?: number };
  txns?: {
    h24?: {
      buys?: number;
      sells?: number;
    };
  };
};

type DexMarket = {
  priceUsd: number | null;
  marketCapUsd: number | null;
  liquidityUsd: number | null;
  volume24hUsd: number | null;
  buys24h: number | null;
  sells24h: number | null;
  transactions24h: number | null;
  updatedAt: string;
};

function pickDexPair(pairs: DexPair[]): DexPair | null {
  if (!pairs.length) return null;

  const configured = pairs.find((pair) => pair.pairAddress === RROTA_POOL);
  if (configured) return configured;

  return [...pairs].sort((a, b) => {
    const aLiquidity = nonNegative(a.liquidity?.usd) ?? 0;
    const bLiquidity = nonNegative(b.liquidity?.usd) ?? 0;
    const aVolume = nonNegative(a.volume?.h24) ?? 0;
    const bVolume = nonNegative(b.volume?.h24) ?? 0;
    return bLiquidity + bVolume - (aLiquidity + aVolume);
  })[0];
}

async function loadDexMarket(): Promise<DexMarket | null> {
  try {
    const payload = await fetchJson(DEXSCREENER_API, { revalidate: 60 });
    const pairs = Array.isArray(payload)
      ? (payload as DexPair[])
      : payload && typeof payload === "object" && Array.isArray((payload as { pairs?: unknown }).pairs)
        ? ((payload as { pairs: DexPair[] }).pairs)
        : [];

    const pair = pickDexPair(pairs);
    if (!pair) return null;

    const buys24h = integerOrNull(pair.txns?.h24?.buys);
    const sells24h = integerOrNull(pair.txns?.h24?.sells);

    return {
      priceUsd: nonNegative(pair.priceUsd),
      marketCapUsd: nonNegative(pair.marketCap) ?? nonNegative(pair.fdv),
      liquidityUsd: nonNegative(pair.liquidity?.usd),
      volume24hUsd: nonNegative(pair.volume?.h24),
      buys24h,
      sells24h,
      transactions24h:
        buys24h !== null && sells24h !== null ? buys24h + sells24h : null,
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Transparency: DexScreener unavailable", error);
    return null;
  }
}

type TrackerPool = {
  poolId?: string;
  tokenAddress?: string;
  tokenSupply?: number | string | null;
  lastUpdated?: number | string;
  liquidity?: { usd?: number | string | null };
};

type TrackerPayload = {
  token?: {
    mint?: string;
    decimals?: number | string | null;
    mintAuthority?: string | null;
    freezeAuthority?: string | null;
    lpBurn?: number | string | null;
  };
  pools?: TrackerPool[];
  holders?: number | string | null;
  lpBurn?: number | string | null;
  risk?: {
    mintAuthority?: string | null;
    freezeAuthority?: string | null;
    lpBurn?: number | string | null;
  };
};

type TrackerData = {
  holders: number | null;
  supply: number | null;
  decimals: number | null;
  mintAuthority: string | null | undefined;
  freezeAuthority: string | null | undefined;
  lpBurnPercent: number | null;
  updatedAt: string | null;
};

function selectTrackerPool(pools: TrackerPool[]): TrackerPool | null {
  const eligible = pools.filter(
    (pool) => !pool.tokenAddress || pool.tokenAddress === RROTA_MINT,
  );
  if (!eligible.length) return null;

  return (
    eligible.find((pool) => pool.poolId === RROTA_POOL) ??
    [...eligible].sort(
      (a, b) =>
        (nonNegative(b.liquidity?.usd) ?? 0) -
        (nonNegative(a.liquidity?.usd) ?? 0),
    )[0]
  );
}

function authorityCandidate(
  primary: string | null | undefined,
  secondary: string | null | undefined,
): string | null | undefined {
  if (primary === null || typeof primary === "string") return primary;
  if (secondary === null || typeof secondary === "string") return secondary;
  return undefined;
}

async function loadTrackerData(): Promise<TrackerData | null> {
  const apiKey = process.env.SOLANATRACKER_API_KEY?.trim();
  if (!apiKey) return null;

  try {
    const payload = (await fetchJson(SOLANA_TRACKER_ENDPOINT, {
      headers: {
        Accept: "application/json",
        "x-api-key": apiKey,
      },
      revalidate: 300,
    })) as TrackerPayload;

    if (payload.token?.mint && payload.token.mint !== RROTA_MINT) {
      throw new Error("Unexpected mint returned by SolanaTracker");
    }

    const pool = selectTrackerPool(Array.isArray(payload.pools) ? payload.pools : []);

    return {
      holders: integerOrNull(payload.holders),
      supply: nonNegative(pool?.tokenSupply),
      decimals: integerOrNull(payload.token?.decimals),
      mintAuthority: authorityCandidate(
        payload.token?.mintAuthority,
        payload.risk?.mintAuthority,
      ),
      freezeAuthority: authorityCandidate(
        payload.token?.freezeAuthority,
        payload.risk?.freezeAuthority,
      ),
      lpBurnPercent:
        nonNegative(payload.token?.lpBurn) ??
        nonNegative(payload.risk?.lpBurn) ??
        nonNegative(payload.lpBurn),
      updatedAt: normalizeIso(pool?.lastUpdated) ?? new Date().toISOString(),
    };
  } catch (error) {
    console.error("Transparency: SolanaTracker unavailable", error);
    return null;
  }
}

type MintState = {
  supply: number;
  decimals: number;
  mintAuthority: string | null;
  freezeAuthority: string | null;
  updatedAt: string;
};

function readAuthority(data: Buffer, optionOffset: number, keyOffset: number): string | null {
  const option = data.readUInt32LE(optionOffset);
  if (option === 0) return null;
  // Public-key rendering is intentionally omitted here because this dashboard only
  // needs to distinguish an active authority from a revoked one. The explorer link
  // remains the source for the actual authority address when one exists.
  return `active:${data.subarray(keyOffset, keyOffset + 32).toString("hex")}`;
}

async function loadMintState(): Promise<MintState | null> {
  const rpcUrl = process.env.SOLANA_RPC_URL?.trim() || DEFAULT_SOLANA_RPC;

  try {
    const payload = (await fetchJson(rpcUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getAccountInfo",
        params: [RROTA_MINT, { encoding: "base64", commitment: "confirmed" }],
      }),
      cache: "no-store",
      timeoutMs: REQUEST_TIMEOUT_MS,
    })) as {
      result?: {
        value?: {
          data?: [string, string];
        } | null;
      };
    };

    const encoded = payload.result?.value?.data?.[0];
    if (!encoded) return null;

    const data = Buffer.from(encoded, "base64");
    if (data.length < 82) return null;

    const rawSupply = data.readBigUInt64LE(36);
    const decimals = data.readUInt8(44);
    const divisor = 10 ** decimals;
    const supply = Number(rawSupply) / divisor;

    if (!Number.isFinite(supply) || supply < 0) return null;

    return {
      supply,
      decimals,
      mintAuthority: readAuthority(data, 0, 4),
      freezeAuthority: readAuthority(data, 46, 50),
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Transparency: Solana RPC mint state unavailable", error);
    return null;
  }
}

type GameStats = {
  totalPlayers: number | null;
  activePlayers7d: number | null;
  totalSpins: number | null;
  weeklyParticipants: number | null;
  monthlyParticipants: number | null;
  yearlyParticipants: number | null;
  rewardsDistributedRta: number | null;
  rewardsDistributedSol: number | null;
  updatedAt: string | null;
};

function pickNumber(source: unknown, keys: string[]): number | null {
  if (!source || typeof source !== "object") return null;
  const record = source as Record<string, unknown>;

  for (const key of keys) {
    const value = nonNegative(record[key]);
    if (value !== null) return value;
  }

  return null;
}

function normalizeGameStats(payload: unknown): GameStats | null {
  if (!payload || typeof payload !== "object") return null;

  const root = payload as Record<string, unknown>;
  const metrics =
    root.metrics && typeof root.metrics === "object"
      ? (root.metrics as Record<string, unknown>)
      : root;
  const competition =
    root.competition && typeof root.competition === "object"
      ? (root.competition as Record<string, unknown>)
      : metrics;
  const rewards =
    root.rewards && typeof root.rewards === "object"
      ? (root.rewards as Record<string, unknown>)
      : metrics;

  const data: GameStats = {
    totalPlayers: integerOrNull(
      pickNumber(metrics, ["totalPlayers", "players", "registeredPlayers"]),
    ),
    activePlayers7d: integerOrNull(
      pickNumber(metrics, ["activePlayers7d", "weeklyActivePlayers", "wau"]),
    ),
    totalSpins: integerOrNull(
      pickNumber(metrics, ["totalSpins", "spins"]),
    ),
    weeklyParticipants: integerOrNull(
      pickNumber(competition, ["weeklyParticipants", "weeklyPlayers"]),
    ),
    monthlyParticipants: integerOrNull(
      pickNumber(competition, ["monthlyParticipants", "monthlyPlayers"]),
    ),
    yearlyParticipants: integerOrNull(
      pickNumber(competition, ["yearlyParticipants", "yearlyPlayers"]),
    ),
    rewardsDistributedRta: nonNegative(
      pickNumber(rewards, ["rewardsDistributedRta", "distributedRta", "rta"]),
    ),
    rewardsDistributedSol: nonNegative(
      pickNumber(rewards, ["rewardsDistributedSol", "distributedSol", "sol"]),
    ),
    updatedAt:
      normalizeIso(root.updatedAt) ??
      normalizeIso(metrics.updatedAt) ??
      new Date().toISOString(),
  };

  const hasData = Object.entries(data).some(
    ([key, value]) => key !== "updatedAt" && value !== null,
  );

  return hasData ? data : null;
}

async function loadGameStats(): Promise<GameStats | null> {
  const url = process.env.RROTA_GAME_STATS_URL?.trim() || DEFAULT_GAME_STATS_URL;

  try {
    const payload = await fetchJson(url, {
      revalidate: 120,
      timeoutMs: GAME_REQUEST_TIMEOUT_MS,
    });
    return normalizeGameStats(payload);
  } catch (error) {
    console.info("Transparency: public game aggregate endpoint is not available yet", error);
    return null;
  }
}

type PeriodRecord = {
  period?: string;
  startIso?: string | null;
  endIso?: string | null;
  status?: "active" | "upcoming" | "closed" | "lifetime";
};

type PeriodPayload = {
  generatedAt?: string;
  periods?: {
    weekly?: PeriodRecord;
    monthly?: PeriodRecord;
    yearly?: PeriodRecord;
  };
};

async function loadLeaderboardPeriods(): Promise<PeriodPayload | null> {
  const url =
    process.env.RROTA_LEADERBOARD_PERIODS_URL?.trim() ||
    DEFAULT_LEADERBOARD_PERIODS_URL;

  try {
    const payload = await fetchJson(url, {
      revalidate: 120,
      timeoutMs: GAME_REQUEST_TIMEOUT_MS,
    });

    if (!payload || typeof payload !== "object") return null;
    return payload as PeriodPayload;
  } catch (error) {
    console.info("Transparency: leaderboard period endpoint unavailable, using local schedule", error);
    return null;
  }
}

function getMonthlyFallback(now: Date) {
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
  const actualStart = start.getTime() < YEARLY_LAUNCH_FLOOR.getTime()
    ? YEARLY_LAUNCH_FLOOR
    : start;

  return { startIso: actualStart.toISOString(), endIso: end.toISOString() };
}

function getYearlyFallback(now: Date) {
  const yearStart = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
  const start = yearStart.getTime() < YEARLY_LAUNCH_FLOOR.getTime()
    ? YEARLY_LAUNCH_FLOOR
    : yearStart;
  const end = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1));

  return { startIso: start.toISOString(), endIso: end.toISOString() };
}

function normalizeCompetitionStatus(
  value: PeriodRecord["status"] | undefined,
): CompetitionWindow["status"] {
  return value ?? "unknown";
}

function competitionWindow(
  label: CompetitionWindow["label"],
  serverPeriod: PeriodRecord | undefined,
  fallback: { startIso: string; endIso: string },
  participants: number | null,
  participantSource: string,
  rewards: string[],
): CompetitionWindow {
  return {
    label,
    status: normalizeCompetitionStatus(serverPeriod?.status) === "unknown"
      ? "active"
      : normalizeCompetitionStatus(serverPeriod?.status),
    startIso: normalizeIso(serverPeriod?.startIso) ?? fallback.startIso,
    endIso: normalizeIso(serverPeriod?.endIso) ?? fallback.endIso,
    participants,
    participantSource,
    href: LINKS.spinLeaderboard,
    rewards,
  };
}

function authorityMetric(
  value: string | null | undefined,
  updatedAt: string | null,
): TransparencyMetric<string> {
  if (value === null) {
    return metric("Revoked", "verified", "Solana mint account", updatedAt, {
      href: LINKS.solscanToken,
      note: "Authority option is disabled on the SPL mint account.",
    });
  }

  if (typeof value === "string") {
    return metric("Active", "live", "Solana mint account", updatedAt, {
      href: LINKS.solscanToken,
      note: "An authority is currently configured. Verify the address on Solscan.",
    });
  }

  return metric("Verify on-chain", "pending", "Solana", null, {
    href: LINKS.solscanToken,
    note: "The live authority check could not be completed in this refresh.",
  });
}

function countVerifiedPayouts() {
  return RACE_HISTORY.flatMap((race) => race.results).filter(
    (result) => Boolean(result.payoutProofUrl),
  ).length;
}

async function buildTransparencyData(): Promise<TransparencyData> {
  const generatedAt = new Date().toISOString();

  const [dex, tracker, mintState, game, periods] = await Promise.all([
    loadDexMarket(),
    loadTrackerData(),
    loadMintState(),
    loadGameStats(),
    loadLeaderboardPeriods(),
  ]);

  const marketUpdatedAt = dex?.updatedAt ?? null;
  const trackerUpdatedAt = tracker?.updatedAt ?? null;
  const mintUpdatedAt = mintState?.updatedAt ?? trackerUpdatedAt;
  const holders = tracker?.holders ?? null;

  const mintAuthority =
    mintState?.mintAuthority !== undefined
      ? mintState.mintAuthority
      : tracker?.mintAuthority;
  const freezeAuthority =
    mintState?.freezeAuthority !== undefined
      ? mintState.freezeAuthority
      : tracker?.freezeAuthority;
  const supply = mintState?.supply ?? tracker?.supply ?? null;
  const decimals = mintState?.decimals ?? tracker?.decimals ?? null;

  const historicalNote =
    "Rolling history is not yet persisted. This metric will activate after the snapshot store is connected.";
  const gameNote =
    "Awaiting the privacy-safe aggregate endpoint from the production Spin-to-Win server.";
  const socialNote =
    "The official account is linked, but a reliable live member/follower count is not connected yet.";

  const verifiedPayoutCount = countVerifiedPayouts();
  const gameSource = "Spin-to-Win aggregate API";
  const gameUpdatedAt = game?.updatedAt ?? null;

  const now = new Date();
  const weeklyFallback = getCurrentWeeklyRace(now);
  const monthlyFallback = getMonthlyFallback(now);
  const yearlyFallback = getYearlyFallback(now);
  const periodSource = periods ? "Spin leaderboard API" : "RROTA schedule fallback";

  const weeklyParticipants = game?.weeklyParticipants ?? null;

  const market: TransparencyData["market"] = {
    priceUsd: dex
      ? metric(dex.priceUsd, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.dexscreener,
        })
      : unavailableMetric("DexScreener", "Live market price is temporarily unavailable.", LINKS.dexscreener),
    marketCapUsd: dex
      ? metric(dex.marketCapUsd, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.dexscreener,
        })
      : unavailableMetric("DexScreener", "Live market cap is temporarily unavailable.", LINKS.dexscreener),
    liquidityUsd: dex
      ? metric(dex.liquidityUsd, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.geckoPool,
        })
      : unavailableMetric("Dex market data", "Live liquidity is temporarily unavailable.", LINKS.geckoPool),
    volume24hUsd: dex
      ? metric(dex.volume24hUsd, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.dexscreener,
        })
      : unavailableMetric("DexScreener", "24h volume is temporarily unavailable.", LINKS.dexscreener),
    volume7dUsd: unavailableMetric("RROTA snapshot history", historicalNote),
    holders:
      holders !== null
        ? metric(holders, "live", "SolanaTracker", trackerUpdatedAt, {
            href: LINKS.solscanToken,
          })
        : unavailableMetric("Solana holder data", "Holder count is temporarily unavailable.", LINKS.solscanToken),
    transactions24h: dex
      ? metric(dex.transactions24h, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.dexscreener,
        })
      : unavailableMetric("DexScreener", "24h transaction count is temporarily unavailable.", LINKS.dexscreener),
    buys24h: dex
      ? metric(dex.buys24h, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.dexscreener,
        })
      : unavailableMetric("DexScreener", "24h buy count is temporarily unavailable.", LINKS.dexscreener),
    sells24h: dex
      ? metric(dex.sells24h, "live", "DexScreener", marketUpdatedAt, {
          href: LINKS.dexscreener,
        })
      : unavailableMetric("DexScreener", "24h sell count is temporarily unavailable.", LINKS.dexscreener),
    holderGrowth7d: unavailableMetric("RROTA snapshot history", historicalNote),
    holderGrowth30d: unavailableMetric("RROTA snapshot history", historicalNote),
  };

  const gameMetrics: TransparencyData["game"] = {
    totalPlayers:
      game?.totalPlayers !== null && game?.totalPlayers !== undefined
        ? metric(game.totalPlayers, "live", gameSource, gameUpdatedAt)
        : unavailableMetric(gameSource, gameNote, LINKS.spinLeaderboard),
    activePlayers7d:
      game?.activePlayers7d !== null && game?.activePlayers7d !== undefined
        ? metric(game.activePlayers7d, "live", gameSource, gameUpdatedAt)
        : unavailableMetric(gameSource, gameNote, LINKS.spinLeaderboard),
    totalSpins:
      game?.totalSpins !== null && game?.totalSpins !== undefined
        ? metric(game.totalSpins, "live", gameSource, gameUpdatedAt)
        : unavailableMetric(gameSource, gameNote, LINKS.spinLeaderboard),
    weeklyParticipants:
      weeklyParticipants !== null
        ? metric(weeklyParticipants, "live", gameSource, gameUpdatedAt, {
            href: LINKS.spinLeaderboard,
          })
        : unavailableMetric(gameSource, gameNote, LINKS.spinLeaderboard),
    verifiedRewardsRta:
      game?.rewardsDistributedRta !== null && game?.rewardsDistributedRta !== undefined
        ? metric(game.rewardsDistributedRta, "verified", gameSource, gameUpdatedAt, {
            href: LINKS.rewards,
          })
        : metric<number>(null, verifiedPayoutCount > 0 ? "pending" : "unavailable", "RROTA reward archive", null, {
            href: LINKS.rewards,
            note:
              verifiedPayoutCount > 0
                ? "Verified payout records exist, but the aggregate RTA amount is not yet published by the game API."
                : "No aggregate verified RTA payout figure is published yet. Individual proofs must be attached before this value is asserted.",
          }),
    verifiedRewardsSol:
      game?.rewardsDistributedSol !== null && game?.rewardsDistributedSol !== undefined
        ? metric(game.rewardsDistributedSol, "verified", gameSource, gameUpdatedAt, {
            href: LINKS.rewards,
          })
        : metric<number>(null, verifiedPayoutCount > 0 ? "pending" : "unavailable", "RROTA reward archive", null, {
            href: LINKS.rewards,
            note:
              verifiedPayoutCount > 0
                ? "Verified payout records exist, but the aggregate SOL amount is not yet published by the game API."
                : "No aggregate verified SOL payout figure is published yet. Prize allocation is not treated as paid without transaction proof.",
          }),
  };

  const security: TransparencyData["security"] = {
    mintAuthority: authorityMetric(mintAuthority, mintUpdatedAt),
    freezeAuthority: authorityMetric(freezeAuthority, mintUpdatedAt),
    supply:
      supply !== null
        ? metric(supply, "verified", mintState ? "Solana mint account" : "SolanaTracker", mintUpdatedAt, {
            href: LINKS.solscanToken,
          })
        : unavailableMetric("Solana mint data", "Current supply could not be verified in this refresh.", LINKS.solscanToken),
    decimals:
      decimals !== null
        ? metric(decimals, "verified", mintState ? "Solana mint account" : "SolanaTracker", mintUpdatedAt, {
            href: LINKS.solscanToken,
          })
        : unavailableMetric("Solana mint data", "Token decimals are temporarily unavailable.", LINKS.solscanToken),
    lpStatus: metric<string>("Verify live", "pending", "On-chain pool / locker state", null, {
      href: LINKS.solscanPool,
      note:
        "RROTA deliberately does not hard-code a lock percentage or expiry. Check the current pool/locker state before relying on a claim.",
    }),
    lpBurnPercent:
      tracker?.lpBurnPercent !== null && tracker?.lpBurnPercent !== undefined
        ? metric(tracker.lpBurnPercent, "live", "SolanaTracker", trackerUpdatedAt, {
            href: LINKS.geckoPool,
            note: "LP burn data is provider-reported and is separate from time-lock status.",
          })
        : unavailableMetric(
            "SolanaTracker",
            "LP burn percentage is not available in the current provider response. Verify pool ownership/lock state live.",
            LINKS.geckoPool,
          ),
    burnedOrRemovedRta: metric<number>(null, "pending", "RROTA Proof Vault", null, {
      href: LINKS.proof,
      note:
        "The historical 1B RTA claim is intentionally not converted into a dashboard number until exact public transaction/account evidence is attached and the mechanism is classified as an SPL burn or removal from circulation.",
    }),
    audits: [
      { name: "SolidProof", status: "published", href: LINKS.solidproof },
      { name: "FreshCoins", status: "published", href: LINKS.freshcoins },
    ],
  };

  const weekly = competitionWindow(
    "Weekly",
    periods?.periods?.weekly,
    {
      startIso: weeklyFallback.startsAt.toISOString(),
      endIso: weeklyFallback.endsAt.toISOString(),
    },
    weeklyParticipants,
    weeklyParticipants !== null ? gameSource : periodSource,
    WEEKLY_REWARDS.map((item) => `${item.place}: ${item.reward}`),
  );

  const monthly = competitionWindow(
    "Monthly",
    periods?.periods?.monthly,
    monthlyFallback,
    game?.monthlyParticipants ?? null,
    game?.monthlyParticipants !== null && game?.monthlyParticipants !== undefined
      ? gameSource
      : periodSource,
    ["Current rules and rewards: see live leaderboard"],
  );

  const yearly = competitionWindow(
    "Yearly",
    periods?.periods?.yearly,
    yearlyFallback,
    game?.yearlyParticipants ?? null,
    game?.yearlyParticipants !== null && game?.yearlyParticipants !== undefined
      ? gameSource
      : periodSource,
    ["Current rules and rewards: see live leaderboard"],
  );

  const sources: SourceState[] = [
    {
      label: "DexScreener market data",
      status: dex ? "live" : "unavailable",
      updatedAt: marketUpdatedAt,
      href: LINKS.dexscreener,
      note: "Price, market cap, liquidity, 24h volume and transaction counts.",
    },
    {
      label: "SolanaTracker token data",
      status: tracker ? "live" : "unavailable",
      updatedAt: trackerUpdatedAt,
      href: LINKS.solscanToken,
      note: "Holder count and provider-side token/pool metadata. API key remains server-only.",
    },
    {
      label: "Solana mint account",
      status: mintState ? "verified" : "pending",
      updatedAt: mintState?.updatedAt ?? null,
      href: LINKS.solscanToken,
      note: "Supply, decimals and mint/freeze authority state when the RPC check succeeds.",
    },
    {
      label: "Spin-to-Win aggregate data",
      status: game ? "live" : "pending",
      updatedAt: gameUpdatedAt,
      href: LINKS.spinLeaderboard,
      note: game
        ? "Privacy-safe aggregate game activity."
        : "Website integration is ready; the production game still needs the public aggregate endpoint.",
    },
    {
      label: "RROTA historical snapshots",
      status: "pending",
      updatedAt: null,
      note: "Required for real 7d volume and 7d/30d holder-growth calculations. No approximation is used.",
    },
  ];

  return {
    generatedAt,
    market,
    game: gameMetrics,
    community: {
      telegramMembers: unavailableMetric("Official Telegram", socialNote, LINKS.telegram),
      xFollowers: unavailableMetric("Official X", socialNote, LINKS.x),
      holderGrowth7d: market.holderGrowth7d,
      holderGrowth30d: market.holderGrowth30d,
    },
    security,
    competition: { weekly, monthly, yearly },
    sources,
  };
}

export const getTransparencyData = unstable_cache(
  buildTransparencyData,
  ["rrota-transparency-v1"],
  { revalidate: 120 },
);
