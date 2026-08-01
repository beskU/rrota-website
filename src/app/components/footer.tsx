"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  gecko: `https://www.geckoterminal.com/solana/tokens/${TOKEN_ADDRESS}`,
  solidproof: "https://app.solidproof.io/projects/rrota",
  freshcoins: "https://freshcoins.io/audit/rrota",
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
      <rect width="14" height="14" x="8" y="8" rx="2" />
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

const internalGroups = [
  {
    title: "Ecosystem",
    links: [
      { label: "Home", href: "/" },
      { label: "Tokenomics", href: "/tokenomics" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "RROTA AI", href: "/ai" },
      { label: "Spin-to-Win Guide", href: "/rrota-spin-to-win" },
      { label: "How to Buy RROTA", href: "/how-to-buy-rrota" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Blog & Updates", href: "/blog" },
      { label: "Whitepaper", href: "/whitepaper" },
      { label: "Official Links", href: "/links" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Risk Disclaimer", href: "/risk-disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const externalResources = [
  { label: "Play Spin-to-Win", href: LINKS.spin },
  { label: "Buy on Jupiter", href: LINKS.jupiter },
  { label: "Verify on Solscan", href: LINKS.solscan },
  { label: "DexScreener", href: LINKS.dexscreener },
  { label: "GeckoTerminal", href: LINKS.gecko },
  { label: "SolidProof Audit", href: LINKS.solidproof },
  { label: "FreshCoins Audit", href: LINKS.freshcoins },
  { label: "Telegram", href: LINKS.telegram },
  { label: "X / Twitter", href: LINKS.x },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy token address:", error);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050711] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(217,70,239,0.10),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/rrota-logo2.png"
                alt="RROTA logo"
                width={48}
                height={48}
                className="rounded-full drop-shadow-[0_0_18px_rgba(34,211,238,0.24)]"
              />

              <div>
                <div className="text-2xl font-black tracking-[0.16em] text-white">
                  RROTA
                </div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/72">
                  Utility Ecosystem on Solana
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62">
              RROTA is an ecosystem built around the $RTA token, live digital
              products, community rewards, crypto gaming, and long-term practical
              utility. Spin-to-Win is the first public product, not the full RROTA
              vision.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={LINKS.spin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-400/10 px-5 text-sm font-black text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-400/15 hover:text-white"
              >
                Play Spin-to-Win
                <ExternalIcon />
              </a>

              <a
                href={LINKS.jupiter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/9 px-5 text-sm font-black text-emerald-100 transition hover:border-emerald-300/35 hover:bg-emerald-400/14 hover:text-white"
              >
                Buy $RTA
                <ExternalIcon />
              </a>

              <Link
                href="/links"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-sm font-black text-white/76 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                Official Links
              </Link>
            </div>

            <div className="mt-7 rounded-[26px] border border-cyan-400/14 bg-cyan-400/6 p-4">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/72">
                Official Solana Mint
              </div>

              <div className="mt-2 break-all font-mono text-xs font-semibold leading-6 text-white/76 sm:text-sm">
                {TOKEN_ADDRESS}
              </div>

              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={copyContract}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/10 px-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="text-emerald-300" />
                      Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon />
                      Copy contract
                    </>
                  )}
                </button>

                <a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 px-4 text-sm font-bold text-fuchsia-100 transition hover:bg-fuchsia-400/14"
                >
                  Verify on Solscan
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="text-[11px] font-black uppercase tracking-[0.22em] text-white/42">
                Verified External Resources
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {externalResources.map((resource) => (
                  <a
                    key={resource.label}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-white/9 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/66 transition hover:border-cyan-300/20 hover:bg-cyan-400/7 hover:text-white"
                  >
                    <span>{resource.label}</span>
                    <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-300/62 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>

            {internalGroups.map((group) => (
              <div key={group.title}>
                <div className="text-[11px] font-black uppercase tracking-[0.22em] text-white/42">
                  {group.title}
                </div>

                <div className="mt-4 space-y-2">
                  {group.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block text-sm text-white/58 transition hover:text-cyan-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="max-w-5xl text-xs leading-6 text-white/38">
            RROTA is a crypto token and evolving software ecosystem. Nothing on this
            website is financial, investment, legal, or tax advice. Digital assets,
            wallets, games, reward systems, and third-party services involve risk.
            Always verify official links and review transactions before signing.
          </p>

          <div className="mt-5 flex flex-col gap-2 text-xs text-white/34 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} RROTA. All rights reserved.</div>
            <div className="font-mono">
              Official: rrota.xyz · Game: spin.rrota.xyz
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
