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

  // Links (keep centralized so you can change later once)
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
        <span className="text-white/80 text-sm">{label}</span>
      </div>
    );
  };

  return (
    <div className="w-full !bg-transparent flex justify-center">
      <motion.section
        id="Hero"
        className="relative w-full text-white py-[10px] mt-[50px] lg:mt-[100px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Glowing spinning background logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 via-transparent to-[#1cc2fc]/20 rounded-full blur-3xl scale-150" />
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-4 flex items-start overflow-hidden box-border max-[1100px] relative z-10">
          <div
            className="
              grid grid-cols-1
              min-[1100px]:grid-cols-[3fr_2fr]
              gap-8 lg:gap-14
              p-5 
              items-center
              !bg-[#202329]/50
              backdrop-blur-[10px]
              rounded-lg
            "
          >
            {/* LEFT */}
            <div className="flex flex-col gap-3 min-w-0 h-full">
              <div className="flex flex-col gap-3 my-auto">
                {/* ✅ SEO Headline (H1) */}
                <motion.h1
                  className="font-display text-[44px] md:text-[54px] font-bold text-[#1bbffb] leading-tight"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  RROTA Coin (RTA) — Official Utility Token on Solana
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  className="font-inter text-[14px] md:text-[15px] text-white/75 leading-[26px] max-w-[54ch]"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
                >
                  Transparent build phase with staged releases. Track real status,
                  verify on-chain data, and follow development progress.
                </motion.p>

                {/* ✅ SEO reinforcement box (no spam, just clarity) */}
                <motion.div
                  className="p-4 rounded-xl border border-gray-700/50 bg-[#202329]/40 backdrop-blur-sm max-w-[72ch]"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <p className="text-white/90 font-poppins font-semibold">
                    What is RROTA coin?
                  </p>
                  <p className="mt-2 text-white/75 text-sm leading-[26px]">
                    <strong>RROTA coin</strong> (also searched as <strong>RROTA token</strong> or{" "}
                    <strong>RROTA crypto</strong>) is the <strong>RTA token</strong> on Solana,
                    built with a transparent development approach and on-chain verification. The{" "}
                    <strong>official website</strong> is{" "}
                    <a
                      href={OFFICIAL_DOMAIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1cc2fc] font-semibold hover:underline"
                    >
                      {OFFICIAL_DOMAIN}
                    </a>
                    .
                  </p>
                </motion.div>

                {/* Primary CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-4"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                >
                  <motion.a
                    href={LINKS.jupiter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] hover:!from-[#0ea5e9] hover:!to-[#1cc2fc] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                    className="flex items-center justify-center gap-3 px-8 py-4 !bg-gradient-to-r !from-[#0088cc] !to-[#006699] hover:!from-[#006699] hover:!to-[#0088cc] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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

                {/* Project Status Bar */}
                <motion.div
                  className="mb-6 p-4 rounded-xl border border-gray-700/50 bg-[#202329]/40 backdrop-blur-sm"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-white/90 font-poppins font-semibold">
                        Project Status
                      </span>
                      <span className="text-white/50 text-xs">
                        (Live / In Progress)
                      </span>
                    </div>
                    <a
                      href={LINKS.solscan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1cc2fc] text-sm hover:underline"
                    >
                      Verify on Solscan →
                    </a>
                  </div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <StatusRow dot="green" label="Token live on Solana" />
                    <StatusRow dot="green" label="Mint revoked / Freeze revoked" />
                    <StatusRow dot="green" label="Audit verification available" />
                    <StatusRow
                      dot="yellow"
                      label="Spin-to-Win: reward logic & anti-farm in development"
                    />
                    <StatusRow dot="yellow" label="Telegram WebApp: integration in progress" />
                    <StatusRow dot="blue" label="Shooter game: prototype planning" />
                    <StatusRow dot="blue" label="Transit utility: research phase" />
                  </div>
                </motion.div>

                {/* Short “what it is” line (no hype) */}
                <motion.p
                  className="font-inter text-[14px] text-white/70 leading-[26px]"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                >
                  RROTA is being built step-by-step with transparent execution.
                  Utilities ship when tested — not as promises.
                </motion.p>

                {/* ✅ Official domain + anti-phishing warning (counter-attack) */}
                <motion.div
                  className="mt-4 mb-2 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.28 }}
                >
                  <p className="text-amber-50 font-poppins font-semibold">
                    Official RROTA Website
                  </p>
                  <p className="mt-2 text-amber-50/90 text-sm leading-[26px]">
                    The only official domain for <strong>RROTA coin</strong> is{" "}
                    <a
                      href={OFFICIAL_DOMAIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-100 font-semibold underline decoration-amber-200/40 hover:decoration-amber-200"
                    >
                      {OFFICIAL_DOMAIN}
                    </a>
                    . ⚠ Beware of fake domains such as <strong>rr0ta.xyz</strong> (zero instead of
                    letter “o”). Always verify the contract before connecting your wallet.
                  </p>
                </motion.div>

                {/* Token Address Section */}
                <motion.div
                  className="mt-6 mb-6"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-3 p-4 !bg-[#202329]/50 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
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
                            d="M5.02734 5.80469C5.10938 5.72266 5.22656 5.67578 5.34375 5.67578H21.6562C21.8203 5.67578 21.9023 5.88281 21.7773 6.00781L18.9727 8.8125C18.8906 8.89453 18.7734 8.94141 18.6562 8.94141H2.34375C2.17969 8.94141 2.09766 8.73438 2.22266 8.60938L5.02734 5.80469Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.9727 10.5C18.8906 10.4179 18.7734 10.3711 18.6562 10.3711H2.34375C2.17969 10.3711 2.09766 10.5781 2.22266 10.7031L5.02734 13.5078C5.10938 13.5898 5.22656 13.6367 5.34375 13.6367H21.6562C21.8203 13.6367 21.9023 13.4297 21.7773 13.3047L18.9727 10.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/70 text-sm mb-1">Token Address</p>
                        <p className="text-white font-mono text-sm break-all">
                          {tokenAddress}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 px-4 py-2 !bg-[#1cc2fc]/20 !hover:bg-[#1cc2fc]/30 border border-[#1cc2fc]/30 rounded-lg transition-all duration-300 text-[#1cc2fc] hover:text-white"
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
                            <span className="text-green-400 text-sm font-medium">
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
                        className="flex items-center gap-2 px-4 py-2 !bg-[#9945FF]/20 !hover:bg-[#9945FF]/30 border border-[#9945FF]/30 rounded-lg transition-all duration-300 text-[#9945FF] hover:text-white"
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

                {/* Quick Links */}
                <motion.div
                  className="flex flex-wrap gap-4 justify-start"
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
                      className="flex items-center gap-3 hover:!bg-[#202329] text-white px-6 py-4 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.15 + idx * 0.1, duration: 0.6 }}
                    >
                      <span className="font-poppins font-medium">{item.name}</span>
                    </motion.a>
                  ))}
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  className="mt-6 flex items-center gap-3 flex-wrap"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <motion.a
                    href={LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition text-white"
                    aria-label="Twitter (X)"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.55, duration: 0.6 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M3.04371 3.57629L9.99338 12.8687L3 20.4237H4.57397L10.6968 13.8092L15.6437 20.4237H21L13.6593 10.6087L20.169 3.57629H18.5951L12.9562 9.6682L8.39998 3.57629H3.04371ZM5.35834 4.73568H7.81903L18.685 19.2642H16.2243L5.35852 4.73568H5.35834Z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
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
                      className="w-5 h-5 text-white"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </motion.a>

                  {/* Audit link chip */}
                  <motion.a
                    href={LINKS.audit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-0 sm:ml-2 px-4 py-2 rounded-full bg-[#202329] border border-gray-700/50 hover:border-gray-600 text-white/80 hover:text-white transition text-sm"
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
              className="flex items-center md:justify-end justify-center min-h-[400px]"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            >
              <div className="relative">
                <motion.div
                  className="!bg-gradient-to-br !from-[#353558] !via-[#16213e] !to-[#035ece] backdrop-blur-sm border border-[#1cc2fc]/30 rounded-2xl p-10 shadow-2xl min-w-[320px] w-full max-w-[380px]"
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
                  <div className="text-center mb-6">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-[#1cc2fc] to-[#0ea5e9] rounded-full mx-auto mb-4 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Image src={logo} alt="logo" width={64} height={64} />
                    </motion.div>

                    <h3 className="text-white font-poppins font-bold text-xl mb-2">
                      RROTA ($RTA)
                    </h3>
                    <p className="text-white/70 text-sm">Token live on Solana</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Price</span>
                      <motion.span
                        className="text-[#1cc2fc] font-bold"
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

                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">24h Change</span>
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

                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Market Cap</span>
                      <motion.span
                        className="text-white font-bold"
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

                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Mint</span>
                      <span className="text-green-400 font-bold">Revoked</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Freeze</span>
                      <span className="text-green-400 font-bold">Revoked</span>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                      <span className="text-white/70 text-sm">Audit verification</span>
                      <Link
                        href={LINKS.audit}
                        target="_blank"
                        className="text-[#1cc2fc] font-semibold hover:underline"
                      >
                        View →
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-white/50 text-xs">
                    Build phase: active • Updates ship when ready
                  </div>
                </motion.div>

                {/* Floating particles (kept) */}
                <motion.div
                  className="absolute -top-4 -right-4 w-3 h-3 bg-[#1cc2fc] rounded-full shadow-lg"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 5, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#0ea5e9] rounded-full shadow-lg"
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
                  className="absolute top-1/2 -left-6 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
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
                  className="absolute top-1/4 -right-8 w-2 h-2 bg-[#1cc2fc]/60 rounded-full shadow-lg"
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
