"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/rrota-logo2.png";
import { getTokenData } from "../lib/token-data";

interface TokenData {
  price: number;
  liquidity: number;
  marketCap: number;
  lastUpdated: number;
  priceChange24h: number;
}

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const OFFICIAL_DOMAIN = "https://rrota.xyz";
const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";
const AI_ASSISTANT_URL = "/ai";

const LINKS = {
  spinToWin: SPIN_TO_WIN_URL,
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  birdeye: `https://birdeye.so/token/${TOKEN_ADDRESS}?chain=solana`,
  geckoterminal: `https://www.geckoterminal.com/solana/tokens/${TOKEN_ADDRESS}`,
  telegram: "https://t.me/rrotaOfficial",
  twitter: "https://x.com/rrotacoin",
  audit: "https://freshcoins.io/audit/rrota",
  solidproof: "https://app.solidproof.io/",
};

function formatPrice(price: number) {
  if (!price || price <= 0) return "Live chart";
  if (price < 0.000001) return `$${price.toExponential(2)}`;
  return `$${price.toFixed(9)}`;
}

function formatCompact(value: number) {
  if (!value || value <= 0) return "Live chart";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function formatPriceChange(change: number) {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}

function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

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

function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WalletIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M19 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h14a2 2 0 0 1 2 2v2" />
      <path d="M3 6v12a3 3 0 0 0 3 3h13a2 2 0 0 0 2-2v-3" />
      <path d="M18 12h4v4h-4a2 2 0 0 1 0-4Z" />
    </svg>
  );
}

function RouteIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="5" r="3" />
      <path d="M12 19h3a3 3 0 0 0 3-3v-1" />
      <path d="M12 5H9a3 3 0 0 0-3 3v1" />
      <path d="M6 9v7" />
      <path d="M18 8v7" />
    </svg>
  );
}

function MetricCard({
  label,
  value,
  tone = "cyan",
}: {
  label: string;
  value: string;
  tone?: "cyan" | "green" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "green"
      ? "text-emerald-300 border-emerald-400/18 bg-emerald-400/7"
      : tone === "fuchsia"
        ? "text-fuchsia-300 border-fuchsia-400/18 bg-fuchsia-400/7"
        : tone === "amber"
          ? "text-amber-300 border-amber-400/18 bg-amber-400/7"
          : "text-cyan-300 border-cyan-400/18 bg-cyan-400/7";

  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneClass}`}>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
        {label}
      </div>
      <div className="mt-1 text-sm font-black text-white sm:text-base">{value}</div>
    </div>
  );
}

function StatusPill({
  label,
  tone = "green",
}: {
  label: string;
  tone?: "green" | "cyan" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "cyan"
      ? "border-cyan-400/20 bg-cyan-400/8 text-cyan-200"
      : tone === "fuchsia"
        ? "border-fuchsia-400/20 bg-fuchsia-400/8 text-fuchsia-200"
        : tone === "amber"
          ? "border-amber-400/20 bg-amber-400/8 text-amber-200"
          : "border-emerald-400/20 bg-emerald-400/8 text-emerald-200";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] ${toneClass}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
      {label}
    </div>
  );
}

function AuditLogoMark({
  fallback,
  compact = false,
  tone = "cyan",
}: {
  fallback: string;
  compact?: boolean;
  tone?: "cyan" | "green" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "green"
      ? "border-emerald-300/22 bg-emerald-400/10 text-emerald-100 shadow-[0_0_28px_rgba(16,185,129,0.12)]"
      : tone === "fuchsia"
        ? "border-fuchsia-300/22 bg-fuchsia-400/10 text-fuchsia-100 shadow-[0_0_28px_rgba(217,70,239,0.12)]"
        : tone === "amber"
          ? "border-amber-300/22 bg-amber-400/10 text-amber-100 shadow-[0_0_28px_rgba(245,158,11,0.12)]"
          : "border-cyan-300/22 bg-cyan-400/10 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.12)]";

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${toneClass} ${
        compact ? "h-10 w-10" : "h-12 w-12"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.22),transparent_38%)]" />
      <svg
        className={compact ? "relative h-7 w-7" : "relative h-8 w-8"}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2.4 20 5.4v6.4c0 5.1-3.4 8-8 9.8-4.6-1.8-8-4.7-8-9.8V5.4l8-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.2 12.2 10.8 15l5.2-5.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`absolute font-black tracking-[-0.08em] ${
          compact ? "text-[9px]" : "text-[10px]"
        }`}
      >
        {fallback}
      </span>
    </div>
  );
}

function SolidProofLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <AuditLogoMark fallback="SP" compact={compact} tone="cyan" />
      <div>
        <div
          className={`font-black tracking-[-0.03em] text-white ${
            compact ? "text-sm" : "text-lg"
          }`}
        >
          SolidProof
        </div>
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200/70">
          TrustNet Verified
        </div>
      </div>
    </div>
  );
}

function FreshCoinsLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <AuditLogoMark fallback="FC" compact={compact} tone="fuchsia" />
      <div>
        <div
          className={`font-black tracking-[-0.03em] text-white ${
            compact ? "text-sm" : "text-lg"
          }`}
        >
          FreshCoins
        </div>
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-200/70">
          Audit Verified
        </div>
      </div>
    </div>
  );
}

function TrustBadge({
  label,
  tone = "cyan",
}: {
  label: string;
  tone?: "cyan" | "green" | "fuchsia" | "amber";
}) {
  const toneClass =
    tone === "green"
      ? "border-emerald-400/18 bg-emerald-400/8 text-emerald-100"
      : tone === "fuchsia"
        ? "border-fuchsia-400/18 bg-fuchsia-400/8 text-fuchsia-100"
        : tone === "amber"
          ? "border-amber-400/18 bg-amber-400/8 text-amber-100"
          : "border-cyan-400/18 bg-cyan-400/8 text-cyan-100";

  return (
    <div
      className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] ${toneClass}`}
    >
      <CheckIcon className="h-3.5 w-3.5 shrink-0" />
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [hasDataError, setHasDataError] = useState(false);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setLoading(true);
        const data = await getTokenData(TOKEN_ADDRESS);
        setTokenData(data);
        setHasDataError(false);
      } catch (err) {
        console.error("Error fetching token data:", err);
        setHasDataError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
    const interval = setInterval(fetchTokenData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const copyTokenAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy token address:", err);
    }
  };

  const priceText =
    loading || hasDataError ? "Live chart" : formatPrice(tokenData?.price || 0);

  const marketCapText =
    loading || hasDataError
      ? "Live chart"
      : formatCompact(tokenData?.marketCap || 0);

  const liquidityText =
    loading || hasDataError
      ? "Live chart"
      : formatCompact(tokenData?.liquidity || 0);

  const priceChangeText =
    loading || hasDataError
      ? "Open chart"
      : formatPriceChange(tokenData?.priceChange24h || 0);

  const priceChangePositive = (tokenData?.priceChange24h || 0) >= 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 26, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="Hero"
      className="relative isolate w-full overflow-hidden bg-[#050711] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-32"
    >
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.16),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(250,204,21,0.09),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_45%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-[115px]" />
        <div className="absolute left-[-180px] top-[240px] h-[420px] w-[420px] rounded-full bg-amber-400/6 blur-[100px]" />
      </div>

      {/* Animated ambience */}
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.9)]"
        animate={{ y: [0, -28, 0], opacity: [0.35, 1, 0.35], scale: [0.8, 1.35, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[26%] h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_22px_rgba(217,70,239,0.9)]"
        animate={{ y: [0, 24, 0], opacity: [0.25, 0.9, 0.25], scale: [0.7, 1.25, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(250,204,21,0.8)]"
        animate={{ x: [0, 22, 0], opacity: [0.25, 0.9, 0.25], scale: [0.6, 1.3, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      <motion.div
        className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left content */}
        <div className="relative z-10">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2"
          >
            <StatusPill label="RROTA Ecosystem" />
            <StatusPill label="Solana SPL Token" tone="cyan" />
            <StatusPill label="SolidProof Audited" tone="amber" />
            <StatusPill label="Mint / Freeze Revoked" tone="fuchsia" />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-7">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white/64 backdrop-blur-xl">
              Official RROTA coin and ecosystem hub
            </div>

            <h1 className="mt-5 max-w-5xl text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-[64px] lg:text-[78px]">
              RROTA ($RTA) is a utility-first
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                Solana ecosystem.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              RROTA is building a Solana-based ecosystem around digital rewards,
              crypto gaming, community tools, and future public transportation utility.
              Spin-to-Win is the first live product inside a wider $RTA utility stack.
            </p>
          </motion.div>

          {/* Audit trust milestone */}
          <motion.div
            variants={itemVariants}
            className="relative mt-7 max-w-3xl overflow-hidden rounded-[30px] border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(6,17,32,0.90),rgba(16,9,28,0.90))] p-4 shadow-[0_0_46px_rgba(34,211,238,0.10),0_0_70px_rgba(217,70,239,0.08)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_90%_100%,rgba(217,70,239,0.12),transparent_34%)]" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-4">
                  <SolidProofLogo />
                  <FreshCoinsLogo />
                </div>

                <h2 className="mt-4 text-xl font-black tracking-[-0.03em] text-white sm:text-2xl">
                  SolidProof Audit Completed Successfully
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
                  RROTA is visible on SolidProof TrustNet with an{" "}
                  <span className="font-black text-cyan-200">80/100 Security Score</span>{" "}
                  and{" "}
                  <span className="font-black text-emerald-200">Contract Audited</span>{" "}
                  status, adding another public verification layer to the $RTA ecosystem.
                </p>
              </div>

              <a
                href={LINKS.solidproof}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl border border-cyan-300/24 bg-cyan-400/10 px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-cyan-50 transition-all hover:border-cyan-200/55 hover:bg-cyan-400/16"
              >
                View SolidProof
                <ExternalIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="relative mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              <TrustBadge label="SolidProof Audit" tone="cyan" />
              <TrustBadge label="80/100 Score" tone="green" />
              <TrustBadge label="Contract Audited" tone="amber" />
              <TrustBadge label="FreshCoins Audit" tone="fuchsia" />
              <TrustBadge label="Spin-to-Win Live" tone="cyan" />
            </div>

            <p className="relative mt-4 text-[11px] leading-5 text-white/42">
              Audits improve transparency and smart contract review coverage, but they do not remove market,
              liquidity, or participation risks. Always verify official links and contract details.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href={LINKS.jupiter}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_38px_rgba(34,211,238,0.23),0_0_70px_rgba(217,70,239,0.12)] transition-all hover:scale-[1.02] hover:brightness-110"
            >
              <WalletIcon className="h-5 w-5" />
              Buy $RTA
            </a>

            <a
              href={AI_ASSISTANT_URL}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/40 bg-[linear-gradient(135deg,rgba(45,255,231,0.22),rgba(168,85,247,0.14),rgba(0,0,0,0.20))] px-7 text-sm font-black uppercase tracking-[0.12em] text-cyan-50 shadow-[0_0_55px_rgba(34,211,238,0.24)] backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-cyan-200/70 hover:shadow-[0_0_85px_rgba(34,211,238,0.34)]"
            >
              <span className="absolute inset-0 translate-x-[-130%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.30),transparent)] transition duration-700 group-hover:translate-x-[130%]" />
              <span className="relative mr-3 inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,1)]" />
              </span>
              <span className="relative">Ask RROTA AI</span>
            </a>

            <a
              href={LINKS.solscan}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] px-7 text-sm font-black uppercase tracking-[0.12em] text-white/88 backdrop-blur-xl transition-all hover:border-cyan-300/28 hover:bg-cyan-400/10 hover:text-white"
            >
              Verify Contract
              <ShieldIcon className="h-5 w-5" />
            </a>

            <a
              href="#ecosystem-overview"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.035] px-7 text-sm font-black uppercase tracking-[0.12em] text-white/78 backdrop-blur-xl transition-all hover:border-emerald-300/25 hover:bg-emerald-400/8 hover:text-white"
            >
              Explore Ecosystem
              <RouteIcon className="h-5 w-5" />
            </a>

            <a
              href={LINKS.spinToWin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 px-7 text-sm font-black uppercase tracking-[0.12em] text-fuchsia-100 backdrop-blur-xl transition-all hover:border-fuchsia-300/28 hover:bg-fuchsia-400/12 hover:text-white"
            >
              Play Spin-to-Win
              <SparkIcon className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Token address lockbox */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-3xl rounded-[28px] border border-cyan-400/14 bg-[#08111f]/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_38px_rgba(34,211,238,0.08)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/70">
                  <ShieldIcon className="h-4 w-4" />
                  Official Solana Contract
                </div>
                <div className="mt-2 break-all font-mono text-sm font-semibold text-white/88">
                  {TOKEN_ADDRESS}
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <button
                  onClick={copyTokenAddress}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 text-sm font-bold text-cyan-100 transition-all hover:bg-cyan-400/15"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-4 w-4 text-emerald-300" />
                      Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon />
                      Copy
                    </>
                  )}
                </button>

                <a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 px-4 text-sm font-bold text-fuchsia-100 transition-all hover:bg-fuchsia-400/14"
                >
                  Solscan
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Ecosystem strip */}
          <motion.div
            id="ecosystem-overview"
            variants={itemVariants}
            className="mt-6 grid max-w-3xl scroll-mt-28 gap-3 sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/10 text-cyan-200">
                <ShieldIcon />
              </div>
              <div className="mt-3 text-sm font-black text-white">RROTA Coin</div>
              <p className="mt-1 text-xs leading-5 text-white/56">
                $RTA is the Solana SPL token powering the RROTA ecosystem.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/10 text-fuchsia-200">
                <SparkIcon />
              </div>
              <div className="mt-3 text-sm font-black text-white">Live Utility</div>
              <p className="mt-1 text-xs leading-5 text-white/56">
                Spin-to-Win is the first live product connected to $RTA.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/18 bg-emerald-400/10 text-emerald-200">
                <RouteIcon />
              </div>
              <div className="mt-3 text-sm font-black text-white">Ecosystem Roadmap</div>
              <p className="mt-1 text-xs leading-5 text-white/56">
                Crypto Shooter, community rewards, and future transport tools.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right premium visual */}
        <motion.div variants={itemVariants} className="relative z-10">
          <div className="relative mx-auto w-full max-w-[520px]">
            {/* Outer glow rings */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative overflow-hidden rounded-[38px] border border-cyan-300/16 bg-[linear-gradient(145deg,rgba(8,20,36,0.92),rgba(10,8,22,0.96))] p-5 shadow-[0_0_70px_rgba(34,211,238,0.12),0_0_110px_rgba(217,70,239,0.08)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(217,70,239,0.14),transparent_36%)]" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                      RROTA Control Deck
                    </div>
                    <div className="mt-1 text-xl font-black text-white">
                      Ecosystem Gateway
                    </div>
                  </div>

                  <div className="rounded-full border border-emerald-400/18 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                    Live
                  </div>
                </div>

                {/* Emblem chamber */}
                <div className="relative mt-6 flex min-h-[300px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#070b16]/80">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_50%_65%,rgba(217,70,239,0.12),transparent_40%)]" />
                  <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
                  <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-fuchsia-300/35 to-transparent" />

                  <motion.div
                    className="absolute h-[260px] w-[260px] rounded-full border border-cyan-300/15"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute h-[214px] w-[214px] rounded-full border border-fuchsia-300/18"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute h-[165px] w-[165px] rounded-full border border-amber-300/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                  />

                  <motion.div
                    className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full border border-cyan-300/25 bg-[radial-gradient(circle,#112b45_0%,#070b16_62%,#050711_100%)] shadow-[0_0_46px_rgba(34,211,238,0.26),inset_0_0_44px_rgba(217,70,239,0.11)]"
                    animate={{
                      y: [-8, 8, -8],
                      scale: [1, 1.025, 1],
                    }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="absolute inset-[-14px] rounded-full border border-cyan-300/10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <Image
                      src={logo}
                      alt="RROTA logo"
                      width={122}
                      height={122}
                      className="relative z-10 rounded-full drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                      priority
                    />
                  </motion.div>

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-3 py-2 text-center backdrop-blur-xl">
                      <div className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-200/70">
                        Token
                      </div>
                      <div className="mt-1 text-xs font-black text-white">$RTA</div>
                    </div>
                    <div className="rounded-2xl border border-fuchsia-400/16 bg-fuchsia-400/8 px-3 py-2 text-center backdrop-blur-xl">
                      <div className="text-[9px] font-black uppercase tracking-[0.16em] text-fuchsia-200/70">
                        Games
                      </div>
                      <div className="mt-1 text-xs font-black text-white">Utility</div>
                    </div>
                    <div className="rounded-2xl border border-amber-400/16 bg-amber-400/8 px-3 py-2 text-center backdrop-blur-xl">
                      <div className="text-[9px] font-black uppercase tracking-[0.16em] text-amber-200/70">
                        Audit
                      </div>
                      <div className="mt-1 text-xs font-black text-white">80/100</div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MetricCard label="Price" value={priceText} />
                  <MetricCard
                    label="24h"
                    value={priceChangeText}
                    tone={priceChangePositive ? "green" : "fuchsia"}
                  />
                  <MetricCard label="Market Cap" value={marketCapText} tone="fuchsia" />
                  <MetricCard label="Liquidity" value={liquidityText} tone="amber" />
                </div>

                {/* System status */}
                <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                          Token Safety & Audits
                        </div>
                        <div className="mt-1 text-sm font-black text-white">
                          Mint revoked • Freeze revoked • SolidProof 80/100
                        </div>
                      </div>

                      <div className="hidden flex-col gap-3 sm:flex">
                        <SolidProofLogo compact />
                        <FreshCoinsLogo compact />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <a
                        href={LINKS.solidproof}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/8 px-4 text-xs font-black uppercase tracking-[0.12em] text-cyan-100 transition-all hover:bg-cyan-400/14"
                      >
                        <ShieldIcon className="h-4 w-4" />
                        SolidProof
                      </a>

                      <a
                        href={LINKS.audit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 px-4 text-xs font-black uppercase tracking-[0.12em] text-fuchsia-100 transition-all hover:bg-fuchsia-400/14"
                      >
                        <ShieldIcon className="h-4 w-4" />
                        FreshCoins
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={LINKS.spinToWin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-13 w-full items-center justify-center gap-3 rounded-2xl border border-cyan-300/28 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_34px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.01] hover:brightness-110"
                >
                  Explore Live Utility
                  <ExternalIcon />
                </a>

                <p className="mt-4 text-center text-[11px] leading-5 text-white/45">
                  RROTA is a token-first ecosystem. Spin-to-Win is the first live product, not the whole vision.
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -left-3 top-10 hidden rounded-2xl border border-cyan-300/18 bg-[#08111f]/90 px-4 py-3 shadow-[0_0_34px_rgba(34,211,238,0.14)] backdrop-blur-xl sm:block"
              animate={{ y: [-6, 8, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300/70">
                Contract
              </div>
              <div className="mt-1 font-mono text-xs font-black text-white">
                {shortAddress(TOKEN_ADDRESS)}
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-3 bottom-16 hidden rounded-2xl border border-fuchsia-300/18 bg-[#10091c]/90 px-4 py-3 shadow-[0_0_34px_rgba(217,70,239,0.14)] backdrop-blur-xl sm:block"
              animate={{ y: [8, -6, 8] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-300/70">
                First Utility
              </div>
              <div className="mt-1 text-xs font-black text-white">spin.rrota.xyz</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom trust rail */}
      <motion.div
        className="mx-auto mt-12 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.65 }}
      >
        {[
          {
            title: "Official Website",
            value: OFFICIAL_DOMAIN.replace("https://", ""),
            href: OFFICIAL_DOMAIN,
          },
          {
            title: "SolidProof Audit",
            value: "80/100 Security Score",
            href: LINKS.solidproof,
          },
          {
            title: "First Live Utility",
            value: "spin.rrota.xyz",
            href: SPIN_TO_WIN_URL,
          },
          {
            title: "Official Telegram",
            value: "t.me/rrotaOfficial",
            href: LINKS.telegram,
          },
          {
            title: "Official X",
            value: "@rrotacoin",
            href: LINKS.twitter,
          },
        ].map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all hover:border-cyan-300/22 hover:bg-cyan-400/7"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">
              {item.title}
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="truncate text-sm font-black text-white/82 group-hover:text-white">
                {item.value}
              </span>
              <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-300/70" />
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
