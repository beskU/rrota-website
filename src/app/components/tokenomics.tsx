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
  [key: string]: string | number;
}

const Tokenomics = () => {
  const [tokenData, setTokenData] = useState<TokenDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

  /**
   * IMPORTANT:
   * If you have an exact burn amount, set it here.
   * If you don't, set it to 0 and remove the Burned slice below.
   */
  const BURNED_TOKENS = 0; // <-- replace with real number if you have it (example: 1000000000)

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setError(null);
        const data = await getTokenData(TOKEN_ADDRESS);
        setTokenData(data);

        if (data.price === 0 && data.holders === 0 && data.liquidity === 0) {
          setError("Token data API temporarily unavailable");
        }
      } catch (err) {
        console.error("Failed to fetch token data:", err);
        setError("Failed to load token data");
        setTokenData({
          price: 0,
          liquidity: 0,
          marketCap: 0,
          tokenSupply: 17446373786, // fallback supply
          holders: 0,
          lastUpdated: Date.now(),
          priceChange24h: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  const supply = tokenData?.tokenSupply ?? 17446373786;
  const liquidityUsd = tokenData?.liquidity ?? 0;

  // A conservative, credibility-first distribution.
  // (If you want wallet-specific allocations, you MUST link the wallet list / vesting proofs.)
  const derivedLiquidityTokensEstimate = 0; // we do NOT guess LP token amounts here

  const safeSlices = [
    {
      name: "Circulating (Estimated)",
      value: Math.max(supply - BURNED_TOKENS, 0),
      amount: `${Math.max(supply - BURNED_TOKENS, 0).toLocaleString()} tokens`,
      color: "#1cc2fc",
    },
    ...(BURNED_TOKENS > 0
      ? [
          {
            name: "Burned (On-chain)",
            value: BURNED_TOKENS,
            amount: `${BURNED_TOKENS.toLocaleString()} tokens`,
            color: "#F59E0B",
          },
        ]
      : []),
    ...(derivedLiquidityTokensEstimate > 0
      ? [
          {
            name: "Liquidity (Tokens)",
            value: derivedLiquidityTokensEstimate,
            amount: `${derivedLiquidityTokensEstimate.toLocaleString()} tokens`,
            color: "#10B981",
          },
        ]
      : []),
  ];

  const totalForChart = safeSlices.reduce((a, b) => a + (b.value as number), 0);

  const pieChartData: PieChartData[] = safeSlices.map((s) => ({
    ...s,
    // Convert to percentage display for pie
    value: totalForChart > 0 ? Number(((s.value / totalForChart) * 100).toFixed(2)) : 0,
  }));

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: { payload: { name: string; value: number; amount: string } }[];
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-semibold">{data.name}</p>
          <p className="text-gray-300 text-sm">{data.value}%</p>
          <p className="text-gray-300 text-sm">{data.amount}</p>
        </div>
      );
    }
    return null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="Tokenomics" className="max-w-7xl mx-auto px-4 text-white">
      <motion.div
        ref={ref}
        className="mt-10 space-y-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center space-y-6 mb-16"
          variants={titleVariants}
        >
          <div className="relative inline-block">
            <img
              src="/rrota-logo2.png"
              alt="RROTA Token"
              className="w-32 h-32 mx-auto"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500 opacity-10 blur-xl -z-10"></div>
          </div>

          <h2 className="text-5xl font-bold">Tokenomics</h2>

          <p className="text-[#aaa] max-w-3xl mx-auto text-lg leading-relaxed">
            This page focuses on verifiable facts (on-chain + live market data).
            Claims like “locked”, “anti-whale”, or wallet allocations should only
            be shown when proof links are provided.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-3 py-1 rounded-full bg-[#1cc2fc]/20 text-[#1cc2fc] border border-[#1cc2fc]/30 text-sm">
              Solana SPL Token
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 text-sm">
              Build Phase
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-800/50 text-sm">
              Proof Links Included
            </span>
          </div>

          {/* Proof links */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#202329] border border-[#2b3139] hover:border-[#1cc2fc] transition text-sm"
            >
              Solscan
            </a>
            <a
              href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#202329] border border-[#2b3139] hover:border-[#1cc2fc] transition text-sm"
            >
              Jupiter
            </a>
            <a
              href="https://www.dextools.io/app/token/rrota"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#202329] border border-[#2b3139] hover:border-[#1cc2fc] transition text-sm"
            >
              DEXTools
            </a>
            <a
              href="https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#202329] border border-[#2b3139] hover:border-[#1cc2fc] transition text-sm"
            >
              GeckoTerminal
            </a>
          </div>
        </motion.div>

        {error && (
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-yellow-400 text-center">
              ⚠️ {error}. Showing fallback values where needed.
            </p>
          </motion.div>
        )}

        <motion.h3
          className="text-center text-3xl font-bold mb-8"
          variants={titleVariants}
        >
          <span className="relative inline-block mt-10">
            <span className="relative z-10">Supply Overview</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
          variants={cardVariants}
        >
          {/* Left list (explain chart meaning) */}
          <ul className="space-y-4">
            <li className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-[#1cc2fc]">
                Info
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  Credibility-first chart
                </div>
                <div className="text-sm text-gray-300">
                  We only show categories we can support without guessing.
                </div>
              </div>
            </li>

            <li className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-[#F59E0B]">
                Note
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  “Locked / Anti-whale” claims
                </div>
                <div className="text-sm text-gray-300">
                  Add those only when proof links + rules are published.
                </div>
              </div>
            </li>

            <li className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-emerald-500">
                Proof
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  Official links section
                </div>
                <div className="text-sm text-gray-300">
                  Solscan / Jupiter / DEX charts are linked above.
                </div>
              </div>
            </li>
          </ul>

          {/* Chart */}
          <div className="flex justify-center items-center h-full">
            <div className="w-[400px] h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={140}
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
                    height={44}
                    formatter={(value, entry: { color?: string }) => (
                      <span style={{ color: entry.color, fontSize: "12px" }}>
                        {value}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats cards */}
          <ul className="space-y-4">
            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <div className="text-white font-semibold">Total Supply</div>
                <div className="text-sm text-gray-300">
                  {loading ? "Loading..." : `${supply.toLocaleString()} tokens`}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <div>
                <div className="text-white font-semibold">Network</div>
                <div className="text-sm text-gray-300">Solana (SPL)</div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">$</span>
              </div>
              <div>
                <div className="text-white font-semibold">Current Price</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : tokenData?.price && tokenData.price > 0
                    ? `$${tokenData.price.toFixed(9)}`
                    : "—"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <div>
                <div className="text-white font-semibold">Liquidity (USD)</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : liquidityUsd && liquidityUsd > 0
                    ? `$${liquidityUsd.toLocaleString()}`
                    : "—"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <div>
                <div className="text-white font-semibold">Holders</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : tokenData?.holders
                    ? `${tokenData.holders.toLocaleString()}`
                    : "—"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CA</span>
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">Token Address</div>
                <div className="text-sm text-gray-300 font-mono">
                  3yeWY...xL1a
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(TOKEN_ADDRESS);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 group"
                  title="Copy full address"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>

                {copied && (
                  <div className="absolute top-1 -left-3 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap z-20">
                    Copied!
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tokenomics;
