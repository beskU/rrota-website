"use client";
import React from "react";

const Why = () => {
  return (
    <section id="WhyRrota" className="max-w-7xl mx-auto px-4">
      <div className="mt-10 space-y-6">
        {/* Clean Hook */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1cc2fc] mb-4">
            Why RROTA
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/75 max-w-3xl mx-auto">
            RROTA is a utility-first Solana token built in public: secure setup,
            verifiable on-chain facts, and staged releases as each module is
            tested.
          </p>
          <p className="mt-3 text-white/50 text-sm max-w-3xl mx-auto">
            Build phase: active. Utilities shown below are in development unless
            marked otherwise.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="relative inline-block">
            <span className="relative z-10">Core Principles</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0" />
          </span>
        </h2>

        {/* Audit & Security Section */}
        <div className="mb-12 p-8 rounded-2xl border border-[#2b3139] !bg-gradient-to-br !from-[#1cc2fc]/10 !to-[#0ea5e9]/5 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Security & Trust</h3>
            <p className="text-white/70">
              Security controls and transparency are not optional — they are the
              foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* FreshCoins Audit Badge */}
            <div
              className="flex flex-col items-center p-6 rounded-xl border border-green-500/30 !bg-gradient-to-br !from-green-500/10 !to-transparent hover:border-green-400 transition-all duration-300 group cursor-pointer"
              onClick={() =>
                window.open("https://freshcoins.io/audit/rrota", "_blank")
              }
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
              <h4 className="font-bold text-lg text-white mb-2">
                Audit Verification
              </h4>
              <p className="text-green-400 text-sm font-medium mb-2">
                FreshCoins Report
              </p>
              <p className="text-white/70 text-sm text-center">
                View the available audit verification report.
              </p>
              <div className="mt-3 text-green-400 text-xs font-medium">
                Click to view report →
              </div>
            </div>

            {/* No Mint Authority */}
            <div className="flex flex-col items-center p-6 rounded-xl border border-red-500/30 !bg-gradient-to-br !from-red-500/10 !to-transparent">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
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
              <h4 className="font-bold text-lg text-white mb-2">
                Mint Authority Revoked
              </h4>
              <p className="text-red-400 text-sm font-medium mb-2">
                Fixed Supply
              </p>
              <p className="text-white/70 text-sm text-center">
                No new tokens can be minted from the token mint authority.
              </p>
            </div>

            {/* LP Locked Forever (keep claim only if true) */}
            <div className="flex flex-col items-center p-6 rounded-xl border border-blue-500/30 !bg-gradient-to-br !from-blue-500/10 !to-transparent">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
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
              <h4 className="font-bold text-lg text-white mb-2">
                Liquidity Status
              </h4>
              <p className="text-blue-400 text-sm font-medium mb-2">
                Liquidity Secured
              </p>
              <p className="text-white/70 text-sm text-center">
                Provide verifiable proof (locker link / on-chain) wherever
                possible.
              </p>
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-purple-500 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 !bg-gradient-to-br !from-purple-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
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
                className="text-green-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p className="font-bold text-xl mb-2">Trust by Verification</p>
              <p className="text-[#aaa]">
                Public links, on-chain data, and security controls are shown
                clearly — not hidden behind marketing.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-yellow-500 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 !bg-gradient-to-br !from-yellow-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
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
                className="text-yellow-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              <p className="font-bold text-xl mb-2">Solana Speed</p>
              <p className="text-[#aaa]">
                Low fees and fast confirmations make it possible to build
                practical on-chain experiences.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-emerald-500 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 !bg-gradient-to-br !from-emerald-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
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
                className="text-emerald-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              <p className="font-bold text-xl mb-2">Community Driven</p>
              <p className="text-[#aaa]">
                Community is the distribution layer. Development is the value
                layer.
              </p>
            </div>
          </div>
        </div>

        {/* Utilities in Development Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="relative inline-block">
              <span className="relative z-10">Utilities in Development</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0" />
            </span>
          </h2>

          <p className="text-center text-white/70 mb-12 text-lg max-w-4xl mx-auto">
            Utilities are shipped in stages. Each module moves from development → beta → release.
            No “live utility” claims until it’s actually live.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Spin-to-Win */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] hover:border-purple-500 transition-all duration-300">
              <div className="absolute inset-0 !bg-gradient-to-br !from-purple-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-48 !bg-gradient-to-br !from-purple-500/20 !to-purple-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    In Development
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="font-bold text-xl text-white mb-2">
                  Spin-to-Win
                </h3>
                <p className="text-purple-300 font-semibold mb-2">
                  Reward logic (anti-farm focus)
                </p>
                <p className="text-white/70 text-sm">
                  Building a holder-focused reward system designed to discourage farming and prioritize real holders.
                </p>
              </div>
            </div>

            {/* Crypto Shooter */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] hover:border-orange-500 transition-all duration-300">
              <div className="absolute inset-0 !bg-gradient-to-br !from-orange-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-48 !bg-gradient-to-br !from-orange-500/20 !to-orange-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Prototype
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="font-bold text-xl text-white mb-2">
                  Shooter Game
                </h3>
                <p className="text-orange-300 font-semibold mb-2">
                  Gameplay prototype
                </p>
                <p className="text-white/70 text-sm">
                  Early stage concept and prototype planning. Reward mechanics will only be announced once tested.
                </p>
              </div>
            </div>

            {/* Transit Utility */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] hover:border-green-500 transition-all duration-300">
              <div className="absolute inset-0 !bg-gradient-to-br !from-green-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-48 !bg-gradient-to-br !from-green-500/20 !to-green-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/70 border border-white/10">
                    Research
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="font-bold text-xl text-white mb-2">
                  Transit Utility
                </h3>
                <p className="text-green-300 font-semibold mb-2">
                  Feasibility & integration planning
                </p>
                <p className="text-white/70 text-sm">
                  Researching how to connect real-world transit use cases with a secure on-chain flow.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://t.me/rrotaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] hover:!from-[#0ea5e9] hover:!to-[#1cc2fc] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Follow Development Updates →
            </a>
            <p className="mt-3 text-white/50 text-sm">
              Want early access when beta opens? Join Telegram and watch for the announcement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
