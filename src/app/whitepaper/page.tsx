import type { Metadata } from "next";
import Link from "next/link";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const BASE_URL = "https://rrota.xyz";
const SPIN_URL = "https://spin.rrota.xyz";
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const DEXTOOLS_URL = "https://www.dextools.io/app/token/rrota";
const DEXSCREENER_URL = `https://dexscreener.com/solana/${TOKEN_ADDRESS}`;
const GECKO_URL =
  "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
const AUDIT_URL = "https://freshcoins.io/audit/rrota";
const SOLIDPROOF_URL = "https://app.solidproof.io/";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const PDF_WHITEPAPER_URL =
  "https://github.com/beskU/rrota/blob/main/RROTA_RTA_Whitepaper_Official.pdf";

export const metadata: Metadata = {
  title: "RROTA ($RTA) Whitepaper — Solana Utility Ecosystem",
  description:
    "Read the RROTA ($RTA) whitepaper: a Solana-based utility ecosystem focused on crypto gaming, digital rewards, community tools, SolidProof audit verification, FreshCoins audit reference, and future public transportation utility.",
  alternates: {
    canonical: `${BASE_URL}/whitepaper`,
  },
  openGraph: {
    title: "RROTA ($RTA) Whitepaper — Solana Utility Ecosystem",
    description:
      "Official RROTA whitepaper page for the $RTA Solana token, ecosystem utilities, SolidProof audit milestone, FreshCoins audit reference, roadmap, verification links, and project direction.",
    url: `${BASE_URL}/whitepaper`,
    siteName: "RROTA",
    type: "article",
    images: [
      {
        url: "/rrota-og-solidproof.jpg",
        width: 1200,
        height: 630,
        alt: "RROTA ($RTA) Whitepaper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) Whitepaper — Solana Utility Ecosystem",
    description:
      "Official RROTA whitepaper page for the $RTA Solana token, ecosystem utilities, SolidProof audit milestone, FreshCoins audit reference, roadmap, and verification links.",
    images: ["/rrota-og-solidproof.jpg"],
    site: "@rrotacoin",
    creator: "@rrotacoin",
  },
};

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_45px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-8"
    >
      <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/75">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function InfoCard({
  title,
  text,
  tone = "cyan",
}: {
  title: string;
  text: string;
  tone?: "cyan" | "emerald" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-400/16 bg-emerald-400/7"
      : tone === "fuchsia"
        ? "border-fuchsia-400/16 bg-fuchsia-400/7"
        : tone === "amber"
          ? "border-amber-400/16 bg-amber-400/7"
          : "border-cyan-400/16 bg-cyan-400/7";

  return (
    <div className={`rounded-3xl border p-5 ${toneClass}`}>
      <h3 className="text-lg font-black text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
    </div>
  );
}

function AuditLogoMark({
  label,
  sublabel,
  letters,
  tone = "cyan",
}: {
  label: string;
  sublabel: string;
  letters: string;
  tone?: "cyan" | "emerald" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-300/22 bg-emerald-400/8 text-emerald-100 shadow-[0_0_35px_rgba(16,185,129,0.12)]"
      : tone === "fuchsia"
        ? "border-fuchsia-300/22 bg-fuchsia-400/8 text-fuchsia-100 shadow-[0_0_35px_rgba(217,70,239,0.12)]"
        : tone === "amber"
          ? "border-amber-300/22 bg-amber-400/8 text-amber-100 shadow-[0_0_35px_rgba(245,158,11,0.12)]"
          : "border-cyan-300/22 bg-cyan-400/8 text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.12)]";

  return (
    <div className={`flex items-center gap-4 rounded-3xl border p-4 ${toneClass}`}>
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.25),transparent_42%)]" />
        <svg
          className="relative h-11 w-11"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2.4 20 5.4v6.4c0 5.1-3.4 8-8 9.8-4.6-1.8-8-4.7-8-9.8V5.4l8-3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8.2 12.2 10.8 15l5.2-5.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute text-[12px] font-black tracking-[-0.08em]">
          {letters}
        </span>
      </div>

      <div>
        <div className="text-base font-black text-white">{label}</div>
        <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/52">
          {sublabel}
        </div>
      </div>
    </div>
  );
}

function VerificationSignal({
  label,
  value,
  tone = "cyan",
}: {
  label: string;
  value: string;
  tone?: "cyan" | "emerald" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-400/16 bg-emerald-400/7 text-emerald-100"
      : tone === "fuchsia"
        ? "border-fuchsia-400/16 bg-fuchsia-400/7 text-fuchsia-100"
        : tone === "amber"
          ? "border-amber-400/16 bg-amber-400/7 text-amber-100"
          : "border-cyan-400/16 bg-cyan-400/7 text-cyan-100";

  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneClass}`}>
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
      <div className="mt-1 text-sm font-black text-white">{value}</div>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-white/78 transition hover:border-cyan-300/25 hover:bg-cyan-400/8 hover:text-white"
    >
      {children}
      <ExternalIcon />
    </a>
  );
}

export default function WhitepaperPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "RROTA ($RTA) Whitepaper",
    description:
      "Official RROTA whitepaper for the $RTA Solana token and utility ecosystem.",
    url: `${BASE_URL}/whitepaper`,
    dateModified: "2026-05-26",
    author: {
      "@type": "Organization",
      name: "RROTA",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "RROTA",
      url: BASE_URL,
    },
    about: [
      "RROTA coin",
      "RTA token",
      "Solana utility token",
      "RROTA Spin-to-Win",
      "Crypto gaming",
      "Public transportation utility",
      "SolidProof audit",
      "FreshCoins audit",
      "Contract Audited status",
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050711] px-4 py-10 text-white sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.06),transparent_34%),linear-gradient(180deg,#050711_0%,#07101d_45%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/12"
          >
            ← Back to RROTA
          </Link>

          <div className="flex flex-wrap gap-3">
            <a
              href={PDF_WHITEPAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.055] px-5 text-sm font-black text-white/88 transition hover:border-cyan-300/25 hover:bg-cyan-400/10"
            >
              Open PDF
              <ExternalIcon />
            </a>

            <a
              href={JUPITER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-sm font-black text-white shadow-[0_0_24px_rgba(34,211,238,0.20)] transition hover:brightness-110"
            >
              Buy $RTA
              <ExternalIcon />
            </a>
          </div>
        </div>

        <header className="relative overflow-hidden rounded-[40px] border border-cyan-400/16 bg-white/[0.035] p-6 shadow-[0_0_70px_rgba(34,211,238,0.10),0_0_120px_rgba(217,70,239,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.15),transparent_34%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                Official RROTA Whitepaper
              </div>

              <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl">
                RROTA ($RTA) Whitepaper
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Solana Utility Ecosystem
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                RROTA is a Solana-based utility ecosystem focused on digital rewards,
                crypto gaming, community tools, and future public transportation utility.
                Spin-to-Win is the first live RROTA utility product, with Crypto Shooter
                and additional ecosystem tools planned as future expansion.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalLink href={SOLSCAN_URL}>Verify Contract</ExternalLink>
                <ExternalLink href={SPIN_URL}>Spin-to-Win</ExternalLink>
                <ExternalLink href={AUDIT_URL}>FreshCoins Audit</ExternalLink>
                <ExternalLink href={SOLIDPROOF_URL}>SolidProof Audit</ExternalLink>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[#070A12]/78 p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                Token Reference
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["Token Name", "RROTA"],
                  ["Ticker", "$RTA"],
                  ["Network", "Solana"],
                  ["Token Standard", "SPL Token"],
                  ["SolidProof Score", "80/100"],
                  ["Audit Status", "Contract Audited"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                      {label}
                    </div>
                    <div className="mt-1 text-sm font-black text-white">{value}</div>
                  </div>
                ))}

                <div className="rounded-2xl border border-cyan-400/14 bg-cyan-400/7 p-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300/70">
                    Official Contract
                  </div>
                  <div className="mt-2 break-all font-mono text-xs font-semibold leading-5 text-white/82">
                    {TOKEN_ADDRESS}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl lg:sticky lg:top-6">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
              Contents
            </div>

            <nav className="mt-4 grid gap-2 text-sm font-bold text-white/62">
              {[
                ["Overview", "#overview"],
                ["Ecosystem", "#ecosystem"],
                ["Token Utility", "#token-utility"],
                ["Roadmap", "#roadmap"],
                ["Audits & Verification", "#verification"],
                ["Risk Notice", "#risk"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 transition hover:border-cyan-300/20 hover:bg-cyan-400/8 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="grid gap-6">
            <Section id="overview" eyebrow="01 / Overview" title="What is RROTA?">
              <p>
                RROTA ($RTA) is a utility-first Solana ecosystem built around the
                idea that a token should have visible use cases, independent audit references,
                official verification paths, and a clear roadmap. The project combines digital rewards,
                game-based engagement, community growth, and future practical utility
                directions.
              </p>

              <p className="mt-4">
                The first live utility product is RROTA Spin-to-Win, an official web
                application where users can interact with the RROTA economy through
                gameplay, Boost Credits, leaderboard activity, and eligible RTA reward
                flows. This utility is designed as one part of a larger ecosystem, not
                the entire project.
              </p>
            </Section>

            <Section id="ecosystem" eyebrow="02 / Ecosystem" title="RROTA ecosystem pillars">
              <div className="grid gap-4 md:grid-cols-2">
                <InfoCard
                  title="RROTA Coin"
                  text="$RTA is the core Solana token used to represent the RROTA ecosystem and connect users to official products, trading links, verification tools, and future utility."
                  tone="cyan"
                />
                <InfoCard
                  title="Spin-to-Win"
                  text="The first live RROTA utility product. It introduces gameplay, Boost Credits, leaderboard activity, wallet connection, and eligible reward withdrawal logic."
                  tone="emerald"
                />
                <InfoCard
                  title="Crypto Shooter"
                  text="A planned gaming expansion intended to add another interactive product to the RROTA utility stack after Spin-to-Win stability and economy protection are established."
                  tone="fuchsia"
                />
                <InfoCard
                  title="Public Transportation Utility"
                  text="A future real-world direction for RROTA, focused on practical transit-related tools, station discovery, route support, or transport-oriented community features."
                  tone="amber"
                />
                <InfoCard
                  title="Community Rewards"
                  text="RROTA community growth is supported through Telegram, X, leaderboard events, educational content, and reward-based ecosystem participation."
                  tone="cyan"
                />
                <InfoCard
                  title="Future Tools"
                  text="Future RROTA tools may include dashboards, tracking systems, token education pages, referral systems, and additional ecosystem utilities."
                  tone="emerald"
                />
              </div>
            </Section>

            <Section id="token-utility" eyebrow="03 / Token Utility" title="How $RTA fits into the ecosystem">
              <p>
                $RTA is designed as the central token reference for the RROTA ecosystem.
                It connects the public token market, official verification links, game
                utility, community rewards, and future ecosystem products.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Official Solana SPL token",
                  "Used across RROTA ecosystem messaging and products",
                  "Connected to Spin-to-Win utility flows",
                  "Referenced across verified trading and chart links",
                  "Planned future role in Crypto Shooter and ecosystem tools",
                  "Supported by official website, blog, roadmap, and community channels",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            <Section id="roadmap" eyebrow="04 / Roadmap" title="Execution roadmap">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    status: "Shipped",
                    title: "Foundation",
                    text: "RROTA token, official website, official links, contract reference, blog, audit references, and public project materials.",
                  },
                  {
                    status: "Live",
                    title: "Spin-to-Win",
                    text: "First live RROTA utility product with gameplay, leaderboard activity, and wallet-connected reward features.",
                  },
                  {
                    status: "In Progress",
                    title: "Ecosystem protection",
                    text: "Ongoing improvements around anti-bot protection, economy balance, withdrawal safety, and user experience.",
                  },
                  {
                    status: "Planned",
                    title: "Expansion utilities",
                    text: "Crypto Shooter, public transportation utility direction, referral tools, dashboards, and future ecosystem products.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300/70">
                      {item.status}
                    </div>
                    <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="verification" eyebrow="05 / Audits & Verification" title="Official audits and verification">
              <p>
                RROTA has completed independent audit reviews through FreshCoins and
                SolidProof. SolidProof has officially announced the successful
                completion of the RROTA smart contract audit, and RROTA is visible on
                SolidProof TrustNet with an{" "}
                <span className="font-black text-cyan-200">80/100 Security Score</span>{" "}
                and{" "}
                <span className="font-black text-emerald-200">Contract Audited</span>{" "}
                status.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <AuditLogoMark
                  label="SolidProof"
                  sublabel="TrustNet • 80/100 Security Score"
                  letters="SP"
                  tone="cyan"
                />
                <AuditLogoMark
                  label="FreshCoins"
                  sublabel="Public audit reference"
                  letters="FC"
                  tone="fuchsia"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <VerificationSignal label="SolidProof" value="Audit completed" tone="cyan" />
                <VerificationSignal label="Security Score" value="80/100" tone="emerald" />
                <VerificationSignal label="Contract Status" value="Audited" tone="amber" />
                <VerificationSignal label="FreshCoins" value="Audit reference" tone="fuchsia" />
                <VerificationSignal label="Mint Authority" value="Revoked" tone="emerald" />
                <VerificationSignal label="Freeze Authority" value="Revoked" tone="emerald" />
                <VerificationSignal label="Network" value="Solana" tone="cyan" />
                <VerificationSignal label="Official Utility" value="Spin-to-Win live" tone="fuchsia" />
              </div>

              <p className="mt-5 rounded-3xl border border-amber-300/14 bg-amber-400/7 p-4 text-sm leading-7 text-white/62">
                Audit reviews improve transparency and help identify smart contract
                risks, but they do not remove market, liquidity, trading, wallet,
                or participation risks. Always verify the official contract and links.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <ExternalLink href={SOLIDPROOF_URL}>SolidProof TrustNet</ExternalLink>
                <ExternalLink href={AUDIT_URL}>FreshCoins Audit</ExternalLink>
                <ExternalLink href={JUPITER_URL}>Buy on Jupiter</ExternalLink>
                <ExternalLink href={SOLSCAN_URL}>Verify on Solscan</ExternalLink>
                <ExternalLink href={DEXSCREENER_URL}>DexScreener</ExternalLink>
                <ExternalLink href={GECKO_URL}>GeckoTerminal</ExternalLink>
                <ExternalLink href={TELEGRAM_URL}>Telegram Community</ExternalLink>
                <ExternalLink href={X_URL}>X / Twitter</ExternalLink>
                <ExternalLink href={SPIN_URL}>Spin-to-Win App</ExternalLink>
              </div>
            </Section>

            <Section id="risk" eyebrow="06 / Risk Notice" title="Risk and legal notice">
              <p>
                RROTA is a crypto asset. Nothing in this whitepaper is financial,
                investment, legal, or tax advice. Digital assets are risky and may be
                volatile. Users should always verify official links, review transactions
                before signing, and do their own research before interacting with any
                token, wallet, game, audit reference, or third-party platform.
              </p>

              <p className="mt-4">
                Game features, rewards, withdrawals, deposits, eligibility, and ecosystem
                utilities may depend on treasury availability, security checks, network
                conditions, technical updates, and project rules.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
