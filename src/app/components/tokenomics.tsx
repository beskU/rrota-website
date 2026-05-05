"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getTokenData, type TokenDataResponse } from "../lib/token-data";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface PieChartData {
  name: string;
  value: number;
  amount: string;
  color: string;
}

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  dextools: "https://www.dextools.io/app/token/rrota",
  gecko:
    "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF",
  audit: "https://freshcoins.io/audit/rrota",
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

const Tokenomics = () => {
  const [tokenData, setTokenData] = useState<TokenDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const BURNED_TOKENS = 0;

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setError(null);
        const data = await getTokenData(TOKEN_ADDRESS);
        setTokenData(data);

        if (data.price === 0 && data.holders === 0 && data.liquidity === 0) {
          setError("Live market data is temporarily unavailable");
        }
      } catch (err) {
        console.error("Failed to fetch token data:", err);
        setError("Live market data is temporarily unavailable");
        setTokenData({
          price: 0,
          liquidity: 0,
          marketCap: 0,
          tokenSupply: 17446373786,
          holders: 0,
          lastUpdated: Date.now(),
          priceChange24h: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
    const interval = setInterval(fetchTokenData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const supply = tokenData?.tokenSupply ?? 17446373786;
  const liquidityUsd = tokenData?.liquidity ?? 0;
  const marketCap = tokenData?.marketCap ?? 0;
  const holders = tokenData?.holders ?? 0;
  const price = tokenData?.price ?? 0;

  const safeSlices = [
    {
      name: "Circulating Supply",
      value: Math.max(supply - BURNED_TOKENS, 0),
      amount: `${Math.max(supply - BURNED_TOKENS, 0).toLocaleString()} tokens`,
      color: "#1cc2fc",
    },
    ...(BURNED_TOKENS > 0
      ? [
          {
            name: "Burned Tokens",
            value: BURNED_TOKENS,
            amount: `${BURNED_TOKENS.toLocaleString()} tokens`,
            color: "#f59e0b",
          },
        ]
      : []),
  ];

  const totalForChart = safeSlices.reduce((total, item) => total + item.value, 0);

  const pieChartData: PieChartData[] = safeSlices.map((slice) => ({
    name: slice.name,
    amount: slice.amount,
    color: slice.color,
    value:
      totalForChart > 0
        ? Number(((slice.value / totalForChart) * 100).toFixed(2))
        : 0,
  }));

  const formatPrice = (value: number) => {
    if (!value || value <= 0) return "Live chart";
    if (value < 0.000001) return `$${value.toExponential(2)}`;
    return `$${value.toFixed(9)}`;
  };

  const formatMoney = (value: number) => {
    if (!value || value <= 0) return "Live chart";
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: { payload: PieChartData }[];
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="rounded-2xl border border-cyan-400/20 bg-[#07101d] p-4 shadow-xl">
          <p className="font-black text-white">{data.name}</p>
          <p className="mt-1 text-sm text-cyan-200">{data.value}%</p>
          <p className="text-sm text-white/60">{data.amount}</p>
        </div>
      );
    }

    return null;
  };

  const marketCards = [
    {
      label: "Current Price",
      value: loading ? "Loading..." : formatPrice(price),
      tone: "border-cyan-400/16 bg-cyan-400/7",
    },
    {
      label: "Market Cap",
      value: loading ? "Loading..." : formatMoney(marketCap),
      tone: "border-fuchsia-400/16 bg-fuchsia-400/7",
    },
    {
      label: "Liquidity",
      value: loading ? "Loading..." : formatMoney(liquidityUsd),
      tone: "border-emerald-400/16 bg-emerald-400/7",
    },
    {
      label: "Holders",
      value: loading ? "Loading..." : holders ? holders.toLocaleString() : "Live chart",
      tone: "border-amber-400/16 bg-amber-400/7",
    },
  ];

  return (
    <section id="Tokenomics" className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.65 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Tokenomics
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              RROTA market and
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                token overview.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              A clear snapshot of the RROTA token, supply reference, market data, and official
              verification links.
            </p>
          </div>

          {error && (
            <div className="mx-auto mt-7 max-w-4xl rounded-2xl border border-amber-400/18 bg-amber-400/8 p-4 text-center text-sm text-amber-100/85">
              {error}. Use the official chart links below for current market details.
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketCards.map((card) => (
              <div
                key={card.label}
                className={`rounded-3xl border p-5 backdrop-blur-xl ${card.tone}`}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">
                  {card.label}
                </div>
                <div className="mt-2 text-xl font-black text-white">{card.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                    Supply Reference
                  </div>
                  <div className="mt-1 text-xl font-black text-white">
                    Circulating supply view
                  </div>
                </div>
              </div>

              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      verticalAlign="bottom"
                      height={42}
                      formatter={(value) => (
                        <span style={{ color: "#ffffff", fontSize: "12px" }}>
                          {value}
                        </span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 rounded-2xl border border-amber-400/14 bg-amber-400/7 p-4 text-sm leading-6 text-amber-100/75">
                Burned supply should only be shown after confirming the exact on-chain amount.
                This view avoids unsupported burn claims.
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[30px] border border-cyan-400/14 bg-cyan-400/7 p-5">
                <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                  Official Contract
                </div>
                <div className="mt-3 break-all font-mono text-sm font-semibold leading-6 text-white/82">
                  {TOKEN_ADDRESS}
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
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
                    Solscan
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Network", "Solana SPL"],
                  ["Mint Authority", "Revoked"],
                  ["Freeze Authority", "Revoked"],
                  ["Utility", "Spin-to-Win live"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">
                      {label}
                    </div>
                    <div className="mt-2 text-lg font-black text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Jupiter", LINKS.jupiter],
                  ["DEXTools", LINKS.dextools],
                  ["GeckoTerminal", LINKS.gecko],
                  ["Audit", LINKS.audit],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 text-sm font-bold text-white/78 transition hover:border-cyan-300/22 hover:bg-cyan-400/7 hover:text-white"
                  >
                    {label}
                    <ExternalIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tokenomics;
