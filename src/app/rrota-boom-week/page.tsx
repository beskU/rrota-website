import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/rrota-boom-week`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;

const EVENT_END_ISO = "2026-06-25T18:00:00Z";
const EVENT_END_LABEL = "June 25, 2026 at 18:00 UTC";

export const metadata: Metadata = {
  title: "RROTA Boom Week Archive",
  description:
    "Archive of the June 2026 RROTA Boom Week: a 72-hour global Spin-to-Win race with free entry, a 6 SOL reward pool, live leaderboard competition, holder benefits, and fair-play review.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Boom Week Archive",
    description:
      "Review the completed 72-hour RROTA Boom Week campaign, its 6 SOL reward structure, participation model, holder benefit, and fair-play rules.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Boom Week Archive",
    description:
      "Historical campaign archive for the completed 72-hour RROTA Boom Week global Spin-to-Win race.",
  },
};

type ArchiveCard = {
  title: string;
  value: string;
  description: string;
  tone: string;
};

const CAMPAIGN_FACTS: ArchiveCard[] = [
  {
    title: "Campaign status",
    value: "Completed",
    description:
      "The original Boom Week event is no longer active. This page now preserves its published format and rules.",
    tone: "border-emerald-400/16 bg-emerald-400/[0.04]",
  },
  {
    title: "Event duration",
    value: "72 hours",
    description:
      "The campaign was promoted as a short global race built around concentrated Spin-to-Win activity.",
    tone: "border-cyan-400/16 bg-cyan-400/[0.04]",
  },
  {
    title: "Published reward pool",
    value: "6 SOL",
    description:
      "The original campaign announced a 3 SOL, 2 SOL, and 1 SOL distribution for the top three eligible players.",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
  },
  {
    title: "Entry model",
    value: "Free entry",
    description:
      "Players could enter through the RROTA Spin-to-Win experience without a separate campaign-entry payment.",
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
  },
  {
    title: "Competition layer",
    value: "Live leaderboard",
    description:
      "Player activity affected the campaign ranking throughout the event window.",
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
  },
  {
    title: "Published end time",
    value: "25 Jun 2026",
    description:
      "The campaign was scheduled to end at 18:00 UTC on June 25, 2026.",
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
  },
];

const REWARD_STRUCTURE = [
  {
    place: "1st",
    reward: "3 SOL",
    note: "Highest eligible verified leaderboard position",
    tone: "border-amber-300/20 bg-amber-300/[0.055]",
  },
  {
    place: "2nd",
    reward: "2 SOL",
    note: "Second eligible verified leaderboard position",
    tone: "border-slate-300/16 bg-slate-300/[0.04]",
  },
  {
    place: "3rd",
    reward: "1 SOL",
    note: "Third eligible verified leaderboard position",
    tone: "border-orange-400/16 bg-orange-400/[0.04]",
  },
];

const HOW_IT_WORKED = [
  {
    number: "01",
    title: "Open Spin-to-Win",
    text:
      "Players entered through the official RROTA browser game and used the available account and gameplay features.",
  },
  {
    number: "02",
    title: "Play during the event window",
    text:
      "The campaign concentrated activity into a 72-hour period with a published end time.",
  },
  {
    number: "03",
    title: "Climb the campaign leaderboard",
    text:
      "Eligible activity contributed to the event ranking while the race remained open.",
  },
  {
    number: "04",
    title: "Use holder-linked benefits where available",
    text:
      "The campaign promoted an RTA holder boost intended to connect token ownership with additional race utility.",
  },
  {
    number: "05",
    title: "Complete fair-play review",
    text:
      "Final positions remained subject to account, activity, anti-abuse, and eligibility review after the race ended.",
  },
];

const FAIR_PLAY_RULES = [
  {
    title: "No bots or scripts",
    text:
      "Automated gameplay, scripted activity, macros, and other methods designed to generate artificial participation were not permitted.",
  },
  {
    title: "No multi-account abuse",
    text:
      "Coordinated or duplicate accounts used to manipulate rankings, missions, referrals, or rewards could be disqualified.",
  },
  {
    title: "No fake referrals",
    text:
      "Referral activity could be reviewed for quality, duplication, automation, or manipulation.",
  },
  {
    title: "No leaderboard manipulation",
    text:
      "Exploits, coordinated abuse, false activity, or attempts to bypass limits could affect eligibility.",
  },
  {
    title: "Review before final results",
    text:
      "Displayed positions at the deadline were not necessarily final until the event review was completed.",
  },
  {
    title: "Rules and evidence matter",
    text:
      "Final eligibility could depend on the published campaign rules, account records, wallet information, and technical evidence.",
  },
];

const WHAT_CONTINUES = [
  {
    title: "Spin-to-Win remains the live product",
    text:
      "The Boom Week campaign has ended, but the RROTA Spin-to-Win browser game and Telegram Mini App remain the current product entry points.",
    href: SPIN_URL,
    label: "Open browser game",
    external: true,
  },
  {
    title: "Weekly races continue independently",
    text:
      "Current weekly competition should be checked in the live product because deadlines, positions, and rewards may differ from this historical campaign.",
    href: "/rrota-spin-to-win",
    label: "Read current game guide",
  },
  {
    title: "Monthly and yearly leaderboards remain relevant",
    text:
      "RROTA’s broader leaderboard system tracks participation over longer periods beyond one special event.",
    href: "/community",
    label: "Explore community activity",
  },
  {
    title: "Official announcements are the current source",
    text:
      "Use the live product, Telegram community, X account, and official website for current races, rewards, winner posts, and product notices.",
    href: "/links",
    label: "Verify official channels",
  },
];

const ARCHIVE_NOTES = [
  "This archive preserves the original event format and published reward structure.",
  "It does not indicate that the campaign remains open.",
  "Historical reward amounts should not be assumed to apply to current races.",
  "A campaign leaderboard position did not automatically guarantee payment without eligibility and fair-play review.",
  "Verified winner information should only be relied on when published through an official RROTA source.",
  "Old banners, screenshots, countdowns, and social posts may no longer represent current product rules.",
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

function ArchiveIcon() {
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  );
}

const ARCHIVE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Boom Week Archive",
      description:
        "Historical archive of the completed June 2026 RROTA Boom Week campaign.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      about: {
        "@type": "Event",
        name: "RROTA Boom Week",
        description:
          "A completed 72-hour global RROTA Spin-to-Win campaign with free entry, a 6 SOL published reward pool, leaderboard competition, and an RTA holder boost.",
        eventStatus: "https://schema.org/EventCompleted",
        endDate: EVENT_END_ISO,
        eventAttendanceMode:
          "https://schema.org/OnlineEventAttendanceMode",
        location: {
          "@type": "VirtualLocation",
          url: SPIN_URL,
        },
        organizer: {
          "@type": "Organization",
          name: "RROTA",
          url: SITE_URL,
        },
      },
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
          name: "RROTA Boom Week Archive",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function RrotaBoomWeekPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ARCHIVE_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.13),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.10),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-emerald-200">
                <ArchiveIcon />
                Completed campaign archive
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                RROTA Boom Week
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  72-hour race archive.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                Boom Week was a completed global Spin-to-Win campaign built
                around free entry, a live event leaderboard, a published 6 SOL
                reward pool, holder-linked benefits, and post-race fair-play
                review.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/28 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Open current Spin-to-Win
                  <ExternalIcon />
                </a>

                <Link
                  href="/rrota-spin-to-win"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read current product guide
                </Link>

                <Link
                  href="/community"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Join current community
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-emerald-400/16 bg-emerald-400/[0.035] p-6 shadow-[0_0_65px_rgba(16,185,129,0.08)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300/70">
                Historical status
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                Event completed
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/58">
                The original campaign ended on {EVENT_END_LABEL}. Current races,
                prizes, boosts, and eligibility rules may be different.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Duration", "72 hours"],
                  ["Published pool", "6 SOL"],
                  ["Entry", "Free"],
                  ["Review", "Required"],
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
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Campaign record
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Published Boom Week format.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              These details describe the completed June 2026 event and should not
              be treated as current race terms.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CAMPAIGN_FACTS.map((fact) => (
              <article
                key={fact.title}
                className={`rounded-[28px] border p-5 ${fact.tone}`}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.17em] text-white/40">
                  {fact.title}
                </div>

                <div className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                  {fact.value}
                </div>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                Published rewards
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Original 6 SOL reward pool.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                The campaign announced rewards for the top three eligible players
                after leaderboard and fair-play review.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {REWARD_STRUCTURE.map((reward) => (
                <article
                  key={reward.place}
                  className={`rounded-[28px] border p-5 text-center ${reward.tone}`}
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/42">
                    {reward.place} place
                  </div>

                  <div className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">
                    {reward.reward}
                  </div>

                  <p className="mt-4 text-xs leading-6 text-white/52">
                    {reward.note}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-amber-400/14 bg-amber-400/[0.04] p-5">
            <p className="text-sm leading-7 text-white/62">
              This reward structure belongs to the completed Boom Week campaign.
              It does not establish current weekly, monthly, yearly, or special
              event rewards.
            </p>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
              Event flow
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              How the campaign worked.
            </h2>
          </div>

          <div className="mt-9 space-y-3">
            {HOW_IT_WORKED.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 rounded-[26px] border border-emerald-400/12 bg-emerald-400/[0.035] p-5 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/16 bg-emerald-400/[0.06] font-mono text-xs font-black text-emerald-200">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-fuchsia-400/14 bg-fuchsia-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                  RTA holder boost
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  A campaign-specific token utility experiment.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Boom Week promoted extra race power for eligible RTA holders
                  while keeping general campaign entry free.
                </p>
              </div>

              <div className="space-y-4 text-sm leading-7 text-white/62">
                <p>
                  The holder boost was intended to create a direct relationship
                  between verified token ownership and the special-event gameplay
                  experience.
                </p>

                <p>
                  Holder requirements, calculations, snapshots, multipliers, and
                  technical behavior were campaign-specific. They should not be
                  assumed to apply to the current game unless a current official
                  rule confirms them.
                </p>

                <p>
                  Holding $RTA did not guarantee a leaderboard position, reward,
                  profit, or financial return.
                </p>

                <Link
                  href="/tokenomics"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/[0.07] px-4 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.12] hover:text-white"
                >
                  Review current token utility
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                Fair-play review
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Final positions required verification.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                The event was designed for real players. Anti-abuse and
                eligibility review protected the integrity of the campaign.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {FAIR_PLAY_RULES.map((rule) => (
                <article
                  key={rule.title}
                  className="rounded-2xl border border-rose-400/12 bg-rose-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">
                    {rule.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {rule.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-300/72">
              What remains active
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Continue with the current RROTA ecosystem.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              Boom Week has concluded, but the live product, connected
              leaderboards, official community, and development roadmap continue.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {WHAT_CONTINUES.map((item) => {
              const content = (
                <>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-sky-200 transition group-hover:text-white">
                    {item.label}
                    {item.external ? (
                      <ExternalIcon />
                    ) : (
                      <span aria-hidden="true">→</span>
                    )}
                  </span>
                </>
              );

              const className =
                "group flex h-full flex-col rounded-[28px] border border-sky-400/12 bg-sky-400/[0.035] p-5 transition hover:-translate-y-1 hover:border-sky-300/22 hover:bg-sky-400/[0.055]";

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
          <div className="overflow-hidden rounded-[38px] border border-amber-400/14 bg-amber-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                  Archive notes
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Historical content must be read in context.
                </h2>
              </div>

              <div className="grid gap-3">
                {ARCHIVE_NOTES.map((note) => (
                  <div
                    key={note}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-200" />
                    <span className="text-sm leading-6 text-white/62">
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[36px] border border-cyan-400/14 bg-cyan-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                  Official verification
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Use current official sources.
                </h2>
              </div>

              <div>
                <code className="block break-all rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6 text-white/76">
                  {TOKEN_ADDRESS}
                </code>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Verify the full $RTA mint before using a token-related page.
                  Current races, winner posts, rewards, and product rules should
                  be checked through the live product and official channels.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={SOLSCAN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                  >
                    Verify on Solscan
                    <ExternalIcon />
                  </a>

                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    Telegram Community
                    <ExternalIcon />
                  </a>

                  <a
                    href={X_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    RROTA on X
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Boom Week ended. The RROTA race system continues.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Enter the current product through the browser or Telegram Mini
                  App and check the live interface for the active competition,
                  deadlines, leaderboard, and eligibility information.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Open current game
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Open Telegram Mini App
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
