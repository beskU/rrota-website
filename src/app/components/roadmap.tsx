"use client";

import React from "react";

type Status = "Shipped" | "Live" | "In Progress" | "Planned";

type RoadmapItem = {
  title: string;
  description: string;
  status: Status;
  proof?: { label: string; href: string };
};

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const Roadmap = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      title: "Foundation",
      description:
        "RROTA token deployed on Solana with official website, contract verification links, community channels, and public token references.",
      status: "Shipped",
      proof: {
        label: "Verify token",
        href: `https://solscan.io/token/${TOKEN_ADDRESS}`,
      },
    },
    {
      title: "Trust Layer",
      description:
        "Official links, audit reference, token verification, privacy/terms pages, and clear project messaging prepared for public users.",
      status: "Shipped",
      proof: {
        label: "View audit",
        href: "https://freshcoins.io/audit/rrota",
      },
    },
    {
      title: "Spin-to-Win Utility",
      description:
        "Official RROTA Spin-to-Win app with login, daily bonus, free spins, Boost Credits, Phantom wallet connection, deposit flow, and eligible reward withdrawal system.",
      status: "Live",
      proof: {
        label: "Play game",
        href: "https://spin.rrota.xyz",
      },
    },
    {
      title: "Controlled Wallet Economy",
      description:
        "Deposit/withdraw systems, wallet detection, mobile Phantom handling, and gameplay economy rules continue under controlled rollout and launch testing.",
      status: "In Progress",
      proof: {
        label: "Open game",
        href: "https://spin.rrota.xyz",
      },
    },
    {
      title: "Community Growth Layer",
      description:
        "Telegram/X campaigns, content, onboarding guides, player education, and safer link verification are being improved before larger public promotion.",
      status: "In Progress",
      proof: {
        label: "Join Telegram",
        href: "https://t.me/rrotaOfficial",
      },
    },
    {
      title: "Next Utility Expansion",
      description:
        "Crypto Shooter, leaderboard features, referral systems, dashboards, and future tools remain planned after Spin-to-Win launch stability is confirmed.",
      status: "Planned",
    },
  ];

  const statusStyles: Record<
    Status,
    {
      badge: string;
      dot: string;
      glow: string;
      card: string;
    }
  > = {
    Shipped: {
      badge: "border-cyan-400/22 bg-cyan-400/10 text-cyan-200",
      dot: "bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]",
      glow: "from-cyan-400/20",
      card: "hover:border-cyan-300/28 hover:bg-cyan-400/6",
    },
    Live: {
      badge: "border-emerald-400/22 bg-emerald-400/10 text-emerald-200",
      dot: "bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]",
      glow: "from-emerald-400/20",
      card: "hover:border-emerald-300/28 hover:bg-emerald-400/6",
    },
    "In Progress": {
      badge: "border-amber-400/22 bg-amber-400/10 text-amber-200",
      dot: "bg-amber-300 shadow-[0_0_18px_rgba(250,204,21,0.8)]",
      glow: "from-amber-400/18",
      card: "hover:border-amber-300/28 hover:bg-amber-400/6",
    },
    Planned: {
      badge: "border-white/12 bg-white/[0.055] text-white/70",
      dot: "bg-white/45 shadow-[0_0_12px_rgba(255,255,255,0.25)]",
      glow: "from-white/10",
      card: "hover:border-white/18 hover:bg-white/[0.055]",
    },
  };

  return (
    <section id="Roadmap" className="relative mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Roadmap
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              RROTA roadmap:
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                shipped, live, and next.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              The roadmap is organized by execution status. RROTA only looks strong long-term if
              shipped features, live utility, and planned work are clearly separated.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {roadmapItems.map((item, index) => {
              const style = statusStyles[item.status];

              return (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all ${style.card}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                        <div className="font-mono text-xs font-black text-white/40">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${style.badge}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>

                    {item.proof?.href && (
                      <a
                        href={item.proof.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex h-10 items-center justify-center rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/14"
                      >
                        {item.proof.label} ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3 rounded-[30px] border border-cyan-400/14 bg-cyan-400/6 p-5 sm:grid-cols-4">
            {[
              ["Shipped", "Completed and published"],
              ["Live", "Available to users now"],
              ["In Progress", "Being tested or improved"],
              ["Planned", "Future phases"],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="text-sm font-black text-white">{label}</div>
                <div className="mt-1 text-xs leading-5 text-white/52">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
