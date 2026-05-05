"use client";

import React, { useState } from "react";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  phantom: "https://phantom.app/",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dextools: "https://www.dextools.io/app/token/rrota",
  gecko:
    "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF",
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

function CopyIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StepIcon({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: string;
}) {
  return (
    <div
      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${tone}`}
    >
      {children}
    </div>
  );
}

function WalletSvg() {
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
      <path d="M19 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h14a2 2 0 0 1 2 2v2" />
      <path d="M3 6v12a3 3 0 0 0 3 3h13a2 2 0 0 0 2-2v-3" />
      <path d="M18 12h4v4h-4a2 2 0 0 1 0-4Z" />
    </svg>
  );
}

function SparkSvg() {
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
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="m16.24 7.76 2.83-2.83" />
    </svg>
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

function PlaySvg() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72c0 .78.86 1.25 1.52.83l10.78-6.86a.98.98 0 0 0 0-1.66L9.52 4.31A.98.98 0 0 0 8 5.14Z" />
    </svg>
  );
}

const HowTo = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  const gameSteps = [
    {
      title: "Open the official game",
      text: "Use only the official Spin-to-Win app at spin.rrota.xyz. Avoid random links from DMs or unknown groups.",
      icon: <PlaySvg />,
      tone: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    },
    {
      title: "Sign in safely",
      text: "Use email, Google, or wallet login. On Phantom mobile browser, email login is usually the most reliable path.",
      icon: <ShieldSvg />,
      tone: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    },
    {
      title: "Claim daily bonuses",
      text: "Start with free spins and daily bonuses before using Boost Credits or wallet features.",
      icon: <SparkSvg />,
      tone: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
    },
    {
      title: "Connect Phantom",
      text: "Connect Phantom only when you want to deposit, withdraw, or verify wallet-related actions.",
      icon: <WalletSvg />,
      tone: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    },
    {
      title: "Deposit RTA for Boost Credits",
      text: "Deposited RTA becomes Boost Credits for gameplay. Boost Credits are not the same as withdrawable RTA rewards.",
      icon: <SparkSvg />,
      tone: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    },
    {
      title: "Withdraw eligible RTA rewards",
      text: "Eligible RTA rewards can be withdrawn to your connected Phantom wallet after verification and available game rules.",
      icon: <ShieldSvg />,
      tone: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    },
  ];

  return (
    <section id="HowTo" className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/14 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.14),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              How to use RROTA
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Play, verify, buy, and use
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                RROTA the safe way.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              RROTA now has two important user paths: playing the Spin-to-Win utility
              and buying/verifying $RTA safely on Solana.
            </p>
          </div>

          {/* Contract safety box */}
          <div className="mx-auto mt-8 max-w-5xl rounded-[30px] border border-cyan-400/14 bg-[#07101d]/82 p-5 backdrop-blur-xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/70">
                  <ShieldSvg />
                  Official RROTA Token Address
                </div>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  Always verify the mint address before swapping, connecting, or trusting any token page.
                </p>
                <p className="mt-3 break-all font-mono text-sm font-semibold text-white/88">
                  {TOKEN_ADDRESS}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <button
                  onClick={copyAddress}
                  type="button"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="text-emerald-300" />
                      Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon />
                      Copy Address
                    </>
                  )}
                </button>

                <a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 px-4 text-sm font-bold text-fuchsia-100 transition hover:bg-fuchsia-400/14"
                >
                  Open Solscan
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Game steps */}
          <div className="mt-10">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                  Spin-to-Win Flow
                </div>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  How to play the official game
                </h3>
              </div>

              <a
                href={LINKS.spin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/25 to-fuchsia-500/25 px-5 text-sm font-black text-white transition hover:brightness-110"
              >
                Launch Game
                <ExternalIcon />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {gameSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all hover:border-cyan-300/22 hover:bg-cyan-400/5"
                >
                  <div className="absolute right-4 top-4 text-4xl font-black text-white/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <StepIcon tone={step.tone}>{step.icon}</StepIcon>

                  <h4 className="text-lg font-black text-white">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/58">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buy guide */}
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-[32px] border border-emerald-400/14 bg-emerald-400/7 p-6">
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/80">
                Buy $RTA
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                Simple Solana buying path
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                If you are new, start small. Install Phantom, get SOL for fees, then use Jupiter
                with the official RROTA mint address.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={LINKS.phantom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm font-bold text-white/84 transition hover:bg-white/10"
                >
                  Download Phantom
                  <ExternalIcon />
                </a>

                <a
                  href={LINKS.jupiter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.18)] transition hover:brightness-110"
                >
                  Open Jupiter
                  <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "1. Install wallet",
                  text: "Use Phantom and back up your seed phrase safely. Never share it.",
                },
                {
                  title: "2. Get SOL",
                  text: "Send SOL to your Phantom wallet for swapping and network fees.",
                },
                {
                  title: "3. Swap to $RTA",
                  text: "Open Jupiter and verify the RROTA mint address before swapping.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h4 className="text-base font-black text-white">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/58">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart links */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href={LINKS.jupiter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-400/14 bg-cyan-400/7 px-4 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/12"
            >
              Jupiter <span className="text-white/40">↗</span>
            </a>
            <a
              href={LINKS.dextools}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-fuchsia-400/14 bg-fuchsia-400/7 px-4 py-3 text-sm font-bold text-fuchsia-100 transition hover:bg-fuchsia-400/12"
            >
              DEXTools <span className="text-white/40">↗</span>
            </a>
            <a
              href={LINKS.gecko}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-amber-400/14 bg-amber-400/7 px-4 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-400/12"
            >
              GeckoTerminal <span className="text-white/40">↗</span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-400/16 bg-amber-400/7 px-5 py-4 text-sm leading-7 text-amber-100/80">
            Important: nothing here is financial advice. Always verify official links, review
            wallet transactions before signing, and never approve random wallet prompts.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
