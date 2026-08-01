import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/roadmap`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const SOLIDPROOF_URL = "https://app.solidproof.io/projects/rrota";

export const metadata: Metadata = {
  title: "RROTA Roadmap",
  description:
    "Follow the official RROTA roadmap by current status: shipped foundations, live products, active development, and planned ecosystem expansion.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Roadmap",
    description:
      "A status-based view of what RROTA has shipped, what is live, what is being developed, and what remains planned.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Roadmap",
    description:
      "Track shipped foundations, live RROTA products, active development, and future ecosystem plans.",
  },
};

type RoadmapStatus = "Shipped" | "Live" | "In progress" | "Planned";

type RoadmapItem = {
  title: string;
  description: string;
  notes: string[];
  href?: string;
  linkLabel?: string;
  external?: boolean;
};

type RoadmapGroup = {
  status: RoadmapStatus;
  eyebrow: string;
  summary: string;
  accent: string;
  badge: string;
  items: RoadmapItem[];
};

const roadmapGroups: RoadmapGroup[] = [
  {
    status: "Shipped",
    eyebrow: "Foundation completed",
    summary:
      "Core token, verification, documentation, and public-access foundations that are already available.",
    accent: "border-emerald-400/18 bg-emerald-400/[0.055]",
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    items: [
      {
        title: "$RTA token foundation",
        description:
          "The RROTA token is deployed on Solana with its official mint published across the website and verification pages.",
        notes: [
          "Official mint publicly documented",
          "Solscan and Jupiter verification links",
          "Mint and freeze authorities revoked",
          "Liquidity-lock information published",
        ],
        href: SOLSCAN_URL,
        linkLabel: "Verify on Solscan",
        external: true,
      },
      {
        title: "Public project documentation",
        description:
          "The core website now provides dedicated pages for tokenomics, roadmap, whitepaper, buying guidance, risks, and official resources.",
        notes: [
          "Tokenomics and supply information",
          "Roadmap and ecosystem explanation",
          "Buying and wallet-safety guidance",
          "Terms, privacy, and risk disclosures",
        ],
        href: "/whitepaper",
        linkLabel: "Read whitepaper",
      },
      {
        title: "Independent audit milestones",
        description:
          "RROTA publishes third-party audit references so visitors can review available verification material directly.",
        notes: [
          "SolidProof project page",
          "FreshCoins audit reference",
          "Direct links from official pages",
          "Security claims kept separate from guarantees",
        ],
        href: SOLIDPROOF_URL,
        linkLabel: "View SolidProof",
        external: true,
      },
      {
        title: "Official discovery layer",
        description:
          "The ecosystem has public navigation, search-oriented pages, structured metadata, and verified social destinations.",
        notes: [
          "Official website and link directory",
          "RROTA blog and educational pages",
          "Telegram and X community access",
          "Search and sitemap foundations",
        ],
        href: "/links",
        linkLabel: "Open official links",
      },
    ],
  },
  {
    status: "Live",
    eyebrow: "Available now",
    summary:
      "Products and community systems that people can access today while improvements continue.",
    accent: "border-cyan-400/18 bg-cyan-400/[0.055]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    items: [
      {
        title: "RROTA Spin-to-Win",
        description:
          "The first live RROTA product is available through the browser and Telegram, combining gameplay, progression, and leaderboard competition.",
        notes: [
          "Browser and Telegram access",
          "Free spins and daily activity",
          "Boost Credits and player progression",
          "Reward and withdrawal safeguards",
        ],
        href: SPIN_URL,
        linkLabel: "Open Spin-to-Win",
        external: true,
      },
      {
        title: "Weekly, monthly, and yearly races",
        description:
          "Players compete across connected leaderboard periods, making every active race part of a wider long-term competition.",
        notes: [
          "Weekly leaderboard races",
          "Monthly ranking progression",
          "Yearly championship tracking",
          "Public race and reward communication",
        ],
        href: "/rrota-spin-to-win",
        linkLabel: "View game guide",
      },
      {
        title: "RROTA AI Assistant",
        description:
          "An informational assistant helps users understand the ecosystem, find official resources, review safety guidance, and navigate RROTA products.",
        notes: [
          "Project and token education",
          "Official-link navigation",
          "Wallet-safety reminders",
          "Spin-to-Win onboarding",
        ],
        href: "/ai",
        linkLabel: "Explore RROTA AI",
      },
      {
        title: "Public project updates",
        description:
          "The blog, roadmap, Telegram, and X provide ongoing communication around development, campaigns, safety, and ecosystem progress.",
        notes: [
          "Long-form website updates",
          "Community announcements",
          "Race and leaderboard communication",
          "Official-source verification reminders",
        ],
        href: "/blog",
        linkLabel: "Read updates",
      },
    ],
  },
  {
    status: "In progress",
    eyebrow: "Active development",
    summary:
      "Work currently being improved, expanded, tested, or prepared for a stronger public release.",
    accent: "border-fuchsia-400/18 bg-fuchsia-400/[0.05]",
    badge: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
    items: [
      {
        title: "Game fairness and economy protection",
        description:
          "RROTA continues improving abuse prevention, reward balancing, eligibility rules, and monitoring around the live game economy.",
        notes: [
          "Bot and farming detection",
          "Suspicious-activity review",
          "Reward balancing and eligibility",
          "Withdrawal and account safeguards",
        ],
      },
      {
        title: "Holder-linked product benefits",
        description:
          "The project is developing clearer connections between holding $RTA, product access, reward eligibility, and ecosystem participation.",
        notes: [
          "Wallet-linked eligibility logic",
          "Holder benefit definitions",
          "Clearer utility communication",
          "Testing before wider activation",
        ],
      },
      {
        title: "Winners and payment-proof archive",
        description:
          "A dedicated public record is being prepared to make past race results, winners, and completed reward payments easier to verify.",
        notes: [
          "Previous race winners",
          "Leaderboard period references",
          "Reward-payment evidence",
          "Public archive navigation",
        ],
      },
      {
        title: "Ecosystem onboarding and conversion",
        description:
          "The website and product journey are being simplified so visitors can understand RROTA, verify the token, use a live product, and follow progress.",
        notes: [
          "Clearer homepage hierarchy",
          "Simpler product navigation",
          "Improved mobile experience",
          "Stronger official-link pathways",
        ],
      },
    ],
  },
  {
    status: "Planned",
    eyebrow: "Future direction",
    summary:
      "Longer-term concepts that remain subject to research, testing, resources, market conditions, and technical validation.",
    accent: "border-amber-400/18 bg-amber-400/[0.045]",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-100",
    items: [
      {
        title: "RROTA Crypto Shooter",
        description:
          "A broader gaming product is planned around an action-focused gameplay loop connected to the RROTA ecosystem.",
        notes: [
          "Gameplay and progression design",
          "Reward-model research",
          "Prototype and technical testing",
          "Public release only after validation",
        ],
      },
      {
        title: "Expanded community tools",
        description:
          "Future tools may improve missions, referrals, player identity, achievements, communication, and ecosystem participation.",
        notes: [
          "Mission and achievement systems",
          "Referral and community mechanics",
          "Player profiles and history",
          "Cross-product progression research",
        ],
      },
      {
        title: "Transport-focused utility research",
        description:
          "RROTA is researching potential real-world mobility tools, but these remain exploratory until a practical and technically viable use case is validated.",
        notes: [
          "Local mobility and route concepts",
          "User-facing transport tools",
          "Technical and market validation",
          "No guaranteed implementation date",
        ],
      },
      {
        title: "Listings, integrations, and partnerships",
        description:
          "The project plans to continue improving public data, tracker readiness, partnership research, and ecosystem visibility based on real use.",
        notes: [
          "Tracker and listing readiness",
          "Public metrics and documentation",
          "Gaming and Web3 integrations",
          "Partnership research based on fit",
        ],
      },
    ],
  },
];

const roadmapPrinciples = [
  {
    title: "Status before promises",
    text:
      "The roadmap separates what is already shipped from what is live, being developed, or still planned.",
  },
  {
    title: "Build before promotion",
    text:
      "New utility should be tested and made usable before it is presented as a completed ecosystem feature.",
  },
  {
    title: "Verification before trust",
    text:
      "Important token, product, audit, and community claims should link to a source visitors can inspect.",
  },
  {
    title: "Plans can change",
    text:
      "Priorities may change because of security, technical limits, user feedback, resources, or market conditions.",
  },
];

const faqItems = [
  {
    question: "Is the roadmap a fixed delivery schedule?",
    answer:
      "No. It is a status-based development guide, not a guaranteed calendar. Planned work can change after testing, security review, user feedback, or resource evaluation.",
  },
  {
    question: "What is the main live RROTA product?",
    answer:
      "Spin-to-Win is the first live product. It supports browser and Telegram access, player progression, and connected weekly, monthly, and yearly leaderboard races.",
  },
  {
    question: "Is RROTA AI a trading or financial-advice tool?",
    answer:
      "No. RROTA AI is an informational and onboarding assistant. Important information should still be verified through official pages and on-chain sources.",
  },
  {
    question: "Is transport utility already available?",
    answer:
      "No. Transport-focused utility remains a research direction. It should not be treated as a launched product or guaranteed future feature.",
  },
];

function ExternalIcon() {
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
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

const ROADMAP_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Roadmap",
      description:
        "The official status-based roadmap for the RROTA ecosystem on Solana.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      about: {
        "@type": "Thing",
        name: "RROTA ecosystem",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#roadmap`,
      name: "RROTA development roadmap",
      itemListElement: roadmapGroups.flatMap((group) =>
        group.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${group.status}: ${item.title}`,
          description: item.description,
        }))
      ),
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

export default function RoadmapPage() {
  const itemCount = roadmapGroups.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ROADMAP_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.11),transparent_28%),linear-gradient(180deg,#050711_0%,#07101d_50%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/9 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                Official development roadmap
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                See what RROTA has shipped,
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  what is live, and what comes next.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                This roadmap uses current status instead of artificial deadlines.
                It separates completed foundations, live products, active
                development, and longer-term plans so visitors can understand the
                real state of the ecosystem.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Open live product
                  <ExternalIcon />
                </a>

                <Link
                  href="/tokenomics"
                  className="inline-flex h-13 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/80 transition hover:border-cyan-300/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Review tokenomics
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {roadmapGroups.map((group) => (
                <div
                  key={group.status}
                  className={`rounded-2xl border p-4 ${group.accent}`}
                >
                  <div className="text-[9px] font-black uppercase tracking-[0.18em] text-white/42">
                    {group.eyebrow}
                  </div>
                  <div className="mt-2 text-xl font-black text-white">
                    {group.status}
                  </div>
                  <div className="mt-1 text-xs text-white/48">
                    {group.items.length} roadmap items
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/38">
                  Blockchain
                </div>
                <div className="mt-2 text-lg font-black">Solana</div>
              </div>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/38">
                  Roadmap coverage
                </div>
                <div className="mt-2 text-lg font-black">
                  {itemCount} tracked items
                </div>
              </div>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/38">
                  Official mint
                </div>
                <code className="mt-2 block truncate font-mono text-sm text-cyan-100">
                  {TOKEN_ADDRESS}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Development principles
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              A roadmap should explain reality—not manufacture certainty.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="font-mono text-xs font-black text-cyan-300/48">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-black">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/56">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-8">
            {roadmapGroups.map((group) => (
              <article
                key={group.status}
                className={`overflow-hidden rounded-[36px] border ${group.accent}`}
              >
                <div className="border-b border-white/10 p-6 sm:p-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${group.badge}`}
                      >
                        {group.status}
                      </span>

                      <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                        {group.eyebrow}
                      </h2>

                      <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
                        {group.summary}
                      </p>
                    </div>

                    <div className="text-sm font-black text-white/42">
                      {group.items.length} items
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-white/10 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-[#070b14]/96 p-6 sm:p-7"
                    >
                      <h3 className="text-xl font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {item.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {item.notes.map((note) => (
                          <li
                            key={note}
                            className="flex gap-3 text-sm leading-6 text-white/62"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>

                      {item.href ? (
                        item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:text-white"
                          >
                            {item.linkLabel}
                            <ExternalIcon />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:text-white"
                          >
                            {item.linkLabel}
                          </Link>
                        )
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                Roadmap questions
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                What this roadmap does—and does not—promise.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                The roadmap is updated as products move between planned,
                in-progress, live, and shipped states. It does not guarantee
                prices, listings, rewards, partnerships, or delivery dates.
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="text-base font-black text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/58">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.09),rgba(217,70,239,0.08))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Follow progress through official sources.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Use the blog for detailed updates, Spin-to-Win for the live
                  product, and Solscan for independent token verification.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/blog"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Read project updates
                </Link>

                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/16 hover:text-white"
                >
                  Verify $RTA
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
