import type { Metadata } from "next";
import Link from "next/link";
import { Orbitron, Space_Grotesk } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
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
    "Learn about RROTA Spin-to-Win, the official RROTA utility game connected to $RTA on Solana. Play, complete missions, use referrals, compete on leaderboards, and verify official links safely.",
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
    title: "Live utility experience",
    text: "Spin-to-Win gives RROTA a real interactive product layer instead of relying only on token speculation or empty hype.",
  },
  {
    title: "Player activity loop",
    text: "Players can return, spin, complete missions, follow campaigns, and stay active inside the RROTA ecosystem.",
  },
  {
    title: "Leaderboard competition",
    text: "RROTA can run leaderboard campaigns where players compete for announced weekly or event-based rewards.",
  },
  {
    title: "Referral growth",
    text: "Referral links help users invite friends and grow the community through tracked participation.",
  },
  {
    title: "Wallet-based ecosystem",
    text: "The game is connected to Solana wallet flows and the wider $RTA utility structure.",
  },
  {
    title: "Fair-play protection",
    text: "Cooldowns, eligibility checks, and anti-abuse systems are part of the game’s long-term protection direction.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open the official game",
    text: "Use only spin.rrota.xyz or links from the official RROTA website. Avoid private-message links and unknown redirects.",
  },
  {
    number: "02",
    title: "Create or sign in",
    text: "Use the official game login flow so your missions, activity, referrals, and leaderboard progress can be tracked correctly.",
  },
  {
    number: "03",
    title: "Connect wallet when needed",
    text: "Use a trusted Solana wallet and always review wallet requests before approving anything.",
  },
  {
    number: "04",
    title: "Spin and complete missions",
    text: "Play the wheel, follow active missions, use referrals, check bonuses, and join campaigns when they are live.",
  },
  {
    number: "05",
    title: "Follow official updates",
    text: "Reward windows, withdrawals, rules, and campaign details should always be confirmed through official RROTA channels.",
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
  publisher: {
    "@type": "Organization",
    name: "RROTA",
    url: "https://rrota.xyz",
  },
};

export default function RROTASpinToWinPage() {
  return (
    <main
      className={`${spaceGrotesk.variable} ${orbitron.variable} min-h-screen overflow-hidden bg-[#03040a] text-white [font-family:var(--font-space-grotesk)]`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_12%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(217,70,239,0.20),transparent_34%),radial-gradient(circle_at_48%_96%,rgba(250,204,21,0.11),transparent_42%),linear-gradient(180deg,#040511_0%,#090719_55%,#03040a_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-1/2 top-6 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge>Official RROTA Utility</Badge>
              <Badge tone="pink">Live Game Hub</Badge>
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              <span className="[font-family:var(--font-orbitron)]">
                RROTA
              </span>{" "}
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text [font-family:var(--font-orbitron)] text-transparent">
                Spin-to-Win
              </span>
              <span className="block [font-family:var(--font-orbitron)]">
                Utility Game.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Spin-to-Win is the first live RROTA utility experience: a Web3
              game layer built around player activity, missions, referrals,
              leaderboard competition, and $RTA ecosystem engagement.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={LINKS.spin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 px-7 text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_46px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
              >
                <span className="absolute inset-0 translate-x-[-140%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] transition duration-700 group-hover:translate-x-[140%]" />
                <span className="relative">Play Spin-to-Win</span>
              </a>

              <Link
                href={LINKS.howToBuy}
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/[0.06] px-7 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
              >
                How to Buy $RTA
              </Link>

              <Link
                href={LINKS.links}
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-sm font-black uppercase tracking-[0.18em] text-white/85 transition hover:border-fuchsia-300/35 hover:bg-fuchsia-300/10 hover:text-white"
              >
                Verify Links
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-yellow-300/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-[#080b16]/88 p-6 shadow-[0_0_80px_rgba(217,70,239,0.14)] backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-fuchsia-400/10 blur-3xl" />

              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                Game Status
              </p>

              <div className="mt-5 grid gap-3">
                <InfoRow label="Official game" value="spin.rrota.xyz" />
                <InfoRow label="Ecosystem token" value="$RTA" />
                <InfoRow label="Network" value="Solana" />
                <InfoRow label="Main focus" value="Activity + rewards" />
                <InfoRow label="Safety layer" value="Anti-abuse rules" />
              </div>

              <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.07] p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  Official $RTA Mint
                </p>
                <p className="mt-4 break-all font-mono text-sm font-semibold leading-7 text-cyan-50">
                  {TOKEN_ADDRESS}
                </p>
              </div>

              <div className="mt-6 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-5">
                <p className="text-sm font-semibold leading-7 text-yellow-100">
                  Only use rrota.xyz and spin.rrota.xyz. Do not use private-message
                  reward links, fake support links, or copied game pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why it matters"
            title="RROTA is not only a token page. It has an active utility layer."
            text="Spin-to-Win gives the RROTA ecosystem a repeat-use product where players can return, compete, complete actions, use referrals, and follow active community campaigns connected to $RTA."
          />

          <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/8 blur-2xl transition group-hover:bg-fuchsia-400/10" />

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-lg font-black text-cyan-100">
                  ✓
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-white">
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

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="How to start"
            title="Play through official channels only."
            text="The safest path is simple: open the official game, sign in through the official flow, verify links, and follow only official RROTA announcements for campaigns, rules, withdrawals, and reward windows."
          />

          <div className="grid gap-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-white/10 bg-[#070a14]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-300/25 bg-fuchsia-300/10 text-sm font-black text-fuchsia-100 [font-family:var(--font-orbitron)]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-black tracking-[-0.02em] text-white">
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

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <InfoPanel
            eyebrow="Fair-play direction"
            title="Built for longer-term game health."
            text="A reward game needs more than a wheel. It needs rules that protect real players, reduce abuse, and keep campaigns sustainable. RROTA’s direction includes cooldowns, activity checks, wallet logic, campaign rules, and controlled reward structures."
          />

          <InfoPanel
            eyebrow="Important disclaimer"
            title="Rewards are not guaranteed profit."
            text="RROTA Spin-to-Win is a game and ecosystem utility. Crypto assets are risky, and reward features may depend on eligibility, security checks, treasury availability, network conditions, official campaign rules, and future updates."
            tone="yellow"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Safety checklist"
            title="Avoid fake Spin-to-Win links."
            text="Web3 games are common targets for fake links and wallet-draining scams. RROTA users should verify every link and only use official pages."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-3xl border border-white/10 bg-[#070a14]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                  ✓
                </div>
                <p className="text-sm font-medium leading-7 text-slate-200">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-4">
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

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="RROTA Spin-to-Win questions."
            text="Helpful answers for users who want to understand the official game, $RTA ecosystem connection, and safety rules."
          />

          <div className="mt-9 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.45rem] border border-white/10 bg-white/[0.045] p-6"
              >
                <h3 className="text-lg font-black tracking-[-0.02em] text-white">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_0_75px_rgba(34,211,238,0.15)]">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-100">
            Official game access
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
            Play RROTA Spin-to-Win from the official game domain.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Use spin.rrota.xyz for the game and rrota.xyz for official project
            information, contract verification, buying guides, and safety pages.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.spin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:scale-[1.02]"
            >
              Play Now
            </a>

            <Link
              href={LINKS.riskDisclaimer}
              className="rounded-2xl border border-white/15 bg-white/8 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
            >
              Risk Disclaimer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Badge({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "pink";
}) {
  const toneClass =
    tone === "pink"
      ? "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100"
      : "border-cyan-300/25 bg-cyan-300/10 text-cyan-100";

  return (
    <span
      className={`rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
      <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <span className="text-right text-sm font-black text-white">{value}</span>
    </div>
  );
}

function InfoPanel({
  eyebrow,
  title,
  text,
  tone = "emerald",
}: {
  eyebrow: string;
  title: string;
  text: string;
  tone?: "emerald" | "yellow";
}) {
  const accent =
    tone === "yellow"
      ? "border-yellow-300/20 bg-yellow-300/10 text-yellow-100"
      : "border-emerald-300/20 bg-emerald-300/10 text-emerald-100";

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/8 blur-3xl" />
      <p
        className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] ${accent}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.05em] text-white">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
    </article>
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
  return (
    <Link
      href={href}
      className="group rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-white/[0.065]"
    >
      <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
        {title}
      </h3>
      <p className="mt-3 min-h-[112px] text-sm leading-7 text-slate-300">
        {text}
      </p>
      <span className="mt-5 inline-flex rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition group-hover:border-cyan-300/45 group-hover:bg-cyan-300/10">
        {label}
      </span>
    </Link>
  );
}
