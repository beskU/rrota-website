# RROTA Transparency Center

## Route

- Public page: `/transparency`
- Normalized public data: `/api/transparency`

## Data policy

The dashboard follows a strict source-first policy:

- provider failures never become `0`;
- historical values are not approximated from a shorter time window;
- game metrics remain unavailable until a privacy-safe aggregate endpoint exists;
- prize allocation is not counted as a verified payout without public proof;
- LP lock/ownership state is not hard-coded;
- the 1B RTA historical burn/removal claim is not rendered as a numeric dashboard metric until exact public evidence is attached and the mechanism is classified correctly.

## Live sources available now

- DexScreener: price, market cap, liquidity, 24h volume, 24h buys/sells/transactions.
- SolanaTracker: holders and provider-side token/pool metadata when `SOLANATRACKER_API_KEY` is configured on Vercel.
- Solana RPC: supply, decimals, mint authority and freeze authority. `SOLANA_RPC_URL` can override the default public endpoint.
- Spin leaderboard periods: live weekly/monthly/yearly period metadata when the endpoint is reachable, with a local schedule fallback.

## Pending sources

### Production game aggregates

The website expects a privacy-safe endpoint at:

`https://spin.rrota.xyz/api/public/ecosystem-stats`

Recommended response shape:

```json
{
  "totalPlayers": 0,
  "activePlayers7d": 0,
  "totalSpins": 0,
  "weeklyParticipants": 0,
  "monthlyParticipants": 0,
  "yearlyParticipants": 0,
  "rewardsDistributedRta": 0,
  "rewardsDistributedSol": 0,
  "updatedAt": "2026-09-27T00:00:00.000Z"
}
```

Only aggregate values should be returned. Do not expose emails, Clerk IDs, IPs, wallet addresses, session identifiers, or other player-level data.

### Historical snapshots

A persistent snapshot store is still required before these metrics activate:

- 7-day volume;
- 7-day holder growth;
- 30-day holder growth.

Do not calculate 7-day volume as `24h volume * 7`.

### Social counts

Telegram member and X follower counts intentionally remain unavailable until a reliable official API/data source is connected. The dashboard links the official channels directly rather than scraping or hard-coding a stale value.

## Deployment workflow

1. Build on a feature branch, e.g. `rrota-transparency-dashboard`.
2. Push the branch and inspect the Vercel Preview deployment on desktop, tablet, and mobile.
3. Run `npm run check`.
4. Open a pull request into `main`.
5. Require the GitHub `quality` status check to pass.
6. Merge only after review; Vercel then deploys `main` to production.
