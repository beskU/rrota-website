import Link from "next/link";
import React from "react";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
};

function ExternalIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function ExploreIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-1.83 5.49-5.49 1.83 1.83-5.49 5.49-1.83Z" />
    </svg>
  );
}

function PlayIcon() {
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
      <path d="m8 5 11 7-11 7Z" />
    </svg>
  );
}

function CommunityIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

type JourneyCard = {
  step: string;
  title: string;
  text: string;
  action: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  tone: string;
};

const journeyCards: JourneyCard[] = [
  {
    step: "01",
    title: "Verify RROTA",
    text:
      "Start with the official website, mint address, audits, and Solscan record. Never rely on screenshots, private messages, or copied trading links.",
    action: "Verify contract",
    href: LINKS.solscan,
    external: true,
    icon: <ShieldIcon />,
    tone: "border-cyan-400/18 bg-cyan-400/8 text-cyan-200",
  },
  {
    step: "02",
    title: "Understand the ecosystem",
    text:
      "Review the tokenomics, roadmap, whitepaper, and latest updates to see what is live, what is being improved, and what remains future work.",
    action: "Explore roadmap",
    href: "/roadmap",
    icon: <ExploreIcon />,
    tone: "border-emerald-400/18 bg-emerald-400/8 text-emerald-200",
  },
  {
    step: "03",
    title: "Use a live product",
    text:
      "Try Spin-to-Win as the first public RROTA utility. The game is one product inside a wider ecosystem of token, AI, gaming, rewards, and future tools.",
    action: "Launch Spin-to-Win",
    href: LINKS.spin,
    external: true,
    icon: <PlayIcon />,
    tone: "border-fuchsia-400/18 bg-fuchsia-400/8 text-fuchsia-200",
  },
  {
    step: "04",
    title: "Follow official progress",
    text:
      "Use the official blog, Telegram, and X account for product updates, race announcements, security notices, and roadmap progress.",
    action: "Open updates",
    href: "/blog",
    icon: <CommunityIcon />,
    tone: "border-amber-400/18 bg-amber-400/8 text-amber-200",
  },
];

export default function HowTo() {
  return (
    <section
      id="Start"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 text-white sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Start with RROTA
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl">
                Explore the ecosystem
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  in four clear steps.
                </span>
              </h2>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
              RROTA should be easy to verify and understand before anyone trades,
              connects a wallet, or joins a product. Begin with official information,
              then explore the parts of the ecosystem that are already available.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {journeyCards.map((card) => {
              const content = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${card.tone}`}
                    >
                      {card.icon}
                    </div>

                    <span className="font-mono text-sm font-black text-white/28">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-black text-white">{card.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/58">{card.text}</p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition-colors group-hover:text-white">
                    {card.action}
                    {card.external ? <ExternalIcon /> : <span aria-hidden="true">→</span>}
                  </div>
                </>
              );

              const className =
                "group rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-300/22 hover:bg-cyan-400/5";

              return card.external ? (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link key={card.title} href={card.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="rounded-[26px] border border-amber-400/14 bg-amber-400/6 px-5 py-4">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-200/72">
                Wallet safety
              </div>
              <p className="mt-2 text-sm leading-6 text-amber-100/72">
                Never share a seed phrase or private key. Review every transaction
                before signing and use only links published on the official RROTA
                website.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/how-to-buy-rrota"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-emerald-400/18 bg-emerald-400/9 px-5 text-sm font-black text-emerald-100 transition hover:border-emerald-300/32 hover:bg-emerald-400/14 hover:text-white"
              >
                Open buying guide
              </Link>

              <a
                href={LINKS.jupiter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-sm font-black text-white/74 transition hover:border-cyan-300/20 hover:bg-cyan-400/8 hover:text-white"
              >
                Jupiter
                <ExternalIcon />
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/38">
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              Official Telegram
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              Official X
            </a>
            <Link href="/links" className="transition hover:text-cyan-200">
              All official links
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
