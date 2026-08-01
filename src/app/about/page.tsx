import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/about`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;

export const metadata: Metadata = {
  title: "About RROTA",
  description:
    "Learn what RROTA is building: a Solana-based utility ecosystem with the $RTA token, live Spin-to-Win game, RROTA AI, leaderboard competition, community tools, and future product development.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About RROTA",
    description:
      "Explore the RROTA ecosystem, current products, project principles, development status, and long-term direction.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RROTA",
    description:
      "RROTA is building a Solana utility ecosystem around live products, transparent development, community participation, and the $RTA token.",
  },
};

type Status = "Shipped" | "Live" | "In progress" | "Planned";

type EcosystemLayer = {
  status: Status;
  title: string;
  description: string;
  points: string[];
  href?: string;
  label?: string;
  external?: boolean;
  tone: string;
  badge: string;
};

const ecosystemLayers: EcosystemLayer[] = [
  {
    status: "Shipped",
    title: "$RTA token foundation",
    description:
      "The RROTA ecosystem uses a Solana SPL token as its shared asset and verification layer.",
    points: [
      "Official mint published",
      "Solscan and Jupiter verification routes",
      "Mint and freeze authorities revoked",
      "Public tokenomics and risk documentation",
    ],
    href: "/tokenomics",
    label: "Review tokenomics",
    tone: "border-emerald-400/16 bg-emerald-400/[0.045]",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
  {
    status: "Live",
    title: "RROTA Spin-to-Win",
    description:
      "The first live RROTA product is available through the browser and Telegram with player activity and connected leaderboards.",
    points: [
      "Wheel activity and daily bonus",
      "Missions and referrals",
      "Player profiles and progression",
      "Weekly, monthly, yearly, and all-time boards",
    ],
    href: SPIN_URL,
    label: "Open live game",
    external: true,
    tone: "border-cyan-400/16 bg-cyan-400/[0.05]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    status: "Live",
    title: "RROTA AI",
    description:
      "An informational assistant helps visitors understand the ecosystem, find official resources, and review safety guidance.",
    points: [
      "Project and token education",
      "Official-link navigation",
      "Spin-to-Win onboarding",
      "Wallet-safety reminders",
    ],
    href: "/ai",
    label: "Explore RROTA AI",
    tone: "border-sky-400/16 bg-sky-400/[0.045]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  },
  {
    status: "In progress",
    title: "Utility and product strengthening",
    description:
      "Current work focuses on improving the live game, connecting token ownership to meaningful benefits, and making progress easier to verify.",
    points: [
      "Fair-play and anti-abuse systems",
      "Holder-linked benefit testing",
      "Winner and payment-proof archive",
      "Simpler onboarding and navigation",
    ],
    href: "/roadmap",
    label: "View current roadmap",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.045]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    status: "Planned",
    title: "Expanded gaming and community tools",
    description:
      "Longer-term product work may extend RROTA into additional games, progression systems, and community utilities.",
    points: [
      "RROTA Crypto Shooter",
      "Expanded missions and achievements",
      "Cross-product progression",
      "Additional community tools",
    ],
    href: "/roadmap",
    label: "Review planned work",
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
    badge:
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
  },
  {
    status: "Planned",
    title: "Practical utility research",
    description:
      "RROTA is exploring future practical-use directions, including transport-related tools, but these remain research concepts until validated.",
    points: [
      "Mobility and route concepts",
      "Technical feasibility research",
      "Market and user validation",
      "No guaranteed implementation date",
    ],
    href: "/roadmap",
    label: "Read the status notes",
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
    badge:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
];

const projectPrinciples = [
  {
    number: "01",
    title: "Build before claiming",
    text:
      "RROTA should describe a utility as live only after users can access it and its basic rules are documented.",
  },
  {
    number: "02",
    title: "Verify before trusting",
    text:
      "Important token, product, audit, winner, and market claims should connect to a source visitors can inspect.",
  },
  {
    number: "03",
    title: "Status before deadlines",
    text:
      "Development is organized as shipped, live, in-progress, and planned instead of using artificial dates that may mislead users.",
  },
  {
    number: "04",
    title: "Fair play before scale",
    text:
      "A reward ecosystem must protect real participants through eligibility rules, abuse detection, and account review.",
  },
  {
    number: "05",
    title: "Products before speculation",
    text:
      "RROTA should be understood through its products, community systems, documentation, and utility development—not price alone.",
  },
  {
    number: "06",
    title: "Clear limits",
    text:
      "Audits, revoked authorities, utility plans, rewards, and community growth do not guarantee financial returns or remove risk.",
  },
];

const whyRrota = [
  {
    title: "The problem",
    text:
      "Many crypto projects rely on short-term attention without a repeat-use product, clear documentation, or a reliable way to separate live utility from future ideas.",
  },
  {
    title: "The RROTA approach",
    text:
      "Combine a public Solana token with accessible products, community competition, verified resources, educational tools, and transparent development states.",
  },
  {
    title: "The first proof",
    text:
      "Spin-to-Win gives users a working product where they can create accounts, complete activities, progress, and compete across connected leaderboards.",
  },
  {
    title: "The long-term goal",
    text:
      "Build a wider ecosystem where $RTA can support clearly documented product participation, benefits, rewards, and future integrations.",
  },
];

const currentReality = [
  {
    label: "Live today",
    value: "Spin-to-Win + RROTA AI",
    text:
      "The ecosystem already includes a playable browser and Telegram product plus an informational AI guide.",
  },
  {
    label: "Current focus",
    value: "Product quality and trust",
    text:
      "Fair-play systems, holder-linked benefits, onboarding, documentation, and public verification remain active priorities.",
  },
  {
    label: "Future direction",
    value: "More products, not more promises",
    text:
      "Additional games and practical-use ideas remain planned until they pass research, testing, and technical validation.",
  },
];

const whatRrotaIsNot = [
  "RROTA is not only a token price page or a single marketing campaign.",
  "Spin-to-Win is not the entire project; it is the first live product.",
  "Planned products are not guaranteed releases or fixed delivery commitments.",
  "Leaderboard positions and campaigns do not guarantee rewards without eligibility.",
  "Audits and revoked authorities do not eliminate market, wallet, or product risk.",
  "Official representatives do not need seed phrases, private keys, passwords, or recovery codes.",
];

const verificationItems = [
  {
    title: "Official website",
    value: "rrota.xyz",
    href: SITE_URL,
  },
  {
    title: "Official token",
    value: "Verify on Solscan",
    href: SOLSCAN_URL,
  },
  {
    title: "Browser game",
    value: "spin.rrota.xyz",
    href: SPIN_URL,
  },
  {
    title: "Telegram game",
    value: "@RROTASpin_Bot",
    href: TELEGRAM_BOT_URL,
  },
  {
    title: "Community",
    value: "RROTA Telegram",
    href: TELEGRAM_URL,
  },
  {
    title: "Public updates",
    value: "@rrotacoin",
    href: X_URL,
  },
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

function StatusBadge({ status }: { status: Status }) {
  const className =
    status === "Shipped"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
      : status === "Live"
        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
        : status === "In progress"
          ? "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200"
          : "border-amber-400/20 bg-amber-400/[0.08] text-amber-100";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${className}`}
    >
      {status}
    </span>
  );
}

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "About RROTA",
      description:
        "Information about the RROTA ecosystem, $RTA token, live products, development principles, and future direction.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "RROTA",
      url: SITE_URL,
      description:
        "A Solana-based utility ecosystem developing gaming, community, educational, and future practical-use products around $RTA.",
      sameAs: [
        TELEGRAM_URL,
        X_URL,
        SPIN_URL,
        TELEGRAM_BOT_URL,
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ABOUT_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_6%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_88%_5%,rgba(217,70,239,0.11),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                About the RROTA ecosystem
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                RROTA is building
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  products around a shared Solana token.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                RROTA combines the $RTA token, live gaming utility, connected
                leaderboards, community participation, educational tools, and a
                transparent roadmap for future ecosystem products.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Open live product
                  <ExternalIcon />
                </a>

                <Link
                  href="/roadmap"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Review roadmap
                </Link>

                <Link
                  href="/whitepaper"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read whitepaper
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
                  ["Token", "$RTA"],
                  ["Live product", "Spin-to-Win"],
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
                Verify RROTA using the complete mint and official domains—not only
                the name, symbol, logo, or a message from another account.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Why RROTA exists
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Move from a token narrative to an ecosystem people can use.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {whyRrota.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <div className="font-mono text-xs font-black text-cyan-300/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/58">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
              Ecosystem structure
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Every major product is labeled by its real status.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              Shipped foundations, live products, active development, and future
              ideas are kept separate so users can understand what exists today.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {ecosystemLayers.map((layer) => (
              <article
                key={layer.title}
                className={`rounded-[30px] border p-6 ${layer.tone}`}
              >
                <StatusBadge status={layer.status} />

                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">
                  {layer.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {layer.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {layer.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-white/62"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {layer.href ? (
                  layer.external ? (
                    <a
                      href={layer.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:text-white"
                    >
                      {layer.label}
                      <ExternalIcon />
                    </a>
                  ) : (
                    <Link
                      href={layer.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:text-white"
                    >
                      {layer.label}
                    </Link>
                  )
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                Current reality
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                What RROTA is today.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                The project already has a public token foundation and live product
                layer, while additional utility remains under active development
                or future research.
              </p>
            </div>

            <div className="grid gap-4">
              {currentReality.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300/60">
                    {item.label}
                  </div>

                  <h3 className="mt-2 text-xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/58">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Project principles
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              How RROTA intends to build and communicate.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="font-mono text-xs font-black text-cyan-300/50">
                  {principle.number}
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-amber-400/14 bg-amber-400/[0.04] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                  Clear boundaries
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  What RROTA is not.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Clear limits are part of transparent communication. Product
                  development, audits, token structure, and community activity do
                  not remove risk or create guaranteed outcomes.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {whatRrotaIsNot.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-200" />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-amber-300/10 pt-6 sm:flex-row sm:flex-wrap">
              <Link
                href="/risk-disclaimer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-amber-400/16 bg-amber-400/[0.06] px-4 text-sm font-black text-amber-100 transition hover:bg-amber-400/10 hover:text-white"
              >
                Read risk disclaimer
              </Link>

              <Link
                href="/terms"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Read terms
              </Link>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
              Official access
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Verify RROTA through direct sources.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              Start from the official website and resource hub before opening a
              game, token page, social profile, or wallet-related destination.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verificationItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[26px] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/38">
                    {item.title}
                  </div>
                  <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-200/50 transition group-hover:text-cyan-100" />
                </div>

                <div className="mt-3 text-lg font-black text-white">
                  {item.value}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.08))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Explore the ecosystem from what is live today.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Use Spin-to-Win, review the roadmap, read the whitepaper, and
                  follow official updates as products move from planned to live.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Open Spin-to-Win
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Official resource hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
