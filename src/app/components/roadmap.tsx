import React from "react";

type Status = "Shipped" | "Live" | "In Progress" | "Planned";
type Tone = "cyan" | "emerald" | "amber" | "fuchsia";

type RoadmapItem = {
  title: string;
  description: string;
  status: Status;
  phase: string;
  proof?: {
    label: string;
    href: string;
  };
};

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  spin: "https://spin.rrota.xyz",
  ai: "/ai",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
  freshCoins: "https://freshcoins.io/audit/rrota",
  solidProof: "https://app.solidproof.io/projects/rrota",
  whitepaper: "/whitepaper",
};

const roadmapItems: RoadmapItem[] = [
  {
    phase: "Foundation",
    title: "$RTA Token on Solana",
    description:
      "The official RROTA token is deployed on Solana with a public mint address, revoked mint and freeze authorities, official trading routes, market pages, and project-owned communication channels.",
    status: "Shipped",
    proof: {
      label: "Verify on Solscan",
      href: LINKS.solscan,
    },
  },
  {
    phase: "Foundation",
    title: "Security and Verification",
    description:
      "RROTA publishes official contract references, verification guidance, FreshCoins and SolidProof audit pages, legal pages, and a dedicated official-links hub to reduce confusion and impersonation risk.",
    status: "Shipped",
    proof: {
      label: "View SolidProof",
      href: LINKS.solidProof,
    },
  },
  {
    phase: "Product",
    title: "RROTA Spin-to-Win",
    description:
      "The first public RROTA utility is available in the browser and through Telegram, with player accounts, wallet-linked features, daily activity, boost mechanics, and live gameplay.",
    status: "Live",
    proof: {
      label: "Open Spin-to-Win",
      href: LINKS.spin,
    },
  },
  {
    phase: "Competition",
    title: "Leaderboard and Reward System",
    description:
      "Weekly, monthly, yearly, and all-time competition layers are active, giving players a continuous progression path instead of a single temporary campaign.",
    status: "Live",
    proof: {
      label: "View live game",
      href: LINKS.spin,
    },
  },
  {
    phase: "Product",
    title: "RROTA AI",
    description:
      "The ecosystem assistant provides project information, navigation support, and an additional way for visitors to understand RROTA products, links, and development direction.",
    status: "Live",
    proof: {
      label: "Ask RROTA AI",
      href: LINKS.ai,
    },
  },
  {
    phase: "Improvement",
    title: "Game Economy and Fair-Play Protection",
    description:
      "RROTA is refining anti-abuse checks, boost-credit rules, wallet and withdrawal safeguards, leaderboard review, infrastructure reliability, and clearer player flows during public use.",
    status: "In Progress",
    proof: {
      label: "Follow development",
      href: LINKS.telegram,
    },
  },
  {
    phase: "Utility",
    title: "Holder-Linked Benefits",
    description:
      "The next utility layer is designed to connect verified RTA holding with selected game benefits, campaigns, access features, and future ecosystem participation without turning the free experience into a paywall.",
    status: "In Progress",
  },
  {
    phase: "Transparency",
    title: "Previous Winners and Payment Archive",
    description:
      "A public history of completed races, final rankings, reward amounts, and payment proofs is planned to make competition outcomes easier to verify from the main ecosystem website.",
    status: "In Progress",
  },
  {
    phase: "Gaming",
    title: "Crypto Shooter Expansion",
    description:
      "Crypto Shooter is planned as the next major game layer, extending RROTA beyond Spin-to-Win after the first product, economy controls, and shared account systems are stable.",
    status: "Planned",
  },
  {
    phase: "Platform",
    title: "Shared Ecosystem Accounts and Tools",
    description:
      "Future dashboards, player profiles, referral systems, holder verification, campaign tracking, safety tools, and cross-product progression can connect multiple RROTA experiences.",
    status: "Planned",
  },
  {
    phase: "Real-World Direction",
    title: "Transportation Utility Research",
    description:
      "The long-term roadmap includes research into route discovery, station and terminal information, local transport tools, and practical user-facing services under the RROTA ecosystem.",
    status: "Planned",
  },
  {
    phase: "Growth",
    title: "Listings, Partnerships and Wider Distribution",
    description:
      "As product usage, liquidity, transparency, and community quality improve, RROTA can continue pursuing reputable listings, collaborations, integrations, media coverage, and broader ecosystem visibility.",
    status: "Planned",
  },
];

const statusConfig: Record<
  Status,
  {
    tone: Tone;
    label: string;
    description: string;
    badge: string;
    dot: string;
    border: string;
  }
> = {
  Shipped: {
    tone: "cyan",
    label: "Shipped",
    description: "Completed and publicly available",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    dot: "bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]",
    border: "hover:border-cyan-300/30 hover:bg-cyan-400/[0.055]",
  },
  Live: {
    tone: "emerald",
    label: "Live",
    description: "Available to users now",
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    dot: "bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.85)]",
    border: "hover:border-emerald-300/30 hover:bg-emerald-400/[0.055]",
  },
  "In Progress": {
    tone: "amber",
    label: "In Progress",
    description: "Being built, tested, or improved",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    dot: "bg-amber-300 shadow-[0_0_14px_rgba(250,204,21,0.8)]",
    border: "hover:border-amber-300/30 hover:bg-amber-400/[0.055]",
  },
  Planned: {
    tone: "fuchsia",
    label: "Planned",
    description: "Future ecosystem phases",
    badge: "border-fuchsia-400/16 bg-fuchsia-400/8 text-fuchsia-200/85",
    dot: "bg-fuchsia-300/70 shadow-[0_0_12px_rgba(217,70,239,0.45)]",
    border: "hover:border-fuchsia-300/25 hover:bg-fuchsia-400/[0.045]",
  },
};

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4"
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

function RoadmapCard({ item, index }: { item: RoadmapItem; index: number }) {
  const config = statusConfig[item.status];
  const external = item.proof?.href.startsWith("http");

  return (
    <article
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 ${config.border}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_34%)]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${config.dot}`} />
            <div>
              <div className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
                {String(index + 1).padStart(2, "0")} · {item.phase}
              </div>
            </div>
          </div>

          <span
            className={`shrink-0 rounded-full border px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] ${config.badge}`}
          >
            {config.label}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-white">
          {item.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-white/60">
          {item.description}
        </p>

        {item.proof && (
          <a
            href={item.proof.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="mt-5 inline-flex h-10 w-fit items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-white/78 transition hover:border-cyan-300/25 hover:bg-cyan-400/8 hover:text-white"
          >
            {item.proof.label}
            {external && <ExternalIcon />}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Roadmap() {
  const groupedRoadmap = (["Shipped", "Live", "In Progress", "Planned"] as Status[]).map(
    (status) => ({
      status,
      items: roadmapItems.filter((item) => item.status === status),
    }),
  );

  return (
    <section
      id="Roadmap"
      className="relative mx-auto scroll-mt-28 max-w-7xl px-4 text-white sm:px-6 lg:px-8"
      aria-labelledby="roadmap-title"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Ecosystem Roadmap
            </div>

            <h2
              id="roadmap-title"
              className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl"
            >
              Build the foundation.
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                Ship utility. Expand carefully.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              The RROTA roadmap separates what has already been delivered from what is live,
              what is being improved now, and what remains a future ecosystem direction.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {groupedRoadmap.map(({ status, items }) => {
              const config = statusConfig[status];

              return (
                <div
                  key={status}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${config.dot}`} />
                    <div className="text-sm font-black text-white">{config.label}</div>
                    <div className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-black text-white/55">
                      {items.length}
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/50">{config.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 space-y-12">
            {groupedRoadmap.map(({ status, items }) => {
              const config = statusConfig[status];

              return (
                <div key={status}>
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${config.dot}`} />
                        <h3 className="text-2xl font-black text-white sm:text-3xl">{config.label}</h3>
                      </div>
                      <p className="mt-2 text-sm text-white/50">{config.description}</p>
                    </div>

                    <div className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
                      {items.length} {items.length === 1 ? "milestone" : "milestones"}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                      <RoadmapCard
                        key={item.title}
                        item={item}
                        index={roadmapItems.findIndex((entry) => entry.title === item.title)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid gap-4 rounded-[30px] border border-amber-400/14 bg-amber-400/[0.055] p-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-200/75">
                Roadmap principle
              </div>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-white/68">
                Planned items are development directions, not finished products or guaranteed dates.
                RROTA will update milestone status as features are built, tested, and made publicly verifiable.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.whitepaper}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-5 text-sm font-black text-white/82 transition hover:border-cyan-300/25 hover:bg-cyan-400/8 hover:text-white"
              >
                Read Whitepaper
              </a>

              <a
                href={LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-300/22 bg-cyan-400/10 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/15 hover:text-white"
              >
                Follow Updates
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
