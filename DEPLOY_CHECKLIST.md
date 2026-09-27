# RROTA Website Deployment Checklist

## Before committing

```bash
npm ci
npm run check
```

`npm run check` runs lint, TypeScript typecheck, and the production Next.js build.

## Verify locally

```bash
npm run dev
```

Check at minimum:

- `/`
- `/transparency`
- `/proof`
- `/rewards`
- `/player-guide`
- `/rrota-spin-to-win`
- `/roadmap`
- `/verify`
- `/blog`
- `/rrota-boom-week`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- `/.well-known/security.txt`

## Functional checks

- Weekly countdown points to the next Saturday at 16:00 UTC and rolls forward after zero.
- `Play RROTA Now` opens `https://spin.rrota.xyz`.
- RROTA Universe works with localStorage disabled as well as enabled.
- Market signal cards gracefully degrade if DexScreener is unavailable.
- `/transparency` never converts provider/API failures into zero and exposes source/freshness state.
- `/api/transparency` returns a normalized payload even when optional game/social/history sources are unavailable.
- Proof Vault external links open the correct official resources.
- Rewards page does not display `paid`/`verified` unless a transaction proof URL is configured.
- Player Guide explains the current Monthly/Yearly period issue without claiming the Spin fix is already deployed.
- Player Guide keeps SOL leaderboard payouts separate from RTA Balance withdrawals.
- Mobile navbar exposes Proof Vault, Race Results, and Player Guide.


## GitHub repository protection

After the new `Quality Gate` workflow has passed at least once:

- protect `main` with a GitHub ruleset/branch protection,
- require pull requests before merging,
- require the `quality` status check,
- block force-pushes and branch deletion,
- keep Vercel production deployments tied to the protected `main` branch.

## Vercel

Confirm the Production environment still contains the server-only variable:

- `SOLANATRACKER_API_KEY`

Optional Transparency Center configuration:

- `SOLANA_RPC_URL` — defaults to the public Solana mainnet RPC when omitted.
- `RROTA_GAME_STATS_URL` — defaults to `https://spin.rrota.xyz/api/public/ecosystem-stats`; until that production aggregate endpoint exists, game metrics display as unavailable.
- `RROTA_LEADERBOARD_PERIODS_URL` — defaults to `https://spin.rrota.xyz/api/leaderboard/periods`; local schedule fallback is used if the live endpoint is unavailable.

Never expose that key via a `NEXT_PUBLIC_` variable.

## After deploy

- Open the production homepage in a private browser window.
- Check mobile + desktop.
- Share one production URL on X/Telegram and verify the social preview image.
- Open Google Rich Results Test / schema validator for the homepage and key public pages.
- Check Search Console for sitemap ingestion and indexing issues.
- Verify current race deadline/rewards in the live Spin product against the website.
- Add payout transaction proofs to `/rewards` only after verification.
