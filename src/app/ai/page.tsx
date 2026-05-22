import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    eyebrow: "Identity Matrix",
    title: "What is RROTA?",
    text: "Decode the $RTA token, Solana foundation, ecosystem direction, and the project vision beyond short-term hype.",
  },
  {
    eyebrow: "Game Protocol",
    title: "Spin-to-Win Beta",
    text: "Understand the live public beta, player flow, leaderboard activity, reward logic, and how users can participate.",
  },
  {
    eyebrow: "Safety Layer",
    title: "Verified Access",
    text: "Use only official links, verify the mint address, avoid impersonators, and never share private keys or seed phrases.",
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

const signalStats = [
  {
    label: "Network",
    value: "Solana",
  },
  {
    label: "Token",
    value: "$RTA",
  },
  {
    label: "AI Layer",
    value: "Online",
  },
  {
    label: "Mode",
    value: "Official",
  },
];

export default function RrotaAiPage() {
  return (
    <main
      className={`${spaceGrotesk.className} relative min-h-screen overflow-hidden bg-[#02030a] text-white`}
    >
      {/* Ambient technology background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,214,0.12),transparent_25%),radial-gradient(circle_at_82%_16%,rgba(168,85,247,0.20),transparent_25%),radial-gradient(circle_at_45%_90%,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(103,232,249,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.10)_1px,transparent_1px)] [background-size:76px_76px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,rgba(255,255,255,0.36)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,3,10,0.08),rgba(2,3,10,0.74),#02030a)]" />
      </div>

      {/* Animated scan beams */}
      <div className="pointer-events-none absolute left-0 top-20 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-40 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-fuchsia-300/25 to-transparent [animation-delay:900ms]" />

      {/* Large glows */}
      <div className="pointer-events-none absolute left-[-160px] top-[130px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[40px] h-[540px] w-[540px] rounded-full bg-fuchsia-500/12 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <section className="relative mx-auto flex w-full max-w-7xl flex-col px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* Top status bar */}
        <div className="mb-10 grid gap-3 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-3 shadow-[0_0_60px_rgba(0,0,0,0.25)] backdrop-blur md:grid-cols-4">
          {signalStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/8 bg-black/25 px-4 py-3"
            >
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-200/80">
                {stat.label}
              </div>
              <div className="mt-1 text-sm font-bold text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.045] px-4 py-2 text-[11px] font-black uppercase tracking-[0.34em] text-cyan-100 shadow-[0_0_42px_rgba(34,211,238,0.14)] backdrop-blur">
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,1)]" />
              </span>
              Official RROTA AI Interface
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              Alien-grade{" "}
              <span className="bg-[linear-gradient(90deg,#ffffff_0%,#9ff7ff_18%,#5df8d2_42%,#b78cff_72%,#ffffff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                AI access
              </span>{" "}
              for RROTA.
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              A premium intelligence layer built for RROTA ($RTA), Spin-to-Win,
              official links, safety checks, ecosystem onboarding, and trusted
              user education. Designed to make the RROTA universe easier to
              understand, verify, and explore.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={gptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(45,255,231,0.20),rgba(168,85,247,0.10),rgba(0,0,0,0.20))] px-7 py-4 text-sm font-black uppercase tracking-[0.26em] text-cyan-50 shadow-[0_0_55px_rgba(34,211,238,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:shadow-[0_0_80px_rgba(34,211,238,0.30)]"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)] transition duration-700 group-hover:translate-x-[120%]" />
                <span className="relative">Open RROTA Assistant</span>
              </a>

              <Link
                href="/links"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.035] px-7 py-4 text-sm font-black uppercase tracking-[0.26em] text-white/90 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-white/[0.07]"
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

          {/* Futuristic Alien AI Core */}
          <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:justify-end">
            <div className="relative h-[470px] w-[470px] max-w-full">
              <div className="absolute inset-0 animate-spin rounded-full border border-dashed border-cyan-300/20 [animation-duration:42s]" />
              <div className="absolute inset-6 animate-spin rounded-full border border-fuchsia-300/15 [animation-direction:reverse] [animation-duration:34s]" />
              <div className="absolute inset-12 animate-spin rounded-full border border-cyan-200/20 [animation-duration:26s]" />
              <div className="absolute inset-20 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(103,232,249,0.14),rgba(168,85,247,0.08),transparent_68%)] shadow-[0_0_110px_rgba(34,211,238,0.18)]" />

              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-cyan-200/25 bg-[radial-gradient(circle,#e7ffff_0%,#9ff7ff_10%,#22d3ee_34%,rgba(168,85,247,0.52)_62%,rgba(3,3,10,0.18)_100%)] shadow-[0_0_100px_rgba(34,211,238,0.48)]" />
              <div className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#02030a]/40 shadow-[inset_0_0_35px_rgba(255,255,255,0.12),0_0_60px_rgba(34,211,238,0.38)] backdrop-blur" />
              <div className="absolute left-1/2 top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_35px_rgba(255,255,255,1)]" />

              {/* Energy lines */}
              <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 rotate-45 bg-gradient-to-r from-transparent via-fuchsia-200/25 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 -rotate-45 bg-gradient-to-r from-transparent via-emerald-200/25 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 rotate-90 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />

              {/* Orbit nodes */}
              <div className="absolute left-[15%] top-[17%] h-4 w-4 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_26px_rgba(103,232,249,1)]" />
              <div className="absolute right-[12%] top-[27%] h-3.5 w-3.5 animate-pulse rounded-full bg-fuchsia-300 shadow-[0_0_26px_rgba(244,114,182,0.95)] [animation-delay:400ms]" />
              <div className="absolute bottom-[19%] left-[22%] h-3.5 w-3.5 animate-pulse rounded-full bg-sky-300 shadow-[0_0_26px_rgba(125,211,252,0.95)] [animation-delay:800ms]" />
              <div className="absolute bottom-[15%] right-[21%] h-4 w-4 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_26px_rgba(110,231,183,0.95)] [animation-delay:1200ms]" />

              {/* Floating panels */}
              <div className="absolute left-0 top-[7%] rounded-2xl border border-cyan-300/20 bg-[#07111f]/85 px-4 py-3 shadow-[0_0_35px_rgba(34,211,238,0.10)] backdrop-blur">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-200">
                  Neural State
                </div>
                <div className="mt-1 text-sm font-bold text-white">ONLINE</div>
              </div>

              <div className="absolute right-0 top-[66%] rounded-2xl border border-fuchsia-300/20 bg-[#15081f]/85 px-4 py-3 shadow-[0_0_35px_rgba(217,70,239,0.10)] backdrop-blur">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-fuchsia-200">
                  Knowledge Core
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  RROTA // $RTA
                </div>
              </div>

              <div className="absolute bottom-2 left-[9%] rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[0_0_35px_rgba(255,255,255,0.06)] backdrop-blur">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-300">
                  Access Mode
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  PREMIUM AI GATEWAY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt console */}
        <div className="mt-16 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] p-6 shadow-[0_0_70px_rgba(0,0,0,0.32)] backdrop-blur xl:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.34em] text-cyan-200">
                Suggested Intelligence Queries
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">
                Start with official RROTA questions
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-400">
              These prompts open the RROTA Assistant on ChatGPT and help new
              users understand the ecosystem faster.
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {promptCards.map((prompt) => (
              <a
                key={prompt}
                href={gptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-[0_0_45px_rgba(34,211,238,0.14)]"
              >
                <span className="absolute right-0 top-0 h-20 w-20 rounded-full bg-cyan-300/[0.05] blur-2xl transition group-hover:bg-cyan-300/[0.14]" />
                <div className="relative text-[10px] font-black uppercase tracking-[0.28em] text-slate-400 transition group-hover:text-cyan-200">
                  AI Prompt
                </div>
                <div className="relative mt-3 text-base font-bold leading-7 text-white">
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
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.048),rgba(255,255,255,0.02))] p-6 shadow-[0_0_55px_rgba(0,0,0,0.25)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/[0.08] blur-2xl transition group-hover:bg-cyan-300/[0.18]" />
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
              <div className="relative text-[11px] font-black uppercase tracking-[0.30em] text-cyan-200">
                {item.eyebrow}
              </div>
              <h3 className="relative mt-4 text-2xl font-black tracking-[-0.035em] text-white">
                {item.title}
              </h3>
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Official links */}
        <div className="mt-12 overflow-hidden rounded-[2.35rem] border border-cyan-300/14 bg-[linear-gradient(135deg,rgba(8,15,28,0.96),rgba(4,5,15,0.98),rgba(25,10,42,0.94))] shadow-[0_0_90px_rgba(34,211,238,0.09)]">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[110px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[110px]" />

            <div className="relative z-10">
              <div className="text-[11px] font-black uppercase tracking-[0.34em] text-cyan-200">
                Verified Access Nodes
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
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
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.065]"
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
          ecosystem — focused on clarity, safety, official access, and better
          user onboarding.
        </div>
      </section>
    </main>
  );
}
