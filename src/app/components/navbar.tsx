"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "../../../public/rrota-logo2.png";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";

const LINKS = {
  ai: "/ai",
  tokenomics: "/tokenomics",
  roadmap: "/roadmap",
  blog: "/blog",
  officialLinks: "/links",
  whitepaper: "/whitepaper",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  solidproof: "https://app.solidproof.io/projects/rrota",
  freshcoins: "https://freshcoins.io/audit/rrota",
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
};

const HOME_SECTIONS = [
  { label: "Ecosystem", id: "Ecosystem" },
  { label: "Activity", id: "Activity" },
  { label: "Roadmap", id: "Roadmap" },
  { label: "About", id: "About" },
] as const;

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

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const goToSection = (sectionId: string) => {
    closeMenu();

    if (pathname !== "/") {
      window.location.assign(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = window.innerWidth < 1024 ? 86 : 94;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const goHome = () => {
    closeMenu();

    if (pathname !== "/") {
      window.location.assign("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const desktopNavClass =
    "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-xl px-3 text-[13px] font-bold text-white/68 transition-all hover:bg-white/[0.06] hover:text-white";

  const mobileNavClass =
    "flex min-h-12 items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 text-left text-sm font-bold text-white/78 transition-all hover:border-cyan-300/20 hover:bg-cyan-400/8 hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-[#050711]/88 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[82px] lg:px-8">
        <motion.button
          type="button"
          onClick={goHome}
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="group flex min-w-0 items-center gap-3 text-left"
          aria-label="Go to RROTA homepage"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.13)] transition-all group-hover:border-cyan-200/40 group-hover:bg-cyan-400/15">
            <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.18),transparent_42%)]" />
            <Image
              src={logo}
              alt="RROTA logo"
              width={34}
              height={34}
              className="relative rounded-full transition-transform group-hover:scale-105"
              priority
            />
          </span>

          <span className="min-w-0">
            <span className="block text-lg font-black leading-none tracking-[0.2em] text-white sm:text-xl">
              RROTA
            </span>
            <span className="mt-1 hidden text-[9px] font-black uppercase tracking-[0.23em] text-cyan-200/68 sm:block">
              Solana Utility Ecosystem
            </span>
          </span>
        </motion.button>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center rounded-2xl border border-white/8 bg-white/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] xl:flex"
        >
          {HOME_SECTIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className={desktopNavClass}
            >
              {item.label}
            </button>
          ))}

          <Link
            href={LINKS.tokenomics}
            className={`${desktopNavClass} ${
              pathname === LINKS.tokenomics ? "bg-cyan-400/10 text-cyan-100" : ""
            }`}
          >
            Tokenomics
          </Link>

          <Link
            href={LINKS.blog}
            className={`${desktopNavClass} ${
              pathname.startsWith(LINKS.blog) ? "bg-cyan-400/10 text-cyan-100" : ""
            }`}
          >
            Blog
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SPIN_TO_WIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm font-black text-white/82 transition-all hover:border-fuchsia-300/25 hover:bg-fuchsia-400/9 hover:text-white"
          >
            Play
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>

          <a
            href={LINKS.jupiter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-cyan-200/28 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-5 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.02] hover:brightness-110"
          >
            Buy $RTA
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-white transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 xl:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="rrota-mobile-navigation"
        >
          <MenuIcon open={isMobileMenuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="rrota-mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[74px] max-h-[calc(100dvh-74px)] overflow-y-auto border-t border-cyan-400/10 bg-[#050711]/98 px-4 py-4 shadow-[0_22px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-6 lg:top-[82px] lg:max-h-[calc(100dvh-82px)] xl:hidden"
          >
            <div className="mx-auto max-w-3xl">
              <div className="rounded-[28px] border border-cyan-300/12 bg-white/[0.035] p-3 sm:p-4">
                <div className="rounded-2xl border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(217,70,239,0.07))] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-black text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                    Official RROTA ecosystem hub
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Explore $RTA, live products, development progress, market information, and verified resources.
                  </p>
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <button type="button" onClick={goHome} className={mobileNavClass}>
                    <span>Home</span>
                  </button>

                  {HOME_SECTIONS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToSection(item.id)}
                      className={mobileNavClass}
                    >
                      <span>{item.label}</span>
                    </button>
                  ))}

                  <Link href={LINKS.tokenomics} onClick={closeMenu} className={mobileNavClass}>
                    <span>Tokenomics</span>
                  </Link>

                  <Link href={LINKS.blog} onClick={closeMenu} className={mobileNavClass}>
                    <span>Blog &amp; Updates</span>
                  </Link>

                  <Link href={LINKS.whitepaper} onClick={closeMenu} className={mobileNavClass}>
                    <span>Whitepaper</span>
                  </Link>

                  <Link href={LINKS.ai} onClick={closeMenu} className={mobileNavClass}>
                    <span>Ask RROTA AI</span>
                    <span className="rounded-full border border-violet-300/18 bg-violet-400/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.13em] text-violet-200">
                      Beta
                    </span>
                  </Link>
                </div>

                <div className="my-4 h-px bg-white/8" />

                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href={LINKS.jupiter}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-200/28 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-5 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.18)] transition-all hover:brightness-110"
                  >
                    Buy $RTA
                    <ExternalIcon />
                  </a>

                  <a
                    href={SPIN_TO_WIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10 px-5 py-3 text-sm font-black text-fuchsia-100 transition-all hover:bg-fuchsia-400/15 hover:text-white"
                  >
                    Play Spin-to-Win
                    <ExternalIcon />
                  </a>
                </div>

                <div className="mt-4 rounded-3xl border border-white/8 bg-black/20 p-3">
                  <div className="px-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/65">
                    Verify and connect
                  </div>

                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    <a
                      href={LINKS.solscan}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className={mobileNavClass}
                    >
                      <span>Verify contract</span>
                      <ExternalIcon className="h-3.5 w-3.5 text-cyan-200/70" />
                    </a>

                    <Link href={LINKS.officialLinks} onClick={closeMenu} className={mobileNavClass}>
                      <span>All official links</span>
                    </Link>

                    <a
                      href={LINKS.solidproof}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className={mobileNavClass}
                    >
                      <span>SolidProof audit</span>
                      <ExternalIcon className="h-3.5 w-3.5 text-cyan-200/70" />
                    </a>

                    <a
                      href={LINKS.freshcoins}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className={mobileNavClass}
                    >
                      <span>FreshCoins audit</span>
                      <ExternalIcon className="h-3.5 w-3.5 text-cyan-200/70" />
                    </a>

                    <a
                      href={LINKS.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className={mobileNavClass}
                    >
                      <span>Telegram</span>
                      <ExternalIcon className="h-3.5 w-3.5 text-cyan-200/70" />
                    </a>

                    <a
                      href={LINKS.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className={mobileNavClass}
                    >
                      <span>X / Twitter</span>
                      <ExternalIcon className="h-3.5 w-3.5 text-cyan-200/70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
