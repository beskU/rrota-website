import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/whitepaper`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const SOLIDPROOF_URL = "https://app.solidproof.io/projects/rrota";
const FRESHCOINS_URL = "https://freshcoins.io/audit/rrota";
const PDF_WHITEPAPER_URL =
  "https://github.com/beskU/rrota/blob/main/RROTA_RTA_Whitepaper_Official.pdf";

export const metadata: Metadata = {
  title: "RROTA Whitepaper",
  description:
    "Read the official RROTA web whitepaper covering the project thesis, $RTA token role, live Spin-to-Win product, leaderboards, ecosystem architecture, development roadmap, verification principles, and risks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Whitepaper",
    description:
      "The official RROTA web whitepaper: ecosystem thesis, $RTA utility, Spin-to-Win, leaderboard competition, roadmap, security, and risk disclosures.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Whitepaper",
    description:
      "Explore the official RROTA ecosystem thesis, $RTA token role, live products, development status, security principles, and risks.",
  },
};

type Status = "Shipped" | "Live" | "In progress" | "Planned";

type Pillar = {
  status: Status;
  title: string;
  description: string;
  points: string[];
  tone: string;
  badge: string;
};

const ecosystemPillars: Pillar[] = [
  {
    status: "Shipped",
    title: "$RTA token foundation",
    description:
      "RROTA is built around a Solana SPL token that provides a common asset layer across the ecosystem.",
    points: [
      "Official mint publicly documented",
      "Solscan and Jupiter verification paths",
      "Mint and freeze authorities revoked",
      "Token facts separated from dynamic market data",
    ],
    tone: "border-emerald-400/16 bg-emerald-400/[0.045]",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
  {
    status: "Live",
    title: "RROTA Spin-to-Win",
    description:
      "The first public RROTA product provides a repeat-use game layer through browser and Telegram access.",
    points: [
      "Wheel activity and cooldowns",
      "Daily bonus and missions",
      "Referrals and player progression",
      "Weekly, monthly, yearly, and all-time leaderboards",
    ],
    tone: "border-cyan-400/16 bg-cyan-400/[0.05]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    status: "Live",
    title: "RROTA AI",
    description:
      "An official informational assistant helps users understand the ecosystem, find verified resources, and review safety guidance.",
    points: [
      "Project and product education",
      "Official-link navigation",
      "Wallet-safety reminders",
      "Onboarding for new users",
    ],
    tone: "border-sky-400/16 bg-sky-400/[0.045]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  },
  {
    status: "In progress",
    title: "Holder-linked utility",
    description:
      "RROTA is developing clearer relationships between verified wallet holdings, eligibility, product access, and ecosystem benefits.",
    points: [
      "Wallet-linked eligibility logic",
      "Holder benefit definitions",
      "Testing before wider activation",
      "Clear public documentation",
    ],
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.045]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    status: "In progress",
    title: "Game economy protection",
    description:
      "The live product continues to evolve around abuse prevention, reward balancing, account review, and withdrawal safeguards.",
    points: [
      "Bot and farming detection",
      "Suspicious activity review",
      "Reward eligibility checks",
      "Account and withdrawal safeguards",
    ],
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
    badge:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  {
    status: "Planned",
    title: "Expanded products",
    description:
      "Longer-term ecosystem expansion may include additional games, community systems, and validated practical-use tools.",
    points: [
      "RROTA Crypto Shooter",
      "Expanded missions and achievements",
      "Cross-product progression research",
      "Transport-focused utility research",
    ],
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
    badge:
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
  },
];

const tokenRoles = [
  {
    title: "Shared ecosystem asset",
    text:
      "$RTA provides a common token reference across RROTA products, public market access, official documentation, and future integrations.",
  },
  {
    title: "Product-linked participation",
    text:
      "The token can support clearly documented product access, eligibility, rewards, or progression when those features are live and tested.",
  },
  {
    title: "Community incentives",
    text:
      "$RTA can be used in published campaigns and ecosystem activities where reward amounts, rules, and eligibility are disclosed.",
  },
  {
    title: "Future cross-product role",
    text:
      "Planned products may extend $RTA utility across games, community tools, progression systems, and validated practical-use applications.",
  },
];

const productLoop = [
  {
    number: "01",
    title: "Access",
    text:
      "Players enter through the official browser game or Telegram Mini App and use one account for product activity.",
  },
  {
    number: "02",
    title: "Activity",
    text:
      "Spins, bonuses, missions, referrals, and progression features create repeat-use participation.",
  },
  {
    number: "03",
    title: "Competition",
    text:
      "Weekly, monthly, yearly, and all-time boards measure activity across different time periods.",
  },
  {
    number: "04",
    title: "Eligibility",
    text:
      "Published rules and fair-play checks determine whether a position qualifies for a campaign reward.",
  },
  {
    number: "05",
    title: "Verification",
    text:
      "Official announcements, winner records, and payment evidence should provide a clearer public result history.",
  },
];

const leaderboardModel = [
  {
    title: "Weekly races",
    text:
      "Short competition windows create regular resets, new ranking opportunities, and frequent winner communication.",
  },
  {
    title: "Monthly rankings",
    text:
      "Monthly standings measure consistency across a longer period instead of rewarding only one short burst of activity.",
  },
  {
    title: "Yearly championship",
    text:
      "The yearly layer creates a long-term competition path for players who remain active across multiple cycles.",
  },
  {
    title: "All-time record",
    text:
      "The all-time board provides a broader activity history and does not automatically imply a reward unless a campaign says so.",
  },
];

const designPrinciples = [
  {
    title: "Utility before promises",
    text:
      "RROTA should describe a feature as live only after users can access it and its basic rules are publicly documented.",
  },
  {
    title: "Status before timelines",
    text:
      "Development is communicated through shipped, live, in-progress, and planned states instead of artificial deadlines.",
  },
  {
    title: "Verification before trust",
    text:
      "Token, product, audit, winner, and market claims should link to a source that visitors can inspect.",
  },
  {
    title: "Fair play before scale",
    text:
      "A reward product must protect real users through cooldowns, abuse detection, account review, and clear eligibility rules.",
  },
  {
    title: "Ecosystem before speculation",
    text:
      "The project should be understood through its products, documentation, community systems, and utility development—not price alone.",
  },
  {
    title: "Plans can change",
    text:
      "Security, technical limits, user feedback, resources, regulations, and market conditions can change development priorities.",
  },
];

const roadmapItems = [
  {
    status: "Shipped",
    title: "Core token and trust foundation",
    points: [
      "Solana token deployment",
      "Official mint publication",
      "Authority status references",
      "Core website and documentation",
      "Audit references and official links",
    ],
  },
  {
    status: "Live",
    title: "Public product layer",
    points: [
      "Spin-to-Win browser application",
      "Telegram Mini App access",
      "Player accounts and profiles",
      "Leaderboard competition",
      "RROTA AI informational assistant",
    ],
  },
  {
    status: "In progress",
    title: "Product hardening",
    points: [
      "Game economy balancing",
      "Bot and farming prevention",
      "Holder-linked benefit testing",
      "Winner and payment-proof archive",
      "Simpler onboarding and navigation",
    ],
  },
  {
    status: "Planned",
    title: "Ecosystem expansion",
    points: [
      "Crypto Shooter development",
      "Expanded community tools",
      "Cross-product progression",
      "Transport utility research",
      "Integrations and partnership research",
    ],
  },
];

const verificationLayers = [
  {
    title: "On-chain verification",
    text:
      "Use Solscan and the full token mint to review authorities, supply, holders, accounts, and available transaction information.",
  },
  {
    title: "Official access routes",
    text:
      "Use rrota.xyz, spin.rrota.xyz, and the official Telegram bot instead of copied websites, search advertisements, or private-message links.",
  },
  {
    title: "Independent audit references",
    text:
      "SolidProof and FreshCoins references provide additional review material, but audit information should be checked directly on the provider pages.",
  },
  {
    title: "Product-level safeguards",
    text:
      "Cooldowns, account review, eligibility rules, wallet checks, and maintenance controls support a fairer game environment.",
  },
  {
    title: "Public communication",
    text:
      "Roadmap updates, race rules, winner announcements, and security notices should be published through official RROTA channels.",
  },
  {
    title: "User-side responsibility",
    text:
      "Users must protect recovery information, verify links, review wallet requests, and understand that crypto and game participation involve risk.",
  },
];

const risks = [
  {
    title: "Market risk",
    text:
      "$RTA price, liquidity, volume, holder counts, and market capitalization can change quickly and may differ across providers.",
  },
  {
    title: "Liquidity risk",
    text:
      "A user may be unable to buy or sell the desired amount at the expected price, especially during volatile or low-liquidity conditions.",
  },
  {
    title: "Wallet and phishing risk",
    text:
      "Fake domains, bots, support accounts, token pages, claim portals, and malicious wallet requests can cause irreversible loss.",
  },
  {
    title: "Product risk",
    text:
      "The game, leaderboards, rewards, withdrawals, and other services may experience bugs, downtime, maintenance, or rule changes.",
  },
  {
    title: "Eligibility risk",
    text:
      "A displayed rank or activity record does not guarantee a reward when account, anti-abuse, wallet, or campaign rules are not satisfied.",
  },
  {
    title: "Third-party risk",
    text:
      "Wallets, exchanges, trackers, audit providers, infrastructure platforms, and external applications operate independently from RROTA.",
  },
  {
    title: "Development risk",
    text:
      "Planned products may be delayed, redesigned, reduced, or cancelled because of technical, security, resource, legal, or market constraints.",
  },
  {
    title: "Regulatory risk",
    text:
      "Digital-asset rules may change by jurisdiction and can affect access, product features, communications, or third-party services.",
  },
];

const officialReferences = [
  {
    title: "RROTA Spin-to-Win",
    description:
      "Open the live browser application and review current game availability.",
    href: SPIN_URL,
  },
  {
    title: "Telegram Mini App",
    description:
      "Open the official RROTA Spin-to-Win Telegram bot.",
    href: TELEGRAM_BOT_URL,
  },
  {
    title: "Solscan",
    description:
      "Verify the official token mint and available on-chain information.",
    href: SOLSCAN_URL,
  },
  {
    title: "Jupiter",
    description:
      "Open the verified $RTA token route on Jupiter.",
    href: JUPITER_URL,
  },
  {
    title: "SolidProof",
    description:
      "Review the direct RROTA project page on SolidProof.",
    href: SOLIDPROOF_URL,
  },
  {
    title: "FreshCoins",
    description:
      "Review the public FreshCoins RROTA audit reference.",
    href: FRESHCOINS_URL,
  },
];

const contents = [
  ["Executive summary", "#summary"],
  ["Project thesis", "#thesis"],
  ["Ecosystem architecture", "#ecosystem"],
  ["Token role", "#token-role"],
  ["Spin-to-Win", "#spin-to-win"],
  ["Leaderboard model", "#leaderboards"],
  ["Development principles", "#principles"],
  ["Roadmap", "#roadmap"],
  ["Security and verification", "#security"],
  ["Risks", "#risks"],
  ["Official references", "#references"],
];

function ExternalIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
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
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/58">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const classes =
    status === "Shipped"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
      : status === "Live"
        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
        : status === "In progress"
          ? "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200"
          : "border-amber-400/20 bg-amber-400/[0.08] text-amber-100";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${classes}`}
    >
      {status}
    </span>
  );
}

const WHITEPAPER_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${PAGE_URL}#article`,
      headline: "RROTA Whitepaper",
      description:
        "The official RROTA web whitepaper covering the ecosystem thesis, $RTA token role, live products, development roadmap, security, and risks.",
      url: PAGE_URL,
      author: {
        "@type": "Organization",
        name: "RROTA",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "RROTA",
        url: SITE_URL,
      },
      about: [
        "RROTA ecosystem",
        "RROTA token",
        "RROTA Spin-to-Win",
        "RROTA AI",
        "Solana",
        "Web3 gaming",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Whitepaper",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#article`,
      },
    },
  ],
};

export default function WhitepaperPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WHITEPAPER_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.14),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.11),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                Official living document
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                RROTA Whitepaper
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Utility, products, and transparent development.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                RROTA is a Solana-based ecosystem built around a shared token,
                live interactive products, community participation, transparent
                verification, and development that separates what is available
                today from what remains planned.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={PDF_WHITEPAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Open PDF edition
                  <ExternalIcon />
                </a>

                <Link
                  href="/roadmap"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  View current roadmap
                </Link>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.10)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Official $RTA mint
              </div>

              <code className="mt-3 block break-all font-mono text-sm font-semibold leading-7 text-white/84">
                {TOKEN_ADDRESS}
              </code>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Network", "Solana"],
                  ["Standard", "SPL"],
                  ["First product", "Spin-to-Win"],
                  ["AI layer", "Available"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                      {label}
                    </div>
                    <div className="mt-1 text-sm font-black text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-white/46">
                This web edition is the current project reference. The downloadable
                PDF may represent an earlier document snapshot.
              </p>
            </div>
          </div>
        </section>

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[250px_1fr] lg:px-8">
          <aside className="h-fit rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl lg:sticky lg:top-28">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/68">
              Contents
            </div>

            <nav className="mt-4 space-y-1.5">
              {contents.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-white/56 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="font-mono text-[10px] text-cyan-300/46">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="space-y-8">
            <section
              id="summary"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="01 / Executive summary"
                title="RROTA is designed as a product ecosystem—not only a token."
              />

              <div className="mt-6 space-y-4 text-sm leading-8 text-white/64 sm:text-base">
                <p>
                  RROTA combines a Solana token, live gaming utility, leaderboard
                  competition, community participation, educational tools, and a
                  roadmap for additional ecosystem products. The project’s first
                  public product is RROTA Spin-to-Win, available through the web
                  and Telegram.
                </p>

                <p>
                  The core development approach is to distinguish shipped
                  foundations, live products, active development, and planned
                  ideas. This reduces the risk of presenting concepts as completed
                  utility before they are tested and available.
                </p>

                <p>
                  $RTA acts as the shared token layer of the ecosystem. Its role
                  should expand only through clearly documented product access,
                  participation, eligibility, rewards, and integrations that are
                  actually released.
                </p>
              </div>
            </section>

            <section
              id="thesis"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="02 / Project thesis"
                title="Build repeat-use products around a transparent token foundation."
                description="RROTA’s long-term value proposition is based on product use, community systems, verification, and continued development rather than a single campaign or speculative narrative."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Problem",
                    text:
                      "Many token projects have no repeat-use product, unclear verification paths, and roadmaps that blur future plans with completed work.",
                  },
                  {
                    title: "RROTA approach",
                    text:
                      "Use a public Solana token as a shared ecosystem layer while developing accessible products, leaderboards, rewards, educational tools, and transparent status communication.",
                  },
                  {
                    title: "First proof point",
                    text:
                      "Spin-to-Win provides a live environment where users can create accounts, complete activities, build progress, and compete across multiple ranking periods.",
                  },
                  {
                    title: "Long-term direction",
                    text:
                      "Expand toward additional games, community tooling, cross-product progression, holder-linked benefits, and validated practical-use applications.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5"
                  >
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="ecosystem"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="03 / Ecosystem architecture"
                title="One ecosystem with clearly separated product states."
                description="Every major RROTA layer is labeled by its current status so users can distinguish available products from active development and future research."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {ecosystemPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className={`rounded-[26px] border p-5 ${pillar.tone}`}
                  >
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${pillar.badge}`}
                    >
                      {pillar.status}
                    </span>

                    <h3 className="mt-4 text-xl font-black text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {pillar.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-white/62"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="token-role"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="04 / Token role"
                title="How $RTA fits into the ecosystem."
                description="The token should support product and community functions that are publicly defined, technically implemented, and understandable to users."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {tokenRoles.map((role, index) => (
                  <div
                    key={role.title}
                    className="rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.035] p-5"
                  >
                    <div className="font-mono text-xs font-black text-cyan-300/48">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 text-lg font-black text-white">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {role.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-400/14 bg-amber-400/[0.045] p-5 text-sm leading-7 text-amber-100/72">
                Token utility does not guarantee demand, liquidity, price
                appreciation, exchange listings, or financial returns. Planned
                utility is not active until the related product and rules are
                officially released.
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/tokenomics"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read tokenomics
                </Link>

                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                >
                  Verify on Solscan
                  <ExternalIcon />
                </a>
              </div>
            </section>

            <section
              id="spin-to-win"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="05 / Live product"
                title="Spin-to-Win is the first operational RROTA product."
                description="The game provides a repeat-use loop that connects activity, competition, progression, referrals, safety controls, and community communication."
              />

              <div className="mt-7 space-y-3">
                {productLoop.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-black/15 p-4 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/18 bg-cyan-400/[0.08] font-mono text-xs font-black text-cyan-200">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-black text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/56">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                >
                  Open browser game
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/[0.07] px-4 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.12] hover:text-white"
                >
                  Open Telegram bot
                  <ExternalIcon />
                </a>

                <Link
                  href="/rrota-spin-to-win"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read product guide
                </Link>
              </div>
            </section>

            <section
              id="leaderboards"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="06 / Competition"
                title="Connected leaderboards support short and long-term participation."
                description="Each board represents a different measurement period. Current rewards and eligibility are defined by the active race or campaign."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {leaderboardModel.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-fuchsia-400/12 bg-fuchsia-400/[0.035] p-5"
                  >
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-5 text-sm leading-7 text-white/58">
                A leaderboard position does not automatically guarantee a reward.
                Final eligibility can depend on the published rules, account review,
                anti-abuse checks, wallet verification, qualifying activity, and
                campaign conditions.
              </p>
            </section>

            <section
              id="principles"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="07 / Development principles"
                title="How RROTA intends to build and communicate."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {designPrinciples.map((principle) => (
                  <div
                    key={principle.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5"
                  >
                    <h3 className="text-lg font-black text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {principle.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="roadmap"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="08 / Roadmap"
                title="A status-based development model."
                description="The roadmap is not a guaranteed delivery calendar. Products can move between states after testing, security review, user feedback, and resource evaluation."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {roadmapItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-white/10 bg-black/15 p-5"
                  >
                    <StatusBadge status={item.status as Status} />

                    <h3 className="mt-4 text-xl font-black text-white">
                      {item.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-white/60"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                href="/roadmap"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Open detailed roadmap
              </Link>
            </section>

            <section
              id="security"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="09 / Security and verification"
                title="Security is a layered responsibility."
                description="Token-level facts, product controls, audit references, official communication, and user behavior all contribute to a safer ecosystem."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {verificationLayers.map((layer) => (
                  <div
                    key={layer.title}
                    className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.035] p-5"
                  >
                    <h3 className="text-lg font-black text-white">
                      {layer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {layer.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-400/14 bg-amber-400/[0.045] p-5 text-sm leading-7 text-amber-100/72">
                An audit can improve transparency and identify selected contract
                risks. It does not guarantee that every future product, wallet
                interaction, market condition, third-party integration, or user
                action is safe.
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SOLIDPROOF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                >
                  SolidProof
                  <ExternalIcon />
                </a>

                <a
                  href={FRESHCOINS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/[0.07] px-4 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.12] hover:text-white"
                >
                  FreshCoins
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Official resource hub
                </Link>
              </div>
            </section>

            <section
              id="risks"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="10 / Risks"
                title="Participation involves financial, technical, and operational risk."
                description="This whitepaper is informational and does not provide financial, investment, legal, or tax advice."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {risks.map((risk) => (
                  <div
                    key={risk.title}
                    className="rounded-2xl border border-rose-400/12 bg-rose-400/[0.035] p-5"
                  >
                    <h3 className="text-lg font-black text-white">
                      {risk.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {risk.text}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/risk-disclaimer"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl border border-amber-400/14 bg-amber-400/[0.05] px-4 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.09] hover:text-white"
              >
                Read full risk disclaimer
              </Link>
            </section>

            <section
              id="references"
              className="scroll-mt-28 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <SectionHeading
                eyebrow="11 / Official references"
                title="Use direct sources for current information."
                description="Dynamic market, audit, product, and race details should be reviewed on their current official pages."
              />

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {officialReferences.map((reference) => (
                  <a
                    key={reference.title}
                    href={reference.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-cyan-300/22 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-black text-white">
                        {reference.title}
                      </h3>
                      <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-200/55 transition group-hover:text-cyan-100" />
                    </div>

                    <p className="mt-2 text-sm leading-7 text-white/56">
                      {reference.description}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/blog"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read project updates
                </Link>

                <Link
                  href="/terms"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read terms
                </Link>

                <Link
                  href="/privacy"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read privacy policy
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
