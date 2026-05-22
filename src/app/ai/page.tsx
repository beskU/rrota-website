import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RROTA AI Assistant | Ask About $RTA, Spin-to-Win & Official Links",
  description:
    "Ask the RROTA AI Assistant about $RTA, Spin-to-Win, official links, token safety, Solana details, and the RROTA ecosystem.",
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
];

export default function RrotaAiPage() {
  const gptLink =
  "https://chatgpt.com/g/g-6a10b37f0bc48191a130acf6d3f24390-rrota-assistant";

  return (
    <main className="min-h-screen overflow-hidden bg-[#05030b] text-white">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col px-5 py-20 sm:px-8 lg:px-10">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            Official RROTA AI Guide
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Ask the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 bg-clip-text text-transparent">
              RROTA AI Assistant
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Learn about RROTA ($RTA), the live Spin-to-Win beta, official links,
            token safety, Solana details, ecosystem updates, and how to join the
            community.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={gptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
            >
              Open RROTA Assistant on ChatGPT
            </a>

            <Link
              href="/links"
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Official Links
            </Link>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-slate-500">
            The RROTA AI Assistant is an informational guide only. It does not
            provide financial advice, guarantee rewards, or promise future token
            performance. Always verify official links and do your own research.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "What is RROTA?",
              text: "Understand the $RTA token, ecosystem vision, Solana details, and what RROTA is building.",
            },
            {
              title: "How to play Spin-to-Win",
              text: "Learn about the public beta, leaderboard participation, community feedback, and game safety.",
            },
            {
              title: "Stay safe",
              text: "Verify official links, check the mint address, avoid DMs, and never share private keys or seed phrases.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur"
            >
              <h2 className="text-xl font-black text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-10 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-fuchsia-500/10 p-6 shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-black">Official RROTA Links</h2>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use only verified RROTA links. The RROTA team never DMs first.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {officialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  {link.label}
                </div>
                <div className="mt-2 text-sm font-semibold text-white">
                  {link.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
