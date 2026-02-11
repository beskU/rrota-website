"use client";
import React, { useState } from "react";

const HowTo = () => {
  const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <section id="HowTo" className="max-w-7xl mx-auto px-4 text-white">
      <div className="mt-12 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
            <span className="relative inline-block">
              <span className="relative z-10">How to Buy $RTA</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#20befa] -z-0"></span>
            </span>
          </h2>
          <p className="text-center text-lg text-white/70 max-w-2xl mx-auto">
            A simple, clean guide — with the safety checks most sites forget.
          </p>
        </div>

        {/* Safety / Verify Box */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#2b3139] bg-[#202329]/60 backdrop-blur-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <p className="text-white font-semibold text-lg">
                ✅ Safety first: verify the token address
              </p>
              <p className="text-white/70 text-sm">
                Scammers often create fake tokens with similar names. Always
                confirm the mint address before you swap.
              </p>
              <p className="font-mono text-xs md:text-sm break-all text-white/90">
                {TOKEN_ADDRESS}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={copyAddress}
                type="button"
                className="px-4 py-3 rounded-xl border border-[#1cc2fc]/30 bg-[#1cc2fc]/10 hover:bg-[#1cc2fc]/15 transition text-[#7dd9ff] font-semibold"
              >
                {copied ? "Copied ✓" : "Copy Address"}
              </button>
              <a
                href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white font-semibold"
              >
                Open Solscan ↗
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-white/60">
            Tip: if you don’t see “RROTA / $RTA” in a swap UI, paste the mint
            address above.
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-blue-500 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 !bg-gradient-to-br !from-blue-500/10 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wallet text-blue-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg>

            <p className="font-bold text-xl mb-2">1 — Install a Solana wallet</p>
            <p className="text-white/70 mb-4">
              Recommended: Phantom. Create a wallet and back up your seed phrase
              safely (never share it).
            </p>

            <a
              href="https://phantom.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 relative z-10 font-semibold"
            >
              Download Phantom ↗
            </a>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-cyan-500 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 !bg-gradient-to-br !from-cyan-500/10 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-upload text-cyan-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" x2="12" y1="3" y2="15"></line>
            </svg>

            <p className="font-bold text-xl mb-2">2 — Get SOL (for fees + swap)</p>
            <p className="text-white/70 mb-4">
              Buy SOL on a major exchange, then send it to your Phantom wallet.
              You need a little SOL to cover network fees.
            </p>

            <div className="text-sm text-white/60 space-y-1">
              <div>• Buy SOL on: Binance / Coinbase / Kraken / OKX</div>
              <div>• Withdraw to your Phantom “Solana” address</div>
              <div>• Wait for confirmation (usually seconds)</div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-yellow-500 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 !bg-gradient-to-br !from-yellow-500/10 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart text-yellow-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>

            <p className="font-bold text-xl mb-2">3 — Swap SOL → $RTA</p>
            <p className="text-white/70 mb-4">
              Connect your wallet and swap using a DEX aggregator (recommended)
              or a DEX. If the token doesn’t appear, paste the mint address.
            </p>

            <div className="flex flex-col gap-3 relative z-10">
              <a
                href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-[#1cc2fc] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#1cc2fc] transition-all duration-300 shadow-lg hover:shadow-[#1cc2fc]/30"
              >
                Open Jupiter ↗
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.dextools.io/app/token/rrota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold"
                >
                  DEXTools ↗
                </a>
                <a
                  href="https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold"
                >
                  GeckoTerminal ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="max-w-4xl mx-auto text-center text-white/60 text-sm">
          If you’re new: start with a small amount, verify the mint address, and
          never approve random links in your wallet.
        </div>
      </div>
    </section>
  );
};

export default HowTo;
