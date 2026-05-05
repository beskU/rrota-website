"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  website: "https://rrota.xyz",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dextools: "https://www.dextools.io/app/token/rrota",
  gecko:
    "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF",
  audit: "https://freshcoins.io/audit/rrota",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
  whitepaper:
    "https://github.com/beskU/rrota/blob/d094f58cfde725493bd2eba708d438ad2a6f76a2/RROTA%20%24RTA%20WHITEPAPER.pdf",
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

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Failed to copy token address:", error);
    }
  };

  const officialLinks = [
    {
      label: "Spin-to-Win Game",
      href: LINKS.spin,
      detail: "Official live app",
      tone: "cyan",
    },
    {
      label: "Buy on Jupiter",
      href: LINKS.jupiter,
      detail: "Trade $RTA",
      tone: "emerald",
    },
    {
      label: "Solscan",
      href: LINKS.solscan,
      detail: "Verify contract",
      tone: "fuchsia",
    },
    {
      label: "GeckoTerminal",
      href: LINKS.gecko,
      detail: "Pool chart",
      tone: "amber",
    },
    {
      label: "DEXTools",
      href: LINKS.dextools,
      detail: "Market chart",
      tone: "cyan",
    },
    {
      label: "FreshCoins Audit",
      href: LINKS.audit,
      detail: "Audit verification",
      tone: "emerald",
    },
    {
      label: "Telegram",
      href: LINKS.telegram,
      detail: "Community",
      tone: "fuchsia",
    },
    {
      label: "X / Twitter",
      href: LINKS.x,
      detail: "Updates",
      tone: "amber",
    },
  ];

  const toneClasses: Record<string, string> = {
    cyan: "hover:border-cyan-300/28 hover:bg-cyan-400/8",
    emerald: "hover:border-emerald-300/28 hover:bg-emerald-400/8",
    fuchsia: "hover:border-fuchsia-300/28 hover:bg-fuchsia-400/8",
    amber: "hover:border-amber-300/28 hover:bg-amber-400/8",
  };

  return (
    <footer className="relative overflow-hidden bg-[#050711] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.06),transparent_34%),linear-gradient(180deg,#050711_0%,#07101d_45%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="overflow-hidden rounded-[40px] border border-cyan-400/16 bg-white/[0.035] p-6 shadow-[0_0_70px_rgba(34,211,238,0.10),0_0_120px_rgba(217,70,239,0.06)] backdrop-blur-xl sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                RROTA utility is live
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/rrota-logo2.png"
                  alt="RROTA"
                  width={48}
                  height={48}
                  className="rounded-full drop-shadow-[0_0_20px_rgba(34,211,238,0.26)]"
                />

                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                    RROTA
                  </h2>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300/70">
                    $RTA on Solana
                  </p>
                </div>
              </div>

              <h3 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                A Solana token with a real destination:
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Spin-to-Win is live.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                RROTA is moving from build phase into active utility. Play the
                official Spin-to-Win app, verify the token contract, follow the
                roadmap, and use only official RROTA links.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.a
                  href={LINKS.spin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_34px_rgba(34,211,238,0.20)] transition-all hover:brightness-110"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <SparkIcon />
                  Play Spin-to-Win
                </motion.a>

                <motion.a
                  href={LINKS.jupiter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white/88 backdrop-blur-xl transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 hover:text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Buy $RTA
                  <ExternalIcon />
                </motion.a>

                <motion.a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-emerald-400/16 bg-emerald-400/8 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-emerald-100 transition-all hover:border-emerald-300/28 hover:bg-emerald-400/12 hover:text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Verify Contract
                  <ShieldIcon />
                </motion.a>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[#070A12]/78 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                Official Contract
              </div>

              <div className="mt-3 break-all rounded-2xl border border-cyan-400/14 bg-cyan-400/7 p-4 font-mono text-sm font-semibold leading-6 text-white/82">
                {TOKEN_ADDRESS}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={copyContract}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/10 px-4 text-sm font-bold text-cyan-100 transition-all hover:bg-cyan-400/15"
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

              <div className="mt-5 grid gap-3">
                {[
                  "Token live on Solana",
                  "Mint revoked / Freeze revoked",
                  "Spin-to-Win utility live",
                  "Official links listed below",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/78"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {officialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all ${toneClasses[link.tone]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-black text-white">
                    {link.label}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-white/46">
                    {link.detail}
                  </div>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/14 bg-cyan-400/8 text-cyan-200 transition-all group-hover:scale-105">
                  <ExternalIcon />
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
              Disclaimer
            </div>

            <p className="mt-3 max-w-3xl text-xs leading-6 text-white/50 sm:text-sm">
              RROTA is a crypto token. Nothing on this website is financial,
              investment, legal, or tax advice. Digital assets are risky and
              volatile. Always verify official links, review transactions before
              signing, and do your own research. Game rewards, withdrawals, and
              features may depend on eligibility, treasury availability, network
              conditions, security checks, and project rules.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Project
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href={LINKS.spin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Spin-to-Win
                </a>

                <Link
                  href="/blog"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Blog
                </Link>

                <a
                  href={LINKS.whitepaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Whitepaper
                </a>

                <a
                  href={LINKS.audit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Audit
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Community
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Telegram
                </a>

                <a
                  href={LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  X / Twitter
                </a>

                <a
                  href="mailto:info@rrota.xyz"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  info@rrota.xyz
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Legal
              </div>
              <div className="space-y-2 text-sm">
                <Link
                  href="/privacy"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Terms of Service
                </Link>

                <a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Token Verification
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div>© {new Date().getFullYear()} RROTA. Built on Solana.</div>
          <div className="font-mono text-xs">
            Official: rrota.xyz • Game: spin.rrota.xyz
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
