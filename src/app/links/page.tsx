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
    "Official RROTA links: website, whitepaper, contract verification, social channels, FreshCoins audit, SolidProof TrustNet audit, Spin-to-Win utility, trackers and contact details. Avoid fake domains and verify only at rrota.xyz.",
  alternates: { canonical: `${OFFICIAL_DOMAIN}/links` },
};

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
      name: "FreshCoins Audit Reference",
      href: LINKS.audit,
      note: "Public FreshCoins audit reference",
    },
    {
      name: "SolidProof TrustNet Audit",
      href: LINKS.solidproof,
      note: "SolidProof audit completed successfully • Security Score 80/100 • Contract Audited",
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
      className={`${spaceGrotesk.className} relative min-h-screen w-full overflow-hidden bg-[#02030a] pt-[110px] pb-16 text-white`}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.055] px-4 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-cyan-100 shadow-[0_0_42px_rgba(34,211,238,0.14)] backdrop-blur">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,1)]" />
            </span>
            Verified RROTA Resources
          </div>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[0.92] tracking-[-0.055em] text-white md:text-6xl">
            Official{" "}
            <span className="bg-[linear-gradient(90deg,#ffffff_0%,#9ff7ff_18%,#5df8d2_42%,#b78cff_72%,#ffffff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.18)]">
              RROTA Links
            </span>
          </h1>

          <p className="mt-5 max-w-[82ch] text-sm leading-8 text-slate-300 md:text-base">
            Use this page to verify you are on the real RROTA website and to
            access the official website, whitepaper, contract, trading links,
            utility products, community channels, FreshCoins audit, SolidProof
            TrustNet audit status and contact information.
          </p>

          {/* Anti-phishing Notice */}
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-amber-300/25 bg-[linear-gradient(135deg,rgba(251,191,36,0.13),rgba(0,0,0,0.20))] p-5 shadow-[0_0_45px_rgba(251,191,36,0.08)] backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-100">
                  Anti-phishing Notice
                </p>
                <p className="mt-3 text-sm leading-7 text-amber-50/88">
                  Only trust <strong>{OFFICIAL_DOMAIN}</strong>. Beware{" "}
                  <strong>rr0ta.xyz</strong> and other look-alike domains.
                  Always confirm the official contract before connecting a wallet
                  or trading.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-300/20 bg-black/25 px-4 py-3 text-xs text-amber-50/80">
                Official domain only
              </div>
            </div>

            <p className="mt-4 break-all rounded-2xl border border-amber-300/15 bg-black/20 px-4 py-3 font-mono text-xs text-amber-50/90">
              Official $RTA mint: {TOKEN_ADDRESS}
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
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(168,85,247,0.10),rgba(0,0,0,0.22))] p-5 shadow-[0_0_55px_rgba(34,211,238,0.10)] backdrop-blur">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                  Audit & Verification
                </p>
                <p className="mt-3 max-w-[86ch] text-sm leading-7 text-slate-300">
                  RROTA has completed independent audit reviews through FreshCoins
                  and SolidProof. SolidProof has officially announced the successful
                  completion of the RROTA smart contract audit, and RROTA is visible
                  on SolidProof TrustNet with an{" "}
                  <strong className="text-cyan-100">80/100 Security Score</strong>{" "}
                  and{" "}
                  <strong className="text-emerald-100">Contract Audited</strong>{" "}
                  status.
                </p>
              </div>

              <div className="grid min-w-full gap-3 sm:grid-cols-2 lg:min-w-[360px]">
                <a
                  href={LINKS.solidproof}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.075] p-4 transition hover:border-cyan-200/50 hover:bg-cyan-300/[0.12]"
                >
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
                    SolidProof
                  </div>
                  <div className="mt-2 text-sm font-black text-white">
                    80/100 Score
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">
                    Contract Audited • TrustNet visible
                  </div>
                </a>

                <a
                  href={LINKS.audit}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-fuchsia-300/25 bg-fuchsia-300/[0.075] p-4 transition hover:border-fuchsia-200/50 hover:bg-fuchsia-300/[0.12]"
                >
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-100">
                    FreshCoins
                  </div>
                  <div className="mt-2 text-sm font-black text-white">
                    Audit Reference
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">
                    Public audit review reference
                  </div>
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Audit reviews improve transparency and help identify smart contract
              risks, but they do not remove market, liquidity, trading or
              participation risks. Always verify the official contract and links.
            </p>
          </div>

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
              pages should be considered financial advice. Always verify official
              links and make your own decisions.
            </p>
          </div>

          {/* Bottom CTA Buttons */}
          <div className="mt-10 flex flex-col flex-wrap gap-3 sm:flex-row">
            <Link
              className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.09] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-200/55 hover:bg-cyan-300/[0.15]"
              href="/"
            >
              Back to Home
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
