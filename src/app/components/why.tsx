"use client";
import React from "react";

const Why = () => {
  return (
    <section id="WhyRrota" className="mx-auto max-w-7xl px-4">
      <div className="mt-10 space-y-6">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#1cc2fc] md:text-5xl">
            Why RROTA
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium text-white/75 md:text-xl">
            RROTA is a Solana token focused on transparent execution, verifiable
            on-chain data, and staged utility releases.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-white/50">
            Development is active. Features below are released only when ready.
          </p>
        </div>

        <h2 className="mb-8 text-center text-3xl font-bold">
          <span className="relative inline-block">
            <span className="relative z-10">Core Principles</span>
            <span className="absolute bottom-0 left-0 h-2 w-full bg-[#1cc2fc] -z-0" />
          </span>
        </h2>

        <div className="mb-12 rounded-2xl border border-[#2b3139] !bg-gradient-to-br !from-[#1cc2fc]/10 !to-[#0ea5e9]/5 p-8 backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Security & Transparency
            </h3>
            <p className="text-white/70">
              RROTA highlights the core things that matter most: supply control,
              verification, and visible project status.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div
              className="group cursor-pointer rounded-xl border border-green-500/30 !bg-gradient-to-br !from-green-500/10 !to-transparent p-6 transition-all duration-300 hover:border-green-400"
              onClick={() =>
                window.open("https://freshcoins.io/audit/rrota", "_blank")
              }
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-400"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z" />
                  <path d="M3 5h18v6H3V5z" />
                </svg>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold text-white">
                Audit Verification
              </h4>
              <p className="mb-2 text-center text-sm font-medium text-green-400">
                FreshCoins Report
              </p>
              <p className="text-center text-sm text-white/70">
                View the available audit verification report and supporting
                project checks.
              </p>
              <div className="mt-3 text-center text-xs font-medium text-green-400">
                Click to view report →
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-red-500/30 !bg-gradient-to-br !from-red-500/10 !to-transparent p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-400"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold text-white">
                Mint Revoked
              </h4>
              <p className="mb-2 text-center text-sm font-medium text-red-400">
                Fixed Supply
              </p>
              <p className="text-center text-sm text-white/70">
                No new tokens can be created through the mint authority.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-blue-500/30 !bg-gradient-to-br !from-blue-500/10 !to-transparent p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <path d="M12 15v2" />
                </svg>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold text-white">
                Liquidity Status
              </h4>
              <p className="mb-2 text-center text-sm font-medium text-blue-400">
                Publicly Checkable
              </p>
              <p className="text-center text-sm text-white/70">
                Liquidity claims should always be backed by visible locker or
                on-chain proof.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] p-8 transition-all duration-300 hover:border-purple-500">
            <div className="pointer-events-none absolute inset-0 z-10 !bg-gradient-to-br !from-purple-500/20 !to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-20">
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
                className="mb-4 h-10 w-10 text-green-400 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="mb-2 text-xl font-bold">Trust Through Verification</p>
              <p className="text-[#aaa]">
                Public links, on-chain references, and project status are shown
                clearly instead of hidden behind hype.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] p-8 transition-all duration-300 hover:border-yellow-500">
            <div className="pointer-events-none absolute inset-0 z-10 !bg-gradient-to-br !from-yellow-500/20 !to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-20">
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
                className="mb-4 h-10 w-10 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              <p className="mb-2 text-xl font-bold">Solana Efficiency</p>
              <p className="text-[#aaa]">
                Fast confirmations and low fees make it easier to build practical
                on-chain experiences around RROTA.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] p-8 transition-all duration-300 hover:border-emerald-500">
            <div className="pointer-events-none absolute inset-0 z-10 !bg-gradient-to-br !from-emerald-500/20 !to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-20">
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
                className="mb-4 h-10 w-10 text-emerald-400 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <p className="mb-2 text-xl font-bold">Community-Led Growth</p>
              <p className="text-[#aaa]">
                Community drives reach and distribution, while development builds
                long-term value.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            <span className="relative inline-block">
              <span className="relative z-10">Utilities in Development</span>
              <span className="absolute bottom-0 left-0 h-2 w-full bg-[#1cc2fc] -z-0" />
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-center text-lg text-white/70">
            Utilities move in stages: development, beta, then release. Nothing
            is presented as live until it is actually live.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] transition-all duration-300 hover:border-purple-500">
              <div className="pointer-events-none absolute inset-0 z-10 !bg-gradient-to-br !from-purple-500/20 !to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-48 items-center justify-center !bg-gradient-to-br !from-purple-500/20 !to-purple-600/30">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                    In Development
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Spin-to-Win</h3>
                <p className="mb-2 font-semibold text-purple-300">
                  Reward logic with anti-farm focus
                </p>
                <p className="text-sm text-white/70">
                  A holder-focused reward system designed to reduce farming abuse
                  and support real ecosystem participation.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] transition-all duration-300 hover:border-orange-500">
              <div className="pointer-events-none absolute inset-0 z-10 !bg-gradient-to-br !from-orange-500/20 !to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-48 items-center justify-center !bg-gradient-to-br !from-orange-500/20 !to-orange-600/30">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3 3-3" />
                      <path d="m15 12 3 3-3 3" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-300">
                    Prototype
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Shooter Game</h3>
                <p className="mb-2 font-semibold text-orange-300">
                  Early gameplay prototype
                </p>
                <p className="text-sm text-white/70">
                  Early concept and gameplay planning. Reward mechanics should be
                  announced only after testing is complete.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] transition-all duration-300 hover:border-green-500">
              <div className="pointer-events-none absolute inset-0 z-10 !bg-gradient-to-br !from-green-500/20 !to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-48 items-center justify-center !bg-gradient-to-br !from-green-500/20 !to-green-600/30">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                    Research
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  Transit Utility
                </h3>
                <p className="mb-2 font-semibold text-green-300">
                  Feasibility and integration planning
                </p>
                <p className="text-sm text-white/70">
                  Researching how real-world transit use cases could connect with
                  a secure on-chain flow.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://t.me/rrotaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:!from-[#0ea5e9] hover:!to-[#1cc2fc]"
            >
              Follow Development Updates →
            </a>
            <p className="mt-3 text-sm text-white/50">
              Join Telegram to follow progress and watch for beta announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
