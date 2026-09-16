import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/player-guide`;
const SPIN_URL = "https://spin.rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Player Guide - Leaderboards, Rewards, Deposits and Wallets",
  description:
    "Understand RROTA Spin-to-Win leaderboards, ranking logic, race review, reward payouts, RTA Balance, Boost Credits, deposits, withdrawals, and past winners.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "RROTA Player Guide",
    description:
      "A clear guide to RROTA leaderboards, race rewards, deposits, balances, wallets, withdrawals, and past winners.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Player Guide",
    description:
      "Know what counts, what resets, how balances work, and how race rewards are reviewed.",
  },
};

const leaderboardCards = [
  {
    title: "Weekly",
    status: "Rolling 7-day race",
    text:
      "The live Weekly board uses a rolling 7-day competition window. The current RROTA schedule is anchored to Saturday at 16:00 UTC.",
    note:
      "Weekly standings are calculated from spin results inside the active weekly window. Current prizes and eligibility should still be checked in the live game.",
    tone: "border-cyan-300/18 bg-cyan-400/[0.055]",
    badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-100",
  },
  {
    title: "Monthly",
    status: "Period update in progress",
    text:
      "Monthly is intended to represent a separate month-long competition period rather than lifetime or yearly activity.",
    note:
      "September 2026 clarification: the live Spin configuration currently shares the same historical start reference as Yearly, so the two boards can display identical totals. A product fix is being prepared.",
    tone: "border-fuchsia-300/18 bg-fuchsia-400/[0.05]",
    badge: "border-fuchsia-300/20 bg-fuchsia-400/10 text-fuchsia-100",
  },
  {
    title: "Yearly",
    status: "Championship layer",
    text:
      "Yearly is intended to track the longer 2026 championship season and remain separate from the monthly competition window.",
    note:
      "Until the Spin period update is deployed, treat Monthly and Yearly totals as provisional when they match. Official announcements and the live product update will define the corrected windows.",
    tone: "border-amber-300/18 bg-amber-400/[0.05]",
    badge: "border-amber-300/20 bg-amber-400/10 text-amber-100",
  },
  {
    title: "All-Time",
    status: "Lifetime history",
    text:
      "All-Time is the broader lifetime activity view and is not limited to a weekly, monthly, or yearly reward period.",
    note:
      "An All-Time position does not automatically create a prize unless a specific official campaign says that it does.",
    tone: "border-emerald-300/18 bg-emerald-400/[0.05]",
    badge: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100",
  },
] as const;

const economyCards = [
  {
    title: "Wallet RTA",
    text:
      "RTA held in your connected Solana wallet. This is on-chain token balance and is different from the internal RTA Balance shown inside Spin-to-Win.",
  },
  {
    title: "RTA Balance",
    text:
      "An in-game balance credited by game activity. It can currently be used for Boost Credit conversion or withdrawn through the official RTA withdrawal flow when requirements are met.",
  },
  {
    title: "Boost Credits",
    text:
      "Gameplay credits used for Boost Spins. The current conversion is 10 RTA for 1 Boost Credit. Boost Credits are not the same thing as wallet RTA.",
  },
  {
    title: "Deposited RTA",
    text:
      "Real on-chain RTA sent through the official deposit flow to the game treasury and verified on-chain before Boost Credits are credited.",
  },
] as const;

const payoutSteps = [
  {
    number: "01",
    title: "Race closes",
    text:
      "The active race period ends and the displayed standings become a race-close snapshot rather than an automatically final payment list.",
  },
  {
    number: "02",
    title: "Fair-play review",
    text:
      "Accounts can be reviewed for eligibility, duplicate participation, bots, automation, exploits, referral abuse, and other campaign rules.",
  },
  {
    number: "03",
    title: "Winners are confirmed",
    text:
      "The official top positions are confirmed after review. A live leaderboard rank by itself does not override eligibility checks.",
  },
  {
    number: "04",
    title: "Payout is processed",
    text:
      "Weekly SOL competition rewards are currently handled after review rather than by an automatic on-chain payout engine inside the game.",
  },
  {
    number: "05",
    title: "Public proof is attached",
    text:
      "RROTA only labels a payout as publicly verified on rrota.xyz when a transaction reference has been attached and checked.",
  },
] as const;

const faqItems = [
  {
    question: "How is a leaderboard rank calculated?",
    answer:
      "For the current Spin implementation, period boards are ranked primarily by the total RTA won from spin records inside that leaderboard period. Tie-breakers are player level, best single win, then total spins.",
  },
  {
    question: "Why can Monthly and Yearly show the same numbers?",
    answer:
      "A September 2026 review found that both live boards were using the same historical start reference. That can make totals and rankings match. The Spin update will separate the intended periods.",
  },
  {
    question: "Does Weekly resetting erase Monthly or Yearly progress?",
    answer:
      "No. Weekly uses its own rolling window. Longer boards are separate period views, so eligible activity can appear in more than one active board at the same time.",
  },
  {
    question: "How do winners receive the SOL leaderboard prize?",
    answer:
      "The race closes, standings are reviewed, winners are confirmed, and the competition reward is processed after review. The current live game does not contain an automatic SOL payout engine for leaderboard prizes.",
  },
  {
    question: "How long does a leaderboard payout take?",
    answer:
      "RROTA has not published a fixed payout-time guarantee on this page. Review and processing time can depend on fair-play checks, wallet confirmation, and operational review. Official payout updates should be followed in the game and RROTA channels.",
  },
  {
    question: "Where can I see previous winners?",
    answer:
      "Use the public Race Results page on rrota.xyz. It records published race-close standings and keeps payout proof separate from leaderboard results.",
  },
  {
    question: "How do deposits work?",
    answer:
      "The official game deposit flow sends on-chain RTA to the configured game treasury. The server verifies the Solana transaction before crediting Boost Credits. Deposits are gameplay funding and do not guarantee a leaderboard reward or profit.",
  },
  {
    question: "Can deposited RTA be refunded?",
    answer:
      "The current Spin flow treats deposited RTA as converted into Boost Credits for gameplay. The live game FAQ states that deposits are not refundable.",
  },
  {
    question: "What is the current Boost Credit conversion?",
    answer:
      "The current live implementation uses 10 RTA for 1 Boost Credit. Boost gameplay also applies separate minimum-deposit and active-value requirements designed for fair-play protection.",
  },
  {
    question: "How are RTA withdrawals different from SOL race prizes?",
    answer:
      "An RTA withdrawal sends eligible in-game RTA Balance to the saved Solana wallet through the RTA treasury flow. A Weekly SOL leaderboard prize is a separate competition reward handled after race review.",
  },
] as const;

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

export default function PlayerGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "RROTA Player Guide",
        description:
          "Official RROTA player guidance for leaderboards, rewards, deposits, balances, wallets, and withdrawals.",
        isPartOf: {
          "@type": "WebSite",
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

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_88%_7%,rgba(217,70,239,0.11),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_48%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div className="max-w-5xl">
            <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-400/[0.07] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100">
              Official player help
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Know what counts.
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                Know what resets. Know what gets paid.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/66 sm:text-lg">
              This guide explains the current RROTA Spin-to-Win leaderboard logic,
              race-review process, balances, Boost Credits, deposits, withdrawals,
              wallets, and public winner history in plain language.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={SPIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 text-sm font-black text-white transition hover:brightness-110"
              >
                Open Spin-to-Win
                <ArrowIcon />
              </a>
              <Link
                href="/rewards"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-amber-300/18 bg-amber-400/[0.06] px-6 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.10]"
              >
                View past winners
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-[34px] border border-amber-300/18 bg-amber-400/[0.06] p-6 sm:p-7">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-100/70">
              September 2026 leaderboard clarification
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
              The Monthly and Yearly boards can currently show the same totals.
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-white/66">
              A production review found that both boards currently use the same
              historical start reference in the Spin configuration. Weekly uses a
              separate rolling 7-day calculation. The Spin product update will
              separate Monthly and Yearly into their intended competition windows.
              Until that update is deployed, matching Monthly and Yearly totals
              should be treated as provisional rather than as proof that the two
              competitions are intentionally identical.
            </p>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/70">
                Ranking logic
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                How the leaderboard is actually ordered.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Period boards are calculated from Spin game-session records inside
                the selected time window. They are not a separate hidden points
                formula.
              </p>
            </div>

            <div className="rounded-[34px] border border-cyan-300/16 bg-cyan-400/[0.045] p-6 sm:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100/70">
                Primary ranking value
              </div>
              <div className="mt-2 text-3xl font-black">Total RTA won from spins</div>
              <p className="mt-3 text-sm leading-7 text-white/60">
                The current server totals the RTA prize amounts from spin records in
                the active leaderboard period. If two players have the same total,
                the server applies tie-breakers in this order.
              </p>

              <ol className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["1", "Player level"],
                  ["2", "Best single win"],
                  ["3", "Total spins"],
                ].map(([number, label]) => (
                  <li
                    key={number}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="font-mono text-xs font-black text-cyan-200/60">
                      TIE {number}
                    </div>
                    <div className="mt-2 text-sm font-black text-white">{label}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {leaderboardCards.map((board) => (
              <article
                key={board.title}
                className={`rounded-[30px] border p-6 ${board.tone}`}
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${board.badge}`}
                >
                  {board.status}
                </span>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  {board.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{board.text}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-4 text-xs leading-6 text-white/52">
                  {board.note}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-200/70">
              Game economy
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Four balances that should never be confused.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Wallet RTA, RTA Balance, Boost Credits, and deposited RTA represent
              different parts of the product economy.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {economyCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[30px] border border-emerald-300/16 bg-emerald-400/[0.05] p-6">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100/70">
                Deposit flow
              </div>
              <h3 className="mt-2 text-2xl font-black">Wallet RTA to Boost Credits</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                The game sends a deposit through the official Solana flow, verifies
                the transaction server-side, and credits Boost Credits only after
                the matching transaction is confirmed. The current conversion is
                10 RTA for 1 Boost Credit.
              </p>
              <p className="mt-4 text-xs leading-6 text-white/48">
                The current live game requires at least 100,000 verified deposited
                RTA to unlock Boost Spins and also enforces a minimum active RTA
                value for continued Boost gameplay. Deposits do not guarantee race
                placement, rewards, or profit.
              </p>
            </div>

            <div className="rounded-[30px] border border-cyan-300/16 bg-cyan-400/[0.05] p-6">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100/70">
                Withdrawal flow
              </div>
              <h3 className="mt-2 text-2xl font-black">RTA Balance to saved wallet</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                The current game can send eligible RTA Balance from the treasury to
                the saved Solana wallet through the official withdrawal flow. The
                current minimum RTA withdrawal is 5,000,000 RTA.
              </p>
              <p className="mt-4 text-xs leading-6 text-white/48">
                This is separate from Weekly leaderboard SOL prizes. A token
                withdrawal and a competition payout are different product flows.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-100/70">
                Winning and payout
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                A race result and a verified payout are not the same thing.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                The current competition flow requires review before a winner should
                be treated as final. rrota.xyz keeps standings and transaction proof
                visibly separate.
              </p>
              <Link
                href="/rewards"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-amber-300/18 bg-amber-400/[0.07] px-5 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.11]"
              >
                Open race results
                <ArrowIcon />
              </Link>
            </div>

            <ol className="space-y-3">
              {payoutSteps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/18 bg-amber-400/[0.07] font-mono text-xs font-black text-amber-100">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-black">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">{step.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 rounded-[30px] border border-fuchsia-300/16 bg-fuchsia-400/[0.05] p-6 sm:p-7">
            <h3 className="text-2xl font-black">About payout wallets</h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-white/62">
              The current game stores a Solana wallet address for deposit and RTA
              withdrawal functions. The next Spin update should add cryptographic
              wallet-ownership verification for competition payout use. Until that
              is deployed, do not assume that simply connecting a wallet means a SOL
              leaderboard prize will be automatically sent to it.
            </p>
            <p className="mt-3 text-xs leading-6 text-white/46">
              Never share a seed phrase or private key. Official RROTA support does
              not need either one to verify a reward.
            </p>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100/70">
              Player questions
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Quick answers to the questions players are asking now.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6"
              >
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
          <div className="rounded-[36px] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.06))] p-6 sm:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em]">
              Need the live state, not an old screenshot?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
              Use Spin-to-Win for current account status and live competition data.
              Use the Race Results archive for published historical standings and
              payout-proof status.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={SPIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 text-sm font-black text-white transition hover:brightness-110"
              >
                Open live game
                <ArrowIcon />
              </a>
              <Link
                href="/rewards"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
              >
                View past winners
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
