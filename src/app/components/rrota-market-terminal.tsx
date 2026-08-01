"use client";

import { useEffect, useMemo, useState } from "react";

const RROTA_MINT = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const DEFAULT_CHART_URL = `https://dexscreener.com/solana/${RROTA_MINT}`;
const JUPITER_URL = `https://jup.ag/tokens/${RROTA_MINT}`;
const SOLSCAN_URL = `https://solscan.io/token/${RROTA_MINT}`;
const GECKO_URL = `https://www.geckoterminal.com/solana/tokens/${RROTA_MINT}`;

const MARKET_LINKS = [
  {
    label: "Buy on Jupiter",
    detail: "Official $RTA trading route",
    href: JUPITER_URL,
    tone: "border-emerald-400/18 bg-emerald-400/8 text-emerald-100",
  },
  {
    label: "DexScreener",
    detail: "Live market chart",
    href: DEFAULT_CHART_URL,
    tone: "border-cyan-400/18 bg-cyan-400/8 text-cyan-100",
  },
  {
    label: "GeckoTerminal",
    detail: "Pool and liquidity data",
    href: GECKO_URL,
    tone: "border-fuchsia-400/18 bg-fuchsia-400/8 text-fuchsia-100",
  },
  {
    label: "Verify on Solscan",
    detail: "Official Solana mint",
    href: SOLSCAN_URL,
    tone: "border-amber-400/18 bg-amber-400/8 text-amber-100",
  },
];

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
  if (value === null || value === undefined || Number.isNaN(value) || value < 0) {
    return null;
  }

  if (value > 0 && value < 0.000001) {
    return `$${value.toExponential(2)}`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: value < 1 ? 9 : 2,
  }).format(value);
}

function formatPercent(value?: number | null) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }

  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatUpdatedAt(value?: string) {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

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

function ChartIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 4 3 5-7" />
    </svg>
  );
}

function StatCard({
  label,
  value,
  note,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  tone: string;
}) {
  return (
    <div className={`rounded-3xl border p-5 backdrop-blur-xl ${tone}`}>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-xl font-black text-white sm:text-2xl">{value}</div>
      <div className="mt-1 text-xs leading-5 text-white/45">{note}</div>
    </div>
  );
}

export default function RrotaMarketTerminal() {
  const [market, setMarket] = useState<MarketData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [chartLoaded, setChartLoaded] = useState(false);
  const [chartTimedOut, setChartTimedOut] = useState(false);

  useEffect(() => {
    let alive = true;

    async function loadMarket() {
      try {
        const response = await fetch("/api/rrota-market", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Market request failed: ${response.status}`);
        }

        const data = (await response.json()) as MarketData;

        if (alive) {
          setMarket(data);
          setHasError(!data.ok);
        }
      } catch (error) {
        console.error("Unable to load RROTA market data:", error);

        if (alive) {
          setMarket({ ok: false, chartUrl: DEFAULT_CHART_URL });
          setHasError(true);
        }
      } finally {
        if (alive) {
          setIsLoading(false);
        }
      }
    }

    loadMarket();
    const refresh = window.setInterval(loadMarket, 2 * 60 * 1000);

    return () => {
      alive = false;
      window.clearInterval(refresh);
    };
  }, []);

  useEffect(() => {
    if (!showChart || chartLoaded) return;

    setChartTimedOut(false);

    const timeout = window.setTimeout(() => {
      setChartTimedOut(true);
    }, 8500);

    return () => window.clearTimeout(timeout);
  }, [showChart, chartLoaded]);

  const chartUrl = market?.chartUrl || DEFAULT_CHART_URL;

  const chartEmbedUrl = useMemo(() => {
    const separator = chartUrl.includes("?") ? "&" : "?";
    return `${chartUrl}${separator}embed=1&theme=dark`;
  }, [chartUrl]);

  const stats = useMemo(() => {
    const price = formatUsd(market?.priceUsd);
    const marketCap = formatUsd(market?.marketCap, true);
    const liquidity = formatUsd(market?.liquidityUsd, true);
    const volume = formatUsd(market?.volume24h, true);
    const change = formatPercent(market?.priceChange24h);

    return {
      price: isLoading ? "Checking…" : price ?? "Open chart",
      marketCap: isLoading ? "Checking…" : marketCap ?? "Open chart",
      liquidity: isLoading ? "Checking…" : liquidity ?? "Open chart",
      volume: isLoading ? "Checking…" : volume ?? "Open chart",
      change,
    };
  }, [isLoading, market]);

  const updatedAt = formatUpdatedAt(market?.updatedAt);
  const positiveChange = (market?.priceChange24h ?? 0) >= 0;

  return (
    <section
      id="Market"
      className="relative mb-20 w-full scroll-mt-28 px-4 text-white sm:px-6 lg:px-8"
      aria-labelledby="market-title"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[#050711] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.13),transparent_34%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />

        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                RROTA Market
              </div>

              <h2
                id="market-title"
                className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                Live market data,
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  kept secondary to utility.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
                Track $RTA through official public sources and verify the mint before
                trading. Market information supports the ecosystem story, but it does
                not replace product delivery, transparency, or utility.
              </p>

              {hasError ? (
                <div className="mt-5 rounded-2xl border border-amber-400/18 bg-amber-400/8 px-4 py-3 text-sm leading-6 text-amber-100/80">
                  Live market data is temporarily unavailable. Use the official chart
                  links below for the latest information.
                </div>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <StatCard
                label="Current Price"
                value={stats.price}
                note={stats.change ? `24h change: ${stats.change}` : "Public market reference"}
                tone="border-cyan-400/16 bg-cyan-400/7"
              />
              <StatCard
                label="Market Cap"
                value={stats.marketCap}
                note="Shown when available"
                tone="border-fuchsia-400/16 bg-fuchsia-400/7"
              />
              <StatCard
                label="Liquidity"
                value={stats.liquidity}
                note="Best active market pair"
                tone="border-emerald-400/16 bg-emerald-400/7"
              />
              <StatCard
                label="24h Volume"
                value={stats.volume}
                note={updatedAt ? `Updated ${updatedAt}` : "External market data"}
                tone={
                  positiveChange
                    ? "border-amber-400/16 bg-amber-400/7"
                    : "border-rose-400/16 bg-rose-400/7"
                }
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/70">
                    Official Market Chart
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Load the chart only when you need it.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
                    Keeping the chart optional improves homepage speed and prevents
                    market data from dominating the wider RROTA ecosystem presentation.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setShowChart((value) => !value);
                    setChartLoaded(false);
                    setChartTimedOut(false);
                  }}
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-2xl border border-cyan-300/24 bg-cyan-400/10 px-5 text-sm font-black text-cyan-100 transition hover:border-cyan-200/45 hover:bg-cyan-400/15"
                  aria-expanded={showChart}
                  aria-controls="rrota-live-chart"
                >
                  <ChartIcon />
                  {showChart ? "Hide Chart" : "Load Live Chart"}
                </button>
              </div>

              {showChart ? (
                <div
                  id="rrota-live-chart"
                  className="relative mt-5 h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-black"
                >
                  {!chartLoaded ? (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050711] px-6 text-center">
                      <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-300/25 border-t-cyan-300" />
                      <div className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-100">
                        Loading chart
                      </div>
                      <p className="mt-2 max-w-sm text-xs leading-5 text-white/48">
                        Some browsers block third-party chart embeds. The direct chart
                        remains available below.
                      </p>

                      {chartTimedOut ? (
                        <a
                          href={chartUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 text-xs font-black uppercase tracking-[0.16em] text-slate-950"
                        >
                          Open Direct Chart
                          <ExternalIcon />
                        </a>
                      ) : null}
                    </div>
                  ) : null}

                  <iframe
                    title="RROTA DexScreener chart"
                    src={chartEmbedUrl}
                    className="h-full w-full"
                    loading="lazy"
                    onLoad={() => setChartLoaded(true)}
                  />
                </div>
              ) : (
                <div className="mt-5 flex min-h-[190px] items-center justify-center rounded-[28px] border border-dashed border-cyan-400/18 bg-cyan-400/[0.035] px-6 text-center">
                  <div>
                    <ChartIcon className="mx-auto h-8 w-8 text-cyan-300" />
                    <div className="mt-3 text-sm font-black text-white">
                      Chart not loaded
                    </div>
                    <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-white/48">
                      Select “Load Live Chart” to open the external market view without
                      slowing down the initial homepage experience.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-300/70">
                Official Market Resources
              </div>
              <h3 className="mt-2 text-2xl font-black text-white">
                Verify first. Trade through official routes.
              </h3>

              <div className="mt-5 grid gap-3">
                {MARKET_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 transition hover:-translate-y-0.5 hover:brightness-110 ${link.tone}`}
                  >
                    <div>
                      <div className="text-sm font-black text-white">{link.label}</div>
                      <div className="mt-1 text-xs text-white/48">{link.detail}</div>
                    </div>
                    <ExternalIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-400/14 bg-cyan-400/6 px-4 py-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/70">
                  Official Mint
                </div>
                <div className="mt-2 break-all font-mono text-xs font-semibold leading-6 text-white/72">
                  {RROTA_MINT}
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-white/40">
                Market data comes from external public sources and may be delayed,
                unavailable, or different across trackers. Always verify the official
                mint. Nothing on this website is financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
