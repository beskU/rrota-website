# RROTA Website

Official Next.js website for the RROTA ($RTA) Solana ecosystem.

Production domain: `https://rrota.xyz`

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel deployment

## Important public identities

- RROTA mint: `3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a`
- Primary RTA/SOL pool: `8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF`
- Website: `https://rrota.xyz`
- Spin-to-Win: `https://spin.rrota.xyz`
- Telegram: `https://t.me/rrotaOfficial`
- X: `https://x.com/rrotacoin`

## Local development

Requirements:

- Node.js 20.9 or newer
- npm

Install and run:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality gate

Before deployment:

```bash
npm run check
```

This runs lint, TypeScript type-checking, and a production build.

## Environment variables

The token-data API route expects:

```text
SOLANATRACKER_API_KEY=...
```

Never commit `.env*`, private keys, seed phrases, wallet secrets, or API secret values.

The public market terminal uses DexScreener through a server route and does not require a browser-exposed secret.

## Weekly race schedule

The recurring weekly race deadline is centralized in:

`src/app/lib/race-schedule.ts`

Current behavior: each weekly race closes Saturday at 16:00 UTC and the next weekly window begins immediately. The homepage countdown is client-updated so an old pre-rendered screenshot is not treated as the current deadline.

If the official race cadence changes, update the centralized schedule logic instead of hard-coding dates throughout the site.

## Transparency surfaces

- `/proof` — verification-first Proof Vault
- `/rewards` — published race-result archive and payout-proof status
- `/verify` — anti-phishing and official-identity checks
- `/tokenomics` — token facts and verification guidance
- `/links` — official destinations

Do not label a reward as paid/verified without a public transaction proof. Do not hard-code a liquidity-lock percentage unless the current on-chain/locker evidence supports it.

## Content rules

RROTA content should clearly separate:

- **Live** — accessible products/features
- **In Progress** — actively being built
- **Planned / Research** — future direction

Avoid guaranteed-return language, price promises, unverifiable partnership/listing claims, or outdated race/market values.

Older blog posts automatically display a historical-status notice so readers know that live product and market information may have changed.

## Deployment

The repository is deployed with Vercel from GitHub. Keep production environment variables in Vercel Project Settings rather than in the repository.

Recommended deployment flow:

1. Create a branch.
2. Run `npm run check` locally or in CI.
3. Push and review the Vercel Preview deployment.
4. Merge only after the preview is correct on desktop and mobile.
5. Confirm `rrota.xyz`, `/sitemap.xml`, `/robots.txt`, `/proof`, `/rewards`, and the live race countdown after production deploy.
