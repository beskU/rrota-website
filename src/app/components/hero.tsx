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

const LINKS = {
  ecosystem: "#Ecosystem",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  spinToWin: "https://spin.rrota.xyz",
  aiAssistant: "/ai",
  freshCoins: "https://freshcoins.io/audit/rrota",
  solidProof: "https://app.solidproof.io/projects/rrota",
};

function formatPrice(price: number) {
  if (!price || price <= 0) return "Open chart";
  if (price < 0.000001) return `$${price.toExponential(2)}`;
  return `$${price.toFixed(9)}`;
}

function formatCompact(value: number) {
  if (!value || value <= 0) return "Open chart";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function formatPriceChange(change: number) {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
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
      <rect x="8" y="8" width="14" height="14" rx="2" />
      <path d="M16 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4" />
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
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MetricCard({
  label,
  value,
  href,
  emphasis = false,
}: {
  label: string;
  value: string;
  href: string;
  emphasis?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group rounded-2xl border px-4 py-3 transition-all hover:-translate-y-0.5 ${
        emphasis
          ? "border-cyan-300/22 bg-cyan-400/10 hover:border-cyan-200/38"
          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.065]"
      }`}
    >
      <div className="flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/42">
        <span>{label}</span>
        <ExternalIcon className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="mt-1 text-sm font-black text-white sm:text-base">{value}</div>
    </a>
  );
}

function TrustBadge({ label, href }: { label: string; href?: string }) {
  const content = (
    <>
      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
      <span>{label}</span>
      {href ? <ExternalIcon className="ml-auto h-3.5 w-3.5 text-white/35" /> : null}
    </>
  );

  const className =
    "flex min-h-10 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-black uppercase tracking-[0.11em] text-white/76 backdrop-blur-xl transition-all";

  if (!href) return <div className={className}>{content}</div>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:border-cyan-300/25 hover:bg-cyan-400/8 hover:text-white`}
    >
      {content}
    </a>
  );
}

const ECOSYSTEM_NODES = [
  {
    title: "$RTA Token",
    status: "Core",
    description: "The Solana token connecting the wider RROTA ecosystem.",
    tone: "cyan",
  },
  {
    title: "Spin-to-Win",
    status: "Live",
    description: "The first public playable product and reward experience.",
    tone: "emerald",
  },
  {
    title: "RROTA AI",
    status: "Tool",
    description: "An assistant for navigating and understanding the ecosystem.",
    tone: "fuchsia",
  },
  {
    title: "Crypto Shooter",
    status: "Building",
    description: "A planned gaming expansion beyond the wheel experience.",
    tone: "amber",
  },
  {
    title: "Community Rewards",
    status: "Active",
    description: "Races, campaigns and community participation around RROTA.",
    tone: "cyan",
  },
  {
    title: "Transit Utility",
    status: "Roadmap",
    description: "A long-term direction for practical transport-focused tools.",
    tone: "fuchsia",
  },
] as const;

const toneClasses = {
  cyan: {
    card: "border-cyan-400/16 bg-cyan-400/7",
    label: "text-cyan-200",
    dot: "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)]",
  },
  emerald: {
    card: "border-emerald-400/16 bg-emerald-400/7",
    label: "text-emerald-200",
    dot: "bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]",
  },
  fuchsia: {
    card: "border-fuchsia-400/16 bg-fuchsia-400/7",
    label: "text-fuchsia-200",
    dot: "bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.85)]",
  },
  amber: {
    card: "border-amber-400/16 bg-amber-400/7",
    label: "text-amber-200",
    dot: "bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.85)]",
  },
};

export default function Hero() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasDataError, setHasDataError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchTokenData = async () => {
      try {
        const data = await getTokenData(TOKEN_ADDRESS);
        if (!active) return;
        setTokenData(data);
        setHasDataError(false);
      } catch (error) {
        console.error("Error fetching RROTA token data:", error);
        if (active) setHasDataError(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchTokenData();
    const interval = window.setInterval(fetchTokenData, 5 * 60 * 1000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const copyTokenAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Failed to copy token address:", error);
    }
  };

  const hasLiveData = !loading && !hasDataError && Boolean(tokenData);
  const priceText = hasLiveData ? formatPrice(tokenData?.price || 0) : "Open chart";
  const marketCapText = hasLiveData
    ? formatCompact(tokenData?.marketCap || 0)
    : "Open chart";
  const liquidityText = hasLiveData
    ? formatCompact(tokenData?.liquidity || 0)
    : "Open chart";
  const priceChangeText = hasLiveData
    ? formatPriceChange(tokenData?.priceChange24h || 0)
    : "Open chart";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="Hero"
      className="relative isolate w-full overflow-hidden bg-[#050711] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(34,211,238,0.18),transparent_29%),radial-gradient(circle_at_84%_13%,rgba(217,70,239,0.15),transparent_28%),radial-gradient(circle_at_50%_88%,rgba(250,204,21,0.07),transparent_31%),linear-gradient(180deg,#050711_0%,#07101d_48%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[130px]" />
      </div>

      <motion.div
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative z-10">
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_13px_rgba(34,211,238,0.9)]" />
              Official RROTA ecosystem hub
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/58">
              Built on Solana
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-7">
            <h1 className="max-w-5xl text-[43px] font-black leading-[0.98] tracking-[-0.052em] text-white sm:text-[66px] lg:text-[80px]">
              One token.
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                A growing utility ecosystem.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              RROTA connects its Solana token with live gaming, digital rewards,
              community tools, AI support, products in development and a long-term
              direction toward practical real-world utility.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href={LINKS.ecosystem}
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_38px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.02] hover:brightness-110"
            >
              Explore Ecosystem
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={LINKS.jupiter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-emerald-400/22 bg-emerald-400/10 px-7 text-sm font-black uppercase tracking-[0.12em] text-emerald-100 transition-all hover:border-emerald-300/38 hover:bg-emerald-400/15 hover:text-white"
            >
              Buy $RTA
              <ExternalIcon />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs font-black uppercase tracking-[0.1em]"
          >
            <a
              href={LINKS.spinToWin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-cyan-200"
            >
              Play Spin-to-Win <ExternalIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={LINKS.aiAssistant}
              className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-fuchsia-200"
            >
              Ask RROTA AI <ArrowIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={LINKS.solscan}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-emerald-200"
            >
              Verify Contract <ExternalIcon className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 grid max-w-3xl gap-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            <TrustBadge label="Mint authority revoked" />
            <TrustBadge label="Freeze authority revoked" />
            <TrustBadge label="SolidProof audit" href={LINKS.solidProof} />
            <TrustBadge label="FreshCoins audit" href={LINKS.freshCoins} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-5 max-w-3xl rounded-[26px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/65">
                  Official Solana contract
                </div>
                <div className="mt-2 break-all font-mono text-xs font-semibold text-white/78 sm:text-sm">
                  {TOKEN_ADDRESS}
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={copyTokenAddress}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/8 px-4 text-xs font-black uppercase tracking-[0.1em] text-cyan-100 transition-all hover:bg-cyan-400/14"
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-xs font-black uppercase tracking-[0.1em] text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.075] hover:text-white"
                >
                  Solscan
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative z-10">
          <div className="relative mx-auto w-full max-w-[570px] overflow-hidden rounded-[38px] border border-cyan-300/16 bg-[linear-gradient(145deg,rgba(8,20,36,0.94),rgba(10,8,22,0.97))] p-5 shadow-[0_0_70px_rgba(34,211,238,0.11),0_0_110px_rgba(217,70,239,0.07)] backdrop-blur-2xl sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.17),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(217,70,239,0.13),transparent_37%)]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/68">
                    RROTA ecosystem map
                  </div>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">
                    More than one product.
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  Building
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-[#070b16]/78 p-4 sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_37%)]" />

                <div className="relative flex items-center gap-4 rounded-3xl border border-cyan-300/18 bg-cyan-400/7 p-4">
                  <motion.div
                    className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-cyan-300/24 bg-[radial-gradient(circle,#123653_0%,#07111e_65%,#050711_100%)] shadow-[0_0_35px_rgba(34,211,238,0.23)]"
                    animate={{ y: [-3, 3, -3], scale: [1, 1.02, 1] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={logo}
                      alt="RROTA logo"
                      width={58}
                      height={58}
                      className="rounded-full drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                      priority
                    />
                  </motion.div>

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200/65">
                      Core layer
                    </div>
                    <div className="mt-1 text-xl font-black text-white">RROTA ($RTA)</div>
                    <p className="mt-1 text-xs leading-5 text-white/56">
                      The token connecting products, rewards, community participation and future utility.
                    </p>
                  </div>
                </div>

                <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                  {ECOSYSTEM_NODES.map((node) => {
                    const tone = toneClasses[node.tone];
                    return (
                      <div
                        key={node.title}
                        className={`rounded-3xl border p-4 ${tone.card}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className={`text-[10px] font-black uppercase tracking-[0.18em] ${tone.label}`}>
                            {node.status}
                          </div>
                          <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
                        </div>
                        <div className="mt-2 text-sm font-black text-white">{node.title}</div>
                        <p className="mt-1 text-xs leading-5 text-white/52">{node.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MetricCard
                  label="RTA price"
                  value={priceText}
                  href={LINKS.dexscreener}
                  emphasis
                />
                <MetricCard
                  label="24h change"
                  value={priceChangeText}
                  href={LINKS.dexscreener}
                />
                <MetricCard
                  label="Market cap"
                  value={marketCapText}
                  href={LINKS.dexscreener}
                />
                <MetricCard
                  label="Liquidity"
                  value={liquidityText}
                  href={LINKS.dexscreener}
                />
              </div>

              <p className="mt-4 text-center text-[10px] leading-5 text-white/36">
                Market data may be delayed. Verify current information through official third-party explorers before taking action.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
