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
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <button onClick={() => scrollToSection("top")}>
            <Image src={logo} alt="RROTA logo" width={40} height={40} />
          </button>

          <span className="font-bold text-3xl text-white">RROTA</span>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2 text-white font-medium text-sm">
          <button
            onClick={() => scrollToSection("AboutUs")}
            className="px-3 py-2 hover:text-[#1cc2fc] transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("Roadmap")}
            className="px-3 py-2 hover:text-[#1cc2fc] transition"
          >
            Roadmap
          </button>

          <button
            onClick={() => scrollToSection("Tokenomics")}
            className="px-3 py-2 hover:text-[#1cc2fc] transition"
          >
            Tokenomics
          </button>

          {/* ✅ BLOG LINK ADDED */}
          <Link
            href="/blog"
            className="px-3 py-2 hover:text-[#1cc2fc] transition"
          >
            Blog
          </Link>

          {/* Links dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLinksOpen((v) => !v)}
              className="px-3 py-2 hover:text-[#1cc2fc] transition"
            >
              Links
            </button>

            <AnimatePresence>
              {isLinksOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 mt-3 w-[240px] bg-[#0c0f14] border border-white/10 rounded-xl shadow-xl"
                >
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsLinksOpen(false)}
                      className="block px-4 py-3 hover:bg-white/10 text-sm"
                    >
                      {l.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            as={Link}
            href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
            target="_blank"
            className="bg-gradient-to-r from-[#1cc2fc] to-[#0ea5e9] text-white font-bold px-6 py-3 rounded-xl"
          >
            Buy on Jupiter
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden bg-[#0c0f14] border-t border-white/10 p-4 space-y-3"
          >
            <button onClick={() => scrollToSection("top")}>Home</button>
            <button onClick={() => scrollToSection("AboutUs")}>About</button>
            <button onClick={() => scrollToSection("Roadmap")}>
              Roadmap
            </button>
            <button onClick={() => scrollToSection("Tokenomics")}>
              Tokenomics
            </button>

            {/* ✅ BLOG MOBILE */}
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block"
            >
              Blog
            </Link>

            <div className="pt-2 border-t border-white/10">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
