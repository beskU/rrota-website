"use client";

import React, { useEffect, useRef, useState } from "react";

const TOKEN_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const chartUrl = `https://dexscreener.com/solana/${TOKEN_MINT}?embed=1&theme=dark&trades=0&info=0`;
const openUrl = `https://dexscreener.com/solana/${TOKEN_MINT}`;
const jupiterUrl = `https://jup.ag/tokens/${TOKEN_MINT}`;
const gameUrl = "https://spin.rrota.xyz";

const marketStats = [
  {
    label: "Network",
    value: "Solana",
    detail: "Fast, low-cost trading",
  },
  {
    label: "Utility",
    value: "Spin-to-Win",
    detail: "Live RROTA game layer",
  },
  {
    label: "Access",
    value: "$RTA",
    detail: "Used inside the game economy",
  },
  {
    label: "Verification",
    value: "Official Mint",
    detail: "Always match the contract",
  },
];

const trustItems = [
  "Verify the token mint before trading.",
  "Use only official RROTA links.",
  "Rewards are based on eligible game activity.",
];

const Graph = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const loadedRef = useRef(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);

      if (!loadedRef.current) {
        setHasError(true);
      }
    }, 10000);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleLoad = () => {
    loadedRef.current = true;
    setIsLoaded(true);
    setIsLoading(false);
    setHasError(false);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  const handleError = () => {
    loadedRef.current = false;
    setIsLoaded(false);
    setIsLoading(false);
    setHasError(true);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  const copyMint = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_MINT);
      setCopied(true);

      if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current);

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="Graph"
      className="relative w-full overflow-hidden px-4 py-16 sm:py-20"
    >
      {/* Premium background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
              Live Market Terminal
            </div>

            <h2 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Track RROTA live while the{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-yellow-200 bg-clip-text text-transparent">
                Spin-to-Win utility layer
              </span>{" "}
              is active.
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Follow the RROTA market chart, verify the official Solana contract,
              and use the correct trading and game links before interacting with
              the ecosystem.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                  Official Mint
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  RROTA / $RTA
                </p>
              </div>

              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                Verify
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-300/15 bg-black/30 p-3">
              <p className="break-all font-mono text-xs leading-6 text-cyan-100/90">
                {TOKEN_MINT}
              </p>
            </div>

            <button
              onClick={copyMint}
              className="mt-3 w-full rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15"
            >
              {copied ? "Copied Contract" : "Copy Contract"}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-xl font-black text-white">{item.value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Main terminal card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070A12]/95 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          {/* Terminal top bar */}
          <div className="relative z-20 mb-4 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <svg
                  className="h-5 w-5 text-cyan-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3v18h18M7 15l4-4 3 3 5-7"
                  />
                </svg>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-black text-white sm:text-lg">
                    RROTA Live Chart
                  </h3>

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200">
                    DexScreener Embed
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                  External market data. Always verify the official mint before
                  trading.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.18)] transition hover:scale-[1.02]"
              >
                Play Game ↗
              </a>

              <a
                href={jupiterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-fuchsia-300/25 bg-fuchsia-300/10 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-fuchsia-100 transition hover:border-fuchsia-200/50 hover:bg-fuchsia-300/15"
              >
                Buy $RTA ↗
              </a>

              <a
                href={openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/30 hover:bg-white/[0.09]"
              >
                Open Chart ↗
              </a>
            </div>
          </div>

          {/* Chart wrapper */}
          <div className="relative z-10 overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-black/40">
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#070A12]/95 backdrop-blur-xl">
                <div className="px-6 text-center">
                  <div className="mx-auto mb-5 h-12 w-12 rounded-full border-2 border-cyan-300 border-t-transparent shadow-[0_0_30px_rgba(34,211,238,0.22)] animate-spin" />
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-100">
                    Loading Market Chart
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    If the embedded chart does not load, use the direct chart
                    button above.
                  </p>
                </div>
              </div>
            )}

            {/* Error overlay */}
            {hasError && !isLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#070A12]/95 p-5 backdrop-blur-xl">
                <div className="max-w-md text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                    <svg
                      className="h-7 w-7 text-cyan-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <p className="text-base font-black text-white">
                    Chart temporarily unavailable
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Some browsers block embedded market charts. Open the chart
                    directly or refresh the page.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={openUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-cyan-300 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-200"
                    >
                      Open DexScreener ↗
                    </a>

                    <button
                      onClick={() => window.location.reload()}
                      className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/[0.1]"
                    >
                      Refresh
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="relative h-[420px] w-full sm:h-[520px] md:h-[610px] lg:h-[700px]">
              <iframe
                src={chartUrl}
                width="100%"
                height="100%"
                className="h-full w-full border-0"
                title="RROTA DexScreener Live Chart"
                loading="lazy"
                onLoad={handleLoad}
                onError={handleError}
                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                allow="fullscreen"
              />
            </div>
          </div>

          {/* Bottom trust strip */}
          <div className="relative z-20 mt-4 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-2 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-5 text-slate-300"
                >
                  <span className="mr-2 text-cyan-200">◆</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-yellow-300/20 bg-yellow-300/10 px-4 py-3 text-xs font-bold leading-5 text-yellow-100">
              No guaranteed profit. Trade carefully and verify official links.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
