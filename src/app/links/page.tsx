import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/links`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const EXTERNAL_LINKS = {
  website: SITE_URL,
  spin: "https://spin.rrota.xyz",
  telegramBot: "https://t.me/RROTASpin_Bot",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  birdeye: `https://birdeye.so/token/${TOKEN_ADDRESS}?chain=solana`,
  geckoterminal:
    `https://www.geckoterminal.com/solana/tokens/${TOKEN_ADDRESS}`,
  solidproof: "https://app.solidproof.io/projects/rrota",
  freshcoins: "https://freshcoins.io/audit/rrota",
  email: "mailto:info@rrota.xyz",
} as const;

export const metadata: Metadata = {
  title: "Official RROTA Links",
  description:
    "Use the official RROTA resource hub to verify the $RTA mint, access Spin-to-Win, open RROTA AI, review audits, follow community channels, and find documentation.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Official RROTA Links",
    description:
      "Verified access to RROTA products, token references, audits, community channels, documentation, and contact information.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Official RROTA Links",
    description:
      "The official verification hub for RROTA products, $RTA token references, audits, community channels, and documentation.",
  },
};

type ResourceItem = {
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
  email?: boolean;
  status?: string;
};

type ResourceGroup = {
  eyebrow: string;
  title: string;
  description: string;
  tone: string;
  badge: string;
  items: ResourceItem[];
};

const primaryAccess: ResourceItem[] = [
  {
    title: "RROTA Home",
    description:
      "Main ecosystem overview, current product activity, roadmap progress, market references, and official navigation.",
    href: "/",
    label: "Open website",
    status: "Official",
  },
  {
    title: "RROTA Spin-to-Win",
    description:
      "Open the live browser game with spins, missions, referrals, player progression, and connected leaderboards.",
    href: EXTERNAL_LINKS.spin,
    label: "Open browser game",
    external: true,
    status: "Live",
  },
  {
    title: "Telegram Mini App",
    description:
      "Launch the official RROTA Spin-to-Win Telegram bot for mobile and community-connected game access.",
    href: EXTERNAL_LINKS.telegramBot,
    label: "Open Telegram bot",
    external: true,
    status: "Live",
  },
  {
    title: "RROTA AI Assistant",
    description:
      "Use the official informational assistant for project education, ecosystem navigation, product guidance, and safety reminders.",
    href: "/ai",
    label: "Open RROTA AI",
    status: "Available",
  },
];

const resourceGroups: ResourceGroup[] = [
  {
    eyebrow: "Token verification",
    title: "$RTA and market access",
    description:
      "Use the complete Solana mint as the primary identifier. Names, tickers, logos, and screenshots can be copied.",
    tone: "border-cyan-400/16 bg-cyan-400/[0.045]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    items: [
      {
        title: "Solscan",
        description:
          "Review the official token mint, authorities, supply, holders, accounts, and available on-chain activity.",
        href: EXTERNAL_LINKS.solscan,
        label: "Verify token",
        external: true,
      },
      {
        title: "Jupiter",
        description:
          "Open the official Jupiter token route using the verified RROTA mint before reviewing any swap.",
        href: EXTERNAL_LINKS.jupiter,
        label: "Open Jupiter",
        external: true,
      },
      {
        title: "DexScreener",
        description:
          "View current decentralized-market information and available RROTA trading-pair data.",
        href: EXTERNAL_LINKS.dexscreener,
        label: "View market",
        external: true,
      },
      {
        title: "GeckoTerminal",
        description:
          "Review independent token, pool, liquidity, and market information for RROTA on Solana.",
        href: EXTERNAL_LINKS.geckoterminal,
        label: "View tracker",
        external: true,
      },
      {
        title: "Birdeye",
        description:
          "Open another Solana market-data reference using the official RROTA token mint.",
        href: EXTERNAL_LINKS.birdeye,
        label: "View tracker",
        external: true,
      },
      {
        title: "How to Buy RROTA",
        description:
          "Follow the safety-first guide for wallet preparation, mint verification, Jupiter access, and transaction review.",
        href: "/how-to-buy-rrota",
        label: "Read buying guide",
      },
    ],
  },
  {
    eyebrow: "Independent references",
    title: "Audits and verification",
    description:
      "Audit references improve transparency, but they do not guarantee future product security, market value, liquidity, or investment outcomes.",
    tone: "border-emerald-400/16 bg-emerald-400/[0.04]",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    items: [
      {
        title: "SolidProof",
        description:
          "Open the direct RROTA project page on SolidProof to review the currently published audit and project information.",
        href: EXTERNAL_LINKS.solidproof,
        label: "View SolidProof",
        external: true,
      },
      {
        title: "FreshCoins",
        description:
          "Open the public FreshCoins RROTA audit reference and review the information available from that provider.",
        href: EXTERNAL_LINKS.freshcoins,
        label: "View FreshCoins",
        external: true,
      },
      {
        title: "Tokenomics",
        description:
          "Review permanent token facts, live market references, current utility, planned roles, and verification principles.",
        href: "/tokenomics",
        label: "Read tokenomics",
      },
      {
        title: "Risk Disclaimer",
        description:
          "Review the financial, market, technical, product, wallet, and participation risks connected to crypto assets.",
        href: "/risk-disclaimer",
        label: "Read disclaimer",
      },
    ],
  },
  {
    eyebrow: "Project information",
    title: "Documentation and progress",
    description:
      "Use these pages to understand what RROTA is, what is live today, what is being developed, and what remains planned.",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
    items: [
      {
        title: "Roadmap",
        description:
          "Track shipped foundations, live products, active development, and longer-term ecosystem plans.",
        href: "/roadmap",
        label: "View roadmap",
      },
      {
        title: "Whitepaper",
        description:
          "Read the broader RROTA project model, token role, product direction, and ecosystem documentation.",
        href: "/whitepaper",
        label: "Read whitepaper",
      },
      {
        title: "Spin-to-Win Product Guide",
        description:
          "Understand browser and Telegram access, game features, leaderboards, reward rules, fair-play controls, and safety.",
        href: "/rrota-spin-to-win",
        label: "Read product guide",
      },
      {
        title: "RROTA Blog",
        description:
          "Read long-form project updates, product explanations, security notices, and ecosystem announcements.",
        href: "/blog",
        label: "Read updates",
      },
    ],
  },
  {
    eyebrow: "Community and contact",
    title: "Official communication",
    description:
      "Use only the official community destinations and contact address listed below. Verify impersonators before responding.",
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
    items: [
      {
        title: "Telegram Community",
        description:
          "Join the official RROTA Telegram community for project, product, race, and ecosystem announcements.",
        href: EXTERNAL_LINKS.telegram,
        label: "Open Telegram",
        external: true,
      },
      {
        title: "RROTA on X",
        description:
          "Follow the official RROTA X account for public updates, product communication, and verification posts.",
        href: EXTERNAL_LINKS.x,
        label: "Open X",
        external: true,
      },
      {
        title: "Official Contact",
        description:
          "Use info@rrota.xyz for listing reviews, partnerships, security reports, media inquiries, and formal verification.",
        href: EXTERNAL_LINKS.email,
        label: "Email RROTA",
        email: true,
      },
      {
        title: "About RROTA",
        description:
          "Review the ecosystem identity, current product layer, development principles, and long-term direction.",
        href: "/about",
        label: "About the project",
      },
    ],
  },
  {
    eyebrow: "Policies",
    title: "Legal and safety documents",
    description:
      "These pages explain site use, privacy, risk, and platform responsibilities. Review applicable product rules before participating.",
    tone: "border-amber-400/16 bg-amber-400/[0.035]",
    badge:
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
    items: [
      {
        title: "Terms of Service",
        description:
          "Review the terms that apply to the RROTA website and referenced platform services.",
        href: "/terms",
        label: "Read terms",
      },
      {
        title: "Privacy Policy",
        description:
          "Review how website and platform-related information may be collected, processed, stored, or protected.",
        href: "/privacy",
        label: "Read privacy policy",
      },
      {
        title: "Risk Disclaimer",
        description:
          "Review the risks associated with crypto assets, wallets, liquidity, markets, products, and game participation.",
        href: "/risk-disclaimer",
        label: "Review risks",
      },
      {
        title: "Contact",
        description:
          "Use the official contact page for project inquiries and available support or communication routes.",
        href: "/contact",
        label: "Open contact page",
      },
    ],
  },
];

const verificationRules = [
  {
    title: "Verify the complete mint",
    text:
      "The official RROTA token is identified by its full Solana mint. Do not rely only on the ticker, logo, token name, or price.",
  },
  {
    title: "Start from rrota.xyz",
    text:
      "Use this official resource hub before opening a game, swap, market tracker, audit page, social profile, or contact route.",
  },
  {
    title: "Review wallet requests",
    text:
      "Reject unexpected transfers, approvals, signatures, permissions, account changes, or requests unrelated to the action you initiated.",
  },
  {
    title: "Protect recovery information",
    text:
      "Never share a seed phrase, private key, recovery code, password, login code, or remote access to your device.",
  },
  {
    title: "Ignore prize-unlock payments",
    text:
      "Do not pay an unknown account or use a private claim link to unlock a leaderboard reward, airdrop, account, or withdrawal.",
  },
  {
    title: "Check changing information live",
    text:
      "Race deadlines, rewards, market data, liquidity, supply, holder counts, and audit-platform displays can change over time.",
  },
];

const allPublicResources = [
  ...primaryAccess,
  ...resourceGroups.flatMap((group) => group.items),
];

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Official RROTA Links",
      description:
        "The official RROTA resource hub for products, token references, audits, community channels, documentation, and contact information.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#resources`,
      name: "Official RROTA resources",
      itemListElement: allPublicResources
        .filter((item) => !item.email)
        .map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: item.href.startsWith("/")
            ? `${SITE_URL}${item.href}`
            : item.href,
        })),
    },
  ],
};

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

function ShieldIcon() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ResourceCard({ item }: { item: ResourceItem }) {
  const cardClass =
    "group flex h-full flex-col rounded-[26px] border border-white/10 bg-black/15 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.055]";

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          {item.status ? (
            <div className="mb-3 inline-flex rounded-full border border-emerald-400/18 bg-emerald-400/[0.07] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-200">
              {item.status}
            </div>
          ) : null}

          <h3 className="text-lg font-black tracking-[-0.02em] text-white">
            {item.title}
          </h3>
        </div>

        {item.external ? (
          <ExternalIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-200/55 transition group-hover:text-cyan-100" />
        ) : null}
      </div>

      <p className="mt-3 flex-1 text-sm leading-7 text-white/56">
        {item.description}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition group-hover:text-white">
        {item.label}
        <span aria-hidden="true">→</span>
      </span>
    </>
  );

  if (item.email) {
    return (
      <a href={item.href} className={cardClass}>
        {content}
      </a>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={cardClass}>
      {content}
    </Link>
  );
}

export default function LinksPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PAGE_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_6%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_88%_5%,rgba(217,70,239,0.11),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Official verification hub
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Start from one trusted page.
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Verify every RROTA destination.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                Use this page to access official RROTA products, token references,
                market tools, audits, documentation, community channels, contact
                information, and legal resources.
              </p>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.10)] backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.09] text-cyan-100">
                <ShieldIcon />
              </div>

              <div className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Official $RTA mint
              </div>

              <code className="mt-3 block break-all font-mono text-sm font-semibold leading-7 text-white/84">
                {TOKEN_ADDRESS}
              </code>

              <p className="mt-5 text-xs leading-6 text-white/48">
                Compare the complete mint before buying, checking a chart,
                connecting a wallet, or using a token-related application.
              </p>

              <a
                href={EXTERNAL_LINKS.solscan}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.09] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.15] hover:text-white"
              >
                Verify on Solscan
                <ExternalIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
              Primary access
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              The main RROTA destinations.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {primaryAccess.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {resourceGroups.map((group) => (
          <section
            key={group.title}
            className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8"
          >
            <div className={`rounded-[36px] border p-6 sm:p-8 ${group.tone}`}>
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${group.badge}`}
                  >
                    {group.eyebrow}
                  </span>

                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    {group.title}
                  </h2>
                </div>

                <p className="max-w-3xl text-sm leading-7 text-white/58">
                  {group.description}
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <ResourceCard
                    key={`${group.title}-${item.title}`}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-rose-400/14 bg-rose-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                  Verification checklist
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  A copied logo does not prove authenticity.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Use the domain, mint, transaction details, and official source
                  together before trusting a token page, game, bot, message, or
                  reward claim.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {verificationRules.map((rule) => (
                  <article
                    key={rule.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <h3 className="font-black text-white">{rule.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/56">
                      {rule.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.08))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Unsure about a link?
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Return to this page, compare the full destination, and verify the
                  $RTA mint before connecting a wallet or approving a transaction.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={EXTERNAL_LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Verify the token
                  <ExternalIcon />
                </a>

                <a
                  href={EXTERNAL_LINKS.email}
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Email official contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
