"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  ai: "/ai",
  howToBuy: "/how-to-buy-rrota",
  spin: "https://spin.rrota.xyz",
  linksPage: "https://rrota.xyz/links",
  whitepaper: "https://rrota.xyz/whitepaper",
  riskDisclaimer: "https://rrota.xyz/risk-disclaimer",
  contact: "https://rrota.xyz/contact",
  contactEmail: "mailto:info@rrota.xyz",
  cmcVerification: "https://x.com/rrotacoin/status/2054219354422510035",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dextools: "https://www.dextools.io/app/token/rrota",
  gecko:
    "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF",
  audit: "https://freshcoins.io/audit/rrota",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
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
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5" />
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
      label: "Official Links",
      href: LINKS.linksPage,
      detail: "Verified RROTA resources",
      tone: "cyan",
    },
    {
      label: "How to Buy RROTA",
      href: LINKS.howToBuy,
      detail: "Official $RTA buying guide",
      tone: "emerald",
    },
    {
      label: "RROTA AI Assistant",
      href: LINKS.ai,
      detail: "Official AI guide and onboarding assistant",
      tone: "cyan",
    },
    {
      label: "Whitepaper",
      href: LINKS.whitepaper,
      detail: "Official whitepaper page",
      tone: "emerald",
    },
    {
      label: "Buy on Jupiter",
      href: LINKS.jupiter,
      detail: "Trade official $RTA",
      tone: "emerald",
    },
    {
      label: "Verify on Solscan",
      href: LINKS.solscan,
      detail: "Official token contract",
      tone: "fuchsia",
    },
    {
      label: "GeckoTerminal",
      href: LINKS.gecko,
      detail: "Pool and market data",
      tone: "amber",
    },
    {
      label: "DEXTools",
      href: LINKS.dextools,
      detail: "RROTA market chart",
      tone: "cyan",
    },
    {
      label: "Spin-to-Win Game",
      href: LINKS.spin,
      detail: "First live RROTA utility",
      tone: "cyan",
    },
    {
      label: "FreshCoins Audit",
      href: LINKS.audit,
      detail: "External audit reference",
      tone: "emerald",
    },
    {
      label: "CMC Verification Post",
      href: LINKS.cmcVerification,
      detail: "Official X confirmation",
      tone: "fuchsia",
    },
    {
      label: "Risk Disclaimer",
      href: LINKS.riskDisclaimer,
      detail: "Crypto, wallet, game and reward risk notice",
      tone: "amber",
    },
    {
      label: "Telegram",
      href: LINKS.telegram,
      detail: "Official community",
      tone: "fuchsia",
    },
    {
      label: "X / Twitter",
      href: LINKS.x,
      detail: "Official updates",
      tone: "amber",
    },
    {
      label: "Contact",
      href: LINKS.contact,
      detail: "Official RROTA contact page",
      tone: "cyan",
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Official RROTA ecosystem hub
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
                A utility-first Solana ecosystem:
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  coin, games, rewards, and future tools.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                RROTA is built around the $RTA token, official verification,
                community growth, digital rewards, crypto gaming, and future
                public transportation utility. Spin-to-Win is the first live
                product inside the wider RROTA ecosystem.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.a
                  href={LINKS.jupiter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_34px_rgba(34,211,238,0.20)] transition-all hover:brightness-110"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Buy $RTA
                  <ExternalIcon />
                </motion.a>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={LINKS.ai}
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(45,255,231,0.20),rgba(168,85,247,0.14),rgba(0,0,0,0.18))] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-cyan-50 shadow-[0_0_48px_rgba(34,211,238,0.20)] transition-all hover:border-cyan-200/60 hover:shadow-[0_0_78px_rgba(34,211,238,0.30)]"
                  >
                    <span className="absolute inset-0 translate-x-[-130%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.26),transparent)] transition duration-700 group-hover:translate-x-[130%]" />
                    <span className="relative mr-3 inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,1)]" />
                    </span>
                    <span className="relative">Ask RROTA AI</span>
                  </Link>
                </motion.div>

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

                <motion.a
                  href={LINKS.spin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white/88 backdrop-blur-xl transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 hover:text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <SparkIcon />
                  Play Spin-to-Win
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
                  "RROTA token live on Solana",
                  "Mint revoked / Freeze revoked",
                  "Spin-to-Win first live utility",
                  "Crypto Shooter planned",
                  "Public transportation utility planned",
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
              target={link.href.startsWith("/") ? undefined : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
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
              Risk Disclaimer
            </div>

            <p className="mt-3 max-w-3xl text-xs leading-6 text-white/50 sm:text-sm">
              RROTA is a crypto token. Nothing on this website is financial,
              investment, legal, or tax advice. Digital assets are risky and
              volatile. Always verify official links, review transactions before
              signing, and do your own research. Game rewards, withdrawals, and
              features may depend on eligibility, treasury availability, network
              conditions, security checks, and project rules.
            </p>

            <Link
              href="/risk-disclaimer"
              className="mt-4 inline-flex text-sm font-bold text-cyan-300 hover:text-cyan-200"
            >
              Read full risk disclaimer →
            </Link>
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
                Ecosystem
              </div>
              <div className="space-y-2 text-sm">
                <Link
                  href="/#ecosystem"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  RROTA Ecosystem
                </Link>

                <Link
                  href={LINKS.howToBuy}
                  className="block text-white/62 hover:text-cyan-300"
                >
                  How to Buy RROTA
                </Link>

                <Link
                  href={LINKS.ai}
                  className="block text-white/62 hover:text-cyan-300"
                >
                  RROTA AI Assistant
                </Link>

                <Link
                  href="/#tokenomics"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Tokenomics
                </Link>

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
              </div>
            </div>

            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Verification
              </div>
              <div className="space-y-2 text-sm">
                <Link
                  href="/links"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Official Links
                </Link>

                <Link
                  href="/whitepaper"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Whitepaper
                </Link>

                <a
                  href={LINKS.cmcVerification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  CMC Verification Post
                </a>

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

            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                Legal & Contact
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

                <Link
                  href="/risk-disclaimer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Risk Disclaimer
                </Link>

                <Link
                  href="/contact"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Contact
                </Link>

                <a
                  href={LINKS.audit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/62 hover:text-cyan-300"
                >
                  Audit
                </a>

                <a
                  href={LINKS.contactEmail}
                  className="block text-white/62 hover:text-cyan-300"
                >
                  info@rrota.xyz
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
