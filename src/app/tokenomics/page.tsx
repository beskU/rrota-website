import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import RrotaMarketTerminal from "../components/rrota-market-terminal";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/tokenomics`;

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SPIN_URL = "https://spin.rrota.xyz";
const SOLIDPROOF_URL = "https://app.solidproof.io/projects/rrota";
const FRESHCOINS_URL = "https://freshcoins.io/audit/rrota";

export const metadata: Metadata = {
  title: "RROTA Tokenomics",
  description:
    "Review the official $RTA token structure, Solana mint, live market references, supply and burn verification principles, current utility, and planned ecosystem roles.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Tokenomics",
    description:
      "Official $RTA token facts, live market references, utility roles, supply transparency, and on-chain verification guidance.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Tokenomics",
    description:
      "Explore the official $RTA token structure, utility, market references, and on-chain verification guidance.",
  },
};

const permanentFacts = [
  {
    label: "Token",
    value: "RROTA",
    detail: "The shared token layer of the RROTA ecosystem.",
  },
  {
    label: "Symbol",
    value: "$RTA",
    detail: "Use the mint—not the ticker alone—to verify the token.",
  },
  {
    label: "Network",
    value: "Solana",
    detail: "Issued as a Solana Program Library token.",
  },
  {
    label: "Token standard",
    value: "SPL",
    detail: "Compatible with Solana wallets and applications.",
  },
  {
    label: "Mint authority",
    value: "Revoked",
    detail: "Review the current authority status directly on Solscan.",
  },
  {
    label: "Freeze authority",
    value: "Revoked",
    detail: "Review the current authority status directly on Solscan.",
  },
];

const utilityLayers = [
  {
    status: "Live",
    title: "Product participation",
    text:
      "$RTA is connected to the first live RROTA product layer through Spin-to-Win, player activity, reward systems, and the wider leaderboard ecosystem.",
    examples: [
      "Spin-to-Win ecosystem participation",
      "Weekly, monthly, and yearly races",
      "Reward and campaign systems",
    ],
    tone: "border-cyan-400/18 bg-cyan-400/[0.055]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    status: "Live",
    title: "Community rewards",
    text:
      "$RTA can support published community campaigns, game-related rewards, and ecosystem participation where the rules and eligibility are clearly defined.",
    examples: [
      "Published campaign rewards",
      "Player and community incentives",
      "Official promotional activities",
    ],
    tone: "border-emerald-400/18 bg-emerald-400/[0.05]",
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
  {
    status: "In progress",
    title: "Holder-linked benefits",
    text:
      "RROTA is developing clearer connections between verified wallet holdings, eligibility, product access, and ecosystem benefits.",
    examples: [
      "Wallet-linked eligibility",
      "Holder benefit definitions",
      "Testing before wider activation",
    ],
    tone: "border-fuchsia-400/18 bg-fuchsia-400/[0.05]",
    badge: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    status: "Planned",
    title: "Cross-product utility",
    text:
      "Longer-term utility may connect $RTA with additional games, community tools, progression systems, and validated practical-use products.",
    examples: [
      "Crypto Shooter development",
      "Expanded community tools",
      "Future validated utility products",
    ],
    tone: "border-amber-400/18 bg-amber-400/[0.045]",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-100",
  },
];

const transparencyItems = [
  {
    number: "01",
    title: "Supply",
    text:
      "Current supply should come from an on-chain source or a validated server endpoint. This page does not substitute a stale hard-coded number when live data is unavailable.",
  },
  {
    number: "02",
    title: "Burns",
    text:
      "A burn should be documented with the amount, date, and Solana transaction or account evidence. Announcements alone are not the strongest form of proof.",
  },
  {
    number: "03",
    title: "Liquidity",
    text:
      "Liquidity changes over time. Review the active pool, locked-liquidity evidence, and current tracker data instead of relying on an old website snapshot.",
  },
  {
    number: "04",
    title: "Market value",
    text:
      "Price, market capitalization, volume, and holder counts are dynamic estimates and may differ across data providers.",
  },
];

const verificationSteps = [
  {
    title: "Start with the mint",
    text:
      "Compare the full Solana mint address. Names, tickers, logos, and social profiles can be copied.",
  },
  {
    title: "Open the token on Solscan",
    text:
      "Review authorities, token supply, holders, transfers, accounts, and other available on-chain information.",
  },
  {
    title: "Review the trading destination",
    text:
      "Use the official Jupiter token route or paste the verified mint into a trusted interface.",
  },
  {
    title: "Check current market sources",
    text:
      "Compare live pool and market information rather than relying on a screenshot or forwarded message.",
  },
  {
    title: "Review every transaction",
    text:
      "Confirm the token, amount, fees, slippage, destination, and wallet request before signing.",
  },
];

const limitations = [
  "Token utility does not guarantee token demand or price appreciation.",
  "A revoked authority does not remove trading, wallet, smart-contract, or market risk.",
  "An audit is not a guarantee that every future product or integration is risk-free.",
  "Liquidity, volume, holder counts, and market capitalization can change rapidly.",
  "Planned products and holder benefits are not live until officially released and documented.",
  "Listings, partnerships, rewards, and development dates are never guaranteed by this page.",
];

const faqItems = [
  {
    question: "What is the official RROTA mint?",
    answer: TOKEN_ADDRESS,
  },
  {
    question: "Does this page show a fixed $RTA supply?",
    answer:
      "No. Supply is dynamic and should be loaded from a validated data source or checked directly on Solscan. The website should not replace unavailable data with an invented fallback number.",
  },
  {
    question: "How should RROTA burns be verified?",
    answer:
      "A burn should be supported by the amount, date, and on-chain evidence such as a Solana transaction or account record. Official announcements can provide context but should not replace verification.",
  },
  {
    question: "Is all planned $RTA utility already active?",
    answer:
      "No. Live utility, active development, and planned utility are separated on this page. Planned features should not be treated as launched products.",
  },
  {
    question: "Where can $RTA be accessed?",
    answer:
      "The official website links to Jupiter for token access. Always confirm the full Solana mint before swapping.",
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

const TOKENOMICS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Tokenomics",
      description:
        "Official $RTA token facts, utility roles, live market references, supply transparency, and verification guidance.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      about: {
        "@type": "Thing",
        name: "RROTA ($RTA)",
        description: "A Solana token used across the RROTA ecosystem.",
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

export default function TokenomicsPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(TOKENOMICS_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_6%,rgba(34,211,238,0.13),transparent_29%),radial-gradient(circle_at_88%_5%,rgba(217,70,239,0.11),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pb-18 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/9 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                Official $RTA token reference
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Token facts first.
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Utility without invented numbers.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                RROTA tokenomics explains the permanent structure of $RTA, how the
                token connects to current and planned ecosystem products, and how
                dynamic supply, burn, liquidity, and market claims should be
                independently checked.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={JUPITER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Open Jupiter
                  <ExternalIcon />
                </a>

                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:border-cyan-300/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Verify on Solscan
                  <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-cyan-400/16 bg-cyan-400/[0.055] p-5 backdrop-blur-xl sm:p-6">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/72">
                Official Solana mint
              </div>

              <code className="mt-3 block break-all font-mono text-sm font-semibold leading-7 text-white/86">
                {TOKEN_ADDRESS}
              </code>

              <p className="mt-4 text-sm leading-7 text-white/56">
                The mint is the primary identifier. Do not verify RROTA using only
                the name, ticker, logo, or a link received in a private message.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {permanentFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/38">
                  {fact.label}
                </div>
                <div className="mt-2 text-2xl font-black text-white">
                  {fact.value}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/52">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative py-12 sm:py-16">
          <RrotaMarketTerminal />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Utility model
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Separate what works today from what is still being built.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              Token utility should not be presented as complete before the related
              product, rule, or eligibility system is actually available.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {utilityLayers.map((item) => (
              <article
                key={`${item.status}-${item.title}`}
                className={`rounded-[30px] border p-6 ${item.tone}`}
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${item.badge}`}
                >
                  {item.status}
                </span>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.text}
                </p>

                <ul className="mt-5 space-y-2">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="flex gap-3 text-sm leading-6 text-white/64"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={SPIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/9 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/15 hover:text-white"
            >
              Open Spin-to-Win
              <ExternalIcon />
            </a>

            <Link
              href="/roadmap"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-sm font-black text-white/76 transition hover:bg-white/[0.07] hover:text-white"
            >
              Review development status
            </Link>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                Supply and burn transparency
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Every changing number needs a source.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                Static website copy is not the best source for dynamic blockchain
                and market data. The strongest record is a live or permanently
                inspectable source.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {transparencyItems.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="font-mono text-xs font-black text-emerald-300/56">
                    {item.number}
                  </div>
                  <h3 className="mt-3 text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-cyan-400/16 bg-cyan-400/[0.045] p-6 sm:p-8">
            <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                  <ShieldIcon />
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  A safer verification flow.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Start from an identifier you can compare, then move toward the
                  transaction interface. Do not reverse that order after receiving
                  an unknown link.
                </p>
              </div>

              <ol className="space-y-3">
                {verificationSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-3 rounded-2xl border border-white/10 bg-black/15 p-4 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/18 bg-cyan-400/9 font-mono text-xs font-black text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="font-black text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/56">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-cyan-300/12 pt-6 sm:flex-row sm:flex-wrap">
              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/16 hover:text-white"
              >
                Solscan
                <ExternalIcon />
              </a>

              <a
                href={SOLIDPROOF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                SolidProof
                <ExternalIcon />
              </a>

              <a
                href={FRESHCOINS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                FreshCoins
                <ExternalIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                Important limits
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                What tokenomics does not guarantee.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/58">
                Token design, public documentation, revoked authorities, and audits
                can improve transparency. They do not remove financial or technical
                risk.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {limitations.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-amber-400/13 bg-amber-400/[0.045] p-4"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-200" />
                  <p className="text-sm leading-6 text-white/62">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                Tokenomics FAQ
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Common $RTA questions.
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.question}</h3>
                  <p className="mt-2 break-words text-sm leading-7 text-white/58">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.08))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Verify first. Interact second.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Use the official mint, live on-chain sources, and the current
                  roadmap before buying or relying on a utility claim.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/roadmap"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Review roadmap
                </Link>

                <Link
                  href="/risk-disclaimer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-amber-400/16 bg-amber-400/[0.06] px-5 text-sm font-black text-amber-100 transition hover:bg-amber-400/10 hover:text-white"
                >
                  Read risk disclaimer
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
