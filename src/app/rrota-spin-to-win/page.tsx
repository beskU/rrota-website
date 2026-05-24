import type { Metadata } from "next";
import Link from "next/link";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  home: "/",
  howToBuy: "/how-to-buy-rrota",
  links: "/links",
  tokenomics: "/tokenomics",
  roadmap: "/roadmap",
  whitepaper: "/whitepaper",
  terms: "/terms",
  riskDisclaimer: "/risk-disclaimer",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
};

export const metadata: Metadata = {
  title: "RROTA Spin-to-Win — Official $RTA Reward Game on Solana",
  description:
    "Learn about RROTA Spin-to-Win, the official RROTA utility game connected to $RTA on Solana. Play, compete, complete missions, use referrals, and verify official links safely.",
  keywords: [
    "RROTA Spin-to-Win",
    "RROTA game",
    "RTA rewards",
    "RROTA rewards",
    "RROTA Solana game",
    "Solana reward game",
    "RROTA utility",
    "RROTA leaderboard",
    "RROTA referral",
    "Spin RROTA",
  ],
  alternates: {
    canonical: "https://rrota.xyz/rrota-spin-to-win",
  },
  openGraph: {
    title: "RROTA Spin-to-Win — Official $RTA Reward Game",
    description:
      "The official RROTA Spin-to-Win page: play the live RROTA utility game, learn how rewards work, verify links, and explore the $RTA ecosystem.",
    url: "https://rrota.xyz/rrota-spin-to-win",
    siteName: "RROTA",
    type: "website",
    images: [
      {
        url: "https://rrota.xyz/rrota-og.png",
        width: 1200,
        height: 630,
        alt: "RROTA Spin-to-Win official reward game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Spin-to-Win — Official $RTA Reward Game",
    description:
      "Play the official RROTA Spin-to-Win utility game and verify the $RTA ecosystem safely.",
    images: ["https://rrota.xyz/rrota-og.png"],
  },
};

const features = [
  {
    title: "Spin-to-Win gameplay",
    text: "Players interact with the official RROTA wheel experience through the live Spin-to-Win game.",
  },
  {
    title: "Leaderboard competition",
    text: "RROTA can run leaderboard-based campaigns where active players compete for announced rewards.",
  },
  {
    title: "Referral growth",
    text: "Referral links help users invite friends and support community expansion through tracked participation.",
  },
  {
    title: "Missions and quests",
    text: "Missions, bonuses, and activity goals are designed to keep users returning without relying only on price hype.",
  },
  {
    title: "Wallet-based interaction",
    text: "The game connects with Solana wallet logic and official $RTA ecosystem flows.",
  },
  {
    title: "Fair-play protection",
    text: "Anti-abuse rules, cooldowns, and eligibility checks are part of the long-term RROTA game structure.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open the official game",
    text: "Use only spin.rrota.xyz or the official RROTA links page. Avoid links sent by unknown users or private messages.",
  },
  {
    number: "02",
    title: "Create or sign in to your account",
    text: "Use the official game login flow so your activity, rewards, missions, and leaderboard progress can be tracked correctly.",
  },
  {
    number: "03",
    title: "Connect your Solana wallet when needed",
    text: "Use a trusted Solana wallet and verify every wallet request before approving anything.",
  },
  {
    number: "04",
    title: "Spin, complete missions, and compete",
    text: "Play the game, follow missions, use referrals, and check leaderboard campaigns when they are active.",
  },
  {
    number: "05",
    title: "Follow official updates",
    text: "Game rules, reward windows, withdrawals, and campaign details should always be confirmed through official RROTA channels.",
  },
];

const safetyRules = [
  "Only use the official game URL: spin.rrota.xyz.",
  "Verify the main RROTA website: rrota.xyz.",
  "Confirm the official $RTA mint before trading or depositing.",
  "Never share your seed phrase, private key, or secret recovery phrase.",
  "Do not trust fake support accounts or private-message reward claims.",
  "Read the terms and risk disclaimer before using reward features.",
];

const faqs = [
  {
    question: "What is RROTA Spin-to-Win?",
    answer:
      "RROTA Spin-to-Win is the official RROTA utility game built around player activity, missions, leaderboard participation, referrals, and $RTA ecosystem engagement.",
  },
  {
    question: "Where can I play RROTA Spin-to-Win?",
    answer:
      "The official game is available at spin.rrota.xyz. Users should always access it from the official RROTA website or official links page.",
  },
  {
    question: "Is RROTA Spin-to-Win part of the $RTA ecosystem?",
    answer:
      "Yes. Spin-to-Win is part of the RROTA ecosystem and is connected to the broader $RTA utility direction on Solana.",
  },
  {
    question: "Does Spin-to-Win guarantee rewards or profit?",
    answer:
      "No. RROTA does not guarantee profit or fixed rewards. Game features, eligibility, withdrawals, and rewards may depend on rules, security checks, treasury availability, and project conditions.",
  },
  {
    question: "How do I buy $RTA for the RROTA ecosystem?",
    answer:
      "Use the official How to Buy RROTA guide and verify the official Solana mint address before swapping on Jupiter.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rrota.xyz/rrota-spin-to-win#webpage",
      url: "https://rrota.xyz/rrota-spin-to-win",
      name: "RROTA Spin-to-Win",
      description:
        "Official page for RROTA Spin-to-Win, the RROTA utility game connected to $RTA on Solana.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: "https://rrota.xyz",
      },
    },
    {
      "@type": "Game",
      name: "RROTA Spin-to-Win",
      url: "https://spin.rrota.xyz",
      description:
        "RROTA Spin-to-Win is an official utility game connected to the RROTA ecosystem and $RTA on Solana.",
      genre: "Web3 reward game",
      gamePlatform: "Web",
      publisher: {
        "@type": "Organization",
        name: "RROTA",
        url: "https://rrota.xyz",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RROTASpinToWinPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05020d] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,0.18),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(250,204,21,0.10),transparent_45%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Official RROTA Utility
              </span>
              <span className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
                Live Game Hub
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              RROTA{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-yellow-200 bg-clip-text text-transparent">
                Spin-to-Win
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Spin-to-Win is the first live RROTA utility experience: a Web3
              game layer built around player activity, missions, referrals,
              leaderboard competition, and $RTA ecosystem engagement.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={LINKS.spin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
              >
                Play Spin-to-Win
              </a>

              <Link
                href={LINKS.howToBuy}
                className="rounded-2xl border border-white/15 bg-white/8 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/50 hover:bg-white/12"
              >
                How to Buy $RTA
              </Link>

              <Link
                href={LINKS.links}
                className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-cyan-300/15"
              >
                Verify Links
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_0_70px_rgba(217,70,239,0.18)] backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
              Game Status
            </p>

            <div className="mt-5 grid gap-3">
              <StatusRow label="Official game" value="spin.rrota.xyz" />
              <StatusRow label="Ecosystem token" value="$RTA" />
              <StatusRow label="Network" value="Solana" />
              <StatusRow label="Main focus" value="Activity + rewards" />
              <StatusRow label="Safety layer" value="Anti-abuse rules" />
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                Official $RTA Mint
              </p>
              <p className="mt-3 break-all font-mono text-sm leading-7 text-cyan-100">
                {TOKEN_ADDRESS}
              </p>
            </div>

            <p className="mt-5 rounded-2xl border border-yellow-300/20 bg-yellow-300/10 p-4 text-sm leading-7 text-yellow-100">
              Safety note: do not use unofficial game links or private-message
              reward links. Always start from rrota.xyz or spin.rrota.xyz.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              RROTA is not only a token page. It has an active utility layer.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Spin-to-Win gives the RROTA ecosystem a repeat-use product:
              players can return, compete, complete actions, use referrals,
              and follow active community campaigns connected to the $RTA
              ecosystem.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-xl font-black text-cyan-100">
                  ✓
                </div>
                <h3 className="text-xl font-black text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
              How to start
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Play through official channels only.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The safest path is simple: open the official game, sign in through
              the official flow, verify links, and follow only official RROTA
              announcements for campaigns, rules, withdrawals, and reward
              windows.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.spin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-center text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15"
              >
                Open Game
              </a>
              <Link
                href={LINKS.terms}
                className="rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/12"
              >
                Read Terms
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-slate-950/55 p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-300/25 bg-fuchsia-300/10 text-sm font-black text-fuchsia-100">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
              Fair-play direction
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Built for longer-term game health.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A reward game needs more than a wheel. It needs rules that protect
              real players, reduce abuse, and keep campaigns sustainable.
              RROTA’s direction includes cooldowns, activity checks, wallet
              logic, campaign rules, and controlled reward structures.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-200">
              Important disclaimer
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Rewards are not guaranteed profit.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              RROTA Spin-to-Win is a game and ecosystem utility. Crypto assets
              are risky, and reward features may depend on eligibility,
              security checks, treasury availability, network conditions,
              official campaign rules, and future updates.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
              Safety checklist
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Avoid fake Spin-to-Win links.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Web3 games are common targets for fake links and wallet-draining
              scams. RROTA users should verify every link and only use official
              pages.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-200">
                  ✓
                </div>
                <p className="text-sm leading-7 text-slate-200">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-4">
            <ResourceCard
              title="How to Buy RROTA"
              text="Learn how to buy $RTA safely through Jupiter using the official Solana mint address."
              href={LINKS.howToBuy}
              label="Read guide"
            />
            <ResourceCard
              title="Official Links"
              text="Verify RROTA website, game, contract, socials, and market links from one safe hub."
              href={LINKS.links}
              label="Verify"
            />
            <ResourceCard
              title="Tokenomics"
              text="Review the $RTA token structure, utility direction, and on-chain verification resources."
              href={LINKS.tokenomics}
              label="View"
            />
            <ResourceCard
              title="Roadmap"
              text="Follow the wider RROTA ecosystem direction across games, tools, and future utility."
              href={LINKS.roadmap}
              label="Explore"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            RROTA Spin-to-Win questions.
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-6"
              >
                <h3 className="text-lg font-black text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/12 via-fuchsia-300/10 to-yellow-200/10 p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.16)]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">
            Official game access
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Play RROTA Spin-to-Win from the official game domain.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Use spin.rrota.xyz for the game and rrota.xyz for official project
            information, contract verification, buying guides, and safety pages.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.spin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:scale-[1.02]"
            >
              Play Now
            </a>
            <Link
              href={LINKS.riskDisclaimer}
              className="rounded-2xl border border-white/15 bg-white/8 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
            >
              Risk Disclaimer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <span className="text-right text-sm font-black text-white">{value}</span>
    </div>
  );
}

function ResourceCard({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-white/[0.075]"
      >
        <h3 className="text-2xl font-black text-white">{title}</h3>
        <p className="mt-3 min-h-[105px] text-sm leading-7 text-slate-300">
          {text}
        </p>
        <span className="mt-5 inline-flex rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10">
          {label}
        </span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-white/[0.075]"
    >
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-3 min-h-[105px] text-sm leading-7 text-slate-300">
        {text}
      </p>
      <span className="mt-5 inline-flex rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10">
        {label}
      </span>
    </Link>
  );
}
