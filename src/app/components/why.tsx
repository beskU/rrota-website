import Link from "next/link";
import React from "react";

function UtilityIcon({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${tone}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function AccessIcon() {
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

function RewardIcon() {
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
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10" />
      <path d="M17 4v5a5 5 0 0 1-10 0V4" />
      <path d="M5 7H3v1a4 4 0 0 0 4 4" />
      <path d="M19 7h2v1a4 4 0 0 1-4 4" />
    </svg>
  );
}

function ConnectIcon() {
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
      <path d="M11 7h2a4 4 0 0 1 4 4v2" />
      <path d="M7 11v2a4 4 0 0 0 4 4h2" />
    </svg>
  );
}

function ExpandIcon() {
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
      <path d="M12 2v20" />
      <path d="m17 7-5-5-5 5" />
      <path d="m17 17-5 5-5-5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

const utilityRoles = [
  {
    title: "Access and participation",
    text: "$RTA is designed to connect users with RROTA products, campaigns, holder features, and ecosystem participation as those systems become available.",
    icon: <AccessIcon />,
    tone: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    title: "Rewards and competition",
    text: "RROTA uses games, races, leaderboards, and community campaigns to turn ecosystem activity into measurable participation rather than passive attention.",
    icon: <RewardIcon />,
    tone: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  },
  {
    title: "One ecosystem connection",
    text: "$RTA provides a shared layer between RROTA Coin, Spin-to-Win, RROTA AI, future games, community tools, and planned practical utility.",
    icon: <ConnectIcon />,
    tone: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    title: "Expansion over time",
    text: "The token utility is intended to grow product by product. Future features are presented as roadmap items until they are built, tested, and publicly available.",
    icon: <ExpandIcon />,
    tone: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
];

const liveNow = [
  "$RTA token live on Solana",
  "Spin-to-Win browser and Telegram experience",
  "Weekly, monthly, and yearly leaderboard structure",
  "RROTA AI ecosystem assistant",
  "Community races, rewards, and progress updates",
];

const buildingNext = [
  "Stronger holder-linked benefits and qualification systems",
  "Additional game utility through Crypto Shooter",
  "Improved dashboards, referral tools, and player systems",
  "Deeper connections between RROTA products",
  "Long-term transportation-focused utility research",
];

const Why = () => {
  return (
    <section
      id="WhyRrota"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 text-white sm:px-6 lg:px-8"
      aria-labelledby="why-rrota-title"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.96),rgba(8,7,18,0.98))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:58px_58px]" />

        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Why $RTA
              </div>

              <h2
                id="why-rrota-title"
                className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              >
                A shared utility layer for the
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  RROTA ecosystem.
                </span>
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
              <p className="text-sm leading-7 text-white/70 sm:text-base">
                RROTA is not positioning $RTA as a token with utility added only in words.
                The goal is to connect it to products people can use, competitions they can
                enter, benefits they can unlock, and future ecosystem services built around
                one verifiable Solana asset.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/52">
                Utility that is already available is shown separately from features still in
                development. Planned products remain roadmap items until they are released.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {utilityRoles.map((role) => (
              <article
                key={role.title}
                className="group rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-300/22 hover:bg-cyan-400/5"
              >
                <UtilityIcon tone={role.tone}>{role.icon}</UtilityIcon>
                <h3 className="mt-5 text-lg font-black text-white">{role.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{role.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[34px] border border-emerald-400/16 bg-emerald-400/7 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/80">
                    Available now
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Utility already visible in the ecosystem
                  </h3>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  Live
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {liveNow.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <span className="mt-0.5 text-emerald-300">
                      <CheckIcon />
                    </span>
                    <span className="text-sm leading-6 text-white/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-fuchsia-400/16 bg-fuchsia-400/7 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/80">
                    Building next
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Utility that expands with the roadmap
                  </h3>
                </div>

                <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-fuchsia-200">
                  Roadmap
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {buildingNext.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.8)]" />
                    <span className="text-sm leading-6 text-white/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[30px] border border-amber-400/16 bg-amber-400/7 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="max-w-3xl">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-200/80">
                Utility standard
              </div>
              <p className="mt-2 text-sm leading-7 text-amber-50/75">
                RROTA should be judged by what is shipped and verifiable—not by price promises.
                Every future feature should move from roadmap to live status only after it is
                built, tested, and available to users.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/roadmap"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/22 bg-cyan-400/10 px-5 text-sm font-black uppercase tracking-[0.12em] text-cyan-100 transition-all hover:border-cyan-200/40 hover:bg-cyan-400/15 hover:text-white"
              >
                View Roadmap
              </Link>

              <Link
                href="/whitepaper"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black uppercase tracking-[0.12em] text-white/82 transition-all hover:border-white/24 hover:bg-white/10 hover:text-white"
              >
                Read Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
