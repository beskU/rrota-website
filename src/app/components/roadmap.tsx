"use client";
import React from "react";

type Status = "Verified" | "In Progress" | "Planned";

const Roadmap = () => {
  const roadmapItems: Array<{
    title: string;
    description: string;
    status: Status;
    icon: "check" | "clock";
    side: "left" | "right";
  }> = [
    {
      title: "Phase 1 — Foundation (On-chain setup)",
      description:
        "Token live on Solana. Core safety setup completed (mint authority revoked, freeze authority revoked). Scarcity actions (burns) and transparency links established.",
      status: "Verified",
      icon: "check",
      side: "left",
    },
    {
      title: "Phase 2 — Trust Layer (Links + verification)",
      description:
        "Audit/verification links published. Public hub for official links (Jupiter, Solscan, DEX charts). Website focused on clarity over hype.",
      status: "In Progress",
      icon: "clock",
      side: "right",
    },
    {
      title: "Phase 3 — Spin-to-Win (Core utility)",
      description:
        "Spin-to-Win reward logic + anti-farm system. Holder-based access rules. Beta test with controlled distribution before public release.",
      status: "In Progress",
      icon: "clock",
      side: "left",
    },
    {
      title: "Phase 4 — Telegram Tools (Community UX)",
      description:
        "Telegram tracking tools (buy/sell alerts, price, links) + clean onboarding. Optional leaderboard/referral systems only after abuse-proofing.",
      status: "Planned",
      icon: "clock",
      side: "right",
    },
    {
      title: "Phase 5 — Game Expansion (Shooter prototype)",
      description:
        "Shooter game prototype → playable beta. Rewards only if the economy is sustainable and resistant to farming.",
      status: "Planned",
      icon: "clock",
      side: "left",
    },
    {
      title: "Phase 6 — Ecosystem Scale (Listings + dashboards)",
      description:
        "Holder dashboard, multi-language support, and structured growth campaigns. CEX listing discussions only when liquidity, volume, and utility readiness meet requirements.",
      status: "Planned",
      icon: "clock",
      side: "right",
    },
  ];

  const statusStyles: Record<Status, { text: string; dot: string }> = {
    Verified: {
      text: "text-[#20befa]",
      dot: "!bg-[#20befa] !border-[#20befa] shadow-lg shadow-[#20befa]/30",
    },
    "In Progress": {
      text: "text-white",
      dot: "!bg-[#1a1d23] !border-[#20befa] shadow-lg shadow-[#20befa]/20",
    },
    Planned: {
      text: "text-white/80",
      dot: "!bg-[#1a1d23] !border-[#2b3139] shadow-lg shadow-black/20",
    },
  };

  return (
    <section id="Roadmap" className="text-white">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r pb-5 from-[#fff] via-[#fff] to-[#fff] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(168,144,255,0.35)]">
          RROTA Roadmap
        </h2>

        {/* Intro (credibility-first) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#1a1d23] to-[#202329] border border-[#2b3139] rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              RROTA is in an active build phase. This roadmap is designed to be
              honest: we only mark items as <span className="text-[#20befa] font-semibold">Verified</span>{" "}
              when they are publicly verifiable (on-chain or via published links).
              Everything else is listed as <span className="font-semibold">In Progress</span>{" "}
              or <span className="font-semibold">Planned</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              The goal is simple: ship utility in stages — development → beta →
              release — and avoid “big claims” until features are actually live.
              This keeps trust high and expectations aligned.
            </p>

            <p className="text-gray-300 leading-relaxed">
              If you are following RROTA early, the most important signal is
              execution: consistent updates, verified links, and real releases.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] !bg-gradient-to-b !from-[#2b3139] !via-[#20befa]/30 !to-[#2b3139] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  item.side === "left"
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:text-left"
                } z-10`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-15 -translate-y-1/2 hidden md:block w-4 h-4 rounded-full border-2 z-[-1]
                    ${statusStyles[item.status].dot}
                    ${item.side === "left" ? "right-[-8px]" : "left-[-8px]"}
                  `}
                ></div>

                {/* Roadmap item card */}
                <div className="p-3 rounded-[16px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
                  <div
                    className={`flex items-start gap-3 ${
                      item.side === "left" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {item.icon === "check" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-big w-5 h-5 text-[#20befa]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock w-5 h-5 text-white"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      )}
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-base font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed mt-1 text-white/75">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs mt-2 block opacity-80 ${
                      statusStyles[item.status].text
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Small note */}
          <div className="max-w-4xl mx-auto mt-10 text-center text-white/50 text-sm">
            Verified = publicly verifiable • In Progress = being built • Planned
            = next phases (subject to readiness + security)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
