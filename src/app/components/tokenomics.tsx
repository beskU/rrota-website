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
  // ✅ Fix for Recharts typing: makes this object compatible with "ChartDataInput"
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

  // Pie chart data for token distribution
  const pieChartData: PieChartData[] = [
    {
      name: "Liquidity (Locked)",
      value: 60,
      amount: "10,467,824,272",
      color: "#F0B90B",
    },
    { name: "Marketing", value: 13, amount: "2,268,028,592", color: "#8B5CF6" },
    {
      name: "Development",
      value: 8,
      amount: "1,395,709,903",
      color: "#06B6D4",
    },
    {
      name: "Community Rewards",
      value: 10,
      amount: "1,744,637,379",
      color: "#EC4899",
    },
    { name: "Team", value: 4, amount: "697,854,951", color: "#10B981" },
    { name: "Reserve", value: 3, amount: "523,391,214", color: "#EF4444" },
    { name: "Advisors", value: 2, amount: "348,927,476", color: "#F59E0B" },
  ];

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: {
      payload: {
        name: string;
        value: number;
        amount: string;
      };
    }[];
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-semibold">{data.name}</p>
          <p className="text-gray-300 text-sm">{data.value}%</p>
          <p className="text-gray-300 text-sm">{data.amount} tokens</p>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setError(null);
        const data = await getTokenData(TOKEN_ADDRESS);
        setTokenData(data);

        // Check if we got default/fallback data (price = 0 and holders = 0)
        if (data.price === 0 && data.holders === 0 && data.liquidity === 0) {
          setError("Using default data - API temporarily unavailable");
        }
      } catch (error) {
        console.error("Failed to fetch token data:", error);
        setError("Failed to load token data");
        // Set fallback data to prevent crashes
        setTokenData({
          price: 0,
          liquidity: 0,
          marketCap: 0,
          tokenSupply: 17446373786, // 17.4B tokens as mentioned in description
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
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

          {/* ✅ Use h2 here to avoid multiple H1 on the page */}
          <h2 className="text-5xl font-bold">RROTA Token</h2>

          <p className="text-[#aaa] max-w-2xl mx-auto text-lg leading-relaxed">
            A sustainable, secure, and community driven token built on Solana
            blockchain, empowering eco conscious innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-3 py-1 rounded-full bg-[#F0B90B]/30 text-[#F0B90B] border border-[#F0B90B]/50 text-sm">
              SPL Token Standard
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-800/50 text-sm">
              Anti-Whale
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50 text-sm">
              Liquidity Locked
            </span>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-12"
          variants={titleVariants}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
            <p className="text-[#aaa] text-lg leading-relaxed mb-6">
              RROTA tokenomics are engineered to promote long-term value and
              community involvement. With a maximum supply of 17.4 billion $RTA,
              the token operates with 9 decimals on the Solana blockchain. A
              major portion of the supply has been burned to introduce scarcity,
              while the remaining tokens are strategically allocated across
              ecosystem growth, game rewards, transit use, and community
              incentives.
            </p>
            <p className="text-[#aaa] text-lg leading-relaxed mb-6">
              RROTA&apos;s utility is driven by its real-world applications —
              from gamified platforms like Spin-to-Win and the Crypto Shooter to
              Solana-powered transportation payments. The tokenomics are fully
              transparent, audited, and updated as the ecosystem expands. Our
              mission is to create a self-sustaining, deflationary token economy
              built on transparency, decentralization, and utility-first design.
            </p>
            <p className="text-[#aaa] text-lg leading-relaxed">
              By combining transparent tokenomics with real-world use cases and
              gamified earning, RROTA stands apart from ordinary meme coins. The
              $RTA token is deflationary, rewards-driven, and community-powered
              — with utility in transit payments, spin games, and future staking
              pools. As part of the growing Solana ecosystem, RROTA continues to
              evolve toward mass adoption.
            </p>
          </div>
        </motion.div>

        <motion.h3
          className="text-center text-3xl font-bold mb-8"
          variants={titleVariants}
        >
          <span className="relative inline-block mt-10">
            <span className="relative z-10">Token Distribution</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
        </motion.h3>

        {error && (
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-yellow-400 text-center">
              ⚠️ {error}. Showing fallback data.
            </p>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
          variants={cardVariants}
        >
          <ul className="space-y-4">
            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-yellow-400">
                60%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  💧 Liquidity (Locked)
                </div>
                <div className="text-sm text-gray-300">
                  10,467,824,272 tokens
                </div>
              </div>
            </li>

            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-purple-500">
                13%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  📢 Marketing
                </div>
                <div className="text-sm text-gray-300">
                  2,268,028,592 tokens
                </div>
              </div>
            </li>

            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-sky-400">
                8%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  🛠️ Development
                </div>
                <div className="text-sm text-gray-300">
                  1,395,709,903 tokens
                </div>
              </div>
            </li>

            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-pink-500">
                10%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  🎁 Community Rewards
                </div>
                <div className="text-sm text-gray-300">
                  1,744,637,379 tokens
                </div>
              </div>
            </li>

            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-green-500">
                4%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  👥 Team
                </div>
                <div className="text-sm text-gray-300">697,854,951 tokens</div>
              </div>
            </li>

            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-red-500">
                3%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  🧊 Reserve
                </div>
                <div className="text-sm text-gray-300">523,391,214 tokens</div>
              </div>
            </li>

            <li className="w-full flex items-center gap-2 px-3 py-2 text-sm font-normal capitalize transition-all duration-200 bg-[#20232934] hover:bg-[#202329] border border-[#2b3139] rounded-[24px] text-white">
              <span className="text-sm font-bold text-white px-3 py-1 rounded bg-red-500">
                2%
              </span>
              <div>
                <div className="font-semibold text-white leading-tight">
                  🧠 Advisors
                </div>
                <div className="text-sm text-gray-300">348,927,476 tokens</div>
              </div>
            </li>
          </ul>

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
                    height={36}
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
            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <div className="text-white font-semibold">
                  Total Token Supply
                </div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : tokenData && tokenData.tokenSupply
                    ? `${tokenData.tokenSupply.toLocaleString()} tokens`
                    : "20,000,000,000 tokens"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <div className="text-white font-semibold">Token Network</div>
                <div className="text-sm text-gray-300">Solana (SOL)</div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <div>
                <div className="text-white font-semibold">Current Price</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : tokenData && tokenData.price && tokenData.price > 0
                    ? `$${tokenData.price.toFixed(9)}`
                    : "TBD"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div>
                <div className="text-white font-semibold">Liquidity</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : tokenData &&
                      tokenData.liquidity &&
                      tokenData.liquidity > 0
                    ? `$${tokenData.liquidity.toLocaleString()}`
                    : "TBD"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <div className="text-white font-semibold">Holders</div>
                <div className="text-sm text-gray-300">
                  {loading
                    ? "Loading..."
                    : tokenData && tokenData.holders
                    ? `${tokenData.holders.toLocaleString()} RTA holders`
                    : "TBD"}
                </div>
              </div>
            </li>

            <li className="flex items-center gap-4 p-3 rounded-[24px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">!</span>
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">Mint address</div>
                <div className="text-sm text-gray-300 font-mono">3yeWY...xL1a</div>
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
