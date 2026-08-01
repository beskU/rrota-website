import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/ai`;
const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const RROTA_ASSISTANT_URL =
  "https://chatgpt.com/g/g-6a10b37f0bc48191a130acf6d3f24390-rrota-assistant";

const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;

export const metadata: Metadata = {
  title: "RROTA AI Assistant",
  description:
    "Use the official RROTA AI Assistant to learn about the $RTA token, Spin-to-Win, ecosystem products, official links, wallet safety, and roadmap progress.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA AI Assistant",
    description:
      "An official informational assistant for the RROTA ecosystem, $RTA token, Spin-to-Win, safety guidance, and project onboarding.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA AI Assistant",
    description:
      "Explore the RROTA ecosystem with an official informational assistant focused on clarity, safety, and onboarding.",
  },
};

const capabilityCards = [
  {
    number: "01",
    title: "Understand RROTA",
    text:
      "Get a clear introduction to the $RTA token, the wider RROTA ecosystem, current products, development direction, and official terminology.",
  },
  {
    number: "02",
    title: "Explore Spin-to-Win",
    text:
      "Learn how the first public RROTA product works, where to access it, how leaderboard competition is structured, and where official rules are published.",
  },
  {
    number: "03",
    title: "Find verified resources",
    text:
      "Locate the official website, Solana mint, project pages, community channels, buying guide, whitepaper, audits, and market references.",
  },
  {
    number: "04",
    title: "Improve wallet safety",
    text:
      "Review basic wallet-safety practices, contract verification, link checking, transaction review, and common impersonation risks.",
  },
];

const suggestedPrompts = [
  "What is RROTA and what is live today?",
  "How do I verify the official $RTA token?",
  "How does RROTA Spin-to-Win work?",
  "Where can I find the official RROTA links?",
  "What is RROTA AI designed to help with?",
  "Which RROTA products are live, in progress, or planned?",
];

const trustPoints = [
  "Use the assistant for education and project navigation.",
  "Verify token and market information through official sources.",
  "Never share a seed phrase, private key, password, or recovery code.",
  "Review every wallet transaction before signing.",
  "Treat future plans as development goals, not guaranteed delivery dates.",
  "Do not treat AI responses as financial, legal, or tax advice.",
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
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function SparkIcon() {
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
      <path d="m12 3-1.8 4.2L6 9l4.2 1.8L12 15l1.8-4.2L18 9l-4.2-1.8L12 3Z" />
      <path d="m5 15-.9 2.1L2 18l2.1.9L5 21l.9-2.1L8 18l-2.1-.9L5 15Z" />
      <path d="m19 13-.9 2.1L16 16l2.1.9L19 19l.9-2.1L22 16l-2.1-.9L19 13Z" />
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

const SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "RROTA AI Assistant",
  url: PAGE_URL,
  applicationCategory: "ReferenceApplication",
  operatingSystem: "Web",
  description:
    "An informational assistant for the RROTA ecosystem, $RTA token, Spin-to-Win, official resources, wallet safety, and onboarding.",
  publisher: {
    "@type": "Organization",
    name: "RROTA",
    url: SITE_URL,
  },
  sameAs: RROTA_ASSISTANT_URL,
};

export default function RrotaAiPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SOFTWARE_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.12),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                RROTA AI
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Understand the RROTA ecosystem
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  with an official AI guide.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
                RROTA AI helps visitors learn about the $RTA token, live products,
                official resources, wallet safety, roadmap progress, and the wider
                ecosystem without searching through multiple pages first.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={RROTA_ASSISTANT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 text-sm font-black text-white shadow-[0_0_34px_rgba(34,211,238,0.20)] transition hover:brightness-110"
                >
                  Open RROTA Assistant
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-7 text-sm font-black text-white/84 transition hover:border-cyan-300/24 hover:bg-cyan-400/8 hover:text-white"
                >
                  View official links
                </Link>
              </div>

              <p className="mt-5 max-w-2xl text-xs leading-6 text-white/42">
                The assistant is hosted on ChatGPT and is intended for information
                and onboarding. Availability may depend on ChatGPT access.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[38px] border border-cyan-400/18 bg-white/[0.04] p-6 shadow-[0_0_70px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_35%)]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.15)]">
                      <SparkIcon />
                    </div>

                    <span className="rounded-full border border-emerald-400/18 bg-emerald-400/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-200">
                      Available
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-white">
                    One assistant. Clearer project navigation.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Ask a question in plain language and use the answer as a starting
                    point. Important claims should still be checked against the
                    official website and on-chain sources.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Network", "Solana"],
                      ["Token", "$RTA"],
                      ["Purpose", "Education"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
                          {label}
                        </div>
                        <div className="mt-1 text-sm font-black text-white">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300/68">
                      Official $RTA mint
                    </div>
                    <code className="mt-2 block break-all font-mono text-xs leading-6 text-white/70">
                      {TOKEN_ADDRESS}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              What it can help with
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              A clearer starting point for new and existing users.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {capabilityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <div className="font-mono text-xs font-black text-cyan-300/54">
                  {card.number}
                </div>
                <h3 className="mt-4 text-xl font-black text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
                Suggested questions
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Start with a specific question.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Open the assistant, then paste or adapt one of these prompts.
                Specific questions usually produce clearer and more useful answers.
              </p>

              <a
                href={RROTA_ASSISTANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/8 px-5 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/13 hover:text-white"
              >
                Open assistant
                <ExternalIcon />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {suggestedPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold leading-6 text-white/72"
                >
                  “{prompt}”
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-amber-400/14 bg-amber-400/6 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/18 bg-amber-400/9 text-amber-100">
                  <ShieldIcon />
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white">
                  Use AI as a guide—not as proof.
                </h2>

                <p className="mt-4 text-sm leading-7 text-amber-100/68">
                  AI responses can be incomplete, outdated, or incorrect. Verify
                  important information before trading, connecting a wallet, or
                  making a decision.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(253,230,138,0.8)]" />
                    <span className="text-sm leading-6 text-white/68">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-amber-300/12 pt-6 sm:flex-row sm:flex-wrap">
              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/8 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/13 hover:text-white"
              >
                Verify token on Solscan
                <ExternalIcon />
              </a>

              <Link
                href="/roadmap"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Review roadmap
              </Link>

              <Link
                href="/risk-disclaimer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Read risk disclaimer
              </Link>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.08))] p-7 text-center sm:p-10">
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Ready to explore RROTA?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
              Open the assistant for project guidance, then verify important
              information through the official website and on-chain resources.
            </p>

            <a
              href={RROTA_ASSISTANT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/28 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-7 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.18)] transition hover:brightness-110"
            >
              Open RROTA Assistant
              <ExternalIcon />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
