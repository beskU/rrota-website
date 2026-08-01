export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/community`;
const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const CONTACT_EMAIL = "info@rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Community",
  description:
    "Join the official RROTA community, access Spin-to-Win, follow weekly, monthly, yearly, and all-time leaderboards, complete missions, use referrals, read updates, and verify official channels.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Community",
    description:
      "The official RROTA participation hub for community channels, Spin-to-Win, leaderboards, missions, referrals, updates, safety, and support.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Community",
    description:
      "Join RROTA through official channels, Spin-to-Win, connected leaderboards, missions, referrals, updates, and community participation.",
  },
};

type CommunityCard = {
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
  status: string;
  tone: string;
  badge: string;
};

const OFFICIAL_CHANNELS: CommunityCard[] = [
  {
    title: "Telegram Community",
    description:
      "Join the main RROTA community for product announcements, race reminders, leaderboard updates, winner communication, and project discussion.",
    href: TELEGRAM_URL,
    label: "Join Telegram",
    external: true,
    status: "Official",
    tone: "border-cyan-400/16 bg-cyan-400/[0.045]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    title: "RROTA on X",
    description:
      "Follow public product updates, ecosystem progress, campaign posts, verification notices, and shareable RROTA content.",
    href: X_URL,
    label: "Follow on X",
    external: true,
    status: "Official",
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  },
  {
    title: "Spin-to-Win Browser Game",
    description:
      "Open the live game, build activity, complete available features, and compete through connected leaderboard periods.",
    href: SPIN_URL,
    label: "Open browser game",
    external: true,
    status: "Live",
    tone: "border-emerald-400/16 bg-emerald-400/[0.04]",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
  {
    title: "Telegram Mini App",
    description:
      "Launch the official RROTA Spin-to-Win bot for mobile-friendly gameplay and direct Telegram access.",
    href: TELEGRAM_BOT_URL,
    label: "Open Telegram bot",
    external: true,
    status: "Live",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    title: "RROTA Blog",
    description:
      "Read official product notes, security reminders, roadmap progress, leaderboard announcements, and ecosystem documentation.",
    href: "/blog",
    label: "Read official updates",
    status: "Published",
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
    badge:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  {
    title: "Official Resource Hub",
    description:
      "Verify RROTA products, social channels, audits, token references, legal pages, and formal contact information.",
    href: "/links",
    label: "Verify official links",
    status: "Verification",
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
    badge:
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
  },
];

const PARTICIPATION_PATHS = [
  {
    number: "01",
    title: "Play and build activity",
    text:
      "Use the official browser game or Telegram Mini App. Spins, bonuses, missions, referrals, and other live features can contribute to product activity and progression.",
    href: SPIN_URL,
    label: "Open Spin-to-Win",
    external: true,
  },
  {
    number: "02",
    title: "Compete across leaderboard periods",
    text:
      "Weekly, monthly, yearly, and all-time boards create different participation windows. Current rewards and eligibility must be checked in the live product or current announcement.",
    href: "/rrota-spin-to-win",
    label: "Read leaderboard guide",
  },
  {
    number: "03",
    title: "Complete missions and referrals",
    text:
      "Use available daily, mission, bonus, referral, and progression features. Requirements may change as the game economy and fair-play systems are improved.",
    href: TELEGRAM_BOT_URL,
    label: "Open Telegram Mini App",
    external: true,
  },
  {
    number: "04",
    title: "Share verified updates",
    text:
      "Help new users by sharing direct official links, current product information, safety reminders, and clear explanations instead of copied rumors or old screenshots.",
    href: "/links",
    label: "Open verified resources",
  },
  {
    number: "05",
    title: "Follow development progress",
    text:
      "Use the roadmap and blog to distinguish shipped foundations, live products, active development, and planned ideas.",
    href: "/roadmap",
    label: "View roadmap",
  },
  {
    number: "06",
    title: "Report issues responsibly",
    text:
      "Send account, leaderboard, reward, security, impersonation, privacy, and website issues through the official contact route.",
    href: "/contact",
    label: "Contact RROTA",
  },
];

const LEADERBOARD_LAYERS = [
  {
    title: "Weekly Race",
    period: "Short competition cycle",
    text:
      "A regular reset gives active players repeated opportunities to compete and creates frequent community moments around deadlines and winners.",
    tone: "border-cyan-400/16 bg-cyan-400/[0.04]",
  },
  {
    title: "Monthly Ranking",
    period: "Consistency across weeks",
    text:
      "The monthly layer rewards longer participation patterns and helps the community follow progress beyond a single weekly race.",
    tone: "border-emerald-400/16 bg-emerald-400/[0.04]",
  },
  {
    title: "Yearly Championship",
    period: "Long-term competition",
    text:
      "The yearly board creates a broader championship path for players who remain active across multiple periods.",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
  },
  {
    title: "All-Time Leaderboard",
    period: "Historical activity",
    text:
      "The all-time board preserves a wider activity record. It does not automatically imply a reward unless an official campaign states otherwise.",
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
  },
];

const COMMUNITY_STANDARDS = [
  {
    title: "Use official links",
    text:
      "Share rrota.xyz, the official Spin-to-Win destinations, and verified social accounts instead of copied links or search advertisements.",
  },
  {
    title: "Protect wallet credentials",
    text:
      "Never ask for or share seed phrases, private keys, recovery codes, passwords, authentication codes, or remote-device access.",
  },
  {
    title: "No fake support",
    text:
      "Do not impersonate RROTA, an administrator, a winner, an exchange, a partner, or a support representative.",
  },
  {
    title: "No manipulation",
    text:
      "Bots, scripts, duplicate-account farming, referral abuse, leaderboard manipulation, and attempts to bypass limits are prohibited.",
  },
  {
    title: "No guaranteed-return claims",
    text:
      "Do not present $RTA, game rewards, listings, products, or community campaigns as guaranteed profit, income, or investment returns.",
  },
  {
    title: "Respect other members",
    text:
      "Avoid harassment, threats, discrimination, repeated spam, scams, doxxing, and intentionally misleading claims.",
  },
  {
    title: "Keep support details private",
    text:
      "Public channels are not appropriate for account emails, transaction evidence containing personal details, or sensitive security reports.",
  },
  {
    title: "Check current rules",
    text:
      "Old banners, posts, reward amounts, race deadlines, and screenshots may no longer apply. Use the live product and current official announcement.",
  },
];

const ANNOUNCEMENT_SOURCES = [
  {
    label: "Live product",
    title: "Current game and leaderboard status",
    text:
      "Use the live game for account-specific information, active race time, rankings, available features, and current product notices.",
    href: SPIN_URL,
    external: true,
  },
  {
    label: "Official website",
    title: "Stable ecosystem information",
    text:
      "Use rrota.xyz for documentation, roadmap status, legal pages, product guides, and verified links.",
    href: SITE_URL,
    external: true,
  },
  {
    label: "Announcements",
    title: "Telegram Community",
    text:
      "Use the official Telegram community for race reminders, product announcements, winner posts, and discussion.",
    href: TELEGRAM_URL,
    external: true,
  },
  {
    label: "Public updates",
    title: "RROTA on X",
    text:
      "Use the official X account for public communication, shareable updates, and verification posts.",
    href: X_URL,
    external: true,
  },
  {
    label: "Long-form",
    title: "RROTA Blog",
    text:
      "Use the blog for detailed explanations, product notes, security guidance, and archived project updates.",
    href: "/blog",
  },
  {
    label: "Private support",
    title: "Official Contact",
    text:
      "Use email for account-specific issues, security reports, business communication, privacy requests, and formal support.",
    href: "/contact",
  },
];

const SAFETY_CHECKS = [
  "Confirm the domain is exactly rrota.xyz or spin.rrota.xyz.",
  "Confirm the Telegram bot is exactly @RROTASpin_Bot.",
  "Confirm public community links through the official website.",
  "Compare the complete $RTA mint before using a market or wallet-related page.",
  "Reject requests for seed phrases, private keys, recovery codes, passwords, or login codes.",
  "Do not pay an unknown account to unlock a reward, account, withdrawal, listing, or support response.",
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
      <path d="M21 14v5a2 2 0 0 1-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h5" />
    </svg>
  );
}

function CommunityIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ChannelCard({ item }: { item: CommunityCard }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${item.badge}`}
        >
          {item.status}
        </span>

        {item.external ? (
          <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-200/50 transition group-hover:text-cyan-100" />
        ) : null}
      </div>

      <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">
        {item.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-white/60">
        {item.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition group-hover:text-white">
        {item.label}
        <span aria-hidden="true">→</span>
      </span>
    </>
  );

  const className = `group flex h-full flex-col rounded-[30px] border p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 ${item.tone}`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

const COMMUNITY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Community",
      description:
        "The official RROTA participation hub for community channels, Spin-to-Win, leaderboards, missions, referrals, safety, and support.",
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
      email: CONTACT_EMAIL,
      sameAs: [TELEGRAM_URL, X_URL, SPIN_URL, TELEGRAM_BOT_URL],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Community",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(COMMUNITY_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.14),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.10),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                <CommunityIcon />
                Official RROTA community
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Join through activity,
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  competition, and verified participation.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                The RROTA community connects product users, players, token
                holders, builders, and supporters through Spin-to-Win, connected
                leaderboards, missions, referrals, official updates, and public
                development progress.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/28 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Play Spin-to-Win
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Join Telegram
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.09)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Community activity layer
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["Weekly", "Race"],
                  ["Monthly", "Ranking"],
                  ["Yearly", "Championship"],
                  ["All-time", "History"],
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
                Current prizes, deadlines, qualifying positions, and eligibility
                rules should always be checked in the live product or current
                official announcement.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Official channels
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Use direct RROTA destinations.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Each channel has a different role: live product access, public
              discussion, announcements, documentation, or verification.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {OFFICIAL_CHANNELS.map((item) => (
              <ChannelCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                How to participate
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Community participation begins with useful action.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                RROTA is not only a discussion channel. The community is designed
                around product use, competition, education, verification,
                feedback, and continued development.
              </p>
            </div>

            <div className="space-y-3">
              {PARTICIPATION_PATHS.map((item) => {
                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/16 bg-emerald-400/[0.06] font-mono text-xs font-black text-emerald-200">
                      {item.number}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-black text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/56">
                        {item.text}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-emerald-200 transition group-hover:text-white">
                        {item.label}
                        {item.external ? <ExternalIcon /> : <span>→</span>}
                      </span>
                    </div>
                  </>
                );

                const className =
                  "group flex gap-4 rounded-[24px] border border-emerald-400/12 bg-emerald-400/[0.035] p-5 transition hover:border-emerald-300/22 hover:bg-emerald-400/[0.055]";

                return item.external ? (
                  <a
                    key={item.number}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={item.number}
                    href={item.href}
                    className={className}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
              Connected competition
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              One game, four leaderboard perspectives.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Different ranking periods create regular community moments while
              preserving a longer participation path.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {LEADERBOARD_LAYERS.map((item) => (
              <article
                key={item.title}
                className={`rounded-[30px] border p-6 ${item.tone}`}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  {item.period}
                </div>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[26px] border border-amber-400/14 bg-amber-400/[0.04] p-5">
            <p className="text-sm leading-7 text-white/62">
              A displayed leaderboard position is not automatically a guaranteed
              reward. Account status, qualifying activity, campaign rules,
              wallet information, fair-play review, and other eligibility
              conditions may apply.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={SPIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
            >
              View live leaderboards
              <ExternalIcon />
            </a>
            <Link
              href="/rrota-spin-to-win"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
            >
              Read game guide
            </Link>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-violet-400/14 bg-violet-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-violet-300/72">
                  Community standards
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Protect real members and fair participation.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  These standards support safer communication, honest product use,
                  fair leaderboard competition, and clearer project information.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {COMMUNITY_STANDARDS.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5"
                  >
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/56">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap">
              <Link
                href="/terms"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Read Terms of Service
              </Link>
              <Link
                href="/risk-disclaimer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-amber-400/14 bg-amber-400/[0.05] px-4 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.09] hover:text-white"
              >
                Review risks
              </Link>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-300/72">
              Information hierarchy
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Use the right source for the right question.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ANNOUNCEMENT_SOURCES.map((item) => {
              const content = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-sky-400/16 bg-sky-400/[0.06] px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-sky-200">
                      {item.label}
                    </span>
                    {item.external ? (
                      <ExternalIcon className="h-4 w-4 shrink-0 text-sky-200/45 transition group-hover:text-sky-100" />
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </>
              );

              const className =
                "group rounded-[28px] border border-sky-400/12 bg-sky-400/[0.035] p-5 transition hover:-translate-y-1 hover:border-sky-300/22 hover:bg-sky-400/[0.055]";

              return item.external ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={className}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-rose-400/14 bg-rose-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                  Community safety
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Verify before connecting, paying, or replying.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  Scammers can copy logos, names, usernames, posts, and profile
                  pictures. Use the official domain, full mint, and verified
                  channel together.
                </p>
              </div>

              <div className="grid gap-3">
                {SAFETY_CHECKS.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 border-t border-white/10 pt-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-rose-200/60">
                  Official $RTA mint
                </div>
                <code className="mt-2 block break-all font-mono text-xs leading-6 text-white/74">
                  {TOKEN_ADDRESS}
                </code>
              </div>

              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-rose-400/18 bg-rose-400/[0.07] px-4 text-sm font-black text-rose-100 transition hover:bg-rose-400/[0.12] hover:text-white"
              >
                Verify on Solscan
                <ExternalIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  The community grows through real participation.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Play the live product, follow the connected leaderboards,
                  complete available activities, share verified information, and
                  help improve RROTA through useful feedback.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Play Spin-to-Win
                  <ExternalIcon />
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Join the community
                  <ExternalIcon />
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
