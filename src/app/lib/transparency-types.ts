export type DataStatus = "live" | "verified" | "pending" | "unavailable";

export type SourceState = {
  label: string;
  status: DataStatus;
  updatedAt: string | null;
  href?: string;
  note?: string;
};

export type TransparencyMetric<T = number> = {
  value: T | null;
  status: DataStatus;
  source: string;
  updatedAt: string | null;
  href?: string;
  note?: string;
};

export type CompetitionWindow = {
  label: "Weekly" | "Monthly" | "Yearly";
  status: "active" | "upcoming" | "closed" | "lifetime" | "unknown";
  startIso: string | null;
  endIso: string | null;
  participants: number | null;
  participantSource: string;
  href: string;
  rewards: string[];
};

export type TransparencyData = {
  generatedAt: string;
  market: {
    priceUsd: TransparencyMetric;
    marketCapUsd: TransparencyMetric;
    liquidityUsd: TransparencyMetric;
    volume24hUsd: TransparencyMetric;
    volume7dUsd: TransparencyMetric;
    holders: TransparencyMetric;
    transactions24h: TransparencyMetric;
    buys24h: TransparencyMetric;
    sells24h: TransparencyMetric;
    holderGrowth7d: TransparencyMetric;
    holderGrowth30d: TransparencyMetric;
  };
  game: {
    totalPlayers: TransparencyMetric;
    activePlayers7d: TransparencyMetric;
    totalSpins: TransparencyMetric;
    weeklyParticipants: TransparencyMetric;
    verifiedRewardsRta: TransparencyMetric;
    verifiedRewardsSol: TransparencyMetric;
  };
  community: {
    telegramMembers: TransparencyMetric;
    xFollowers: TransparencyMetric;
    holderGrowth7d: TransparencyMetric;
    holderGrowth30d: TransparencyMetric;
  };
  security: {
    mintAuthority: TransparencyMetric<string>;
    freezeAuthority: TransparencyMetric<string>;
    supply: TransparencyMetric;
    decimals: TransparencyMetric;
    lpStatus: TransparencyMetric<string>;
    lpBurnPercent: TransparencyMetric;
    burnedOrRemovedRta: TransparencyMetric;
    audits: Array<{
      name: string;
      status: "published";
      href: string;
    }>;
  };
  competition: {
    weekly: CompetitionWindow;
    monthly: CompetitionWindow;
    yearly: CompetitionWindow;
  };
  sources: SourceState[];
};
