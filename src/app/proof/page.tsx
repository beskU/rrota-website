import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/proof`;
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const POOL_ADDRESS = "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";

const LINKS = {
  solscanToken: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  solscanPool: `https://solscan.io/account/${POOL_ADDRESS}`,
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  gecko: `https://www.geckoterminal.com/solana/pools/${POOL_ADDRESS}`,
  dextools: "https://www.dextools.io/app/token/rrota",
  solidproof: "https://app.solidproof.io/projects/rrota",
  freshcoins: "https://freshcoins.io/audit/rrota",
  spin: "https://spin.rrota.xyz",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
};

export const metadata: Metadata = {
  title: "Proof of RROTA — Verify, Don’t Trust",
  description:
    "Verify RROTA on-chain and through official third-party sources: the $RTA mint, token authorities, Raydium pool, audits, live product, race results, and official identities.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Proof of RROTA — Verify, Don’t Trust",
    description:
      "A verification-first hub for the official $RTA mint, authorities, liquidity references, audits, product links, and race transparency.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof of RROTA — Verify, Don’t Trust",
    description:
      "Use primary sources and public blockchain evidence to verify RROTA instead of relying on promotional claims.",
  },
};

const proofCards = [
  {
    eyebrow: "Token identity",
    title: "Official $RTA mint",
    value: TOKEN_ADDRESS,
    description: "Use the full Solana mint—not the logo, name, or ticker—as the primary token identifier.",
    href: LINKS.solscanToken,
    action: "Verify on Solscan",
    tone: "border-cyan-300/18 bg-cyan-400/[0.05]",
  },
  {
    eyebrow: "Token control",
    title: "Mint authority",
    value: "Revoked",
    description: "The website reports mint authority as revoked. Confirm the current token state directly through a Solana explorer before relying on the claim.",
    href: LINKS.solscanToken,
    action: "Check authority state",
    tone: "border-emerald-300/18 bg-emerald-400/[0.05]",
  },
  {
    eyebrow: "Token control",
    title: "Freeze authority",
    value: "Revoked",
    description: "The website reports freeze authority as revoked. The explorer remains the source of truth for the current token state.",
    href: LINKS.solscanToken,
    action: "Check authority state",
    tone: "border-emerald-300/18 bg-emerald-400/[0.05]",
  },
  {
    eyebrow: "Primary market",
    title: "RTA / SOL liquidity pool",
    value: `${POOL_ADDRESS.slice(0, 8)}…${POOL_ADDRESS.slice(-6)}`,
    description: "Inspect current liquidity, transactions, pool balances, and market activity through independent market tools.",
    href: LINKS.gecko,
    action: "Open GeckoTerminal",
    tone: "border-violet-300/18 bg-violet-400/[0.05]",
  },
  {
    eyebrow: "Liquidity status",
    title: "Lock / ownership status",
    value: "Verify live",
    description: "RROTA does not hard-code a lock percentage here. Lock ownership and expiry can change, so current third-party or on-chain evidence should be checked live.",
    href: LINKS.solscanPool,
    action: "Inspect pool account",
    tone: "border-amber-300/18 bg-amber-400/[0.05]",
  },
  {
    eyebrow: "Independent review",
    title: "SolidProof",
    value: "Audit profile",
    description: "Open the third-party audit profile directly. Audit status is evidence about reviewed scope—not a guarantee of future performance or market safety.",
    href: LINKS.solidproof,
    action: "Open audit profile",
    tone: "border-fuchsia-300/18 bg-fuchsia-400/[0.05]",
  },
];

const verificationLinks = [
  { label: "Jupiter token page", href: LINKS.jupiter },
  { label: "DEXTools", href: LINKS.dextools },
  { label: "GeckoTerminal", href: LINKS.gecko },
  { label: "FreshCoins audit", href: LINKS.freshcoins },
  { label: "Live Spin-to-Win", href: LINKS.spin },
  { label: "Official Telegram", href: LINKS.telegram },
  { label: "Official X", href: LINKS.x },
];

export default function ProofPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Proof of RROTA",
    url: PAGE_URL,
    description:
      "Verification-first RROTA hub for token identity, token authorities, market references, audits, official product links, and reward transparency.",
    about: {
      "@type": "Thing",
      name: "RROTA ($RTA)",
      identifier: TOKEN_ADDRESS,
    },
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#050711] px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_7%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_5%,rgba(34,211,238,0.11),transparent_30%),radial-gradient(circle_at_70%_45%,rgba(217,70,239,0.08),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/[0.07] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100">
            RROTA Proof Vault
          </div>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            DON’T TRUST US.
            <span className="block bg-gradient-to-r from-emerald-200 via-cyan-100 to-fuchsia-200 bg-clip-text text-transparent">
              VERIFY US.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/64 sm:text-lg">
            Crypto claims should survive verification. This hub points to primary blockchain evidence, independent market tools, audit references, official identities, and race records so visitors can check RROTA for themselves.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={LINKS.solscanToken} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:brightness-110">
              Verify token on Solscan
            </a>
            <Link href="/rewards" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white">
              Review race results
            </Link>
            <Link href="/verify" className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-400/[0.06] px-6 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.1] hover:text-white">
              Anti-phishing checks
            </Link>
          </div>

          <section className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {proofCards.map((card) => (
              <article key={card.title} className={`flex h-full flex-col rounded-[30px] border p-6 ${card.tone}`}>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">{card.eyebrow}</div>
                <h2 className="mt-3 text-2xl font-black">{card.title}</h2>
                <div className={`mt-3 ${card.title === "Official $RTA mint" ? "break-all font-mono text-xs leading-6" : "text-xl font-black"} text-white/86`}>
                  {card.value}
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/56">{card.description}</p>
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-black text-cyan-100 transition hover:text-white">
                  {card.action} ↗
                </a>
              </article>
            ))}
          </section>

          <section className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200/68">Live facts vs permanent facts</div>
              <h2 className="mt-3 text-3xl font-black">Some facts should never be copied from an old screenshot.</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/60">
                <p>
                  <strong className="text-white">Permanent or slow-changing facts</strong> include the official mint and current authority configuration. These should still be checked on-chain.
                </p>
                <p>
                  <strong className="text-white">Live facts</strong> include price, volume, liquidity, holder counts, race deadlines, pool-lock percentages, and leaderboard positions. These can change and should be verified at the time they matter.
                </p>
                <p>
                  RROTA deliberately avoids presenting a historical market or lock value as if it were permanent. If two trackers disagree, inspect the underlying pool/account and the timestamp of each source.
                </p>
              </div>
            </div>

            <div className="rounded-[34px] border border-fuchsia-300/14 bg-fuchsia-400/[0.04] p-6 sm:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-200/68">Rewards & competition</div>
              <h2 className="mt-3 text-3xl font-black">A leaderboard is not payout proof.</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                RROTA race results are reviewed before rewards are distributed. The public archive intentionally distinguishes final standings from verified payout evidence.
              </p>
              <Link href="/rewards" className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl border border-fuchsia-300/18 bg-fuchsia-400/[0.08] px-5 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.13] hover:text-white">
                Open reward archive
              </Link>
            </div>
          </section>

          <section className="mt-10 rounded-[34px] border border-white/10 bg-black/20 p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Independent references</div>
                <h2 className="mt-2 text-2xl font-black">Cross-check RROTA outside rrota.xyz.</h2>
              </div>
              <p className="max-w-xl text-xs leading-6 text-white/44">
                Third-party sites have their own data models and may be delayed or disagree. Use them as independent references—not guarantees.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {verificationLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/9 bg-white/[0.035] px-4 py-4 text-sm font-black text-white/72 transition hover:border-cyan-300/20 hover:bg-cyan-400/[0.06] hover:text-white">
                  {item.label} ↗
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
