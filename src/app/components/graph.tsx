"use client";
import React, { useEffect, useRef, useState } from "react";

const Graph = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const TOKEN_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
  const chartUrl = `https://dexscreener.com/solana/${TOKEN_MINT}?embed=1&theme=dark&trades=0&info=0`;
  const openUrl = `https://dexscreener.com/solana/${TOKEN_MINT}`;

  useEffect(() => {
    // after 10 seconds: stop spinner; only show error if not loaded
    timeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      setHasError((prev) => (isLoaded ? false : true));
    }, 10000);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
    setHasError(false);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  const handleError = () => {
    setIsLoaded(false);
    setIsLoading(false);
    setHasError(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  return (
    <section id="Graph" className="w-full px-4 py-8">
      <div className="lg:max-w-7xl lg:mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          <span className="relative inline-block">
            <span className="relative z-10">RROTA Graph</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0" />
          </span>
        </h2>

        <div className="w-full bg-[#1a1d23] border border-[#2b3139] rounded-xl p-4 sm:p-6 relative overflow-hidden">
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1d23] rounded-xl z-10">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-[#1cc2fc] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-[#1cc2fc] text-sm">Loading Chart...</p>
                <p className="text-gray-400 text-xs mt-1">
                  If it doesn’t load, you can open it directly.
                </p>
              </div>
            </div>
          )}

          {/* Error overlay */}
          {hasError && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1d23] rounded-xl z-10">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-[#1cc2fc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#1cc2fc]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <p className="text-[#1cc2fc] text-sm mb-2">
                  Chart temporarily unavailable
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  Some browsers block embedded charts. Use the direct link below.
                </p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href={openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1cc2fc] text-white rounded-lg text-xs hover:bg-[#1cc2fc]/80 transition-colors"
                  >
                    Open on Dexscreener ↗
                  </a>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg text-xs hover:bg-white/15 transition-colors border border-white/10"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative">
            <iframe
              src={chartUrl}
              width="100%"
              height="100%"
              className="w-full h-full border-0 rounded-lg shadow-lg"
              style={{ minHeight: "350px", maxHeight: "750px" }}
              title="RROTA Chart"
              loading="lazy"
              onLoad={handleLoad}
              // NOTE: iframe onError can be unreliable; we keep it anyway
              onError={handleError}
              // safer sandbox; enough for most embeds
              sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
