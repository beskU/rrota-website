import type { Metadata } from "next";
import RrotaMarketTerminal from "@/app/components/rrota-market-terminal";
import BlogPreview from "./components/blog-preview";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Why from "./components/why";
import Footer from "./components/footer";
import HowTo from "./components/howTo";
import Roadmap from "./components/roadmap";
import AboutUs from "./components/aboutus";

const SITE_URL = "https://rrota.xyz";
const SITE_NAME = "RROTA";
const DEFAULT_OG = `${SITE_URL}/rrota-og-solidproof.jpg`;
const PUBLISHER_LOGO = `${SITE_URL}/favicon.png`;

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";
const BOOM_WEEK_URL = `${SITE_URL}/rrota-boom-week`;
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const DEXTOOLS_URL = "https://www.dextools.io/app/token/rrota";
const GECKO_URL =
  "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
const AUDIT_URL = "https://freshcoins.io/audit/rrota";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RROTA ($RTA) — Utility-First Solana Ecosystem",
  description:
    "RROTA ($RTA) is a utility-first Solana ecosystem building digital rewards, crypto gaming, Spin-to-Win, community tools, and future public transportation utility.",
  keywords: [
    "RROTA",
    "RROTA coin",
    "RROTA token",
    "RTA token",
    "RROTA Solana",
    "RROTA Spin-to-Win",
    "RROTA Boom Week",
    "RROTA 72H Global Spin Race",
    "RROTA leaderboard",
    "RROTA crypto gaming",
    "RROTA tokenomics",
    "RROTA roadmap",
    "RROTA utility ecosystem",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "RROTA ($RTA) — Utility-First Solana Ecosystem",
    description:
      "Official RROTA website. Explore $RTA on Solana, Spin-to-Win public beta, crypto gaming, community tools, tokenomics, roadmap, Boom Week, and official verification links.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG,
        width: 1200,
        height: 630,
        alt: "RROTA ($RTA) — Utility-First Solana Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) — Utility-First Solana Ecosystem",
    description:
      "Official RROTA website for $RTA on Solana: Spin-to-Win, Boom Week, crypto gaming, community tools, roadmap, tokenomics, and verification links.",
    images: [DEFAULT_OG],
    site: "@rrotacoin",
    creator: "@rrotacoin",
  },
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

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

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function BoomWeekLiveBanner() {
  return (
    <section
      id="BoomWeek"
      className="relative mb-20 w-full px-4 sm:px-6 lg:px-8"
      aria-labelledby="boom-week-title"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] border border-yellow-300/25 bg-[#050711] shadow-[0_0_80px_rgba(250,204,21,0.12),0_0_120px_rgba(34,211,238,0.08)]">
        <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.22),transparent_30%),radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_34%),linear-gradient(135deg,rgba(10,14,28,0.98),rgba(3,7,18,0.98))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-red-200">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-300 shadow-[0_0_14px_rgba(248,113,113,0.95)]" />
                Live Now
              </div>

              <h2
                id="boom-week-title"
                className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                🚨 RROTA Boom Week Is Live
                <span className="block text-yellow-300">
                  72H Global Spin Race
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-base">
                Join the official RROTA Boom Week race. Free entry, live
                leaderboard, 6 SOL reward pool, and RTA holder boost. Every spin
                can change the ranking before the race ends.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["🏆", "6 SOL Reward Pool"],
                  ["🎰", "Free Entry"],
                  ["📊", "Live Leaderboard"],
                  ["⚡", "RTA Holder Boost"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3"
                  >
                    <div className="flex items-center gap-3 text-sm font-black text-white">
                      <span className="text-xl">{icon}</span>
                      <span>{text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={BOOM_WEEK_URL}
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-yellow-300/35 bg-gradient-to-r from-yellow-400 via-cyan-400 to-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[0_0_38px_rgba(250,204,21,0.18)] transition-all hover:scale-[1.02] hover:brightness-110"
                >
                  Join Boom Week
                  <ExternalIcon />
                </a>

                <a
                  href={SPIN_TO_WIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-cyan-100 transition-all hover:border-cyan-300/35 hover:bg-cyan-400/15 hover:text-white"
                >
                  Play Now
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white/86 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  Join Telegram
                  <ExternalIcon />
                </a>
              </div>

              <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-yellow-200">
                ⏳ Ends June 25, 2026 — 18:00 UTC
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[34px] border border-yellow-300/18 bg-black/35 p-5 backdrop-blur-xl">
                <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-yellow-200/80">
                    Reward Breakdown
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["🥇", "1st Place", "3 SOL"],
                      ["🥈", "2nd Place", "2 SOL"],
                      ["🥉", "3rd Place", "1 SOL"],
                    ].map(([icon, place, reward]) => (
                      <div
                        key={place}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/32 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{icon}</span>
                          <span className="text-sm font-black text-white">
                            {place}
                          </span>
                        </div>

                        <span className="text-sm font-black text-yellow-200">
                          {reward}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-4 py-3">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200/80">
                      Official Race Page
                    </div>
                    <p className="mt-1 text-xs leading-5 text-white/68">
                      Full rules, rewards, fair-play review, holder boost, and
                      official links are available on the Boom Week page.
                    </p>
                  </div>

                  <a
                    href={BOOM_WEEK_URL}
                    className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-yellow-300/25 bg-yellow-300/12 text-sm font-black uppercase tracking-[0.12em] text-yellow-100 transition-all hover:bg-yellow-300/18 hover:text-white"
                  >
                    Open Race Details
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-red-400/16 bg-red-500/8 px-5 py-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-200/80">
                  Fair-Play Notice
                </div>
                <p className="mt-2 text-xs leading-5 text-white/66">
                  Botting, multi-account abuse, fake referrals, or leaderboard
                  manipulation may lead to disqualification after review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RrotaEcosystemSection() {
  const ecosystemCards = [
    {
      title: "RROTA Coin",
      label: "Core Token",
      text:
        "RROTA ($RTA) is the core Solana SPL token powering the ecosystem, official links, trading access, community growth, and future product utility.",
      tone: "cyan",
    },
    {
      title: "Spin-to-Win",
      label: "Live Utility",
      text:
        "The first live RROTA product: a protected game experience with Boost Credits, leaderboard competition, and eligible RTA reward flows.",
      tone: "emerald",
    },
    {
      title: "Crypto Shooter",
      label: "Gaming Expansion",
      text:
        "A planned crypto-gaming expansion designed to extend the RROTA utility stack beyond one product and into a larger playable ecosystem.",
      tone: "fuchsia",
    },
    {
      title: "Public Transportation Utility",
      label: "Real-World Direction",
      text:
        "A long-term RROTA direction focused on transport tools, station discovery, route support, and practical user-facing utility.",
      tone: "amber",
    },
    {
      title: "Community Rewards",
      label: "Growth Layer",
      text:
        "Leaderboard races, weekly rewards, community events, official campaigns, and reward-based engagement around the RROTA ecosystem.",
      tone: "cyan",
    },
    {
      title: "Future Tools",
      label: "Utility Stack",
      text:
        "Future dashboards, token tools, tracking systems, referral mechanics, and product modules built around the official RROTA ecosystem.",
      tone: "emerald",
    },
  ];

  const toneClasses: Record<string, string> = {
    cyan: "border-cyan-400/16 bg-cyan-400/7 text-cyan-200",
    emerald: "border-emerald-400/16 bg-emerald-400/7 text-emerald-200",
    fuchsia: "border-fuchsia-400/16 bg-fuchsia-400/7 text-fuchsia-200",
    amber: "border-amber-400/16 bg-amber-400/7 text-amber-200",
  };

  return (
    <section id="Ecosystem" className="relative mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              RROTA Ecosystem
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              What is RROTA coin?
              <span className="rrota-safe-title-accent block">
                A Solana ecosystem, not just one app.
              </span>
            </h2>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              RROTA ($RTA) is a utility-first Solana ecosystem building digital rewards,
              crypto gaming, community tools, and future public transportation utility.
              Spin-to-Win is the first live product, while Crypto Shooter and transport-focused
              tools represent the next direction of the ecosystem.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={JUPITER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-emerald-400/18 bg-emerald-400/10 px-5 text-sm font-black uppercase tracking-[0.12em] text-emerald-100 transition-all hover:border-emerald-300/30 hover:bg-emerald-400/14 hover:text-white"
              >
                Buy $RTA
                <ExternalIcon />
              </a>

              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-cyan-400/18 bg-cyan-400/10 px-5 text-sm font-black uppercase tracking-[0.12em] text-cyan-100 transition-all hover:border-cyan-300/30 hover:bg-cyan-400/14 hover:text-white"
              >
                Verify Contract
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ecosystemCards.map((card) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-[32px] border p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 ${toneClasses[card.tone]}`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_35%)]" />

              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06]">
                  <CheckIcon />
                </div>

                <div className="text-[10px] font-black uppercase tracking-[0.22em] opacity-75">
                  {card.label}
                </div>

                <h3 className="mt-2 text-xl font-black text-white">{card.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/62">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[30px] border border-amber-400/14 bg-amber-400/6 px-5 py-4">
          <div className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-200/75">
            Ecosystem Positioning
          </div>
          <p className="mt-2 text-sm leading-6 text-white/66">
            RROTA is the coin. The ecosystem is the long-term vision. Spin-to-Win is the first shipped
            utility. Crypto Shooter, community tools, and public transportation features are planned
            expansion layers around $RTA.
          </p>
        </div>
      </div>
    </section>
  );
}

function SpinToWinLiveSection() {
  const featureCards = [
    {
      title: "First Live Product",
      text: "Spin-to-Win proves that RROTA is moving from token concept into active utility and public beta usage.",
      tone: "cyan",
    },
    {
      title: "Protected Game Economy",
      text: "The beta system includes anti-bot improvements, tighter Boost Credit rules, and cleaner leaderboard competition.",
      tone: "emerald",
    },
    {
      title: "Leaderboard Rewards",
      text: "Players can compete for leaderboard positions while weekly rewards and active-player campaigns continue to grow.",
      tone: "fuchsia",
    },
    {
      title: "Wallet-Linked Utility",
      text: "Phantom support, RTA deposits, Boost Credits, and eligible withdrawals connect the game to the RROTA economy.",
      tone: "amber",
    },
  ];

  const toneClasses: Record<string, string> = {
    cyan: "border-cyan-400/18 bg-cyan-400/7 text-cyan-200",
    emerald: "border-emerald-400/18 bg-emerald-400/7 text-emerald-200",
    fuchsia: "border-fuchsia-400/18 bg-fuchsia-400/7 text-fuchsia-200",
    amber: "border-amber-400/18 bg-amber-400/7 text-amber-200",
  };

  return (
    <section id="Utilities" className="relative mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-cyan-400/16 bg-[#050711] shadow-[0_0_70px_rgba(34,211,238,0.10),0_0_120px_rgba(217,70,239,0.07)]">
        <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.17),transparent_34%),radial-gradient(circle_at_50%_70%,rgba(250,204,21,0.07),transparent_32%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                First Utility Live
              </div>

              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Spin-to-Win is one live part of the
                <span className="rrota-safe-title-accent block">
                  wider RROTA ecosystem.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                The official Spin-to-Win app is the first public utility connected to $RTA.
                It gives the community a real product to use while RROTA continues expanding
                toward crypto gaming, community rewards, and future public transportation utility.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_TO_WIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_34px_rgba(34,211,238,0.22)] transition-all hover:scale-[1.02] hover:brightness-110"
                >
                  Launch Game
                  <ExternalIcon />
                </a>

                <a
                  href="#how-to-play"
                  className="inline-flex h-13 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white/86 backdrop-blur-xl transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 hover:text-white"
                >
                  Utility Guide
                </a>

                <a
                  href={JUPITER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-emerald-400/16 bg-emerald-400/8 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-emerald-100 transition-all hover:border-emerald-300/28 hover:bg-emerald-400/12 hover:text-white"
                >
                  Buy $RTA
                  <ExternalIcon />
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {featureCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-3xl border p-4 backdrop-blur-xl ${toneClasses[card.tone]}`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                      {card.title}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/68">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,24,38,0.96),rgba(7,10,20,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(34,211,238,0.10)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(217,70,239,0.14),transparent_38%)]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                        Product Status
                      </div>
                      <div className="mt-1 text-xl font-black text-white">
                        RROTA Spin-to-Win
                      </div>
                    </div>

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                      Live Beta
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Role", "First live RROTA ecosystem utility"],
                      ["Gameplay", "Daily bonus, free spins, boost spins"],
                      ["Security", "Anti-bot rules and protected leaderboard"],
                      ["Economy", "RTA Balance and Boost Credits separated"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                          {label}
                        </div>
                        <div className="mt-1 text-sm font-bold text-white/88">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-400/16 bg-amber-400/7 px-4 py-3">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-200/80">
                      Ecosystem note
                    </div>
                    <p className="mt-1 text-xs leading-5 text-white/66">
                      Spin-to-Win is important, but it is not the full RROTA story. It is the first shipped
                      product inside a broader Solana ecosystem roadmap.
                    </p>
                  </div>

                  <a
                    href={SPIN_TO_WIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/25 to-fuchsia-500/25 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:brightness-110"
                  >
                    Enter spin.rrota.xyz
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-cyan-400/14 bg-cyan-400/7 p-4 text-cyan-100 transition-all hover:bg-cyan-400/10"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200/70">
                    Verify
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm font-black text-white">
                    Solscan <ExternalIcon />
                  </div>
                </a>

                <a
                  href={AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-fuchsia-400/14 bg-fuchsia-400/7 p-4 text-fuchsia-100 transition-all hover:bg-fuchsia-400/10"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-200/70">
                    Check
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm font-black text-white">
                    Audit <ExternalIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficialLinksSection() {
  const links = [
    {
      label: "Boom Week",
      detail: "72H Global Spin Race",
      href: BOOM_WEEK_URL,
      tone: "amber",
    },
    {
      label: "Buy on Jupiter",
      detail: "Trade $RTA safely",
      href: JUPITER_URL,
      tone: "emerald",
    },
    {
      label: "Verify on Solscan",
      detail: "Official token contract",
      href: SOLSCAN_URL,
      tone: "fuchsia",
    },
    {
      label: "Play Spin-to-Win",
      detail: "First live ecosystem utility",
      href: SPIN_TO_WIN_URL,
      tone: "cyan",
    },
    {
      label: "GeckoTerminal",
      detail: "Pool and chart data",
      href: GECKO_URL,
      tone: "amber",
    },
    {
      label: "DEXTools",
      detail: "Market chart",
      href: DEXTOOLS_URL,
      tone: "cyan",
    },
    {
      label: "Telegram",
      detail: "Official community",
      href: TELEGRAM_URL,
      tone: "emerald",
    },
    {
      label: "X / Twitter",
      detail: "Official updates",
      href: X_URL,
      tone: "fuchsia",
    },
    {
      label: "Audit",
      detail: "FreshCoins verification",
      href: AUDIT_URL,
      tone: "amber",
    },
  ];

  const toneClasses: Record<string, string> = {
    cyan: "hover:border-cyan-300/28 hover:bg-cyan-400/8",
    emerald: "hover:border-emerald-300/28 hover:bg-emerald-400/8",
    fuchsia: "hover:border-fuchsia-300/28 hover:bg-fuchsia-400/8",
    amber: "hover:border-amber-300/28 hover:bg-amber-400/8",
  };

  return (
    <section id="OfficialLinks" className="mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_45px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-7">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
              Official RROTA Links
            </div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Verify the coin before you click.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-white/56">
            Use only official RROTA links. Always verify the token contract before trading,
            connecting wallets, opening third-party tools, or visiting ecosystem products.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith(SITE_URL) ? undefined : "_blank"}
              rel={link.href.startsWith(SITE_URL) ? undefined : "noopener noreferrer"}
              className={`group rounded-3xl border border-white/10 bg-[#070A12]/70 p-4 transition-all ${toneClasses[link.tone]}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-black text-white">{link.label}</div>
                  <div className="mt-1 text-xs text-white/46">{link.detail}</div>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/14 bg-cyan-400/8 text-cyan-200 transition-all group-hover:scale-105">
                  <ExternalIcon />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-400/14 bg-cyan-400/6 px-4 py-3">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/70">
            Official Solana Contract
          </div>
          <div className="mt-2 break-all font-mono text-xs font-semibold text-white/78 sm:text-sm">
            {TOKEN_ADDRESS}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: PUBLISHER_LOGO,
        },
        sameAs: [
          TELEGRAM_URL,
          X_URL,
          JUPITER_URL,
          SOLSCAN_URL,
          DEXTOOLS_URL,
          GECKO_URL,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: {
          "@id": `${SITE_URL}#organization`,
        },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: "RROTA ($RTA) — Utility-First Solana Ecosystem",
        description:
          "Official RROTA website for $RTA on Solana. RROTA is building digital rewards, crypto gaming, Spin-to-Win, Boom Week, community tools, and future public transportation utility.",
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        about: [
          {
            "@type": "Thing",
            name: "RROTA coin",
            description: "RROTA ($RTA), a utility-first Solana ecosystem token.",
          },
          {
            "@type": "Thing",
            name: "RROTA Spin-to-Win",
            description: "The first live RROTA ecosystem utility experience.",
          },
          {
            "@type": "Thing",
            name: "RROTA Boom Week",
            description:
              "A 72-hour Global Spin Race with free entry, live leaderboard, 6 SOL reward pool, and RTA holder boost.",
          },
          {
            "@type": "Thing",
            name: "RROTA official Solana mint",
            description: TOKEN_ADDRESS,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is RROTA coin?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "RROTA coin, also known as $RTA, is a utility-first Solana ecosystem token focused on digital rewards, crypto gaming, community tools, Spin-to-Win, and future public transportation utility.",
            },
          },
          {
            "@type": "Question",
            name: "What is RROTA Spin-to-Win?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "RROTA Spin-to-Win is the first live utility experience in the RROTA ecosystem. It gives users a public beta game experience connected to $RTA activity, rewards, Boost Credits, and leaderboard engagement.",
            },
          },
          {
            "@type": "Question",
            name: "What is RROTA Boom Week?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "RROTA Boom Week is a 72-hour Global Spin Race connected to the RROTA Spin-to-Win experience, with free entry, live leaderboard, 6 SOL reward pool, and RTA holder boost.",
            },
          },
          {
            "@type": "Question",
            name: "What is the official RROTA mint address?",
            acceptedAnswer: {
              "@type": "Answer",
              text: TOKEN_ADDRESS,
            },
          },
          {
            "@type": "Question",
            name: "Is RROTA only a game token?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. Spin-to-Win is the first live RROTA product, but RROTA is positioned as a wider Solana utility ecosystem with crypto gaming, community rewards, future tools, and long-term public transportation utility ideas.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeJsonLd} />

      <div className="relative mx-auto w-full overflow-hidden bg-[#050711] font-inter text-white">
        <Navbar />

        <main className="relative w-full">
          <Hero />

          <BoomWeekLiveBanner />

          <RrotaEcosystemSection />

          <SpinToWinLiveSection />

          <section id="how-to-play" className="mb-20 w-full">
            <HowTo />
          </section>

          <section className="mb-20 w-full">
            <Why />
          </section>

          <RrotaMarketTerminal />

          <OfficialLinksSection />

          <BlogPreview />

          <section className="mb-20 w-full">
            <Roadmap />
          </section>

          <section className="my-20 w-full">
            <AboutUs />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
