import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/risk-disclaimer`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const SPIN_URL = "https://spin.rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Risk Disclaimer",
  description:
    "Review the principal risks connected to RROTA ($RTA), crypto markets, wallets, Spin-to-Win, leaderboards, rewards, third-party services, development plans, and regulatory change.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Risk Disclaimer",
    description:
      "Important risk information for the $RTA token, RROTA products, wallets, markets, leaderboards, rewards, and third-party services.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Risk Disclaimer",
    description:
      "Review the financial, technical, wallet, product, eligibility, third-party, development, and regulatory risks connected to RROTA.",
  },
};

type RiskItem = {
  title: string;
  summary: string;
  details: string[];
  tone: string;
  badge: string;
};

const coreRisks: RiskItem[] = [
  {
    title: "Market and price risk",
    summary:
      "$RTA is a crypto asset. Its price can rise or fall rapidly, and users may lose part or all of the value used to acquire it.",
    details: [
      "Past price movement does not predict future performance",
      "Community activity and product development do not guarantee demand",
      "Public announcements can affect market behavior without creating lasting value",
      "Users should not rely on RROTA for income, savings protection, or guaranteed returns",
    ],
    tone: "border-rose-400/16 bg-rose-400/[0.04]",
    badge: "border-rose-400/20 bg-rose-400/[0.08] text-rose-200",
  },
  {
    title: "Liquidity and execution risk",
    summary:
      "Available liquidity, trading routes, spreads, slippage, fees, and price impact can change at any time.",
    details: [
      "A desired trade may not execute at the displayed estimate",
      "Large or urgent transactions can experience significant price impact",
      "Liquidity can decrease or move between pools",
      "Market data can differ across Jupiter, trackers, pools, and interfaces",
    ],
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
    badge: "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
  },
  {
    title: "Wallet and transaction risk",
    summary:
      "Blockchain transactions are generally irreversible. A mistaken approval, transfer, or signature can cause permanent loss.",
    details: [
      "Users are responsible for wallet security and transaction review",
      "Seed phrases, private keys, passwords, and recovery codes must remain private",
      "Malicious websites can imitate trusted products and wallet prompts",
      "An incorrect address, token mint, or approval may be impossible to reverse",
    ],
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    title: "Smart-contract and blockchain risk",
    summary:
      "Solana, token programs, wallet software, decentralized applications, and integrations may contain bugs or experience disruptions.",
    details: [
      "Network congestion or outages can delay or prevent transactions",
      "Third-party contracts and interfaces may behave unexpectedly",
      "Revoked authorities do not eliminate every technical or market risk",
      "An audit does not guarantee that all vulnerabilities have been identified",
    ],
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
    badge:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  {
    title: "Product and availability risk",
    summary:
      "RROTA websites, games, bots, APIs, leaderboards, and related services can experience bugs, downtime, maintenance, or permanent changes.",
    details: [
      "Features may be paused for security or technical reasons",
      "Account data and rankings may require correction after a system issue",
      "Interfaces may change without preserving every previous workflow",
      "A live product today is not guaranteed to remain available forever",
    ],
    tone: "border-cyan-400/16 bg-cyan-400/[0.04]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    title: "Third-party service risk",
    summary:
      "RROTA links to independent wallets, explorers, market trackers, trading interfaces, hosting providers, Telegram, ChatGPT, and other services.",
    details: [
      "Third-party uptime, security, policies, and accuracy are outside RROTA control",
      "Fees and transaction behavior may be set by another platform",
      "A linked service can change, restrict access, or stop operating",
      "Users must review the terms and risks of each third-party service",
    ],
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  },
];

const gameRisks = [
  {
    title: "Leaderboard rank is not automatic entitlement",
    text:
      "A visible weekly, monthly, yearly, or all-time position does not by itself guarantee a prize, payment, withdrawal, or other benefit.",
  },
  {
    title: "Eligibility checks may apply",
    text:
      "Rewards can depend on account status, qualifying activity, wallet information, campaign rules, referral quality, anti-abuse review, and other published conditions.",
  },
  {
    title: "Suspicious activity may be reviewed",
    text:
      "Automated activity, duplicated accounts, manipulated referrals, farming patterns, coordinated abuse, or attempts to bypass limits may lead to review or disqualification.",
  },
  {
    title: "Race details can change",
    text:
      "Deadlines, prize amounts, reward types, qualifying positions, cooldowns, and participation rules may differ between races and campaigns.",
  },
  {
    title: "Reward processing can take time",
    text:
      "Verification, security review, wallet checks, technical maintenance, network conditions, or manual review may delay a reward decision or transfer.",
  },
  {
    title: "Rewards are not guaranteed income",
    text:
      "Game outcomes and campaign rewards should not be treated as employment, interest, investment yield, repayment, or a reliable source of income.",
  },
];

const roadmapRisks = [
  {
    title: "Planned does not mean guaranteed",
    text:
      "Crypto Shooter, holder-linked benefits, transport-related tools, integrations, and other future ideas may be delayed, redesigned, reduced, or cancelled.",
  },
  {
    title: "No fixed delivery commitment",
    text:
      "A roadmap status is a development indicator, not a binding schedule or promise that a feature will launch by a particular date.",
  },
  {
    title: "Resources and priorities can change",
    text:
      "Security requirements, technical constraints, user feedback, market conditions, staffing, funding, and legal considerations can affect priorities.",
  },
  {
    title: "Partnerships and listings are uncertain",
    text:
      "Discussions, applications, submissions, audits, tracker pages, or outreach do not guarantee an exchange listing, integration, partnership, or approval.",
  },
];

const informationRisks = [
  {
    title: "Dynamic information changes",
    text:
      "Price, supply, liquidity, holder counts, volume, market capitalization, race deadlines, and audit-platform displays can change after a page is published.",
  },
  {
    title: "Data providers can disagree",
    text:
      "Different trackers may use different pools, calculation methods, update intervals, or definitions.",
  },
  {
    title: "Website content can contain errors",
    text:
      "RROTA aims to publish accurate information but cannot guarantee that every page, article, statistic, or third-party reference is complete or error-free.",
  },
  {
    title: "Official announcements may be updated",
    text:
      "A newer official post, product notice, terms update, or live interface may replace earlier information.",
  },
];

const regulatoryRisks = [
  {
    title: "Rules differ by jurisdiction",
    text:
      "Crypto assets, games, rewards, promotions, taxes, and wallet use may be treated differently depending on the user’s country or region.",
  },
  {
    title: "Access may become restricted",
    text:
      "RROTA or a third-party service may limit access because of legal, compliance, sanctions, age, location, or platform requirements.",
  },
  {
    title: "Tax obligations may apply",
    text:
      "Buying, selling, receiving rewards, withdrawing, or transferring digital assets may create reporting or tax obligations.",
  },
  {
    title: "Users must seek local advice",
    text:
      "RROTA does not provide legal, tax, regulatory, accounting, or investment advice. Qualified local professionals should be consulted where needed.",
  },
];

const userResponsibilities = [
  "Verify the full $RTA mint before buying, trading, or using a token-related application.",
  "Use only official RROTA domains, bots, community accounts, and resource links.",
  "Read every wallet request before signing or approving a transaction.",
  "Protect seed phrases, private keys, recovery codes, passwords, and login codes.",
  "Review current game rules before relying on a rank, reward, withdrawal, or campaign.",
  "Use an amount that can be lost without affecting essential expenses or obligations.",
  "Keep independent records of transactions, rewards, and tax-relevant activity.",
  "Stop and verify when a message creates urgency, requests payment, or promises guaranteed returns.",
];

const noGuarantees = [
  "Token price or market capitalization",
  "Liquidity or trading availability",
  "Exchange or tracker listings",
  "Product uptime or uninterrupted access",
  "Reward eligibility or payment",
  "Leaderboard accuracy without review",
  "Development dates or roadmap completion",
  "Partnerships, integrations, or approvals",
  "Profit, income, or recovery of losses",
  "The accuracy or availability of third-party services",
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

function WarningIcon() {
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
      <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

const RISK_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Risk Disclaimer",
      description:
        "Risk information covering the $RTA token, wallets, markets, RROTA products, leaderboards, rewards, third-party services, development plans, and regulatory change.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      about: {
        "@type": "Thing",
        name: "RROTA ecosystem risk information",
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
          name: "Risk Disclaimer",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function RiskDisclaimerPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RISK_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(245,158,11,0.10),transparent_28%),radial-gradient(circle_at_88%_4%,rgba(244,63,94,0.09),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-amber-100">
                <WarningIcon />
                Important risk information
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Understand the risks
                <span className="block bg-gradient-to-r from-amber-100 via-white to-rose-200 bg-clip-text text-transparent">
                  before using RROTA.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                RROTA includes a crypto asset, wallet interactions, a live game,
                leaderboard competition, reward campaigns, third-party services,
                and planned products. Each layer carries financial, technical,
                security, operational, and legal risk.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/terms"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-amber-300/22 bg-amber-400/[0.08] px-6 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.13] hover:text-white"
                >
                  Read terms
                </Link>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>

                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify $RTA
                  <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-rose-400/14 bg-rose-400/[0.035] p-6 shadow-[0_0_65px_rgba(244,63,94,0.08)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-300/72">
                Core warning
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                You can lose all value used in a crypto asset or product.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/58">
                Nothing on rrota.xyz, in RROTA products, community channels,
                articles, roadmaps, whitepapers, audits, or announcements is a
                promise of profit, repayment, reward, listing, or future value.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                  Official $RTA mint
                </div>
                <code className="mt-2 block break-all font-mono text-xs leading-6 text-white/74">
                  {TOKEN_ADDRESS}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[36px] border border-amber-400/14 bg-amber-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                  No professional advice
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Information is not a personal recommendation.
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-7 text-white/62 sm:text-base">
                <p>
                  RROTA content is provided for general project information,
                  education, product communication, and community updates. It is
                  not financial, investment, trading, legal, tax, accounting, or
                  regulatory advice.
                </p>

                <p>
                  RROTA does not evaluate a user’s financial position, location,
                  age, objectives, risk tolerance, tax circumstances, or legal
                  obligations. Users must make independent decisions and consult
                  qualified professionals where appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
              Core risk categories
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Financial, technical, wallet, product, and third-party risk.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {coreRisks.map((risk) => (
              <article
                key={risk.title}
                className={`rounded-[30px] border p-6 ${risk.tone}`}
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${risk.badge}`}
                >
                  Risk
                </span>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">
                  {risk.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {risk.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {risk.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-6 text-white/62"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                Spin-to-Win and rewards
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Game activity does not create guaranteed entitlement.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                The live product includes activity, leaderboards, campaigns, and
                potential rewards. Those features remain subject to current rules,
                technical availability, and fair-play review.
              </p>

              <a
                href={SPIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
              >
                Open live game
                <ExternalIcon />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {gameRisks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-fuchsia-400/14 bg-fuchsia-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                  Development and roadmap risk
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Future products may change before release.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Roadmap items describe direction and status. They are not binding
                  delivery promises, financial forecasts, or guarantees that a
                  concept will become a public product.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {roadmapRisks.map((item) => (
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

            <Link
              href="/roadmap"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/[0.07] px-4 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.12] hover:text-white"
            >
              Review current roadmap status
            </Link>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-300/72">
                Information and data risk
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Published information can become outdated.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {informationRisks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-sky-400/12 bg-sky-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-violet-300/72">
                Legal, tax, and regulatory risk
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Local rules may affect access and obligations.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {regulatoryRisks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-violet-400/12 bg-violet-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-emerald-400/14 bg-emerald-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                  User responsibilities
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Verification and security remain your responsibility.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  RROTA can publish official links and warnings, but users must
                  still protect their devices, accounts, wallets, recovery
                  information, and transaction approvals.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {userResponsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                No guarantees
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                RROTA does not promise a particular outcome.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {noGuarantees.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-rose-400/12 bg-rose-400/[0.035] p-4"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rose-400/18 bg-rose-400/[0.08] text-sm font-black text-rose-200"
                    aria-hidden="true"
                  >
                    ×
                  </span>
                  <span className="text-sm leading-6 text-white/62">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                  Independent verification
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Verify changing claims at the source.
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-7 text-white/60">
                <p>
                  Use Solscan for available on-chain token information, the live
                  game for current account and race status, the detailed roadmap
                  for development status, and the official links hub for external
                  resources.
                </p>

                <p>
                  Audit references, revoked authorities, public documentation, and
                  official links can improve transparency. None of them eliminates
                  all financial, technical, wallet, product, or third-party risk.
                </p>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                  <a
                    href={SOLSCAN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                  >
                    Verify on Solscan
                    <ExternalIcon />
                  </a>

                  <Link
                    href="/links"
                    className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    Official resource hub
                  </Link>

                  <Link
                    href="/tokenomics"
                    className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    Review tokenomics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-amber-400/16 bg-[linear-gradient(135deg,rgba(245,158,11,0.07),rgba(244,63,94,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Stop when something does not match.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Do not proceed when a domain, bot, token mint, wallet request,
                  reward message, deadline, or payment instruction conflicts with
                  the current official source.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/links"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-400/[0.08] px-5 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.13] hover:text-white"
                >
                  Verify official links
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Contact RROTA
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
