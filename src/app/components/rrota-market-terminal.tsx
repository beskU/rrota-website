"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const CHART_URL = `https://dexscreener.com/solana/${RROTA_MINT}`;
const CHART_EMBED_URL = `${CHART_URL}?embed=1&theme=dark`;

const JUPITER_URL = `https://jup.ag/tokens/${RROTA_MINT}`;
const SOLSCAN_URL = `https://solscan.io/token/${RROTA_MINT}`;
const GECKO_URL = `https://www.geckoterminal.com/solana/tokens/${RROTA_MINT}`;
const DEXTOOLS_URL = "https://www.dextools.io/app/token/rrota";

type MarketData = {
  ok: boolean;
  chartUrl?: string;
  priceUsd?: number | null;
  marketCap?: number | null;
  liquidityUsd?: number | null;
  volume24h?: number | null;
  priceChange24h?: number | null;
  updatedAt?: string;
};

function formatUsd(value?: number | null, compact = false) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }

  if (value > 0 && value < 0.000001) {
    return `$${value.toExponential(2)}`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: value < 1 ? 8 : 2,
  }).format(value);
}

function formatPercent(value?: number | null) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }

  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function StatCard({
  label,
  value,
  fallback,
  note,
}: {
  label: string;
  value: string | null;
  fallback: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_35px_rgba(0,0,0,0.25)]">
      <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300/80">
        {label}
      </div>

      <div className="mt-2 text-2xl font-black text-white">
        {value ?? fallback}
      </div>

      {note ? (
        <div className="mt-1 text-xs text-slate-400">
          {note}
        </div>
      ) : null}
    </div>
  );
}

export default function RrotaMarketTerminal() {
  const [market, setMarket] = useState<MarketData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chartLoaded, setChartLoaded] = useState(false);
  const [chartTimedOut, setChartTimedOut] = useState(false);

  useEffect(() => {
    let alive = true;

    async function loadMarket() {
      try {
        const response = await fetch("/api/rrota-market", {
          cache: "no-store",
        });

        const data = await response.json();

        if (alive) {
          setMarket(data);
        }
      } catch {
        if (alive) {
          setMarket({
            ok: false,
            chartUrl: CHART_URL,
          });
        }
      } finally {
        if (alive) {
          setIsLoading(false);
        }
      }
    }

    loadMarket();

    const refresh = window.setInterval(loadMarket, 60_000);

    return () => {
      alive = false;
      window.clearInterval(refresh);
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!chartLoaded) {
        setChartTimedOut(true);
      }
    }, 8500);

    return () => window.clearTimeout(timeout);
  }, [chartLoaded]);

  const chartUrl = market?.chartUrl || CHART_URL;

  const stats = useMemo(() => {
    const price = formatUsd(market?.priceUsd);
    const marketCap = formatUsd(market?.marketCap, true);
    const liquidity = formatUsd(market?.liquidityUsd, true);
    const volume = formatUsd(market?.volume24h, true);
    const change = formatPercent(market?.priceChange24h);

    return {
      price,
      marketCap,
      liquidity,
      volume,
      change,
    };
  }, [market]);

  return (
    <>
      <section
        id="market"
        className="relative overflow-hidden border-y border-cyan-400/10 bg-slate-950 px-4 py-20 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
              Live Market Terminal
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              Track RROTA live while the Spin-to-Win utility layer is active.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Follow the RROTA market chart, verify the official Solana contract,
              and use the correct trading and game links before interacting with
              the ecosystem.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Official Mint
                </div>
                <div className="mt-2 break-all font-mono text-sm text-cyan-100">
                  {RROTA_MINT}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Utility
                </div>
                <div className="mt-2 text-lg font-black text-white">
                  Spin-to-Win Live
                </div>
                <div className="text-xs text-slate-400">
                  $RTA used inside the game economy
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://spin.rrota.xyz"
                target="_blank"
                className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]"
              >
                Play Game ↗
              </Link>

              <Link
                href={JUPITER_URL}
                target="_blank"
                className="rounded-full border border-violet-300/30 bg-violet-400/10 px-5 py-3 text-sm font-black text-violet-100 transition hover:bg-violet-400/20"
              >
                Buy $RTA ↗
              </Link>

              <Link
                href={SOLSCAN_URL}
                target="_blank"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                Verify Contract ↗
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/15 bg-slate-900/70 p-3 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
              <div>
                <h3 className="text-lg font-black text-white">
                  RROTA Live Chart
                </h3>
                <p className="text-xs text-slate-400">
                  External market data. Always verify the official mint before trading.
                </p>
              </div>

              <Link
                href={chartUrl}
                target="_blank"
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-100 hover:bg-cyan-300/20"
              >
                Open Chart ↗
              </Link>
            </div>

            <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              {!chartLoaded ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 text-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300" />
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-100">
                    Loading market chart
                  </div>
                  <div className="mt-2 max-w-sm text-xs leading-5 text-slate-400">
                    If the embedded chart is blocked by your browser, use the direct
                    chart button.
                  </div>

                  {chartTimedOut ? (
                    <Link
                      href={chartUrl}
                      target="_blank"
                      className="mt-5 rounded-full bg-cyan-300 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
                    >
                      Open Direct Chart ↗
                    </Link>
                  ) : null}
                </div>
              ) : null}

              <iframe
                title="RROTA DexScreener Chart"
                src={CHART_EMBED_URL}
                className="h-full w-full"
                loading="lazy"
                onLoad={() => setChartLoaded(true)}
              />
            </div>

            <div className="mt-3 grid gap-2 text-xs text-slate-400 sm:grid-cols-3">
              <div>◆ Verify the token mint before trading.</div>
              <div>◆ Use only official RROTA links.</div>
              <div>◆ Rewards depend on eligible game activity.</div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tokenomics"
        className="bg-slate-950 px-4 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-violet-200">
              Tokenomics
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              RROTA market and token overview.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              A clean snapshot of the RROTA token, live market references, supply
              information, and official verification links.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Current Price"
              value={isLoading ? "Checking..." : stats.price}
              fallback="Check live"
              note="DexScreener market data"
            />

            <StatCard
              label="Market Cap"
              value={isLoading ? "Checking..." : stats.marketCap}
              fallback="Check live"
              note="Shown when available"
            />

            <StatCard
              label="Liquidity"
              value={isLoading ? "Checking..." : stats.liquidity}
              fallback="Check live"
              note="Best active pair"
            />

            <StatCard
              label="24h Volume"
              value={isLoading ? "Checking..." : stats.volume}
              fallback="Check live"
              note={stats.change ? `24h change: ${stats.change}` : "Live market reference"}
            />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300/80">
                Supply Reference
              </div>

              <h3 className="mt-3 text-2xl font-black text-white">
                On-chain supply view
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Burned supply and holder counts should only be shown after
                confirming the exact on-chain amount. This section avoids
                unsupported claims and sends users to official explorers for
                verification.
              </p>

              <div className="mt-5 break-all rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4 font-mono text-sm text-cyan-100">
                {RROTA_MINT}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs font-black uppercase tracking-[0.25em] text-violet-300/80">
                Official Links
              </div>

              <div className="mt-5 grid gap-3">
                <Link
                  href={JUPITER_URL}
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white hover:bg-white/10"
                >
                  Jupiter — Buy $RTA ↗
                </Link>

                <Link
                  href={CHART_URL}
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white hover:bg-white/10"
                >
                  DexScreener — Live Chart ↗
                </Link>

                <Link
                  href={GECKO_URL}
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white hover:bg-white/10"
                >
                  GeckoTerminal — Market Data ↗
                </Link>

                <Link
                  href={SOLSCAN_URL}
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white hover:bg-white/10"
                >
                  Solscan — Verify Contract ↗
                </Link>

                <Link
                  href={DEXTOOLS_URL}
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white hover:bg-white/10"
                >
                  DEXTools — Token Page ↗
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Market data is loaded from external public sources and may be delayed,
            unavailable, or different across trackers. Always verify the official
            mint before trading.
          </p>
        </div>
      </section>
    </>
  );
}
