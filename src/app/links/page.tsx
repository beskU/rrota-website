import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  telegram: "https://t.me/rrotaOfficial",
  twitter: "https://x.com/rrotacoin",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  birdeye: `https://birdeye.so/token/${TOKEN_ADDRESS}?chain=solana`,
  geckoterminal: `https://www.geckoterminal.com/solana/tokens/${TOKEN_ADDRESS}`,
  audit: "https://freshcoins.io/audit/rrota",
  solidproof: "https://app.solidproof.io/",
  spin: "https://spin.rrota.xyz",
  cmcVerification: "https://x.com/rrotacoin/status/2054219354422510035",
  contactEmail: "mailto:info@rrota.xyz",
};

export const metadata: Metadata = {
  title: "Official RROTA Links | Verified $RTA Resources",
  description:
    "Official RROTA links: website, whitepaper, contract verification, social channels, SolidProof audit, FreshCoins audit, Spin-to-Win utility, trackers and contact details.",
  alternates: { canonical: `${OFFICIAL_DOMAIN}/links` },
};

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function AuditMark({
  letters,
  tone = "cyan",
}: {
  letters: string;
  tone?: "cyan" | "fuchsia";
}) {
  const toneClass =
    tone === "fuchsia"
      ? "border-fuchsia-300/35 bg-fuchsia-400/12 text-fuchsia-100 shadow-[0_0_40px_rgba(217,70,239,0.18)]"
      : "border-cyan-300/35 bg-cyan-400/12 text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.18)]";

  return (
    <div
      className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border ${toneClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.28),transparent_42%)]" />
      <svg
        className="relative h-14 w-14"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 5 54 13.2v17.6C54 44.8 44.6 53 32 59 19.4 53 10 44.8 10 30.8V13.2L32 5Z"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M23 32.2 29.2 39 42 24.8"
          stroke="currentColor"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute text-sm font-black tracking-[-0.08em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
        {letters}
      </span>
    </div>
  );
}

function AuditCard({
  name,
  subtitle,
  points,
  href,
  cta,
  letters,
  tone,
}: {
  name: string;
  subtitle: string;
  points: string[];
  href: string;
  cta: string;
  letters: string;
  tone: "cyan" | "fuchsia";
}) {
  const accent = tone === "cyan" ? "text-cyan-200" : "text-fuchsia-200";
  const border =
    tone === "cyan"
      ? "hover:border-cyan-300/45"
      : "hover:border-fuchsia-300/45";
  const button =
    tone === "cyan"
      ? "border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-100 hover:border-cyan-200/55 hover:bg-cyan-300/[0.15]"
      : "border-fuchsia-300/25 bg-fuchsia-300/[0.09] text-fuchsia-100 hover:border-fuchsia-200/55 hover:bg-fuchsia-300/[0.15]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 ${border} hover:bg-white/[0.055]`}
    >
      <span className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/[0.055] blur-3xl transition group-hover:bg-cyan-300/[0.12]" />

      <div className="relative flex items-start gap-4">
        <AuditMark letters={letters} tone={tone} />
        <div className="min-w-0">
          <p
            className={`text-[11px] font-black uppercase tracking-[0.24em] ${accent}`}
          >
            {name}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
            {subtitle}
          </h3>
        </div>
      </div>

      <div className="relative mt-5 grid gap-2">
        {points.map((point) => (
          <div
            key={point}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-slate-200"
          >
            {point}
          </div>
        ))}
      </div>

      <div
        className={`relative mt-5 inline-flex rounded-2xl border px-4 py-2 text-xs font-black uppercase tracking-[0.15em] transition ${button}`}
      >
        {cta}{" "}
        <span className="ml-2">
          <ExternalArrow />
        </span>
      </div>
    </a>
  );
}

export default function LinksPage() {
  const externalItems = [
    {
      name: "Official Website",
      href: OFFICIAL_DOMAIN,
      note: "Main RROTA ecosystem website",
    },
    {
      name: "RROTA Spin-to-Win",
      href: LINKS.spin,
      note: "Live RROTA utility experience",
    },
    {
      name: "SolidProof Audit",
      href: LINKS.solidproof,
      note: "SolidProof TrustNet audit reference, 80/100 score and Contract Audited status",
    },
    {
      name: "FreshCoins Audit",
      href: LINKS.audit,
      note: "Public FreshCoins audit reference",
    },
    {
      name: "CMC Verification Post",
      href: LINKS.cmcVerification,
      note: "Official X confirmation for CoinMarketCap review",
    },
    {
      name: "Token Contract Verification",
      href: LINKS.solscan,
      note: "Official Solana token verification on Solscan",
    },
    {
      name: "Buy on Jupiter",
      href: LINKS.jupiter,
      note: "Official Jupiter trading link for $RTA",
    },
    {
      name: "Telegram",
      href: LINKS.telegram,
      note: "Official RROTA Telegram community",
    },
    {
      name: "Twitter / X",
      href: LINKS.twitter,
      note: "Official RROTA X account",
    },
    {
      name: "DexScreener",
      href: LINKS.dexscreener,
      note: "Live DEX chart and market data",
    },
    {
      name: "BirdEye",
      href: LINKS.birdeye,
      note: "Solana token market tracker",
    },
    {
      name: "GeckoTerminal",
      href: LINKS.geckoterminal,
      note: "Pool and market tracker",
    },
    {
      name: "Contact Email",
      href: LINKS.contactEmail,
      note: "Official contact: info@rrota.xyz",
    },
  ];

  const internalItems = [
    {
      name: "Whitepaper",
      href: "/whitepaper",
      displayHref: `${OFFICIAL_DOMAIN}/whitepaper`,
      note: "Official RROTA whitepaper page",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
      displayHref: `${OFFICIAL_DOMAIN}/privacy`,
      note: "Privacy and data handling information",
    },
    {
      name: "Terms of Service",
      href: "/terms",
      displayHref: `${OFFICIAL_DOMAIN}/terms`,
      note: "Website and platform terms",
    },
    {
      name: "Official Links",
      href: "/links",
      displayHref: `${OFFICIAL_DOMAIN}/links`,
      note: "Verified official RROTA resources",
    },
  ];

  return (
    <main
      className={`${spaceGrotesk.className} relative min-h-screen w-full overflow-hidden bg-[#02030a] pb-16 pt-[110px] text-white`}
    >
      {/* Alien-tech background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(0,255,214,0.12),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,0.18),transparent_26%),radial-gradient(circle_at_45%_92%,rgba(14,165,233,0.13),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(103,232,249,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle,rgba(255,255,255,0.40)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,3,10,0.12),rgba(2,3,10,0.82),#02030a)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      </div>

      <div className="pointer-events-none absolute left-[-160px] top-[160px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/12 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-6 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.055] px-4 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-cyan-100 shadow-[0_0_42px_rgba(34,211,238,0.14)] backdrop-blur">
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,1)]" />
              </span>
              Verified RROTA Resources
            </div>

            <Link
              href="/"
              className="inline-flex w-fit rounded-2xl border border-white/12 bg-white/[0.055] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white/90 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.10]"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[0.92] tracking-[-0.055em] text-white md:text-6xl">
            Official{" "}
            <span className="bg-[linear-gradient(90deg,#ffffff_0%,#9ff7ff_18%,#5df8d2_42%,#b78cff_72%,#ffffff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.18)]">
              RROTA Links
            </span>
          </h1>

          <p className="mt-5 max-w-[82ch] text-sm leading-8 text-slate-300 md:text-base">
            Use this page to verify official RROTA resources and access the
            website, whitepaper, contract, trading links, utility products,
            community channels, FreshCoins audit, SolidProof TrustNet audit
            status and contact information.
          </p>

          {/* Official Contract */}
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(168,85,247,0.08),rgba(0,0,0,0.22))] p-5 shadow-[0_0_45px_rgba(34,211,238,0.08)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                  Official $RTA Contract
                </p>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
                  Always verify the official Solana mint before trading,
                  connecting a wallet, or using any RROTA utility.
                </p>
              </div>

              <a
                href={LINKS.solscan}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/[0.14]"
              >
                Open Solscan{" "}
                <span className="ml-2">
                  <ExternalArrow />
                </span>
              </a>
            </div>

            <p className="mt-4 break-all rounded-2xl border border-cyan-300/15 bg-black/20 px-4 py-3 font-mono text-xs text-cyan-50/90">
              {TOKEN_ADDRESS}
            </p>
          </div>

          {/* Official Contact */}
          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_50px_rgba(0,0,0,0.22)] backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Official Contact
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              For listing reviews, exchange communication, partnership requests,
              security reports or official verification, contact RROTA only
              through:
            </p>
            <a
              href={LINKS.contactEmail}
              className="mt-3 inline-flex rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/[0.14]"
            >
              info@rrota.xyz
            </a>
          </div>

          {/* Audit & Verification */}
          <section className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(6,17,32,0.80),rgba(18,8,31,0.78))] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] backdrop-blur-xl md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-100">
                  Audit & Verification
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-white md:text-4xl">
                  RROTA audit layer is now public.
                </h2>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
                  RROTA has completed independent audit reviews through
                  FreshCoins and SolidProof. SolidProof officially announced the
                  successful completion of the RROTA smart contract audit, and
                  RROTA is visible on SolidProof TrustNet with an{" "}
                  <span className="font-black text-cyan-200">
                    80/100 Security Score
                  </span>{" "}
                  and{" "}
                  <span className="font-black text-emerald-200">
                    Contract Audited
                  </span>{" "}
                  status.
                </p>
              </div>

              <div className="grid w-full gap-2 sm:grid-cols-3 lg:w-[390px]">
                <div className="rounded-2xl border border-cyan-300/18 bg-cyan-300/[0.08] px-4 py-3 text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
                    Score
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    80/100
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-300/18 bg-emerald-300/[0.08] px-4 py-3 text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                    Status
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    Audited
                  </div>
                </div>
                <div className="rounded-2xl border border-fuchsia-300/18 bg-fuchsia-300/[0.08] px-4 py-3 text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-200">
                    Chain
                  </div>
                  <div className="mt-1 text-lg font-black text-white">
                    Solana
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <AuditCard
                name="SolidProof"
                subtitle="80/100 Score"
                points={[
                  "Contract Audited status",
                  "TrustNet visible",
                  "Official audit announcement completed",
                ]}
                href={LINKS.solidproof}
                cta="Open SolidProof"
                letters="SP"
                tone="cyan"
              />

              <AuditCard
                name="FreshCoins"
                subtitle="Audit Reference"
                points={[
                  "Public audit review reference",
                  "RROTA contract review coverage",
                  "Additional verification layer",
                ]}
                href={LINKS.audit}
                cta="Open FreshCoins"
                letters="FC"
                tone="fuchsia"
              />
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-400">
              Audit reviews improve transparency and help identify smart
              contract risks, but they do not remove market, liquidity, trading
              or participation risks. Always verify the official contract and
              links.
            </p>
          </section>

          {/* Link Grid */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {internalItems.map((i) => (
              <Link
                key={i.name}
                href={i.href}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.065] hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]"
              >
                <span className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/[0.055] blur-2xl transition group-hover:bg-cyan-300/[0.16]" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="text-base font-black text-white">
                    {i.name}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200">
                    Open →
                  </span>
                </div>
                <div className="relative mt-3 text-sm leading-6 text-slate-400">
                  {i.note}
                </div>
                <div className="relative mt-3 break-all text-xs text-slate-500">
                  {i.displayHref}
                </div>
              </Link>
            ))}

            {externalItems.map((i) => (
              <a
                key={i.name}
                href={i.href}
                target={i.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={i.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.065] hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]"
              >
                <span className="absolute right-0 top-0 h-24 w-24 rounded-full bg-fuchsia-300/[0.045] blur-2xl transition group-hover:bg-cyan-300/[0.14]" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="text-base font-black text-white">
                    {i.name}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200">
                    {i.href.startsWith("mailto:") ? "Email →" : "Open →"}
                  </span>
                </div>
                <div className="relative mt-3 text-sm leading-6 text-slate-400">
                  {i.note}
                </div>
                <div className="relative mt-3 break-all text-xs text-slate-500">
                  {i.href}
                </div>
              </a>
            ))}
          </div>

          {/* Risk Disclaimer */}
          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Risk Disclaimer
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              RROTA ($RTA) is a crypto asset on Solana. Crypto assets are
              volatile and involve risk. Nothing on this website or official
              pages should be considered financial advice. Always verify
              official links and make your own decisions.
            </p>
          </div>

          {/* Bottom CTA Buttons */}
          <div className="mt-10 flex flex-col flex-wrap gap-3 sm:flex-row">
            <Link
              className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.09] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-200/55 hover:bg-cyan-300/[0.15]"
              href="/"
            >
              ← Back to Home
            </Link>

            <Link
              className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.075]"
              href="/whitepaper"
            >
              Whitepaper →
            </Link>

            <Link
              className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.075]"
              href="/privacy"
            >
              Privacy Policy →
            </Link>

            <Link
              className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.075]"
              href="/terms"
            >
              Terms →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
