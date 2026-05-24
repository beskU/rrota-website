import type { Metadata } from "next";
import Link from "next/link";

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const officialLinks = {
  jupiter: `https://jup.ag/tokens/${RROTA_MINT}`,
  solscan: `https://solscan.io/token/${RROTA_MINT}`,
  spin: "https://spin.rrota.xyz",
  phantom: "https://phantom.app",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
  links: "/links",
  tokenomics: "/tokenomics",
  roadmap: "/roadmap",
  whitepaper: "/whitepaper",
};

export const metadata: Metadata = {
  title: "How to Buy RROTA ($RTA) on Jupiter — Official Guide",
  description:
    "Learn how to buy RROTA ($RTA) safely on Jupiter using the official Solana mint address. Verify the RROTA contract, avoid fake links, and follow the official buying steps.",
  keywords: [
    "How to buy RROTA",
    "Buy RROTA",
    "RROTA coin",
    "RROTA token",
    "RTA token",
    "RROTA Solana",
    "RROTA Jupiter",
    "RROTA contract address",
    "RROTA official guide",
    "RROTA Spin-to-Win",
  ],
  alternates: {
    canonical: "https://rrota.xyz/how-to-buy-rrota",
  },
  openGraph: {
    title: "How to Buy RROTA ($RTA) on Jupiter",
    description:
      "Official step-by-step guide to buy RROTA ($RTA) safely on Solana using Jupiter and the verified RROTA mint address.",
    url: "https://rrota.xyz/how-to-buy-rrota",
    siteName: "RROTA",
    type: "article",
    images: [
      {
        url: "https://rrota.xyz/rrota-og.png",
        width: 1200,
        height: 630,
        alt: "How to Buy RROTA on Jupiter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy RROTA ($RTA) on Jupiter",
    description:
      "Official step-by-step guide to buy RROTA safely using the verified Solana mint address.",
    images: ["https://rrota.xyz/rrota-og.png"],
  },
};

const steps = [
  {
    number: "01",
    title: "Install a Solana wallet",
    text: "Use a trusted Solana wallet such as Phantom. Keep your seed phrase private and never share it with anyone.",
  },
  {
    number: "02",
    title: "Add SOL to your wallet",
    text: "You need SOL for the swap and small Solana network fees. Start with an amount you understand and can afford to risk.",
  },
  {
    number: "03",
    title: "Open Jupiter from an official source",
    text: "Use the official RROTA website or official links page before opening any trading link. Avoid links sent by unknown accounts or private messages.",
  },
  {
    number: "04",
    title: "Verify the official RROTA mint",
    text: `Before swapping, confirm the official $RTA mint address: ${RROTA_MINT}.`,
  },
  {
    number: "05",
    title: "Swap SOL to $RTA",
    text: "After verifying the token, choose your amount, review the transaction carefully, and approve the swap only if everything is correct.",
  },
  {
    number: "06",
    title: "Use only official RROTA links",
    text: "After buying, follow official RROTA channels for updates, Spin-to-Win access, safety notices, and ecosystem announcements.",
  },
];

const safetyChecks = [
  "Verify the official mint address before swapping.",
  "Use only rrota.xyz, official RROTA social links, and trusted market tools.",
  "Never trust private messages claiming to be support.",
  "Never share your seed phrase or private key.",
  "Check the wallet transaction before approving it.",
  "Avoid fake RROTA websites, clone tokens, and random swap links.",
];

const faqs = [
  {
    question: "Where can I buy RROTA?",
    answer:
      "RROTA ($RTA) can be bought on Solana through Jupiter using the official RROTA mint address. Always verify the token before swapping.",
  },
  {
    question: "What is the official RROTA mint address?",
    answer: `The official RROTA ($RTA) Solana mint address is ${RROTA_MINT}. Always verify this address before trading or connecting to any third-party tool.`,
  },
  {
    question: "Is RROTA on Solana?",
    answer:
      "Yes. RROTA ($RTA) is a Solana SPL token connected to the wider RROTA ecosystem, including the Spin-to-Win utility and future ecosystem plans.",
  },
  {
    question: "Do I need Phantom to buy RROTA?",
    answer:
      "You can use a compatible Solana wallet. Phantom is one common option for Solana users, but you should use a wallet you trust and understand.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. This guide is for education and safety only. Crypto assets are risky, prices can change quickly, and users should always do their own research.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rrota.xyz/how-to-buy-rrota#webpage",
      url: "https://rrota.xyz/how-to-buy-rrota",
      name: "How to Buy RROTA ($RTA) on Jupiter",
      description:
        "Official guide explaining how to buy RROTA safely on Solana using Jupiter and the verified RROTA mint address.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: "https://rrota.xyz",
      },
    },
    {
      "@type": "HowTo",
      name: "How to Buy RROTA ($RTA) on Jupiter",
      description:
        "Step-by-step guide to buy RROTA safely on Solana using Jupiter.",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.text,
      })),
    },
  ],
};

export default function HowToBuyRROTA() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05020d] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.12),transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Official Buying Guide
              </span>
              <span className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
                $RTA on Solana
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              How to Buy{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-yellow-200 bg-clip-text text-transparent">
                RROTA ($RTA)
              </span>{" "}
              Safely on Jupiter
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              This official guide explains how to buy RROTA ($RTA) on Solana,
              how to verify the correct mint address, how to avoid fake links,
              and how to use the official RROTA ecosystem safely.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={officialLinks.jupiter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
              >
                Buy $RTA on Jupiter
              </a>
              <a
                href={officialLinks.solscan}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/8 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/50 hover:bg-white/12"
              >
                Verify Contract
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_0_60px_rgba(168,85,247,0.18)] backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
              Official Solana Mint
            </p>
            <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4">
              <p className="break-all font-mono text-sm leading-7 text-cyan-100">
                {RROTA_MINT}
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <InfoRow label="Network" value="Solana" />
              <InfoRow label="Token" value="RROTA" />
              <InfoRow label="Ticker" value="$RTA" />
              <InfoRow label="Main swap tool" value="Jupiter" />
              <InfoRow label="Verification" value="Solscan" />
            </div>

            <p className="mt-6 rounded-2xl border border-yellow-300/20 bg-yellow-300/10 p-4 text-sm leading-7 text-yellow-100">
              Safety note: always verify the mint address before swapping. Do
              not trust random DMs, fake support accounts, clone websites, or
              screenshots.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">
              Step-by-step
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Buy RROTA the safe way.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              RROTA is a Solana token, so the buying path is simple: use a
              Solana wallet, keep SOL for fees, open Jupiter, verify the
              official $RTA mint, and review every transaction before signing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-100">
                  {step.number}
                </div>
                <h3 className="text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.text}
                </p>
              </article>
            ))}
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
              Verify before you swap.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Crypto scams often use fake token pages, look-alike domains, fake
              Telegram accounts, and private messages. Treat verification as the
              first step, not the last step.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={officialLinks.links}
                className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-center text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15"
              >
                Official RROTA Links
              </Link>
              <Link
                href={officialLinks.tokenomics}
                className="rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/12"
              >
                View Tokenomics
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {safetyChecks.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-200">
                  ✓
                </div>
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <ResourceCard
              title="Official Links"
              text="Use the official links page to verify RROTA resources before opening swap, chart, community, or game links."
              href="/links"
              label="Open links"
            />
            <ResourceCard
              title="RROTA Tokenomics"
              text="Review the $RTA token overview, utility context, safety notes, and on-chain verification resources."
              href="/tokenomics"
              label="View tokenomics"
            />
            <ResourceCard
              title="RROTA Roadmap"
              text="Follow the ecosystem direction across Spin-to-Win, crypto gaming, community rewards, and future utility plans."
              href="/roadmap"
              label="View roadmap"
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
            RROTA buying questions.
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
            Ready to verify?
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Use the official mint and avoid fake RROTA links.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            RROTA does not need hype links, private DMs, or fake support
            accounts. Always verify the contract, use official pages, and review
            your wallet transaction before signing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={officialLinks.jupiter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:scale-[1.02]"
            >
              Buy on Jupiter
            </a>
            <a
              href={officialLinks.spin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/8 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
            >
              Open Spin-to-Win
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <span className="text-sm font-black text-white">{value}</span>
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
  return (
    <article className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-white/[0.075]">
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-300">
        {text}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
      >
        {label}
      </Link>
    </article>
  );
}
