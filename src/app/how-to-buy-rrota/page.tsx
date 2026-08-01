import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/how-to-buy-rrota`;

const RROTA_MINT =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const JUPITER_URL = `https://jup.ag/tokens/${RROTA_MINT}`;
const SOLSCAN_URL = `https://solscan.io/token/${RROTA_MINT}`;
const SPIN_URL = "https://spin.rrota.xyz";

export const metadata: Metadata = {
  title: "How to Buy RROTA ($RTA)",
  description:
    "A safety-first guide to accessing RROTA ($RTA) on Solana through Jupiter. Verify the official mint, review every wallet transaction, and avoid fake links.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Buy RROTA ($RTA)",
    description:
      "Follow the official RROTA buying guide: prepare a Solana wallet, verify the $RTA mint, open Jupiter safely, and review the swap before signing.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy RROTA ($RTA)",
    description:
      "A safety-first guide to verifying and accessing $RTA through Jupiter on Solana.",
  },
};

type GuideStep = {
  number: string;
  title: string;
  summary: string;
  checklist: string[];
  action?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

const guideSteps: GuideStep[] = [
  {
    number: "01",
    title: "Prepare a compatible Solana wallet",
    summary:
      "Use a Solana wallet you understand and control. Create or import it only through the wallet provider’s official application or website.",
    checklist: [
      "Back up the recovery phrase offline",
      "Never send the recovery phrase to support",
      "Use a separate wallet for experimental applications when appropriate",
      "Confirm the wallet is connected to Solana",
    ],
  },
  {
    number: "02",
    title: "Fund the wallet with SOL",
    summary:
      "SOL is needed for the amount you intend to swap and for Solana network fees. Transfer only an amount you understand and can afford to risk.",
    checklist: [
      "Confirm the destination wallet address",
      "Send a small test amount when using a new withdrawal route",
      "Keep enough SOL available for network fees",
      "Wait for the transfer to appear before continuing",
    ],
  },
  {
    number: "03",
    title: "Verify the official $RTA mint",
    summary:
      "The mint address is the token’s primary identifier. A copied name, ticker, logo, or social profile is not enough to verify the real token.",
    checklist: [
      "Compare every character of the mint",
      "Open the token through the official Solscan route",
      "Do not rely on screenshots or shortened addresses",
      "Reject any token page showing a different mint",
    ],
    action: {
      label: "Verify on Solscan",
      href: SOLSCAN_URL,
      external: true,
    },
  },
  {
    number: "04",
    title: "Open Jupiter through the official route",
    summary:
      "Use the direct Jupiter token route published on rrota.xyz. Avoid swap links sent through private messages, replies, advertisements, or unknown websites.",
    checklist: [
      "Confirm the browser domain before connecting",
      "Check that the selected output token is the verified $RTA mint",
      "Do not approve unrelated wallet requests",
      "Close the page if the token or destination changes unexpectedly",
    ],
    action: {
      label: "Open Jupiter",
      href: JUPITER_URL,
      external: true,
    },
  },
  {
    number: "05",
    title: "Choose the amount and review the quote",
    summary:
      "Enter the amount you want to swap, then inspect the route, expected output, price impact, slippage, fees, and wallet balance.",
    checklist: [
      "Start with an amount you understand",
      "Review the expected $RTA output",
      "Check price impact and slippage",
      "Keep enough SOL for fees and future transactions",
    ],
  },
  {
    number: "06",
    title: "Review the wallet transaction before signing",
    summary:
      "The wallet confirmation is the final checkpoint. Read the transaction details and reject anything that does not match the intended swap.",
    checklist: [
      "Confirm the connected wallet",
      "Confirm the token and amount",
      "Review requested permissions",
      "Reject unexpected approvals, transfers, or account changes",
    ],
  },
  {
    number: "07",
    title: "Verify the completed swap",
    summary:
      "After confirmation, check the wallet balance and transaction history. Use Solscan when you need an independent on-chain record.",
    checklist: [
      "Wait for the transaction to finalize",
      "Confirm the received token uses the official mint",
      "Save the transaction signature when needed",
      "Do not repeat the swap because a wallet interface updates slowly",
    ],
  },
  {
    number: "08",
    title: "Continue through official RROTA products",
    summary:
      "Use the official website for ecosystem updates, Spin-to-Win access, roadmap progress, token information, and security notices.",
    checklist: [
      "Bookmark rrota.xyz",
      "Use the official links directory",
      "Review product rules before participating",
      "Ignore private messages offering special access or returns",
    ],
    action: {
      label: "Explore Spin-to-Win",
      href: SPIN_URL,
      external: true,
    },
  },
];

const preSwapChecks = [
  {
    title: "Correct domain",
    text:
      "Check the full website address before connecting a wallet. Look-alike characters and copied designs are common phishing methods.",
  },
  {
    title: "Correct mint",
    text:
      "The official mint must match exactly. The ticker $RTA alone is not a reliable identifier.",
  },
  {
    title: "Reasonable transaction",
    text:
      "The wallet request should match the action you initiated. Reject unexpected token transfers, permissions, or account changes.",
  },
  {
    title: "Known risk",
    text:
      "Crypto assets can lose value and liquidity can change quickly. Use an amount you can afford to lose.",
  },
];

const commonMistakes = [
  {
    title: "Searching only by token name",
    text:
      "Clone tokens can use the same name and symbol. Always verify the complete mint address.",
  },
  {
    title: "Opening links from private messages",
    text:
      "Impersonators may claim to be support, administrators, promoters, or team members. Start from rrota.xyz instead.",
  },
  {
    title: "Signing before reading",
    text:
      "A familiar interface does not make every wallet request safe. Review the requested action before approving it.",
  },
  {
    title: "Using the entire wallet balance",
    text:
      "Keep SOL available for network fees and avoid committing funds needed for other obligations.",
  },
  {
    title: "Expecting guaranteed returns",
    text:
      "RROTA utility, product development, audits, or community activity do not guarantee price appreciation.",
  },
  {
    title: "Sharing recovery information",
    text:
      "No legitimate RROTA representative or wallet provider needs your seed phrase, private key, or recovery code.",
  },
];

const faqItems = [
  {
    question: "What is the official RROTA mint address?",
    answer: RROTA_MINT,
  },
  {
    question: "Where is the official Jupiter route?",
    answer:
      "The official guide links directly to Jupiter using the verified RROTA mint. You can also begin from the RROTA official links page.",
  },
  {
    question: "Do I need a specific Solana wallet?",
    answer:
      "No single wallet is required by this guide. Use a compatible Solana wallet that you trust, understand, and obtained from its official source.",
  },
  {
    question: "How much SOL should I use?",
    answer:
      "That is a personal financial decision. Use only an amount you understand and can afford to lose, while keeping enough SOL for network fees.",
  },
  {
    question: "Why does the quoted amount change?",
    answer:
      "Swap quotes can change because token price, liquidity, routing, slippage, and network conditions are dynamic.",
  },
  {
    question: "Is buying $RTA required to use every RROTA page?",
    answer:
      "No. Public information, roadmap pages, the blog, and official resources can be viewed without buying the token. Product-specific rules may vary.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. This page is educational and focuses on verification and transaction safety. It does not recommend an investment amount or promise returns.",
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
      className="h-7 w-7"
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

const HOW_TO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "How to Buy RROTA ($RTA)",
      description:
        "A safety-first guide to accessing RROTA through Jupiter using the verified Solana mint.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
    },
    {
      "@type": "HowTo",
      "@id": `${PAGE_URL}#howto`,
      name: "How to Buy RROTA ($RTA) on Jupiter",
      description:
        "Prepare a Solana wallet, verify the official RROTA mint, review the Jupiter quote, and confirm the wallet transaction safely.",
      totalTime: "PT15M",
      supply: [
        {
          "@type": "HowToSupply",
          name: "A compatible Solana wallet",
        },
        {
          "@type": "HowToSupply",
          name: "SOL for the intended swap and network fees",
        },
      ],
      tool: [
        {
          "@type": "HowToTool",
          name: "Jupiter",
        },
        {
          "@type": "HowToTool",
          name: "Solscan",
        },
      ],
      step: guideSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: `${step.summary} ${step.checklist.join(". ")}.`,
        url: `${PAGE_URL}#step-${index + 1}`,
      })),
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

export default function HowToBuyRrotaPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(HOW_TO_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_6%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_88%_5%,rgba(217,70,239,0.11),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/9 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                Official safety-first guide
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                How to access RROTA
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  without skipping verification.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                Prepare a Solana wallet, confirm the official $RTA mint, open
                Jupiter through a trusted route, and review every transaction
                before signing. Buying a token is optional; safe verification is
                not.
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
                  Verify $RTA first
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_60px_rgba(34,211,238,0.10)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/9 text-cyan-100">
                  <ShieldIcon />
                </div>

                <span className="rounded-full border border-amber-400/18 bg-amber-400/[0.07] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-amber-100">
                  Verify before connecting
                </span>
              </div>

              <div className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Official Solana mint
              </div>

              <code className="mt-3 block break-all font-mono text-sm font-semibold leading-7 text-white/84">
                {RROTA_MINT}
              </code>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Network", "Solana"],
                  ["Token", "RROTA"],
                  ["Symbol", "$RTA"],
                  ["Official route", "Jupiter"],
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

              <p className="mt-5 text-xs leading-6 text-white/48">
                Never verify a token using only its name, symbol, price, logo, or
                a screenshot.
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Before opening a swap
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Complete four checks first.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              These checks reduce avoidable mistakes before a wallet is connected
              or a transaction is created.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {preSwapChecks.map((check, index) => (
              <div
                key={check.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="font-mono text-xs font-black text-cyan-300/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {check.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="sticky top-28">
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                  Step-by-step
                </div>

                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                  A safer path from wallet setup to final verification.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                  Move through the steps in order. The verification step comes
                  before the trading interface—not after it.
                </p>

                <div className="mt-6 rounded-2xl border border-amber-400/14 bg-amber-400/[0.05] p-4 text-sm leading-6 text-amber-100/72">
                  This guide does not recommend an investment amount or guarantee
                  that buying $RTA is suitable for you.
                </div>
              </div>
            </div>

            <ol className="space-y-4">
              {guideSteps.map((step, index) => (
                <li
                  id={`step-${index + 1}`}
                  key={step.number}
                  className="scroll-mt-28 rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6"
                >
                  <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/9 font-mono text-xs font-black text-cyan-200">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.03em] text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/60">
                        {step.summary}
                      </p>

                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {step.checklist.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 rounded-xl border border-white/[0.07] bg-black/15 p-3 text-sm leading-6 text-white/60"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {step.action ? (
                        step.action.external ? (
                          <a
                            href={step.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/9 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/15 hover:text-white"
                          >
                            {step.action.label}
                            <ExternalIcon />
                          </a>
                        ) : (
                          <Link
                            href={step.action.href}
                            className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/9 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/15 hover:text-white"
                          >
                            {step.action.label}
                          </Link>
                        )
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                Avoidable mistakes
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Most wallet losses do not begin with advanced technology.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                They often begin with a copied link, rushed approval, false support
                message, or an assumption that a token name proves authenticity.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {commonMistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className="rounded-2xl border border-rose-400/12 bg-rose-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{mistake.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {mistake.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-cyan-400/16 bg-cyan-400/[0.045] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                  After the transaction
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Verification continues after the swap.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Confirm what was received, keep records when needed, and continue
                  through official product and community routes.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Confirm the received token uses the official mint.",
                  "Check the transaction signature on Solscan when needed.",
                  "Keep enough SOL for future network transactions.",
                  "Review product rules before deposits, withdrawals, or rewards.",
                  "Use official channels for support and announcements.",
                  "Never respond to recovery, verification, or investment DMs.",
                ].map((item) => (
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

            <div className="mt-7 flex flex-col gap-3 border-t border-cyan-300/12 pt-6 sm:flex-row sm:flex-wrap">
              <Link
                href="/tokenomics"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Review tokenomics
              </Link>

              <Link
                href="/roadmap"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Review roadmap
              </Link>

              <Link
                href="/risk-disclaimer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-amber-400/15 bg-amber-400/[0.055] px-4 text-sm font-black text-amber-100 transition hover:bg-amber-400/10 hover:text-white"
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
                Buying guide FAQ
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Common questions before using Jupiter.
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.question}</h3>
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
                  The official mint is your first checkpoint.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Verify the token on Solscan before opening Jupiter. Then review
                  the quote and wallet transaction before approving anything.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Verify first
                  <ExternalIcon />
                </a>

                <a
                  href={JUPITER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/16 hover:text-white"
                >
                  Then open Jupiter
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
