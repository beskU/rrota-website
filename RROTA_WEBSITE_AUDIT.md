# RROTA Website Audit — September 2026

## Executive summary

The repository already had a strong Next.js foundation: clear legal/safety pages, SEO metadata, a live market-data layer, a status-based roadmap, official links, and a mature Spin-to-Win product story. The main weaknesses were freshness, proof/transparency, conversion order, historical-content drift, and the absence of one memorable discovery experience tying the ecosystem together.

This revision addresses those weaknesses without changing the core RROTA identity or inventing unverifiable activity.

## Major changes implemented

### 1. Dynamic weekly race schedule

- Centralized the weekly race schedule in `src/app/lib/race-schedule.ts`.
- The current public schedule is Saturday at 16:00 UTC, matching the recent live-race screenshots.
- Added a client-side countdown that updates every second and rolls to the next race automatically.
- Replaced homepage and Spin-to-Win guide countdowns that could become stale after static rendering.

### 2. RROTA Universe — interactive discovery layer

Added `src/app/components/rrota-universe.tsx` and made it a major homepage section.

The experience includes:

- a local anonymous explorer callsign (no wallet connection required),
- discovery missions,
- live weekly race countdown,
- live liquidity/24h-volume signals from the existing market API,
- paths into Spin-to-Win, Proof Vault, reward history, roadmap, community, X, and Solscan,
- browser-local mission progress only.

The goal is to change the website funnel from `token -> buy` into `experience -> discover -> verify -> play -> community -> token`.

### 3. Proof Vault

Added `/proof` with the headline **“DON'T TRUST US. VERIFY US.”**

It centralizes:

- official mint verification,
- mint/freeze authority verification,
- primary market pool references,
- live liquidity/lock verification guidance,
- SolidProof/FreshCoins references,
- official trading/community/product links.

Important: no fixed LP-lock percentage is hard-coded. Liquidity/lock status is treated as live data that must be verified when viewed.

### 4. Race results + reward transparency archive

Added `/rewards` and `src/app/lib/reward-history.ts`.

The archive currently includes official race-close results supplied from recent RROTA leaderboard snapshots. It deliberately separates:

- published final standings,
- leaderboard $RTA earned,
- SOL prize allocation,
- payout proof status.

A reward is **not** shown as verified/paid unless an individual public transaction proof is attached.

### 5. Player-first conversion funnel

Homepage hero and navigation were adjusted so **Play RROTA** is the strongest first action. Buying remains available, but it is no longer the only dominant discovery path.

### 6. Historical-content safety

- The completed Boom Week page is now an explicit archive.
- The Boom Week article title/content was updated so search visitors are not told the June event is still live.
- Older blog posts now display a historical-update notice reminding visitors to verify current product/race/market/liquidity/roadmap information.

### 7. SEO/discovery improvements

- Added `/proof`, `/rewards`, and `/verify` to the sitemap where needed.
- Updated `llms.txt` with canonical current sources and accuracy guidance.
- Fixed two blog cover-image frontmatter fields that were not being consumed by the article parser.
- Fixed a broken `/rrota-og.jpg` cover reference.
- Fixed the Organization JSON-LD logo URL.
- Added a web app manifest and optimized app icons.
- Removed duplicate `public/robots.txt`; `src/app/robots.ts` is now the single source for robots rules.

### 8. Performance improvements

Optimized large referenced social/article images without changing their public URLs where possible. The main OG image was resized to the declared 1200x630 size and reduced substantially in file weight.

### 9. Baseline security hardening

`next.config.ts` now disables the powered-by header and adds conservative response headers:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- restricted `Permissions-Policy`
- HSTS

A public `/.well-known/security.txt` and repository `SECURITY.md` were also added.


### 10. GitHub delivery controls

- Added a GitHub Actions quality gate that runs `npm ci` and `npm run check` on pull requests and pushes to `main`.
- Added Dependabot configuration for npm and GitHub Actions dependencies.
- Added a CODEOWNERS rule for `@beskU`.
- The repository screenshot showed `main` is currently unprotected. After the first green CI run, enable GitHub branch protection/rulesets and require the `quality` check before merging.

## Important manual actions still required

### Payout proofs

Add a Solscan transaction URL to each winner entry in `src/app/lib/reward-history.ts` only after the payout is actually complete and the transaction has been verified.

### Current LP lock / ownership proof

Do not publish a hard-coded “100% LP locked” claim until the active Raydium/Jupiter-lock state has been verified. `/proof` intentionally points users to live references instead.

### 1B RTA inaccessible/dead-address proof

If RROTA wants this shown as a first-class Proof Vault card, add the exact public token-account/address and transaction evidence. Use precise wording such as “sent to an inaccessible address / removed from circulation” unless a Token Program burn instruction reduced mint supply.

### Vercel environment

Confirm `SOLANATRACKER_API_KEY` remains configured on Vercel. Do not commit the secret to GitHub.

### Analytics

If a privacy-conscious analytics platform is selected, instrument the main funnel:

1. hero Play click,
2. Universe initialized,
3. mission clicks,
4. Proof Vault visits,
5. Spin launch,
6. community join click,
7. Jupiter click.

Measure activated players and repeat product use—not vanity clicks alone.

## Recommended next growth features

1. **Verified reward reserve dashboard** — public source/funding explanation for competition prizes.
2. **Player-generated share cards** — winners can share verified placement/reward cards linking back to the public result.
3. **Live race signal feed** — only from real game events, with privacy-safe player aliases.
4. **Discovery missions v2** — non-financial badges/achievements that reward learning and verification before wallet actions.
5. **Directory-ready game profile** — reusable media/description block for DappRadar, PlayToEarn, and other game directories.

## Validation status

- All TypeScript/TSX files pass TypeScript parser syntax validation.
- Internal local-route scan found no missing static routes.
- Public-image reference scan was run; the broken article cover reference found during the audit was fixed.
- Full `npm run check` could not be completed in the audit container because the npm registry was unreachable during dependency installation. Run the deployment checklist locally or in GitHub/Vercel before merging.
