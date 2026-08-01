"use client";

import React, { useEffect, useState } from "react";
import { getTokenData, type TokenDataResponse } from "../lib/token-data";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  tokenomics: "/tokenomics",
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  gecko: `https://www.geckoterminal.com/solana/tokens/${TOKEN_ADDRESS}`,
  freshcoins: "https://freshcoins.io/audit/rrota",
  solidproof: "https://app.solidproof.io/projects/rrota",
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

function formatPrice(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "Open live chart";
  if (value < 0.000001) return `$${value.toExponential(2)}`;
  return `$${value.toFixed(9)}`;
}

function formatMoney(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "Open live chart";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function formatTokenAmount(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "Verify on Solscan";
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(3)}B RTA`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M RTA`;
  return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} RTA`;
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) return "Open live chart";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function shortAddress(address: string) {
  return `${address.slice(0, 8)}...${address.slice(-8)}`;
}

function MarketCard({
  label,
  value,
  note,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  tone: string;
}) {
  return (
    <div className={`rounded-3xl border p-5 backdrop-blur-xl ${tone}`}>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">
        {label}
      </div>
      <div className="mt-2 text-xl font-black text-white">{value}</div>
      <div className="mt-2 text-xs leading-5 text-white/46">{note}</div>
    </div>
  );
}

const Tokenomics = () => {
  const [tokenData, setTokenData] = useState<TokenDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchTokenData = async () => {
      try {
        const data = await getTokenData(TOKEN_ADDRESS);
        if (!mounted) return;
        setTokenData(data);
        setError(false);
      } catch (err) {
        console.error("Failed to fetch RROTA token data:", err);
        if (!mounted) return;
        setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchTokenData();
    const interval = window.setInterval(fetchTokenData, 5 * 60 * 1000);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const marketCards = [
    {
      label: "Current Price",
      value: loading ? "Loading..." : formatPrice(tokenData?.price ?? 0),
      note: "Live market estimate from the RROTA data endpoint.",
      tone: "border-cyan-400/16 bg-cyan-400/7",
    },
    {
      label: "Market Cap",
      value: loading ? "Loading..." : formatMoney(tokenData?.marketCap ?? 0),
      note: "Calculated from the current market data source.",
      tone: "border-fuchsia-400/16 bg-fuchsia-400/7",
    },
    {
      label: "Liquidity",
      value: loading ? "Loading..." : formatMoney(tokenData?.liquidity ?? 0),
      note: "Use the official charts below for pool-level details.",
      tone: "border-emerald-400/16 bg-emerald-400/7",
    },
    {
      label: "24h Change",
      value: loading ? "Loading..." : formatPercent(tokenData?.priceChange24h ?? 0),
      note: "Market movement can change quickly and is not guaranteed.",
      tone: "border-amber-400/16 bg-amber-400/7",
    },
  ];

  const tokenFacts = [
    ["Network", "Solana"],
    ["Token standard", "SPL"],
    ["Symbol", "$RTA"],
    ["Mint authority", "Revoked"],
    ["Freeze authority", "Revoked"],
    ["Current supply", loading ? "Loading..." : formatTokenAmount(tokenData?.tokenSupply ?? 0)],
  ];

  return (
    <section
      id="Tokenomics"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-4 text-white sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                RROTA Token
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Clear token facts.
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Verifiable on-chain.
                </span>
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="text-sm leading-7 text-white/66 sm:text-base">
                This section combines a live market snapshot with the permanent facts that users
                should verify before trading or connecting a wallet. Supply, authorities, liquidity,
                and burn history should always be checked through official on-chain sources.
              </p>
            </div>
          </div>

          {error && (
            <div className="mt-7 rounded-2xl border border-amber-400/18 bg-amber-400/8 p-4 text-center text-sm text-amber-100/85">
              Live market data is temporarily unavailable. The official chart and Solscan links below remain available.
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketCards.map((card) => (
              <MarketCard key={card.label} {...card} />
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[34px] border border-cyan-400/14 bg-cyan-400/6 p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/75">
                    Official Solana Mint
                  </div>
                  <div className="mt-2 break-all font-mono text-sm font-semibold leading-6 text-white/88">
                    {TOKEN_ADDRESS}
                  </div>
                  <div className="mt-2 text-xs text-white/46">
                    Short form: {shortAddress(TOKEN_ADDRESS)}
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <button
                    onClick={copyAddress}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/10 px-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/15"
                    type="button"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="text-emerald-300" />
                        Copied
                      </>
                    ) : (
                      <>
                        <CopyIcon />
                        Copy address
                      </>
                    )}
                  </button>

                  <a
                    href={LINKS.solscan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 px-4 text-sm font-bold text-fuchsia-100 transition hover:bg-fuchsia-400/14"
                  >
                    Verify on Solscan
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tokenFacts.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-black text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[30px] border border-emerald-400/14 bg-emerald-400/7 p-5">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300/75">
                  Supply & burn transparency
                </div>
                <h3 className="mt-3 text-2xl font-black text-white">
                  On-chain proof comes first.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Current supply is loaded from the token-data service when available. Burned tokens
                  are not estimated from a hard-coded number or a decorative chart. Burn history should
                  be published with dates, amounts, and Solscan transaction links on the full tokenomics page.
                </p>

                <a
                  href={LINKS.tokenomics}
                  className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-emerald-400/18 bg-emerald-400/10 px-4 text-sm font-black text-emerald-100 transition hover:bg-emerald-400/15"
                >
                  Open full tokenomics
                  <ExternalIcon />
                </a>
              </div>

              <div className="rounded-[30px] border border-amber-400/14 bg-amber-400/7 p-5">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-200/75">
                  Token role
                </div>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  $RTA is the shared token layer across the RROTA ecosystem. Its role is to connect
                  live and planned utilities, including game participation, reward systems, holder-linked
                  features, community campaigns, and future ecosystem products.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {[
              ["Buy on Jupiter", LINKS.jupiter],
              ["Solscan", LINKS.solscan],
              ["DEX Screener", LINKS.dexscreener],
              ["GeckoTerminal", LINKS.gecko],
              ["SolidProof", LINKS.solidproof],
              ["FreshCoins", LINKS.freshcoins],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-bold text-white/76 transition hover:border-cyan-300/22 hover:bg-cyan-400/7 hover:text-white"
              >
                <span>{label}</span>
                <ExternalIcon className="h-4 w-4 shrink-0" />
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-white/40">
            Market values can change quickly. Always verify the mint address and review live third-party market data before trading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
