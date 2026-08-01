import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/rrota-spin-to-win`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;

export const metadata: Metadata = {
  title: "RROTA Spin-to-Win",
  description:
    "Explore the official RROTA Spin-to-Win public beta: browser and Telegram access, spins, missions, referrals, player progression, and weekly, monthly, yearly, and all-time leaderboards.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Spin-to-Win",
    description:
      "The first live RROTA product: play through the browser or Telegram, complete activities, and compete across connected leaderboard periods.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Spin-to-Win",
    description:
      "Play the official RROTA Spin-to-Win public beta and follow weekly, monthly, yearly, and all-time leaderboard competition.",
  },
};

const accessOptions = [
  {
    status: "Live",
    title: "Browser game",
    text:
      "Open the complete Spin-to-Win experience directly in a modern browser at the official game domain.",
    href: SPIN_URL,
    label: "Open browser game",
  },
  {
    status: "Live",
    title: "Telegram Mini App",
    text:
      "Launch Spin-to-Win through the official RROTA Telegram bot for a faster mobile and community-connected entry point.",
    href: TELEGRAM_BOT_URL,
    label: "Open Telegram bot",
  },
];

const playerFeatures = [
  {
    number: "01",
    title: "Wheel activity",
    text:
      "Use available spins, follow cooldowns, and return when new activity becomes available.",
  },
  {
    number: "02",
    title: "Daily bonus",
    text:
      "Claim available daily activity through the official game interface and review any current eligibility rules.",
  },
  {
    number: "03",
    title: "Missions",
    text:
      "Complete published actions and campaigns that contribute to player activity and ecosystem participation.",
  },
  {
    number: "04",
    title: "Referrals",
    text:
      "Use the referral system to invite real users while following anti-spam, anti-abuse, and eligibility requirements.",
  },
  {
    number: "05",
    title: "Boost Credits",
    text:
      "Use available progression and boost systems according to the current game rules and interface.",
  },
  {
    number: "06",
    title: "Player profile",
    text:
      "Track account activity, progress, wallet status, bonuses, and leaderboard position from one player account.",
  },
];

const leaderboardPeriods = [
  {
    title: "Weekly",
    status: "Active race cycle",
    text:
      "Short competition windows create regular resets, fresh ranking opportunities, and frequent winner announcements.",
    note:
      "Current deadline, prize structure, and eligibility should be checked inside the live game or official announcement.",
    tone: "border-cyan-400/18 bg-cyan-400/[0.055]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    title: "Monthly",
    status: "Longer-form ranking",
    text:
      "Monthly standings reward consistent participation across the month rather than activity during only one short race.",
    note:
      "Monthly rules and rewards may be updated between competition periods.",
    tone: "border-fuchsia-400/18 bg-fuchsia-400/[0.05]",
    badge: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    title: "Yearly",
    status: "Championship layer",
    text:
      "The yearly leaderboard provides a long-term competition layer for players who remain active across multiple periods.",
    note:
      "Yearly eligibility remains subject to the published championship rules and account review.",
    tone: "border-amber-400/18 bg-amber-400/[0.045]",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-100",
  },
  {
    title: "All-time",
    status: "Lifetime activity view",
    text:
      "The all-time board provides a broader record of player progress beyond a single reward period.",
    note:
      "An all-time position does not automatically guarantee a reward unless a specific campaign says so.",
    tone: "border-emerald-400/18 bg-emerald-400/[0.05]",
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
];

const startSteps = [
  {
    number: "01",
    title: "Choose an official access route",
    text:
      "Start from spin.rrota.xyz, the official Telegram bot, or a link published on rrota.xyz.",
  },
  {
    number: "02",
    title: "Create or access your account",
    text:
      "Use the official sign-in flow so spins, missions, referrals, bonuses, and leaderboard progress can be associated with one player account.",
  },
  {
    number: "03",
    title: "Review the current rules",
    text:
      "Check the active race deadline, reward information, cooldowns, withdrawal requirements, and eligibility conditions before participating.",
  },
  {
    number: "04",
    title: "Play and build activity",
    text:
      "Use spins, bonuses, missions, referrals, and available progression features through the live interface.",
  },
  {
    number: "05",
    title: "Track every leaderboard",
    text:
      "Review weekly, monthly, yearly, and all-time positions because each board represents a different competition period.",
  },
  {
    number: "06",
    title: "Follow official announcements",
    text:
      "Use the RROTA website and community channels for resets, winners, payment updates, maintenance notices, and rule changes.",
  },
];

const fairPlayControls = [
  {
    title: "Cooldown enforcement",
    text:
      "Spin and bonus availability can be limited by time-based controls designed to prevent repetitive abuse.",
  },
  {
    title: "Account review",
    text:
      "Suspicious accounts, duplicated activity, automated participation, or manipulated referrals may be reviewed.",
  },
  {
    title: "Reward eligibility checks",
    text:
      "A leaderboard position may still require compliance with the published rules before a reward is approved.",
  },
  {
    title: "Wallet verification",
    text:
      "Wallet information may be required for selected product functions, reward checks, or withdrawals.",
  },
  {
    title: "Campaign-specific rules",
    text:
      "Individual races and promotions may define their own dates, limits, qualifying activity, and reward conditions.",
  },
  {
    title: "System maintenance",
    text:
      "Features, leaderboards, withdrawals, and reward processing may pause during security reviews or technical maintenance.",
  },
];

const safetyRules = [
  "Use only spin.rrota.xyz or the official @RROTASpin_Bot entry point.",
  "Verify that project information comes from rrota.xyz or the official links page.",
  "Never share a seed phrase, private key, password, recovery code, or login code.",
  "Review every wallet request before approving a connection or transaction.",
  "Ignore private messages claiming that you must pay to unlock a prize.",
  "Do not use copied game pages, unofficial claim portals, or shortened reward links.",
  "Check the current rules before relying on a displayed leaderboard position.",
  "Treat rewards as conditional game outcomes—not guaranteed profit.",
];

const rewardPrinciples = [
  {
    title: "Published before the deadline",
    text:
      "A valid reward campaign should explain its time window, ranking method, qualifying activity, and available rewards through an official source.",
  },
  {
    title: "Subject to eligibility",
    text:
      "The final position may be reviewed for compliance with anti-abuse, account, referral, wallet, and campaign rules.",
  },
  {
    title: "Not investment income",
    text:
      "Game rewards do not guarantee profit, token appreciation, repayment of losses, or a reliable source of income.",
  },
  {
    title: "Can change between races",
    text:
      "Prize amounts, reward types, timing, and eligibility may be different in future weekly, monthly, yearly, or special competitions.",
  },
];

const faqItems = [
  {
    question: "What is RROTA Spin-to-Win?",
    answer:
      "RROTA Spin-to-Win is the first live RROTA product. It combines wheel activity, bonuses, missions, referrals, player progression, and connected leaderboard competitions.",
  },
  {
    question: "Where can I play?",
    answer:
      "Use the official browser game at spin.rrota.xyz or open the official Telegram bot at @RROTASpin_Bot.",
  },
  {
    question: "Which leaderboards are available?",
    answer:
      "The game includes weekly, monthly, yearly, and all-time leaderboard views. Each represents a different competition or activity period.",
  },
  {
    question: "Does every leaderboard position receive a reward?",
    answer:
      "No. Rewards depend on the active competition rules, published prize structure, qualifying positions, eligibility checks, and available campaign conditions.",
  },
  {
    question: "Do I need to buy $RTA before playing?",
    answer:
      "Public access and product rules can change by feature or campaign. Review the live game interface before assuming that a token purchase is required.",
  },
  {
    question: "Does the game guarantee profit?",
    answer:
      "No. Spin-to-Win is a game and ecosystem product. Rewards, token prices, withdrawals, and future value are not guaranteed.",
  },
  {
    question: "What happens if suspicious activity is detected?",
    answer:
      "An account, referral pattern, wallet, leaderboard position, or withdrawal may be reviewed under the current fair-play and eligibility rules.",
  },
  {
    question: "Where are current prizes and deadlines shown?",
    answer:
      "Check the live game, official RROTA announcements, and current leaderboard communication. This page avoids hard-coding changing race details.",
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

function GameIcon() {
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
      <path d="M6 11h4" />
      <path d="M8 9v4" />
      <path d="M15 12h.01" />
      <path d="M18 10h.01" />
      <path d="M17.3 5H6.7C3.6 5 2 7.5 2 10.5v2.9C2 16.5 3.5 19 6.5 19c1.4 0 2.3-.8 3.2-1.8.6-.7 1.4-1.2 2.3-1.2s1.7.5 2.3 1.2c.9 1 1.8 1.8 3.2 1.8 3 0 4.5-2.5 4.5-5.6v-2.9C22 7.5 20.4 5 17.3 5Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-6 w-6"
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

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Spin-to-Win",
      description:
        "The official product page for the RROTA Spin-to-Win public beta.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
    },
    {
      "@type": "VideoGame",
      "@id": `${PAGE_URL}#game`,
      name: "RROTA Spin-to-Win",
      url: SPIN_URL,
      description:
        "A browser and Telegram game with wheel activity, missions, referrals, progression, and weekly, monthly, yearly, and all-time leaderboards.",
      gamePlatform: ["Web browser", "Telegram Mini App"],
      applicationCategory: "Game",
      operatingSystem: "Web",
      publisher: {
        "@type": "Organization",
        name: "RROTA",
        url: SITE_URL,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RrotaSpinToWinPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_6%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_88%_5%,rgba(217,70,239,0.12),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                Live public beta
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Spin. Build activity.
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Compete across every leaderboard.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                RROTA Spin-to-Win is the first live product in the RROTA
                ecosystem—available through the browser and Telegram, with wheel
                activity, missions, referrals, player progression, and connected
                weekly, monthly, yearly, and all-time leaderboards.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.18)] transition hover:brightness-110"
                >
                  Play in browser
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/[0.08] px-6 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.13] hover:text-white"
                >
                  Open Telegram bot
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/70 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.10)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.09] text-cyan-100">
                  <GameIcon />
                </div>

                <span className="rounded-full border border-emerald-400/18 bg-emerald-400/[0.07] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  Product online
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">
                One player account. Multiple competition periods.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/58">
                Short races keep competition active while monthly and yearly
                standings reward longer-term participation. The all-time board
                provides a broader activity record.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Weekly", "Race"],
                  ["Monthly", "Ranking"],
                  ["Yearly", "Championship"],
                  ["All-time", "Progress"],
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
                Current rewards, deadlines, and qualifying positions should always
                be checked in the live game or official race announcement.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Official access
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Choose the entry point that fits your device.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              Both routes lead to the official RROTA game experience. Do not use a
              copied bot, cloned website, or private-message game link.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {accessOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
              >
                <span className="inline-flex rounded-full border border-emerald-400/18 bg-emerald-400/[0.07] px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] text-emerald-200">
                  {option.status}
                </span>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em]">
                  {option.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/58">
                  {option.text}
                </p>

                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.09] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.15] hover:text-white"
                >
                  {option.label}
                  <ExternalIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                Player activity
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                More than a single wheel action.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                Spin-to-Win combines repeat-use features that help players return,
                progress, complete published activities, and follow competition
                across different time periods.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {playerFeatures.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="font-mono text-xs font-black text-fuchsia-300/56">
                    {feature.number}
                  </div>

                  <h3 className="mt-3 text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {feature.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Competition structure
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Four boards. Four different views of participation.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {leaderboardPeriods.map((period) => (
              <article
                key={period.title}
                className={`rounded-[30px] border p-6 ${period.tone}`}
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${period.badge}`}
                >
                  {period.status}
                </span>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  {period.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {period.text}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-4 text-xs leading-6 text-white/46">
                  {period.note}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="sticky top-28">
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                  How to begin
                </div>

                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                  Start from an official route and review the active rules.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                  The live interface is the source for current availability,
                  deadlines, reward information, and account-specific status.
                </p>

                <div className="mt-6 rounded-2xl border border-amber-400/14 bg-amber-400/[0.05] p-4 text-sm leading-6 text-amber-100/72">
                  A visible leaderboard rank does not override reward eligibility,
                  fair-play checks, or campaign rules.
                </div>
              </div>
            </div>

            <ol className="space-y-4">
              {startSteps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
                >
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/18 bg-emerald-400/[0.08] font-mono text-xs font-black text-emerald-200">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-emerald-400/14 bg-emerald-400/[0.04] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/18 bg-emerald-400/[0.08] text-emerald-100">
                  <ShieldIcon />
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Fair-play systems protect the competition.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  A reward game needs controls that reduce automated activity,
                  duplicated participation, manipulated referrals, and abuse of
                  bonuses or withdrawals.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {fairPlayControls.map((control) => (
                  <article
                    key={control.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <h3 className="font-black text-white">
                      {control.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/56">
                      {control.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                Reward principles
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Rewards depend on the active competition—not an old webpage.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                Race details can change. The live game and current official
                announcement should be used for the applicable deadline, prize,
                ranking, and eligibility information.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {rewardPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-amber-400/12 bg-amber-400/[0.04] p-5"
                >
                  <h3 className="font-black text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-rose-400/14 bg-rose-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                  Security checklist
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Fake reward links target active players.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Verify the game domain and bot before signing in, connecting a
                  wallet, or responding to a reward message.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {safetyRules.map((rule) => (
                  <div
                    key={rule}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                    <span className="text-sm leading-6 text-white/62">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-rose-300/10 pt-6 sm:flex-row sm:flex-wrap">
              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Verify $RTA on Solscan
                <ExternalIcon />
              </a>

              <Link
                href="/terms"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Read terms
              </Link>

              <Link
                href="/risk-disclaimer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-amber-400/14 bg-amber-400/[0.05] px-4 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.09] hover:text-white"
              >
                Read risk disclaimer
              </Link>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                Spin-to-Win FAQ
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Common product and leaderboard questions.
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="font-black text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 break-words text-sm leading-7 text-white/58">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.08))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Enter through the official game.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Choose browser or Telegram access, then review the active race,
                  rules, reward details, and account status inside the live product.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Play in browser
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-fuchsia-300/18 bg-fuchsia-400/[0.07] px-5 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.12] hover:text-white"
                >
                  Open Telegram
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
