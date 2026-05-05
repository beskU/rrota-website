"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/rrota-logo2.png";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const officialLinks = useMemo(
    () => [
      {
        label: "Play Spin-to-Win",
        href: SPIN_TO_WIN_URL,
        badge: "Live",
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
        label: "Whitepaper",
        href: "https://github.com/beskU/rrota/blob/d094f58cfde725493bd2eba708d438ad2a6f76a2/RROTA%20%24RTA%20WHITEPAPER.pdf",
        badge: "PDF",
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
    setIsLinksOpen(false);

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
    setIsLinksOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-[#070A12]/88 shadow-[0_0_30px_rgba(28,194,252,0.08)] backdrop-blur-xl transition-all duration-300">
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
          >
            <div className="text-lg font-black leading-none tracking-[0.22em] text-white sm:text-xl">
              RROTA
            </div>
            <div className="mt-1 hidden text-[9px] font-black uppercase tracking-[0.28em] text-cyan-300/80 sm:block">
              Utility on Solana
            </div>
          </button>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-semibold text-white/82 lg:flex">
          <a
            href={SPIN_TO_WIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-3.5 py-2 text-emerald-200 transition-all hover:border-emerald-300/35 hover:bg-emerald-400/14 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
            Spin-to-Win
          </a>

          <button
            onClick={() => scrollToSection("how-to-play")}
            className="rounded-full px-3.5 py-2 transition-all hover:bg-white/8 hover:text-cyan-300"
          >
            How to Play
          </button>

          <button
            onClick={() => scrollToSection("Tokenomics")}
            className="rounded-full px-3.5 py-2 transition-all hover:bg-white/8 hover:text-cyan-300"
          >
            Tokenomics
          </button>

          <button
            onClick={() => scrollToSection("Roadmap")}
            className="rounded-full px-3.5 py-2 transition-all hover:bg-white/8 hover:text-cyan-300"
          >
            Roadmap
          </button>

          <button
            onClick={() => scrollToSection("AboutUs")}
            className="rounded-full px-3.5 py-2 transition-all hover:bg-white/8 hover:text-cyan-300"
          >
            About
          </button>

          <Link
            href="/blog"
            className="rounded-full px-3.5 py-2 transition-all hover:bg-white/8 hover:text-cyan-300"
          >
            Blog
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsLinksOpen((v) => !v)}
              className="rounded-full px-3.5 py-2 transition-all hover:bg-white/8 hover:text-cyan-300"
            >
              Official Links
            </button>

            <AnimatePresence>
              {isLinksOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 mt-3 w-[300px] overflow-hidden rounded-3xl border border-cyan-400/12 bg-[#0B1020]/98 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_35px_rgba(34,211,238,0.10)] backdrop-blur-xl"
                >
                  <div className="border-b border-white/8 px-3 py-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/75">
                      Verified RROTA Links
                    </div>
                    <div className="mt-1 text-xs text-white/45">
                      Use only official project links.
                    </div>
                  </div>

                  <div className="py-2">
                    {officialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsLinksOpen(false)}
                        className="group flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-sm text-white/78 transition-all hover:bg-white/8 hover:text-white"
                      >
                        <span>{link.label}</span>
                        <span className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-200/85 group-hover:border-cyan-300/35">
                          {link.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/18 bg-white/[0.04] px-5 text-sm font-black text-white/85 transition-all hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-white"
          >
            Buy $RTA
          </a>

          <a
            href={SPIN_TO_WIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-sm font-black text-white shadow-[0_0_24px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.02] hover:brightness-110"
          >
            Play Game
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 lg:hidden"
          aria-label="Open menu"
        >
          <span className="text-2xl leading-none">{isMobileMenuOpen ? "×" : "☰"}</span>
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
                    Spin-to-Win is live
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/58">
                    Open the official game, verify the token, and use the official RROTA links below.
                  </p>
                </div>

                <div className="grid gap-2">
                  <button
                    onClick={() => scrollToSection("top")}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-white"
                  >
                    Home
                  </button>

                  <a
                    href={SPIN_TO_WIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                    className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-sm font-black text-cyan-100 transition-all hover:bg-cyan-400/15"
                  >
                    Play Spin-to-Win
                  </a>

                  <button
                    onClick={() => scrollToSection("how-to-play")}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-white"
                  >
                    How to Play
                  </button>

                  <button
                    onClick={() => scrollToSection("Tokenomics")}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-white"
                  >
                    Tokenomics
                  </button>

                  <button
                    onClick={() => scrollToSection("Roadmap")}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-white"
                  >
                    Roadmap
                  </button>

                  <button
                    onClick={() => scrollToSection("AboutUs")}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-white"
                  >
                    About
                  </button>

                  <Link
                    href="/blog"
                    onClick={closeMenus}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-white"
                  >
                    Blog
                  </Link>
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
                    Play Game
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
