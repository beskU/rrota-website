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
const TELEGRAM_MINI_APP_URL = "https://t.me/RROTASpin_Bot";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const DEXTOOLS_URL = "https://www.dextools.io/app/token/rrota";
const GECKO_URL =
  "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
const FRESHCOINS_AUDIT_URL = "https://freshcoins.io/audit/rrota";
const SOLIDPROOF_AUDIT_URL = "https://app.solidproof.io/projects/rrota";

const WEEKLY_REWARDS = [
  { place: "1st place", reward: "2 SOL", icon: "🥇" },
  { place: "2nd place", reward: "1 SOL", icon: "🥈" },
  { place: "3rd place", reward: "0.5 SOL", icon: "🥉" },
];

export const revalidate = 300;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RROTA ($RTA) — Solana Utility Ecosystem",
  description:
    "RROTA ($RTA) is a Solana utility ecosystem connecting gaming, digital rewards, community products, and long-term real-world utility development.",
  keywords: [
    "RROTA",
    "RROTA coin",
    "RROTA token",
    "RTA token",
    "RROTA Solana",
    "RROTA ecosystem",
    "RROTA Spin-to-Win",
    "RROTA crypto gaming",
    "RROTA community rewards",
    "RROTA tokenomics",
    "RROTA roadmap",
    "Solana utility token",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "RROTA ($RTA) — Solana Utility Ecosystem",
    description:
      "Explore the official RROTA ecosystem: $RTA on Solana, live Spin-to-Win utility, gaming development, community rewards, tokenomics, roadmap, and verification links.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG,
        width: 1200,
        height: 630,
        alt: "RROTA ($RTA) Solana utility ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) — Solana Utility Ecosystem",
    description:
      "The official RROTA ecosystem website: $RTA, live utility, gaming, community rewards, roadmap, tokenomics, and official verification.",
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

function ArrowIcon() {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function getNextWeeklyDeadline(now = new Date()) {
  const deadline = new Date(now);
  const day = deadline.getUTCDay();
  let daysUntilSaturday = (6 - day + 7) % 7;

  deadline.setUTCHours(16, 0, 0, 0);

  if (daysUntilSaturday === 0 && now.getTime() >= deadline.getTime()) {
    daysUntilSaturday = 7;
  }

  deadline.setUTCDate(deadline.getUTCDate() + daysUntilSaturday);
  return deadline;
}

function formatUtcDeadline(deadline: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(deadline)
    .replace(",", " •")
    .concat(" UTC");
}

function EcosystemOverviewSection() {
  const ecosystemCards = [
    {
      title: "RROTA Coin",
      status: "Live",
      statusClass: "border-emerald-300/25 bg-emerald-400/10 text-emerald-200",
      text: "The core Solana token connecting the RROTA brand, products, reward systems, community activity, and future ecosystem utility.",
      href: "/tokenomics",
      action: "View tokenomics",
      accent: "from-cyan-400/20 to-blue-500/5",
    },
    {
      title: "Spin-to-Win",
      status: "Live Beta",
      statusClass: "border-cyan-300/25 bg-cyan-400/10 text-cyan-200",
      text: "The first public RROTA product, available through the browser and Telegram Mini App with live leaderboard competition.",
      href: SPIN_TO_WIN_URL,
      action: "Launch product",
      external: true,
      accent: "from-cyan-400/20 to-fuchsia-500/5",
    },
    {
      title: "RROTA AI",
      status: "Beta",
      statusClass: "border-violet-300/25 bg-violet-400/10 text-violet-200",
      text: "An ecosystem information layer designed to help users explore RROTA products, official resources, and project information more easily.",
      href: "/roadmap",
      action: "See ecosystem plan",
      accent: "from-violet-400/20 to-cyan-500/5",
    },
    {
      title: "Crypto Shooter",
      status: "In Development",
      statusClass: "border-fuchsia-300/25 bg-fuchsia-400/10 text-fuchsia-200",
      text: "A planned gaming expansion intended to take RROTA beyond one game and build a broader playable ecosystem around $RTA.",
      href: "/roadmap",
      action: "See development plan",
      accent: "from-fuchsia-400/20 to-purple-500/5",
    },
    {
      title: "Community Rewards",
      status: "Active",
      statusClass: "border-amber-300/25 bg-amber-400/10 text-amber-200",
      text: "Weekly races, leaderboard rewards, campaigns, community participation, and transparent winner announcements across RROTA channels.",
      href: TELEGRAM_URL,
      action: "Join the community",
      external: true,
      accent: "from-amber-400/20 to-orange-500/5",
    },
    {
      title: "Transit Utility",
      status: "Long-Term Roadmap",
      statusClass: "border-slate-300/20 bg-white/[0.05] text-white/70",
      text: "A future real-world direction focused on practical transport information, route support, station discovery, and user-facing tools.",
      href: "/roadmap",
      action: "Read the roadmap",
      accent: "from-slate-400/15 to-cyan-500/5",
    },
  ];

  return (
    <section id="Ecosystem" className="relative w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
              RROTA Ecosystem
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              One token connecting
              <span className="rrota-safe-title-accent block">multiple utility layers.</span>
            </h2>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6">
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              RROTA is not only a Spin-to-Win project. $RTA is the core token of a wider Solana ecosystem being built across gaming, digital rewards, community products, information tools, and long-term real-world utility.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/roadmap"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-5 text-sm font-black uppercase tracking-[0.1em] text-cyan-100 transition-all hover:bg-cyan-400/15 hover:text-white"
              >
                Explore roadmap
                <ArrowIcon />
              </a>

              <a
                href={JUPITER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-emerald-300/25 bg-emerald-400/10 px-5 text-sm font-black uppercase tracking-[0.1em] text-emerald-100 transition-all hover:bg-emerald-400/15 hover:text-white"
              >
                Buy $RTA
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ecosystemCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#080b14]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent}`} />

              <div className="relative flex min-h-[250px] flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-lg font-black text-white">
                    R
                  </div>

                  <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${card.statusClass}`}>
                    {card.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{card.text}</p>

                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-cyan-200 transition-colors hover:text-white"
                >
                  {card.action}
                  {card.external ? <ExternalIcon /> : <ArrowIcon />}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentActivitySection() {
  const nextDeadline = getNextWeeklyDeadline();
  const formattedDeadline = formatUtcDeadline(nextDeadline);

  return (
    <section id="Activity" className="relative w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/80">
            Ecosystem activity
          </div>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Live now—and still building.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
            The weekly race is the most active product event today, while development continues across the wider RROTA ecosystem.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="relative overflow-hidden rounded-[36px] border border-cyan-300/20 bg-[#07101d] p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_38%)]" />

            <div className="relative">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                    Live weekly race
                  </div>
                  <h3 className="mt-4 text-3xl font-black text-white">Spin-to-Win leaderboard</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                    Play through the browser or Telegram Mini App, climb the weekly leaderboard, and compete for the current reward pool.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-left sm:text-right">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/42">
                    Next weekly deadline
                  </div>
                  <div className="mt-1 text-sm font-black text-cyan-100">{formattedDeadline}</div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {WEEKLY_REWARDS.map((item) => (
                  <div key={item.place} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-white/48">
                      {item.place}
                    </div>
                    <div className="mt-1 text-xl font-black text-white">{item.reward}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_TO_WIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-black uppercase tracking-[0.1em] text-white transition-all hover:scale-[1.02] hover:brightness-110"
                >
                  Play in browser
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_MINI_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-6 text-sm font-black uppercase tracking-[0.1em] text-white/85 transition-all hover:bg-white/10 hover:text-white"
                >
                  Open Telegram game
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-[36px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-200/75">
              Development focus
            </div>
            <h3 className="mt-3 text-3xl font-black text-white">What RROTA is improving next</h3>

            <div className="mt-6 space-y-3">
              {[
                ["Holder utility", "Create clearer benefits for holding and using $RTA across ecosystem products."],
                ["Product quality", "Keep improving Spin-to-Win fairness, usability, infrastructure, and leaderboard transparency."],
                ["Gaming expansion", "Continue development toward additional playable experiences such as Crypto Shooter."],
                ["Public proof", "Publish clearer progress updates, completed-race results, and verified reward transactions."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-black text-white">{title}</div>
                  <p className="mt-1 text-xs leading-5 text-white/56">{text}</p>
                </div>
              ))}
            </div>

            <a
              href="/roadmap"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10 px-5 text-sm font-black uppercase tracking-[0.1em] text-fuchsia-100 transition-all hover:bg-fuchsia-400/15 hover:text-white"
            >
              View ecosystem roadmap
              <ArrowIcon />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function SpinToWinSpotlightSection() {
  return (
    <section id="SpinToWin" className="relative w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] border border-white/10 bg-[#070a13]">
        <div className="relative grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(217,70,239,0.12),transparent_38%)]" />

          <div className="relative">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
              First shipped utility
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Spin-to-Win proves the ecosystem is becoming usable.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
              Spin-to-Win is not the whole RROTA identity. It is the first live product demonstrating how $RTA, gaming, rewards, wallets, and community competition can connect inside one ecosystem.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={SPIN_TO_WIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 text-sm font-black uppercase tracking-[0.1em] text-white transition-all hover:scale-[1.02] hover:brightness-110"
              >
                Launch Spin-to-Win
                <ExternalIcon />
              </a>
              <a
                href="#how-to-play"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.05] px-6 text-sm font-black uppercase tracking-[0.1em] text-white/85 transition-all hover:bg-white/10 hover:text-white"
              >
                How it works
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-2">
            {[
              ["Browser + Telegram", "Available as a browser product and Telegram Mini App."],
              ["Live leaderboards", "Weekly, monthly, yearly, and all-time competition layers."],
              ["Wallet-linked economy", "RTA-related balances, Boost Credits, and eligible reward flows."],
              ["Fair-play development", "Ongoing work around anti-abuse controls and cleaner competition."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <div className="text-sm font-black text-white">{title}</div>
                <p className="mt-2 text-xs leading-5 text-white/56">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficialLinksSection() {
  const links = [
    {
      label: "Buy on Jupiter",
      detail: "Official $RTA token page",
      href: JUPITER_URL,
    },
    {
      label: "Verify on Solscan",
      detail: "Official mint and holders",
      href: SOLSCAN_URL,
    },
    {
      label: "Spin-to-Win",
      detail: "Live RROTA product",
      href: SPIN_TO_WIN_URL,
    },
    {
      label: "Telegram Mini App",
      detail: "Open the game in Telegram",
      href: TELEGRAM_MINI_APP_URL,
    },
    {
      label: "SolidProof Audit",
      detail: "RROTA audit profile",
      href: SOLIDPROOF_AUDIT_URL,
    },
    {
      label: "FreshCoins Audit",
      detail: "Independent audit page",
      href: FRESHCOINS_AUDIT_URL,
    },
    {
      label: "GeckoTerminal",
      detail: "Pool and chart data",
      href: GECKO_URL,
    },
    {
      label: "DEXTools",
      detail: "Market chart and activity",
      href: DEXTOOLS_URL,
    },
    {
      label: "Telegram Community",
      detail: "Official RROTA channel",
      href: TELEGRAM_URL,
    },
    {
      label: "X / Twitter",
      detail: "Official project updates",
      href: X_URL,
    },
  ];

  return (
    <section id="OfficialLinks" className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/75">
              Official RROTA links
            </div>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Verify before you connect or trade.
            </h2>
          </div>

          <p className="text-sm leading-6 text-white/58">
            Use only official RROTA destinations. Always verify the mint address before trading, connecting a wallet, or opening third-party market tools.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-[#070a12]/80 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-400/[0.07]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-black text-white">{link.label}</div>
                  <div className="mt-1 text-xs leading-5 text-white/45">{link.detail}</div>
                </div>
                <span className="text-cyan-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.06] px-4 py-4">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200/70">
            Official Solana mint
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
          SOLIDPROOF_AUDIT_URL,
          FRESHCOINS_AUDIT_URL,
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
        name: "RROTA ($RTA) — Solana Utility Ecosystem",
        description:
          "The official RROTA ecosystem website for $RTA on Solana, live Spin-to-Win utility, gaming development, community rewards, tokenomics, roadmap, and verification resources.",
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        about: [
          {
            "@type": "Thing",
            name: "RROTA coin",
            description: "RROTA ($RTA), the core token of a developing Solana utility ecosystem.",
          },
          {
            "@type": "SoftwareApplication",
            name: "RROTA Spin-to-Win",
            applicationCategory: "GameApplication",
            operatingSystem: "Web, Telegram",
            url: SPIN_TO_WIN_URL,
            description: "The first live product inside the RROTA ecosystem.",
          },
          {
            "@type": "Thing",
            name: "RROTA ecosystem roadmap",
            description: "Gaming, community rewards, information tools, and long-term real-world utility development.",
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
            name: "What is RROTA?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RROTA is a Solana utility ecosystem built around the $RTA token, gaming products, digital rewards, community tools, and long-term utility development.",
            },
          },
          {
            "@type": "Question",
            name: "Is RROTA only a Spin-to-Win game?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Spin-to-Win is the first live RROTA product, while the wider ecosystem roadmap includes additional gaming, community, information, and long-term real-world utility layers.",
            },
          },
          {
            "@type": "Question",
            name: "What is RROTA Spin-to-Win?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RROTA Spin-to-Win is the first public product in the ecosystem, available through the browser and Telegram Mini App with leaderboard competition and reward-related game features.",
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

          <EcosystemOverviewSection />

          <CurrentActivitySection />

          <section id="WhyRrota" className="w-full py-20">
            <Why />
          </section>

          <SpinToWinSpotlightSection />

          <section id="how-to-play" className="w-full py-20">
            <HowTo />
          </section>

          <section id="Market" className="w-full py-20">
            <RrotaMarketTerminal />
          </section>

          <section id="Roadmap" className="w-full py-20">
            <Roadmap />
          </section>

          <BlogPreview />

          <section id="About" className="w-full py-20">
            <AboutUs />
          </section>

          <OfficialLinksSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
