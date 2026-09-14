export type RaceResult = {
  place: 1 | 2 | 3;
  player: string;
  rtaEarned: string;
  solPrize: string;
  payoutProofUrl?: string;
};

export type RaceHistoryEntry = {
  raceId: string;
  endedAt: string;
  results: RaceResult[];
  reviewStatus: "Final standings published" | "Under review";
  sourceLabel: string;
};

/**
 * Public leaderboard results recorded from official RROTA race-close snapshots.
 * A payout must not be marked verified until a public transaction proof is attached.
 */
export const RACE_HISTORY: RaceHistoryEntry[] = [
  {
    raceId: "weekly-2026-09-12",
    endedAt: "2026-09-12T16:00:00Z",
    reviewStatus: "Final standings published",
    sourceLabel: "Official race-close leaderboard snapshot",
    results: [
      { place: 1, player: "stevegubayi", rtaEarned: "209.6K $RTA", solPrize: "2 SOL" },
      { place: 2, player: "Player #LJ8T", rtaEarned: "182.0K $RTA", solPrize: "1 SOL" },
      { place: 3, player: "Player #PRZS", rtaEarned: "150.7K $RTA", solPrize: "0.5 SOL" },
    ],
  },
  {
    raceId: "weekly-2026-09-05",
    endedAt: "2026-09-05T16:00:00Z",
    reviewStatus: "Final standings published",
    sourceLabel: "Official race-close leaderboard snapshot",
    results: [
      { place: 1, player: "Player #0RKF", rtaEarned: "200.2K $RTA", solPrize: "2 SOL" },
      { place: 2, player: "Player #PRZS", rtaEarned: "187.2K $RTA", solPrize: "1 SOL" },
      { place: 3, player: "Player #LJ8T", rtaEarned: "174.5K $RTA", solPrize: "0.5 SOL" },
    ],
  },
];
