import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";

export const metadata: Metadata = {
  title:
    "RROTA Roadmap 2026 — Solana Utility Ecosystem, Games and Future Tools",
  description:
    "Explore the RROTA roadmap: $RTA on Solana, Spin-to-Win public beta, Crypto Shooter plans, community tools, verification, and future transport utility.",
  keywords: [
    "RROTA roadmap",
    "RROTA coin roadmap",
    "RTA roadmap",
    "RROTA Solana",
    "RROTA Spin-to-Win",
    "RROTA crypto gaming",
    "RROTA transport utility",
    "RROTA ecosystem",
  ],
  alternates: { canonical: `${OFFICIAL_DOMAIN}/roadmap` },
  openGraph: {
    title: "RROTA Roadmap 2026 — $RTA Solana Utility Ecosystem",
    description:
      "Follow the RROTA roadmap: Spin-to-Win, crypto gaming, community rewards, verification, and future transport-focused utility.",
    url: `${OFFICIAL_DOMAIN}/roadmap`,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Roadmap 2026 — $RTA Solana Utility Ecosystem",
    description:
      "RROTA roadmap for $RTA on Solana: live utility, gaming, community tools, and future ecosystem expansion.",
  },
};

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation and Verification",
    status: "Completed / Ongoing",
    items: [
      "Official RROTA website at rrota.xyz",
      "Official $RTA Solana mint published for verification",
      "Core project pages for tokenomics, roadmap, blog and official links",
      "Solscan, Jupiter and chart links added for public verification",
      "Anti-phishing warnings and official source guidance",
    ],
  },
  {
    phase: "Phase 2",
    title: "Trust Layer and Public Information",
    status: "Ongoing",
    items: [
      "Long-form blog articles explaining RROTA, tokenomics and utility",
      "Search-friendly pages for Google discovery",
      "Official social channels for RROTA updates",
      "Transparent communication around supply, burns, links and safety",
      "Community education about fake links and scam messages",
    ],
  },
  {
    phase: "Phase 3",
    title: "Spin-to-Win Public Beta",
    status: "Live / Improving",
    items: [
      "RROTA Spin-to-Win public beta launch",
      "Game economy testing and anti-farming protection",
      "Daily activity, free spins, Boost Credits and player progression",
      "Telegram Mini App support for easier access",
      "Withdrawal protection, security reviews and system improvements",
    ],
  },
  {
    phase: "Phase 4",
    title: "Game Economy Protection",
    status: "In Progress",
    items: [
      "Suspicious activity detection",
      "Bot and spam protection for reward systems",
      "Fair reward balancing and player activity monitoring",
      "Clear rules for withdrawals, bonuses and reward eligibility",
      "More transparent updates for players and community members",
    ],
  },
  {
    phase: "Phase 5",
    title: "Community Growth and Visibility",
    status: "Active",
    items: [
      "Daily RROTA updates on X and Telegram",
      "Google-friendly content for RROTA coin discovery",
      "Community campaigns around utility, safety and ecosystem progress",
      "DEX, tracker and social visibility campaigns",
      "More organic holders, players and ecosystem followers",
    ],
  },
  {
    phase: "Phase 6",
    title: "Crypto Shooter Game Direction",
    status: "Planned",
    items: [
      "Prototype concept for RROTA Crypto Shooter",
      "Gameplay loop planning connected to the RROTA ecosystem",
      "Reward and engagement model research",
      "Testing before public release",
      "Integration with wider RROTA gaming identity",
    ],
  },
  {
    phase: "Phase 7",
    title: "Future Transport Utility",
    status: "Research / Future",
    items: [
      "Research around public transportation-focused tools",
      "Potential user tools connected to stations, routes or local mobility",
      "Practical utility planning beyond crypto gaming",
      "Pilot ideas only after technical and market validation",
      "Long-term expansion of RROTA as a utility ecosystem",
    ],
  },
  {
    phase: "Phase 8",
    title: "Listings, Partnerships and Ecosystem Expansion",
    status: "Future",
    items: [
      "More tracker visibility and listing applications",
      "CoinGecko and CoinMarketCap readiness improvements",
      "Partnership research with gaming, Web3 and utility-focused communities",
      "More documentation, public metrics and ecosystem updates",
      "Continued development based on real community use",
    ],
  },
];

const faqItems = [
  {
    question: "What is the RROTA roadmap?",
    answer:
      "The RROTA roadmap is the staged development plan for the $RTA Solana ecosystem, including verification, Spin-to-Win, crypto gaming, community rewards, and future transport-focused utility.",
  },
  {
    question: "Is RROTA Spin-to-Win the whole project?",
    answer:
      "No. Spin-to-Win is the first live utility experience. RROTA is positioned as a wider ecosystem around $RTA, including gaming, rewards, community tools, and future public transportation utility.",
  },
  {
    question: "What is the current RROTA focus?",
    answer:
      "The current focus is improving the live Spin-to-Win public beta, strengthening project visibility, protecting the game economy, publishing transparent updates, and building stronger Google/search presence.",
  },
  {
    question: "What blockchain is RROTA on?",
    answer:
      "RROTA ($RTA) is on Solana. Users should always verify the official mint address before buying or interacting with any RROTA-related page.",
  },
];

export default function RoadmapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${OFFICIAL_DOMAIN}/roadmap#webpage`,
        url: `${OFFICIAL_DOMAIN}/roadmap`,
        name: "RROTA Roadmap 2026 — Solana Utility Ecosystem, Games and Future Tools",
        description:
          "Official RROTA roadmap for $RTA on Solana, covering Spin-to-Win, crypto gaming, community tools, verification and future transport utility.",
        isPartOf: {
          "@type": "WebSite",
          name: "RROTA",
          url: OFFICIAL_DOMAIN,
        },
        about: {
          "@type": "Thing",
          name: "RROTA ($RTA)",
          description: "Utility-first Solana ecosystem token.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${OFFICIAL_DOMAIN}/roadmap#faq`,
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
    <main className="relative w-full text-white pt-[110px] pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 overflow-hidden">
          <div className="relative">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1cc2fc]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative">
              <p className="inline-flex rounded-full border border-[#1cc2fc]/30 bg-[#1cc2fc]/10 px-4 py-2 text-sm font-semibold text-[#7dd9ff]">
                Official RROTA Roadmap
              </p>

              <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
                RROTA Roadmap 2026
              </h1>

              <p className="mt-5 text-white/75 leading-8 max-w-[90ch] text-base md:text-lg">
                The RROTA roadmap explains the staged development of the $RTA
                Solana ecosystem. RROTA is building around utility, transparent
                verification, crypto gaming, digital rewards, community tools
                and future transport-focused ideas. Spin-to-Win is the first
                live product, but the long-term goal is a wider RROTA ecosystem.
              </p>

              <div className="mt-7 rounded-2xl border border-[#1cc2fc]/20 bg-black/30 p-4 md:p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                  Official $RTA Solana Mint
                </p>
                <p className="mt-3 break-all font-mono text-sm md:text-base text-white/90">
                  {TOKEN_ADDRESS}
                </p>
                <p className="mt-3 text-white/60 leading-6">
                  Always verify the official mint before buying, checking chart
                  data, joining campaigns or interacting with any RROTA-related
                  page.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
                  href={SPIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Spin-to-Win
                </a>

                <a
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify on Solscan
                </a>

                <Link
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
                  href="/tokenomics"
                >
                  View Tokenomics
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/45">Current Focus</p>
            <p className="mt-2 text-lg font-bold">
              Spin-to-Win Public Beta
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/45">Blockchain</p>
            <p className="mt-2 text-lg font-bold">Solana</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/45">Project Direction</p>
            <p className="mt-2 text-lg font-bold">
              Gaming, Rewards and Future Tools
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Roadmap Philosophy
          </h2>

          <p className="mt-4 text-white/75 leading-7 max-w-[95ch]">
            RROTA follows a build-first roadmap. The project avoids presenting
            future ideas as completed products. Utilities should be released
            when tested, public claims should be verifiable, and the community
            should be able to follow progress through official pages, blog
            updates, social posts and on-chain verification.
          </p>

          <p className="mt-4 text-white/75 leading-7 max-w-[95ch]">
            The roadmap is divided into active, completed, ongoing and future
            phases. This helps users understand what is live now, what is being
            improved, and what remains part of the long-term RROTA vision.
          </p>
        </section>

        <section className="mt-8 grid gap-5">
          {roadmapPhases.map((phase, index) => (
            <div
              key={phase.title}
              className="rounded-2xl border border-white/10 bg-black/25 p-6 md:p-7"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#7dd9ff]">
                    {phase.phase}
                  </p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                    {phase.title}
                  </h2>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/75">
                  {phase.status}
                </span>
              </div>

              <ul className="mt-5 grid md:grid-cols-2 gap-3 text-white/75">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 leading-6"
                  >
                    <span className="text-[#7dd9ff] font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#1cc2fc]/20 bg-[#1cc2fc]/5 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Is Live Now?
            </h2>

            <p className="mt-4 text-white/75 leading-7">
              The first live RROTA utility is Spin-to-Win public beta. It gives
              the project an active product layer where users can interact with
              the ecosystem, test game features, follow leaderboard activity and
              experience the first stage of $RTA-powered utility.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
                href={SPIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Play Spin-to-Win
              </a>

              <Link
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
                href="/blog"
              >
                Read Updates
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/5 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Comes Next?
            </h2>

            <p className="mt-4 text-white/75 leading-7">
              The next important steps are improving game protection, growing
              organic visibility, expanding official content, preparing stronger
              listing applications, and continuing development toward additional
              RROTA gaming and utility tools.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
                href={JUPITER_URL}
                target="_blank"
                rel="noreferrer"
              >
                View on Jupiter
              </a>

              <Link
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition"
                href="/tokenomics"
              >
                Tokenomics
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            RROTA Roadmap FAQ
          </h2>

          <div className="mt-6 grid gap-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-white/10 bg-black/25 p-5"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.question}
                </h3>
                <p className="mt-2 text-white/70 leading-7">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-amber-50">
            Verification Reminder
          </h2>

          <p className="mt-3 text-amber-50/90 leading-7">
            Verify you are on the real site: <strong>{OFFICIAL_DOMAIN}</strong>.
            Confirm the official Solana mint before buying or interacting with
            any RROTA-related page:
          </p>

          <p className="mt-3 font-mono break-all text-sm text-amber-50/90">
            {TOKEN_ADDRESS}
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-[#1cc2fc]/20 bg-gradient-to-r from-[#1cc2fc]/15 via-white/5 to-fuchsia-500/15 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Follow the Official RROTA Ecosystem
          </h2>

          <p className="mt-4 text-white/75 leading-7 max-w-[85ch]">
            Use official links to follow roadmap updates, verify the token,
            join the community and explore the live RROTA Spin-to-Win public
            beta.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
              href="/"
            >
              RROTA Home
            </Link>

            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/blog"
            >
              Blog
            </Link>

            <a
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>

            <a
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href={X_URL}
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
