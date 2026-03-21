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

  // Set this only when you want to show a confirmed on-chain burn amount.
  const BURNED_TOKENS = 0;

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setError(null);
        const data = await getTokenData(TOKEN_ADDRESS);
        setTokenData(data);

        if (data.price === 0 && data.holders === 0 && data.liquidity === 0) {
          setError("Live token data is temporarily unavailable");
        }
      } catch (err) {
        console.error("Failed to fetch token data:", err);
        setError("Failed to load live token data");
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
  }, []);

  const supply = tokenData?.tokenSupply ?? 17446373786;
  const liquidityUsd = tokenData?.liquidity ?? 0;
  const marketCap = tokenData?.marketCap ?? 0;

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
            color: "#F59E0B",
          },
        ]
      : []),
  ];

  const totalForChart = safeSlices.reduce((a, b) => a + (b.value as number), 0);

  const pieChartData: PieChartData[] = safeSlices.map((slice) => ({
    ...slice,
    value:
      totalForChart > 0
        ? Number(((slice.value / totalForChart) * 100).toFixed(2))
        : 0,
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
        <div className="rounded-lg border border-gray-600 bg-[#1a1a1a] p-3 shadow-lg">
          <p className="font-semibold text-white">{data.name}</p>
          <p className="text-sm text-gray-300">{data.value}%</p>
          <p className="text-sm text-gray-300">{data.amount}</p>
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

  const formatPrice = (price: number) => {
    if (!price || price <= 0) return "—";
    if (price < 0.000001) return `$${price.toExponential(2)}`;
    return `$${price.toFixed(9)}`;
  };

  const formatMoney = (value: number) => {
    if (!value || value <= 0) return "—";
    return `$${value.toLocaleString()}`;
  };

  return (
    <section id="Tokenomics" className="mx-auto max-w-7xl px-4 text-white">
      <motion.div
        ref={ref}
        className="mt-10 space-y-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="mb-16 space-y-6 text-center"
          variants={titleVariants}
        >
          <div className="relative inline-block">
            <img
              src="/rrota-logo2.png"
              alt="RROTA Token"
              className="mx-auto h-32 w-32"
            />
            <div className="absolute inset-0 -z-10 rounded-full bg-purple-500 opacity-10 blur-xl" />
          </div>

          <h2 className="text-5xl font-bold">Tokenomics</h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#aaa]">
            A clean overview of the RROTA token using live market data and
            verifiable on-chain references.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-[#1cc2fc]/30 bg-[#1cc2fc]/20 px-3 py-1 text-sm text-[#1cc2fc]">
              Solana SPL Token
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/70">
              Live Market Data
            </span>
            <span className="rounded-full border border-emerald-800/50 bg-emerald-900/30 px-3 py-1 text-sm text-emerald-300">
              On-Chain References
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#2b3139] bg-[#202329] px-4 py-2 text-sm transition hover:border-[#1cc2fc]"
            >
              Solscan
            </a>
            <a
              href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#2b3139] bg-[#202329] px-4 py-2 text-sm transition hover:border-[#1cc2fc]"
            >
              Jupiter
            </a>
            <a
              href="https://www.dextools.io/app/token/rrota"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#2b3139] bg-[#202329] px-4 py-2 text-sm transition hover:border-[#1cc2fc]"
            >
              DEXTools
            </a>
            <a
              href="https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#2b3139] bg-[#202329] px-4 py-2 text-sm transition hover:border-[#1cc2fc]"
            >
              GeckoTerminal
            </a>
          </div>
        </motion.div>

        {error && (
          <motion.div
            className="mb-6 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-yellow-400">
              ⚠️ {error}. Fallback values are shown where needed.
            </p>
          </motion.div>
        )}

        <motion.h3
          className="mb-8 text-center text-3xl font-bold"
          variants={titleVariants}
        >
          <span className="relative mt-10 inline-block">
            <span className="relative z-10">Supply Overview</span>
            <motion.span
              className="absolute bottom-0 left-0 -z-0 h-2 w-full bg-[#1cc2fc]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-3"
          variants={cardVariants}
        >
          <ul className="space-y-4">
            <li className="flex w-full items-center gap-3 rounded-[24px] border border-[#2b3139] bg-[#20232934] px-4 py-3 text-sm text-white transition-all duration-200 hover:bg-[#202329]">
              <span className="rounded bg-[#1cc2fc] px-3 py-1 text-sm font-bold text-white">
                Info
              </span>
              <div>
                <div className="leading-tight font-semibold text-white">
                  Supply summary
                </div>
                <div className="text-sm text-gray-300">
                  The chart focuses on confirmed token supply information.
                </div>
              </div>
            </li>

            <li className="flex w-full items-center gap-3 rounded-[24px] border border-[#2b3139] bg-[#20232934] px-4 py-3 text-sm text-white transition-all duration-200 hover:bg-[#202329]">
              <span className="rounded bg-[#F59E0B] px-3 py-1 text-sm font-bold text-white">
                Note
              </span>
              <div>
                <div className="leading-tight font-semibold text-white">
                  Burn data
                </div>
                <div className="text-sm text-gray-300">
                  Burned supply can be added here once you want to display the
                  exact confirmed amount.
                </div>
              </div>
            </li>

            <li className="flex w-full items-center gap-3 rounded-[24px] border border-[#2b3139] bg-[#20232934] px-4 py-3 text-sm text-white transition-all duration-200 hover:bg-[#202329]">
              <span className="rounded bg-emerald-500 px-3 py-1 text-sm font-bold text-white">
                Links
              </span>
              <div>
                <div className="leading-tight font-semibold text-white">
                  Market and on-chain references
                </div>
                <div className="text-sm text-gray-300">
                  Official token and chart links are provided above.
                </div>
              </div>
            </li>
          </ul>

          <div className="flex h-full items-center justify-center">
            <div className="h-[400px] w-[400px]">
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

          <ul className="space-y-4">
            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <span className="font-bold text-white">S</span>
              </div>
              <div>
                <div className="font-semibold text-white">Total Supply</div>
                <div className="text-sm text-gray-300">
                  {loading ? "Loading supply..." : `${supply.toLocaleString()} tokens`}
                </div>
              </div>
            </li>

            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500">
                <span className="font-bold text-white">N</span>
              </div>
              <div>
                <div className="font-semibold text-white">Network</div>
                <div className="text-sm text-gray-300">Solana (SPL)</div>
              </div>
            </li>

            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                <span className="font-bold text-white">$</span>
              </div>
              <div>
                <div className="font-semibold text-white">Current Price</div>
                <div className="text-sm text-gray-300">
                  {loading ? "Loading price..." : formatPrice(tokenData?.price ?? 0)}
                </div>
              </div>
            </li>

            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">
                <span className="font-bold text-white">M</span>
              </div>
              <div>
                <div className="font-semibold text-white">Market Cap</div>
                <div className="text-sm text-gray-300">
                  {loading ? "Loading market cap..." : formatMoney(marketCap)}
                </div>
              </div>
            </li>

            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <span className="font-bold text-white">L</span>
              </div>
              <div>
                <div className="font-semibold text-white">Liquidity (USD)</div>
                <div className="text-sm text-gray-300">
                  {loading ? "Loading liquidity..." : formatMoney(liquidityUsd)}
                </div>
              </div>
            </li>

            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                <span className="font-bold text-white">H</span>
              </div>
              <div>
                <div className="font-semibold text-white">Holders</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading holders..."
                    : tokenData?.holders
                    ? tokenData.holders.toLocaleString()
                    : "—"}
                </div>
              </div>
            </li>

            <li className="relative z-10 flex items-center gap-4 rounded-[24px] border border-[#2b3139] bg-[#202329] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                <span className="font-bold text-white">CA</span>
              </div>

              <div className="flex-1">
                <div className="font-semibold text-white">Token Address</div>
                <div className="font-mono text-sm text-gray-300">
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
                  className="group rounded-full bg-gray-700 p-3 transition-colors duration-200 hover:bg-gray-600"
                  title="Copy full address"
                  type="button"
                >
                  <svg
                    className="h-4 w-4 text-gray-300 transition-colors group-hover:text-white"
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
                  <div className="absolute -left-3 top-1 z-20 -translate-x-1/2 transform whitespace-nowrap rounded-lg bg-green-500 px-3 py-1 text-sm font-medium text-white">
                    Copied!
                    <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500" />
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
