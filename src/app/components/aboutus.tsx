"use client";
import React, { useState } from "react";
import RrotaImage2 from "../../../public/rrota-image-2.jpg";
import Image from "next/image";

const AboutUs = () => {
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
    <section id="AboutUs" className="w-full px-4 mb-20 text-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r pb-5 from-[#fff] via-[#fff] to-[#fff] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(168,144,255,0.35)]">
          About RROTA
        </h2>

        {/* Quick Intro */}
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 max-w-4xl mx-auto">
            <span className="text-[#20befa] font-bold">RROTA ($RTA)</span> is a
            Solana token focused on <span className="text-[#20befa] font-bold">utility-first</span>{" "}
            growth — combining gamified rewards with real-world direction (Spin-to-Win,
            P2E experiences, and future transit tools).
          </p>

          <p className="text-white/70 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            We keep it simple: real on-chain token, real liquidity, audited contract,
            and a build-first approach. Hype can come later — structure comes first.
          </p>
        </div>

        {/* Verify / Trust Box */}
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl border border-[#2b3139] bg-[#202329]/60 backdrop-blur-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <p className="text-white font-semibold text-lg">✅ Verify the mint address</p>
              <p className="text-white/70 text-sm">
                Always verify the token address before swapping. Fake clones exist.
              </p>
              <p className="font-mono text-xs md:text-sm break-all text-white/90">
                {TOKEN_ADDRESS}
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
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

              <a
                href="https://freshcoins.io/audit/rrota"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-green-500/20 bg-green-500/10 hover:bg-green-500/15 transition text-green-300 font-semibold"
              >
                Audit ↗
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-white/60">
            Tip: If an app doesn’t show $RTA, paste the mint address above.
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center p-6 rounded-xl border border-green-500/30 !bg-gradient-to-br !from-green-500/10 !to-transparent hover:scale-[1.03] transition-transform duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-400"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z" />
                <path d="M3 5h18v6H3V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Audited</h3>
            <p className="text-green-400 text-sm font-medium">FreshCoins Verified</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl border border-blue-500/30 !bg-gradient-to-br !from-blue-500/10 !to-transparent hover:scale-[1.03] transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01" />
                <path d="M15 9h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Utility-first</h3>
            <p className="text-blue-400 text-sm font-medium">Games + future tools</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl border border-orange-500/30 !bg-gradient-to-br !from-orange-500/10 !to-transparent hover:scale-[1.03] transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-400"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
                <path d="M17 3l3 3-3 3" />
                <path d="M7 21l-3-3 3-3" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Deflationary</h3>
            <p className="text-orange-400 text-sm font-medium">Supply burns tracked on-chain</p>
          </div>
        </div>

        {/* Now vs Next */}
        <div className="max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#2b3139] bg-[#1c1f24] p-6">
            <h3 className="text-[#20befa] font-bold text-lg mb-3">What exists now</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#20befa] mt-1">•</span>
                <span>Live token on Solana with visible on-chain data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#20befa] mt-1">•</span>
                <span>Audit report available (FreshCoins)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#20befa] mt-1">•</span>
                <span>Community channels active: Telegram + X</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#2b3139] bg-[#1c1f24] p-6">
            <h3 className="text-[#20befa] font-bold text-lg mb-3">What’s in development</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#20befa] mt-1">•</span>
                <span>Spin-to-Win access & reward logic (anti-farm focus)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#20befa] mt-1">•</span>
                <span>P2E experiences (Crypto Shooter concept + expansion)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#20befa] mt-1">•</span>
                <span>Utility integrations (website + WebApp + future tools)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Image + Long Copy */}
        <div className="w-full bg-[#1c1f24] border border-[#2b3139] rounded-[24px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-full">
              <Image
                alt="RROTA Visual"
                src={RrotaImage2}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="text-[#aaa] text-sm mt-1 leading-relaxed space-y-6 p-4 md:p-6 flex flex-col justify-center">
              <p>
                <span className="text-[#20befa]">RROTA</span> is community-built
                on Solana’s high-performance infrastructure — focused on speed,
                low fees, and a clean on-chain footprint.
              </p>

              <p>
                Our goal is to grow an ecosystem where holding and using $RTA
                makes sense: rewards, games, and practical integrations — shipped
                step-by-step, not promised overnight.
              </p>

              <div className="space-y-3">
                <h3 className="text-[#20befa] font-semibold text-base">
                  Core principles
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>Transparency: link everything on-chain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>Utility-first: ship working features before marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>Community: rewards that prioritize real holders</span>
                  </li>
                </ul>
              </div>

              <p className="text-[#20befa] font-medium">
                If you’re here early — you’re here for the build phase.
              </p>

              <div className="flex gap-5 pt-2 flex-wrap">
                <a
                  href="https://x.com/rrotacoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition text-white"
                  aria-label="Twitter (X)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3.04371 3.57629L9.99338 12.8687L3 20.4237H4.57397L10.6968 13.8092L15.6437 20.4237H21L13.6593 10.6087L20.169 3.57629H18.5951L12.9562 9.6682L8.39998 3.57629H3.04371ZM5.35834 4.73568H7.81903L18.685 19.2642H16.2243L5.35852 4.73568H5.35834Z"></path>
                  </svg>
                </a>

                <a
                  href="https://t.me/rrotaOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5 text-white">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </a>

                <a
                  href="https://freshcoins.io/audit/rrota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                  aria-label="Audit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </a>

                <a
                  href="mailto:info@rrota.xyz"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-white">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-[#1cc2fc] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#1cc2fc] transition-all duration-300 shadow-lg hover:shadow-[#1cc2fc]/30"
                >
                  Buy on Jupiter ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
