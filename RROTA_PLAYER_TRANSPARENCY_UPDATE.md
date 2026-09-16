# RROTA Player Transparency Update

This update prepares `rrota.xyz` to answer the player questions raised in the RROTA community before the matching `spin.rrota.xyz` product update is deployed.

## What changed

- Added `/player-guide` with current leaderboard ranking logic, period explanations, payout workflow, wallet guidance, deposits, Boost Credits, RTA Balance, and withdrawals.
- Added the September 2026 Monthly/Yearly clarification discovered in the production Spin configuration.
- Expanded `/rewards` into a clearer Past Winners and public payout-proof archive.
- Added race start/end ranges to the published weekly race history.
- Updated the Spin-to-Win product page with accurate ranking, economy, payout, and Player Guide links.
- Updated the long-form leaderboard article with the production-backed ranking logic and current period clarification.
- Added Player Guide links to desktop/mobile navigation, footer, sitemap, and `llms.txt`.
- Updated the deployment checklist for the new pages and claims.

## Important boundary

This website update documents the current production behavior but does **not** fix the Spin leaderboard-period implementation itself.

The live Spin code still needs a follow-up release that gives Monthly and Yearly distinct start/end windows and enforces period end boundaries server-side.

## Public-verification rule

The Rewards archive does not label a payout as publicly verified unless a transaction-proof URL is attached. A missing proof URL is not presented as proof that a private/manual payout did not occur.

## Validation

Run before merge:

```bash
npm ci
npm run check
```

Then inspect the Vercel Preview for:

- `/player-guide`
- `/rewards`
- `/rrota-spin-to-win`
- desktop and mobile navigation
- FAQ structured data
- sitemap inclusion
