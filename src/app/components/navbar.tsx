"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/rrota-logo2.png";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";
const RROTA_AI_URL = "/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const officialLinks = useMemo(
    () => [
      {
        label: "Official Links Page",
        href: `${OFFICIAL_DOMAIN}/links`,
        badge: "Verify",
      },
      {
        label: "Ask RROTA AI",
        href: `${OFFICIAL_DOMAIN}/ai`,
        badge: "AI",
      },
      {
        label: "Whitepaper",
        href: `${OFFICIAL_DOMAIN}/whitepaper`,
        badge: "Page",
      },
      {
        label: "Buy on Jupiter",
        href: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
        badge: "Trade",
      },
      {
        label: "Verify on Solscan",
        href: `https://solscan.io/token/${TOKEN_ADDRESS}`,
        badge: "Verify",
      },
      {
        label: "Play Spin-to-Win",
        href: SPIN_TO_WIN_URL,
        badge: "Live Utility",
      },
      {
        label: "DEXTools",
        href: "https://www.dextools.io/app/token/rrota",
        badge: "Chart",
      },
      {
        label: "GeckoTerminal",
        href: "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF",
        badge: "Pool",
      },
      {
        label: "FreshCoins Audit",
        href: "https://freshcoins.io/audit/rrota",
        badge: "Audit",
      },
      {
        label: "CMC Verification Post",
        href: "https://x.com/rrotacoin/status/2054219354422510035",
        badge: "CMC",
      },
      {
        label: "Telegram",
        href: "https://t.me/rrotaOfficial",
        badge: "Community",
      },
      {
        label: "X / Twitter",
        href: "https://x.com/rrotacoin",
        badge: "Updates",
      },
    ],
    [],
  );

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.offsetTop;
        const isMobile = window.innerWidth < 1024;
        const offsetPosition = elementPosition - (isMobile ? 110 : 82);
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }

    setIsMobileMenuOpen(false);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
  };

  const tabClass =
    "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-2xl border border-white/12 bg-white/[0.07] px-3.5 text-[14px] font-bold text-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 hover:border-cyan-300/28 hover:bg-cyan-400/14 hover:text-white";

  const mobileItemClass =
    "rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 text-left text-sm font-semibold text-white/80 transition-all hover:border-cyan-300/20 hover:bg-cyan-400/8 hover:text-white";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-[#070A12]/90 shadow-[0_0_30px_rgba(28,194,252,0.08)] backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="flex min-w-0 items-center gap-3"
        >
          <button
            onClick={() => scrollToSection("top")}
            className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition-all hover:border-cyan-300/40 hover:bg-cyan-400/15"
            aria-label="Go to top"
            type="button"
          >
            <Image
              src={logo}
              alt="RROTA logo"
              width={34}
              height={34}
              className="rounded-full transition-transform group-hover:scale-105"
              priority
            />
          </button>

          <button
            onClick={() => scrollToSection("top")}
            className="min-w-0 text-left"
            aria-label="RROTA home"
            type="button"
          >
            <div className="text-lg font-black leading-none tracking-[0.22em] text-white sm:text-xl">
              RROTA
            </div>
            <div className="mt-1 hidden text-[9px] font-black uppercase tracking-[0.28em] text-cyan-300/80 sm:block">
              Utility Ecosystem on Solana
            </div>
          </button>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 rounded-[28px] border border-cyan-400/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_22px_rgba(34,211,238,0.05)] backdrop-blur-xl lg:flex">
          <button
            onClick={() => scrollToSection("top")}
            className={tabClass}
            type="button"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("ecosystem-overview")}
            className="group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-emerald-400/22 bg-emerald-400/12 px-4 text-[14px] font-black text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.08)] transition-all duration-200 hover:border-emerald-300/40 hover:bg-emerald-400/18 hover:text-white"
            type="button"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
            Ecosystem
          </button>

          <button
            onClick={() => scrollToSection("Roadmap")}
            className={tabClass}
            type="button"
          >
            Roadmap
          </button>

          <button
            onClick={() => scrollToSection("AboutUs")}
            className={tabClass}
            type="button"
          >
            About
          </button>

          <Link href="/blog" className={tabClass}>
            Blog
          </Link>

          <Link href="/links" className={tabClass}>
            Links
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={RROTA_AI_URL}
            className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(45,255,231,0.20),rgba(168,85,247,0.14),rgba(0,0,0,0.18))] px-5 text-sm font-black text-cyan-50 shadow-[0_0_42px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.02] hover:border-cyan-200/60 hover:shadow-[0_0_70px_rgba(34,211,238,0.30)]"
          >
            <span className="absolute inset-0 translate-x-[-130%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.26),transparent)] transition duration-700 group-hover:translate-x-[130%]" />
            <span className="relative mr-2 inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,1)]" />
            </span>
            <span className="relative whitespace-nowrap">Ask AI</span>
          </Link>

          <a
            href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-2xl border border-cyan-400/18 bg-white/[0.05] px-5 text-sm font-black text-white/90 transition-all hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-white"
          >
            Buy $RTA
          </a>

          <a
            href={SPIN_TO_WIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-sm font-black text-white shadow-[0_0_24px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.02] hover:brightness-110"
          >
            Live Utility
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 lg:hidden"
          aria-label="Open menu"
          type="button"
        >
          <span className="text-2xl leading-none">
            {isMobileMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-cyan-400/10 bg-[#070A12]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="rounded-3xl border border-cyan-400/12 bg-white/[0.035] p-3">
                <div className="mb-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/8 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-black text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                    RROTA ecosystem is live
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/58">
                    Explore the official RROTA coin hub, verify the contract,
                    and access Spin-to-Win as the first live utility.
                  </p>
                </div>

                <div className="grid gap-2">
                  <button
                    onClick={() => scrollToSection("top")}
                    className={mobileItemClass}
                    type="button"
                  >
                    Home
                  </button>

                  <button
                    onClick={() => scrollToSection("ecosystem-overview")}
                    className={mobileItemClass}
                    type="button"
                  >
                    Ecosystem
                  </button>

                  <button
                    onClick={() => scrollToSection("Roadmap")}
                    className={mobileItemClass}
                    type="button"
                  >
                    Roadmap
                  </button>

                  <button
                    onClick={() => scrollToSection("AboutUs")}
                    className={mobileItemClass}
                    type="button"
                  >
                    About
                  </button>

                  <Link
                    href="/blog"
                    onClick={closeMenus}
                    className={mobileItemClass}
                  >
                    Blog
                  </Link>

                  <Link
                    href="/links"
                    onClick={closeMenus}
                    className={mobileItemClass}
                  >
                    Links
                  </Link>

                  <Link
                    href={RROTA_AI_URL}
                    onClick={closeMenus}
                    className="group relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(45,255,231,0.18),rgba(168,85,247,0.12),rgba(0,0,0,0.18))] px-4 py-3 text-sm font-black text-cyan-50 shadow-[0_0_36px_rgba(34,211,238,0.16)] transition-all hover:border-cyan-200/50 hover:shadow-[0_0_58px_rgba(34,211,238,0.24)]"
                  >
                    <span className="absolute inset-0 translate-x-[-130%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.24),transparent)] transition duration-700 group-hover:translate-x-[130%]" />
                    <span className="relative inline-flex items-center gap-2">
                      <span className="relative inline-flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,1)]" />
                      </span>
                      Ask RROTA AI
                    </span>
                  </Link>

                  <a
                    href={SPIN_TO_WIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                    className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-sm font-black text-cyan-100 transition-all hover:bg-cyan-400/15"
                  >
                    Play Spin-to-Win
                  </a>
                </div>

                <div className="my-4 h-px bg-white/10" />

                <div>
                  <div className="mb-2 px-2 text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                    Official Links
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {officialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenus}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-3 text-sm text-white/76 transition-all hover:border-cyan-300/20 hover:bg-cyan-400/8 hover:text-white"
                      >
                        <span>{link.label}</span>
                        <span className="rounded-full border border-cyan-400/12 bg-cyan-400/8 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-200/80">
                          {link.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Link
                    href={RROTA_AI_URL}
                    onClick={closeMenus}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(45,255,231,0.20),rgba(168,85,247,0.14),rgba(0,0,0,0.18))] px-5 text-sm font-black text-cyan-50 shadow-[0_0_36px_rgba(34,211,238,0.18)] transition-all hover:brightness-110"
                  >
                    <span className="absolute inset-0 translate-x-[-130%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.26),transparent)] transition duration-700 group-hover:translate-x-[130%]" />
                    <span className="relative">Ask RROTA AI</span>
                  </Link>

                  <a
                    href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-400/18 bg-white/[0.04] px-5 text-sm font-black text-white/85 transition-all hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-white"
                  >
                    Buy $RTA
                  </a>

                  <a
                    href={SPIN_TO_WIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-sm font-black text-white shadow-[0_0_24px_rgba(34,211,238,0.20)] transition-all hover:brightness-110"
                  >
                    Live Utility
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
