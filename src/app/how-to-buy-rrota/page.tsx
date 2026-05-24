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

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  jupiter: `https://jup.ag/tokens/${RROTA_MINT}`,
  solscan: `https://solscan.io/token/${RROTA_MINT}`,
  spin: "https://spin.rrota.xyz",
  links: "/links",
  tokenomics: "/tokenomics",
  roadmap: "/roadmap",
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
    title: "Add SOL for network fees",
    text: "You need SOL for the swap and small Solana network fees. Start with an amount you understand and can afford to risk.",
  },
  {
    number: "03",
    title: "Open Jupiter safely",
    text: "Use the official RROTA website or official links page before opening any trading link. Avoid links sent by unknown accounts.",
  },
  {
    number: "04",
    title: "Verify the official mint",
    text: `Before swapping, confirm the official $RTA mint address: ${RROTA_MINT}.`,
  },
  {
    number: "05",
    title: "Swap SOL to $RTA",
    text: "Choose your amount, review the transaction carefully, and approve the swap only if the token and details are correct.",
  },
  {
    number: "06",
    title: "Follow official channels",
    text: "After buying, use official RROTA channels for updates, Spin-to-Win access, safety notices, and ecosystem announcements.",
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
    <main
      className={`${spaceGrotesk.variable} ${orbitron.variable} min-h-screen overflow-hidden bg-[#03040a] text-white [font-family:var(--font-space-grotesk)]`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <PageNav />

      <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(217,70,239,0.20),transparent_34%),radial-gradient(circle_at_50%_95%,rgba(250,204,21,0.10),transparent_40%),linear-gradient(180deg,#040511_0%,#080717_55%,#03040a_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge>Official Buying Guide</Badge>
              <Badge tone="pink">$RTA on Solana</Badge>
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              <span className="[font-family:var(--font-orbitron)]">
                How to Buy
              </span>{" "}
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text [font-family:var(--font-orbitron)] text-transparent">
                RROTA ($RTA)
              </span>
              <span className="block [font-family:var(--font-orbitron)]">
                Safely.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              The official RROTA buying guide: verify the mint, open Jupiter
              through trusted sources, review every wallet transaction, and
              avoid fake links before swapping into $RTA.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={LINKS.jupiter}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 px-7 text-sm font-black uppercase tracking-[0.18em] !text-[#03040a] shadow-[0_0_46px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
                style={{ color: "#03040a" }}
              >
                <span className="absolute inset-0 translate-x-[-140%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] transition duration-700 group-hover:translate-x-[140%]" />
                <span className="relative">Buy on Jupiter</span>
              </a>

              <a
                href={LINKS.solscan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/[0.06] px-7 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
              >
                Verify Contract
              </a>

              <Link
                href={LINKS.links}
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-sm font-black uppercase tracking-[0.18em] text-white/85 transition hover:border-fuchsia-300/35 hover:bg-fuchsia-300/10 hover:text-white"
              >
                Official Links
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-yellow-300/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-[#080b16]/88 p-6 shadow-[0_0_80px_rgba(34,211,238,0.14)] backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />

              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                Official Solana Mint
              </p>

              <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.07] p-5">
                <p className="break-all font-mono text-sm font-semibold leading-7 text-cyan-50">
                  {RROTA_MINT}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <InfoRow label="Network" value="Solana" />
                <InfoRow label="Token" value="RROTA" />
                <InfoRow label="Ticker" value="$RTA" />
                <InfoRow label="Swap" value="Jupiter" />
                <InfoRow label="Verify" value="Solscan" />
              </div>

              <div className="mt-6 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-5">
                <p className="text-sm font-semibold leading-7 text-yellow-100">
                  Always verify the mint address before swapping. Do not trust
                  random DMs, fake support accounts, clone websites, or
                  screenshots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Step-by-step"
            title="Buy RROTA without guessing."
            text="Follow a simple, safer buying path: wallet, SOL, official links, mint verification, Jupiter swap, and final transaction review."
          />

          <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/8 blur-2xl transition group-hover:bg-fuchsia-400/10" />

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-100 [font-family:var(--font-orbitron)]">
                  {step.number}
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Safety checklist"
            title="Verify before you swap."
            text="RROTA users should treat verification as the first step. Fake token pages, look-alike domains, and private-message scams are common across crypto."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {safetyChecks.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-[#070a14]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                  ✓
                </div>
                <p className="text-sm font-medium leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            <ResourceCard
              title="Official Links"
              text="Verify RROTA resources before opening swap, chart, community, or game links."
              href="/links"
              label="Open links"
            />
            <ResourceCard
              title="Tokenomics"
              text="Review the $RTA token overview, utility context, safety notes, and on-chain references."
              href="/tokenomics"
              label="View tokenomics"
            />
            <ResourceCard
              title="Roadmap"
              text="Follow the ecosystem direction across Spin-to-Win, crypto gaming, rewards, and future utility."
              href="/roadmap"
              label="View roadmap"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="RROTA buying questions."
            text="Helpful answers for users who want to understand how to buy and verify RROTA safely."
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
            Ready to verify?
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
            Use the official mint and avoid fake RROTA links.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            RROTA does not need fake support accounts, private-message offers,
            or copied websites. Always verify the contract and review every
            wallet transaction before signing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.jupiter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] !text-[#03040a] transition hover:scale-[1.02]"
              style={{ color: "#03040a" }}
            >
              Buy on Jupiter
            </a>
            <a
              href={LINKS.spin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/8 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
            >
              Open Spin-to-Win
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageNav() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-[#03040a]/85 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-white/45">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          RROTA Official Page
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-300/45 hover:bg-cyan-300/15"
          >
            Home
          </Link>

          <Link
            href="/links"
            className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-xs font-black uppercase tracking-[0.16em] text-white/85 transition hover:border-fuchsia-300/35 hover:bg-fuchsia-300/10 hover:text-white"
          >
            Official Links
          </Link>

          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-xs font-black uppercase tracking-[0.16em] text-white/85 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
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
    <Link
      href={href}
      className="group rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-white/[0.065]"
    >
      <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
        {title}
      </h3>
      <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-300">
        {text}
      </p>
      <span className="mt-5 inline-flex rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition group-hover:border-cyan-300/45 group-hover:bg-cyan-300/10">
        {label}
      </span>
    </Link>
  );
}
