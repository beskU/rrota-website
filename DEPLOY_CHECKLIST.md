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
- `/proof`
- `/rewards`
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
- Proof Vault external links open the correct official resources.
- Rewards page does not display `paid`/`verified` unless a transaction proof URL is configured.
- Mobile navbar exposes Proof Vault and Race Results.


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

Never expose that key via a `NEXT_PUBLIC_` variable.

## After deploy

- Open the production homepage in a private browser window.
- Check mobile + desktop.
- Share one production URL on X/Telegram and verify the social preview image.
- Open Google Rich Results Test / schema validator for the homepage and key public pages.
- Check Search Console for sitemap ingestion and indexing issues.
- Verify current race deadline/rewards in the live Spin product against the website.
- Add payout transaction proofs to `/rewards` only after verification.
