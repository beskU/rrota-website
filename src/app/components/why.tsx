"use client";

import React from "react";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  audit: "https://freshcoins.io/audit/rrota",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
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

function CardIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${className}`}
    >
      {children}
    </div>
  );
}

function ShieldSvg() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BoltSvg() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function GameSvg() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function CommunitySvg() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const Why = () => {
  const principleCards = [
    {
      title: "RROTA coin first",
      text: "The website now positions $RTA as the core Solana ecosystem token, with Spin-to-Win as the first shipped product inside the wider roadmap.",
      icon: <BoltSvg />,
      tone: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    },
    {
      title: "Verification over hype",
      text: "Official contract, Solscan, audit reference, charts, and community links are kept visible so users can verify before trading or connecting wallets.",
      icon: <ShieldSvg />,
      tone: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    },
    {
      title: "Live utility shipped",
      text: "Spin-to-Win proves the first RROTA utility layer is live: account access, rewards, Boost Credits, leaderboard competition, and wallet flows.",
      icon: <GameSvg />,
      tone: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
    },
    {
      title: "Community expansion",
      text: "RROTA grows through Telegram, X, blog updates, player education, reward campaigns, and transparent ecosystem progress.",
      icon: <CommunitySvg />,
      tone: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    },
  ];

  const utilityCards = [
    {
      title: "RROTA Coin",
      status: "Core",
      text: "$RTA is the Solana token powering the RROTA ecosystem, official links, trading access, utility products, and community campaigns.",
      href: LINKS.jupiter,
    },
    {
      title: "Spin-to-Win",
      status: "Live",
      text: "The first live RROTA utility: daily bonuses, Boost Credits, leaderboard competition, Phantom support, and eligible RTA reward withdrawals.",
      href: LINKS.spin,
    },
    {
      title: "Crypto Shooter",
      status: "Planned",
      text: "A future gaming expansion planned after Spin-to-Win stability, economy controls, and anti-abuse protections are fully battle-tested.",
      href: LINKS.telegram,
    },
    {
      title: "Transport Utility",
      status: "Vision",
      text: "A long-term public transportation direction: local route tools, station discovery, and practical user-facing utility around the RROTA brand.",
      href: LINKS.telegram,
    },
    {
      title: "Community Rewards",
      status: "Active",
      text: "Leaderboard competitions, weekly rewards, Telegram events, X posts, and real-player engagement campaigns help grow the ecosystem.",
      href: LINKS.telegram,
    },
    {
      title: "Future Tools",
      status: "Planned",
      text: "Dashboards, tracking tools, referral systems, safety guides, and utility extensions can be added as the project matures.",
      href: LINKS.x,
    },
  ];

  return (
    <section id="WhyRrota" className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Why RROTA
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              RROTA is building a
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                utility-first Solana ecosystem.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              RROTA is more than a single game page. It is a Solana-based ecosystem
              focused on digital rewards, crypto gaming, community tools, future transport
              utility, and transparent execution around the $RTA token.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principleCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all hover:border-cyan-300/22 hover:bg-cyan-400/5"
              >
                <CardIcon className={card.tone}>{card.icon}</CardIcon>
                <h3 className="text-lg font-black text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] border border-emerald-400/14 bg-emerald-400/7 p-6">
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/80">
                Trust layer
              </div>

              <h3 className="mt-3 text-2xl font-black text-white">
                Verify before you believe.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/62">
                RROTA should be checked through official links: Solscan for token verification,
                Jupiter for trading, official charts for market data, audit references, and
                official community channels for announcements.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Solscan", LINKS.solscan],
                  ["Audit", LINKS.audit],
                  ["Telegram", LINKS.telegram],
                  ["X / Twitter", LINKS.x],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-white/76 transition hover:border-cyan-300/22 hover:bg-cyan-400/7 hover:text-white"
                  >
                    {label}
                    <ExternalIcon />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {[
                "RROTA token live on Solana",
                "Official $RTA contract published",
                "Mint authority revoked",
                "Freeze authority revoked",
                "Spin-to-Win utility live",
                "Crypto Shooter and transport utility planned",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.035] px-5 py-4"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                  <span className="text-sm font-semibold text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                  RROTA Utility Stack
                </div>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Coin, games, rewards, and future real-world direction.
                </h3>
              </div>

              <a
                href={LINKS.spin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/25 to-fuchsia-500/25 px-5 text-sm font-black text-white transition hover:brightness-110"
              >
                Explore Live Utility
                <ExternalIcon />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {utilityCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[30px] border border-white/10 bg-white/[0.035] p-5 transition-all hover:border-cyan-300/22 hover:bg-cyan-400/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl font-black text-white">{card.title}</h4>
                    <span className="rounded-full border border-cyan-400/16 bg-cyan-400/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-200">
                      {card.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/60">{card.text}</p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                    Open
                    <ExternalIcon />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-400/16 bg-amber-400/7 px-5 py-4 text-sm leading-7 text-amber-100/80">
            RROTA should be judged by what it ships: working utility, transparent updates,
            clear verification, sustainable community growth, and practical long-term ecosystem expansion.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
