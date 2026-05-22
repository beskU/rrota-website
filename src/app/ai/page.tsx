import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RROTA AI Assistant | Official $RTA AI Guide",
  description:
    "Explore the official RROTA AI Assistant. Learn about $RTA, Spin-to-Win, official links, token safety, ecosystem updates, and how to join the RROTA community.",
  alternates: {
    canonical: "https://rrota.xyz/ai",
  },
  openGraph: {
    title: "RROTA AI Assistant",
    description:
      "Official AI guide for RROTA ($RTA), Spin-to-Win, official links, safety, and ecosystem information.",
    url: "https://rrota.xyz/ai",
    siteName: "RROTA",
    type: "website",
  },
};

const gptLink =
  "https://chatgpt.com/g/g-6a10b37f0bc48191a130acf6d3f24390-rrota-assistant";

const officialLinks = [
  {
    label: "Official Website",
    value: "rrota.xyz",
    href: "https://rrota.xyz",
  },
  {
    label: "Spin-to-Win",
    value: "spin.rrota.xyz",
    href: "https://spin.rrota.xyz",
  },
  {
    label: "Telegram",
    value: "RROTA Official Community",
    href: "https://t.me/rrotaOfficial",
  },
  {
    label: "X / Twitter",
    value: "@rrotacoin",
    href: "https://x.com/rrotacoin",
  },
  {
    label: "Jupiter",
    value: "Swap $RTA",
    href: "https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a",
  },
  {
    label: "Solscan",
    value: "View Token",
    href: "https://solscan.io/token/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a",
  },
];

const intelligenceCards = [
  {
    eyebrow: "Identity",
    title: "What is RROTA?",
    text: "Understand the $RTA token, ecosystem vision, Solana foundation, and what RROTA is building beyond hype.",
  },
  {
    eyebrow: "Gameplay",
    title: "How to use Spin-to-Win",
    text: "Learn about the live public beta, player flow, leaderboard participation, and how the product fits into the wider ecosystem.",
  },
  {
    eyebrow: "Security",
    title: "Stay protected",
    text: "Use only verified links, verify the mint address, avoid impersonators, and never share private keys or seed phrases.",
  },
];

const promptCards = [
  "What is RROTA?",
  "How do I buy $RTA safely?",
  "How do I play RROTA Spin-to-Win?",
  "What are the official RROTA links?",
  "Is RROTA only a meme coin or does it have utility?",
  "What should I know before using RROTA Spin-to-Win?",
];

export default function RrotaAiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03030a] text-white">
      {/* Global ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,214,0.08),transparent_26%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.10),transparent_26%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,10,0.2),rgba(3,3,10,0.86),#03030a)]" />
      </div>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-[-120px] top-[160px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <section className="relative mx-auto flex w-full max-w-7xl flex-col px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.14)] backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
              Official RROTA AI Interface
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Enter the{" "}
              <span className="bg-[linear-gradient(90deg,#d7fbff_0%,#7ee7ff_25%,#6ef7d8_55%,#c084fc_100%)] bg-clip-text text-transparent">
                RROTA AI
              </span>{" "}
              Intelligence Layer
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Access a high-clarity AI guide for RROTA ($RTA), the Spin-to-Win
              beta, official links, ecosystem details, token safety, and trusted
              onboarding. Built to help users explore the RROTA universe with
              precision, structure, and confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={gptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(48,245,255,0.18),rgba(0,0,0,0.18))] px-7 py-4 text-sm font-black uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_45px_rgba(34,211,238,0.20)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_60px_rgba(34,211,238,0.28)]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.14),transparent)] opacity-0 transition group-hover:opacity-100" />
                <span className="relative">Open RROTA Assistant on ChatGPT</span>
              </a>

              <Link
                href="/links"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-black uppercase tracking-[0.28em] text-white/90 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/35 hover:bg-white/[0.06]"
              >
                Official Links
              </Link>
            </div>

            <div className="mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-xs leading-6 text-slate-400 backdrop-blur">
              The RROTA AI Assistant is an informational guide only. It does not
              provide financial advice, guarantee rewards, or promise future
              token performance. Always verify official links and do your own
              research.
            </div>
          </div>

          {/* Alien AI Core */}
          <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center lg:justify-end">
            <div className="relative h-[420px] w-[420px]">
              <div className="absolute inset-0 rounded-full border border-cyan-300/10 bg-[radial-gradient(circle,rgba(29,78,216,0.10),rgba(2,6,23,0.06),transparent_70%)]" />
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15 shadow-[0_0_90px_rgba(34,211,238,0.09)]" />
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/20" />
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20 bg-[radial-gradient(circle,rgba(103,232,249,0.18),rgba(14,165,233,0.08),rgba(168,85,247,0.08),transparent_74%)] shadow-[0_0_90px_rgba(34,211,238,0.22)]" />
              <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[radial-gradient(circle,#d5ffff_0%,#7ee7ff_18%,#38bdf8_48%,rgba(168,85,247,0.52)_72%,rgba(3,3,10,0.08)_100%)] shadow-[0_0_90px_rgba(34,211,238,0.50)]" />
              <div className="absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.95)]" />

              {/* Orbit nodes */}
              <div className="absolute left-[18%] top-[18%] h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,1)]" />
              <div className="absolute right-[16%] top-[28%] h-3.5 w-3.5 rounded-full bg-fuchsia-300 shadow-[0_0_24px_rgba(244,114,182,0.95)]" />
              <div className="absolute bottom-[20%] left-[24%] h-3.5 w-3.5 rounded-full bg-sky-300 shadow-[0_0_24px_rgba(125,211,252,0.95)]" />
              <div className="absolute bottom-[16%] right-[22%] h-4 w-4 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.95)]" />

              {/* Small info plates */}
              <div className="absolute left-0 top-[8%] rounded-2xl border border-cyan-300/20 bg-[#08111f]/80 px-4 py-3 backdrop-blur">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-200">
                  Neural State
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  ONLINE
                </div>
              </div>

              <div className="absolute right-0 top-[70%] rounded-2xl border border-fuchsia-300/20 bg-[#12081d]/80 px-4 py-3 backdrop-blur">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-fuchsia-200">
                  Knowledge Core
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  RROTA // $RTA
                </div>
              </div>

              <div className="absolute bottom-0 left-[10%] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-300">
                  Interface Mode
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  PREMIUM AI ACCESS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt cards */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_0_60px_rgba(0,0,0,0.28)] backdrop-blur xl:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.32em] text-cyan-200">
                Suggested Intelligence Queries
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                Ask the AI anything about the RROTA ecosystem
              </h2>
            </div>
            <div className="text-sm text-slate-400">
              Launch the assistant and use these prompts to begin.
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {promptCards.map((prompt) => (
              <a
                key={prompt}
                href={gptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400 transition group-hover:text-cyan-200">
                  AI Prompt
                </div>
                <div className="mt-3 text-base font-bold leading-7 text-white">
                  {prompt}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Intelligence cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {intelligenceCards.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_0_50px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/8 blur-2xl transition group-hover:bg-cyan-300/16" />
              <div className="text-[11px] font-black uppercase tracking-[0.30em] text-cyan-200">
                {item.eyebrow}
              </div>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Official links */}
        <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-cyan-300/12 bg-[linear-gradient(135deg,rgba(8,15,28,0.95),rgba(5,5,18,0.98),rgba(21,10,36,0.94))] shadow-[0_0_80px_rgba(34,211,238,0.08)]">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[100px]" />

            <div className="relative z-10">
              <div className="text-[11px] font-black uppercase tracking-[0.34em] text-cyan-200">
                Verified Access Nodes
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Official RROTA Links
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Use only verified RROTA links. The RROTA team never DMs first.
                Always verify where you are interacting before connecting a
                wallet or exploring the ecosystem.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {officialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-200">
                      {link.label}
                    </div>
                    <div className="mt-3 text-base font-bold text-white">
                      {link.value}
                    </div>
                    <div className="mt-3 text-xs text-slate-500 transition group-hover:text-slate-300">
                      Open verified destination
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-xs leading-6 text-slate-500">
          RROTA AI is designed as a premium information layer for the RROTA
          ecosystem — focused on clarity, safety, official access, and a better
          user onboarding experience.
        </div>
      </section>
    </main>
  );
}
