"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../../public/rrota-logo2.png";
import Image from "next/image";
import { getTokenData } from "../lib/token-data";
import Link from "next/link";

interface TokenData {
  price: number;
  liquidity: number;
  marketCap: number;
  lastUpdated: number;
  priceChange24h: number;
}

const Hero = () => {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const tokenAddress = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
  const OFFICIAL_DOMAIN = "https://rrota.xyz";

  const LINKS = {
    jupiter: `https://jup.ag/tokens/${tokenAddress}`,
    solscan: `https://solscan.io/token/${tokenAddress}`,
    dexscreener: `https://dexscreener.com/solana/${tokenAddress}`,
    birdeye: `https://birdeye.so/token/${tokenAddress}?chain=solana`,
    geckoterminal: `https://www.geckoterminal.com/solana/tokens/${tokenAddress}`,
    telegram: "https://t.me/rrotaOfficial",
    twitter: "https://x.com/rrotacoin",
    audit: "https://freshcoins.io/audit/rrota",
  };

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setLoading(true);
        const data = await getTokenData(tokenAddress);
        setTokenData(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch token data");
        console.error("Error fetching token data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
    const interval = setInterval(fetchTokenData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [tokenAddress]);

  const formatPrice = (price: number) => {
    if (price < 0.000001) return `$${price.toExponential(2)}`;
    return `$${price.toFixed(9)}`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1000000) return `$${(marketCap / 1000000).toFixed(2)}M`;
    if (marketCap >= 1000) return `$${(marketCap / 1000).toFixed(2)}K`;
    return `$${marketCap.toFixed(2)}`;
  };

  const formatPriceChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const StatusRow = ({
    dot,
    label,
  }: {
    dot: "green" | "yellow" | "blue";
    label: string;
  }) => {
    const dotClass =
      dot === "green"
        ? "bg-green-400"
        : dot === "yellow"
        ? "bg-yellow-400"
        : "bg-sky-400";

    return (
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
        <span className="text-sm text-white/85">{label}</span>
      </div>
    );
  };

  return (
    <div className="flex w-full justify-center !bg-transparent">
      <motion.section
        id="Hero"
        className="relative mt-[50px] w-full overflow-hidden py-[10px] text-white lg:mt-[100px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Glowing spinning background logo */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={logo}
              alt="RROTA Logo Background"
              width={400}
              height={400}
              className="filter drop-shadow-2xl"
              style={{
                filter:
                  "drop-shadow(0 0 20px rgba(28, 194, 252, 0.3)) drop-shadow(0 0 40px rgba(28, 194, 252, 0.2)) drop-shadow(0 0 80px rgba(28, 194, 252, 0.1))",
              }}
            />
            <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-[#1cc2fc]/20 via-transparent to-[#1cc2fc]/20 blur-3xl" />
          </motion.div>
        </motion.div>

        <div className="container relative z-10 mx-auto box-border flex items-start overflow-hidden px-4 max-[1100px]">
          <div
            className="
              grid grid-cols-1
              min-[1100px]:grid-cols-[3fr_2fr]
              items-center gap-8 rounded-lg p-5
              !bg-[#202329]/50
              backdrop-blur-[10px]
              lg:gap-14
            "
          >
            {/* LEFT */}
            <div className="flex h-full min-w-0 flex-col gap-3">
              <div className="my-auto flex flex-col gap-3">
                <motion.h1
                  className="font-display text-[44px] font-bold leading-tight text-[#1bbffb] md:text-[54px]"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  RROTA Coin (RTA) — Official Utility Token on Solana
                </motion.h1>

                <motion.p
                  className="max-w-[54ch] font-inter text-[14px] leading-[26px] text-white/80 md:text-[15px]"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
                >
                  Transparent build phase with staged releases. Track real status,
                  verify on-chain data, and follow development progress.
                </motion.p>

                <motion.div
                  className="max-w-[72ch] rounded-xl border border-gray-700/50 bg-[#202329]/55 p-4 backdrop-blur-sm"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <p className="font-poppins font-semibold text-white/95">
                    What is RROTA coin?
                  </p>

                  <p className="mt-2 text-sm leading-[26px] text-white/90">
                    <span className="font-semibold text-white">RROTA coin</span>{" "}
                    (also searched as{" "}
                    <span className="font-semibold text-white">RROTA token</span>{" "}
                    or{" "}
                    <span className="font-semibold text-white">RROTA crypto</span>
                    ) is the{" "}
                    <span className="font-semibold text-white">RTA token</span>{" "}
                    on Solana, built with a transparent development approach and
                    on-chain verification. The{" "}
                    <span className="font-semibold text-white">official website</span>{" "}
                    is{" "}
                    <a
                      href={OFFICIAL_DOMAIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1cc2fc] hover:underline"
                    >
                      {OFFICIAL_DOMAIN}
                    </a>
                    .
                  </p>
                </motion.div>

                <motion.div
                  className="mb-4 flex flex-col gap-4 sm:flex-row"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                >
                  <motion.a
                    href={LINKS.jupiter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] hover:!from-[#0ea5e9] hover:!to-[#1cc2fc]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    Buy on Jupiter
                  </motion.a>

                  <motion.a
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 !bg-gradient-to-r !from-[#0088cc] !to-[#006699] hover:!from-[#006699] hover:!to-[#0088cc]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    Join Telegram
                  </motion.a>
                </motion.div>

                <motion.div
                  className="mb-6 rounded-xl border border-gray-700/50 bg-[#202329]/55 p-4 backdrop-blur-sm"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-poppins font-semibold text-white/95">
                        Project Status
                      </span>
                      <span className="text-xs text-white/55">
                        (Live / In Progress)
                      </span>
                    </div>
                    <a
                      href={LINKS.solscan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1cc2fc] hover:underline"
                    >
                      Verify on Solscan →
                    </a>
                  </div>

                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <StatusRow dot="green" label="Token live on Solana" />
                    <StatusRow dot="green" label="Mint revoked / Freeze revoked" />
                    <StatusRow dot="green" label="Audit verification available" />
                    <StatusRow
                      dot="yellow"
                      label="Spin-to-Win: reward logic & anti-farm in development"
                    />
                    <StatusRow
                      dot="yellow"
                      label="Telegram WebApp: integration in progress"
                    />
                    <StatusRow dot="blue" label="Shooter game: prototype planning" />
                    <StatusRow dot="blue" label="Transit utility: research phase" />
                  </div>
                </motion.div>

                <motion.p
                  className="font-inter text-[14px] leading-[26px] text-white/75"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                >
                  RROTA is being built step-by-step with transparent execution.
                  Utilities ship when tested — not as promises.
                </motion.p>

                <motion.div
                  className="mb-6 mt-6"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="flex flex-col items-center gap-3 rounded-lg border border-gray-700/50 p-4 backdrop-blur-sm !bg-[#202329]/50 lg:flex-row">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#9945FF]"
                        >
                          <path
                            d="M5.02734 15.1875C5.10938 15.1055 5.22656 15.0586 5.34375 15.0586H21.6562C21.8203 15.0586 21.9023 15.2656 21.7773 15.3906L18.9727 18.1953C18.8906 18.2773 18.7734 18.3242 18.6562 18.3242H2.34375C2.17969 18.3242 2.09766 18.1172 2.22266 17.9922L5.02734 15.1875Z"
                            fill="currentColor"
                          />
                          <path
                            d="M5.02734 5.80469C5.10938 5.72266 5.22656 5.67578 5.34375 5.67578H21.6562C21.8203 5.67578 21.9023 15.2656 21.7773 6.00781L18.9727 8.8125C18.8906 8.89453 18.7734 8.94141 18.6562 8.94141H2.34375C2.17969 8.94141 2.09766 8.73438 2.22266 8.60938L5.02734 5.80469Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.9727 10.5C18.8906 10.4179 18.7734 10.3711 18.6562 10.3711H2.34375C2.17969 10.3711 2.09766 10.5781 2.22266 10.7031L5.02734 13.5078C5.10938 13.5898 5.22656 13.6367 5.34375 13.6367H21.6562C21.8203 13.6367 21.9023 13.4297 21.7773 13.3047L18.9727 10.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-sm text-white/70">Token Address</p>
                        <p className="break-all font-mono text-sm text-white">
                          {tokenAddress}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 rounded-lg border border-[#1cc2fc]/30 px-4 py-2 text-[#1cc2fc] transition-all duration-300 hover:text-white !bg-[#1cc2fc]/20 !hover:bg-[#1cc2fc]/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                      >
                        {copied ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-green-400"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span className="text-sm font-medium text-green-400">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                            <span className="text-sm font-medium">Copy</span>
                          </>
                        )}
                      </motion.button>

                      <motion.button
                        onClick={() => window.open(LINKS.solscan, "_blank")}
                        className="flex items-center gap-2 rounded-lg border border-[#9945FF]/30 px-4 py-2 text-[#9945FF] transition-all duration-300 hover:text-white !bg-[#9945FF]/20 !hover:bg-[#9945FF]/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        <span className="text-sm font-medium">Solscan</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap justify-start gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                >
                  {[
                    { name: "Jupiter", href: LINKS.jupiter },
                    { name: "DexScreener", href: LINKS.dexscreener },
                    { name: "BirdEye", href: LINKS.birdeye },
                    { name: "GeckoTerminal", href: LINKS.geckoterminal },
                  ].map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-gray-700 px-6 py-4 text-white shadow-lg transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:!bg-[#202329]"
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.15 + idx * 0.1, duration: 0.6 }}
                    >
                      <span className="font-poppins font-medium">{item.name}</span>
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-6 flex flex-wrap items-center gap-3"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <motion.a
                    href={LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#202329] p-3 text-white transition hover:opacity-80"
                    aria-label="Twitter (X)"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.55, duration: 0.6 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M3.04371 3.57629L9.99338 12.8687L3 20.4237H4.57397L10.6968 13.8092L15.6437 20.4237H21L13.6593 10.6087L20.169 3.57629H18.5951L12.9562 9.6682L8.39998 3.57629H3.04371ZM5.35834 4.73568H7.81903L18.685 19.2642H16.2243L5.35852 4.73568H5.35834Z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#202329] p-3 transition hover:opacity-80"
                    aria-label="Telegram"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.65, duration: 0.6 }}
                  >
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
                      className="h-5 w-5 text-white"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href={LINKS.audit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-0 rounded-full border border-gray-700/50 bg-[#202329] px-4 py-2 text-sm text-white/80 transition hover:border-gray-600 hover:text-white sm:ml-2"
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.75, duration: 0.6 }}
                  >
                    Audit verification →
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              className="flex min-h-[400px] items-center justify-center md:justify-end"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            >
              <div className="relative">
                <motion.div
                  className="min-w-[320px] w-full max-w-[380px] rounded-2xl border border-[#1cc2fc]/30 p-10 shadow-2xl backdrop-blur-sm !bg-gradient-to-br !from-[#353558] !via-[#16213e] !to-[#035ece]"
                  animate={{
                    y: [-12, 12, -12],
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    y: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="mb-6 text-center">
                    <motion.div
                      className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1cc2fc] to-[#0ea5e9]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Image src={logo} alt="logo" width={64} height={64} />
                    </motion.div>

                    <h3 className="mb-2 font-poppins text-xl font-bold text-white">
                      RROTA ($RTA)
                    </h3>
                    <p className="text-sm text-white/70">Token live on Solana</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Price</span>
                      <motion.span
                        className="font-bold text-[#1cc2fc]"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {loading ? (
                          <span className="text-white/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-400">Error</span>
                        ) : (
                          formatPrice(tokenData?.price || 0)
                        )}
                      </motion.span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">24h Change</span>
                      <motion.span
                        className={`font-bold ${
                          (tokenData?.priceChange24h || 0) >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        {loading ? (
                          <span className="text-white/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-400">Error</span>
                        ) : (
                          formatPriceChange(tokenData?.priceChange24h || 0)
                        )}
                      </motion.span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Market Cap</span>
                      <motion.span
                        className="font-bold text-white"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        {loading ? (
                          <span className="text-white/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-400">Error</span>
                        ) : (
                          formatMarketCap(tokenData?.marketCap || 0)
                        )}
                      </motion.span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Mint</span>
                      <span className="font-bold text-green-400">Revoked</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Freeze</span>
                      <span className="font-bold text-green-400">Revoked</span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-white/70">Audit verification</span>
                      <Link
                        href={LINKS.audit}
                        target="_blank"
                        className="font-semibold text-[#1cc2fc] hover:underline"
                      >
                        View →
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-xs text-white/50">
                    Build phase: active • Updates ship when ready
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 -top-4 h-3 w-3 rounded-full bg-[#1cc2fc] shadow-lg"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 5, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 h-2 w-2 rounded-full bg-[#0ea5e9] shadow-lg"
                  animate={{
                    y: [0, 25, 0],
                    x: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.7, 1.3, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute -left-6 top-1/2 h-1.5 w-1.5 rounded-full bg-white shadow-lg"
                  animate={{
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [0.6, 1.4, 0.6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute -right-8 top-1/4 h-2 w-2 rounded-full bg-[#1cc2fc]/60 shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, -5, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
