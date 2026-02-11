"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";

import logo from "../../../public/rrota-logo2.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

  const links = useMemo(
    () => [
      {
        label: "Solscan",
        href: `https://solscan.io/token/${TOKEN_ADDRESS}`,
      },
      {
        label: "Jupiter",
        href: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
      },
      {
        label: "DEXTools",
        href: "https://www.dextools.io/app/token/rrota",
      },
      {
        label: "GeckoTerminal",
        href: "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF",
      },
      {
        label: "FreshCoins Audit",
        href: "https://freshcoins.io/audit/rrota",
      },
      {
        label: "Whitepaper (PDF)",
        href: "https://github.com/beskU/rrota/blob/d094f58cfde725493bd2eba708d438ad2a6f76a2/RROTA%20%24RTA%20WHITEPAPER.pdf",
      },
      {
        label: "Telegram",
        href: "https://t.me/rrotaOfficial",
      },
      {
        label: "Twitter/X",
        href: "https://x.com/rrotacoin",
      },
    ],
    []
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
        const offsetPosition = elementPosition - (isMobile ? 110 : 70);
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0c0f14]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:py-5 gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 min-w-0"
        >
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.06 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc] to-[#0ea5e9] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image src={logo} alt="RROTA logo" width={40} height={40} />
            </motion.div>

            <motion.span
              className="font-display font-bold text-3xl md:text-4xl cursor-pointer relative flex items-center -mt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, white 0%, white 30%, #1cc2fc 50%, white 70%, white 100%)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              >
                RROTA
              </motion.span>
            </motion.span>
          </button>

          {/* Build badge */}
          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
              Build Phase
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1cc2fc]/15 border border-[#1cc2fc]/25 text-[#7dd9ff] text-xs font-medium">
              Proof Links
            </span>
          </div>
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          className="hidden lg:flex items-center gap-2 text-white font-poppins font-medium text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection("AboutUs")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection("Roadmap")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">Roadmap</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection("Tokenomics")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">Tokenomics</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          {/* Links dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLinksOpen((v) => !v)}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group flex items-center gap-2"
              aria-haspopup="menu"
              aria-expanded={isLinksOpen}
            >
              <span className="relative z-10">Links</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className={`relative z-10 transition-transform ${
                  isLinksOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <AnimatePresence>
              {isLinksOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-[260px] bg-[#0c0f14]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-2">
                    {links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsLinksOpen(false)}
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/90 text-sm"
                      >
                        <span>{l.label}</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white/60"
                        >
                          <path
                            d="M14 3h7v7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14L21 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="!bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] !text-white font-poppins font-bold text-base px-7 py-3 rounded-xl shadow-lg hover:shadow-[#1cc2fc]/30 transition-all duration-300 !border-0 min-w-[160px]"
              size="lg"
              as={Link}
              href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
              target="_blank"
              radius="lg"
              variant="solid"
              style={{
                background: "linear-gradient(to right, #1cc2fc, #0ea5e9)",
                color: "white",
              }}
            >
              Buy on Jupiter
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <button
            onClick={() => {
              setIsLinksOpen(false);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 1 },
                }}
                className="w-5 h-0.5 bg-white rounded-full mb-1"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-5 h-0.5 bg-white rounded-full mb-1"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -1 },
                }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Close dropdown on outside click (desktop) */}
      <AnimatePresence>
        {isLinksOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 hidden lg:block"
            onClick={() => setIsLinksOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 bg-[#0c0f14]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-50 lg:hidden overflow-hidden"
          >
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2 pb-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                  Build Phase
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1cc2fc]/15 border border-[#1cc2fc]/25 text-[#7dd9ff] text-xs font-medium">
                  Proof Links
                </span>
              </div>

              <motion.button
                onClick={() => scrollToSection("top")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Home
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("AboutUs")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                About
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("Roadmap")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Roadmap
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("Tokenomics")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Tokenomics
              </motion.button>

              {/* Proof links list */}
              <div className="pt-2">
                <div className="text-white/60 text-xs font-semibold px-4 pb-2">
                  Proof & Official Links
                </div>
                <div className="space-y-2">
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition text-white/90 text-sm"
                    >
                      <span>{l.label}</span>
                      <span className="text-white/50">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button */}
              <motion.div className="pt-3" whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] !text-white font-poppins font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-[#1cc2fc]/30 transition-all duration-300 !border-0"
                  size="lg"
                  as={Link}
                  href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
                  target="_blank"
                  radius="lg"
                  variant="solid"
                  style={{
                    background: "linear-gradient(to right, #1cc2fc, #0ea5e9)",
                    color: "white",
                  }}
                >
                  Buy on Jupiter
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
