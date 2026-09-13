"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import WeeklyRacePulse from "./weekly-race-pulse";

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  spin: "https://spin.rrota.xyz",
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  telegram: "https://t.me/rrotaOfficial",
  x: "https://x.com/rrotacoin",
};

type MarketData = {
  ok?: boolean;
  priceUsd?: number | null;
  liquidityUsd?: number | null;
  volume24h?: number | null;
  priceChange24h?: number | null;
};

type Mission = {
  id: string;
  number: string;
  title: string;
  detail: string;
  href: string;
  external?: boolean;
  accent: string;
};

const MISSIONS: Mission[] = [
  {
    id: "spin",
    number: "01",
    title: "Enter the Spin Arena",
    detail: "Open the live RROTA product and see the current game economy.",
    href: LINKS.spin,
    external: true,
    accent: "border-cyan-300/20 bg-cyan-400/[0.065] text-cyan-100",
  },
  {
    id: "proof",
    number: "02",
    title: "Open the Proof Vault",
    detail: "Verify the mint, authorities, audits, market links, and official identities.",
    href: "/proof",
    accent: "border-emerald-300/20 bg-emerald-400/[0.06] text-emerald-100",
  },
  {
    id: "rewards",
    number: "03",
    title: "Inspect Race History",
    detail: "Review published weekly results and the reward-transparency archive.",
    href: "/rewards",
    accent: "border-amber-300/20 bg-amber-400/[0.06] text-amber-100",
  },
  {
    id: "roadmap",
    number: "04",
    title: "Scan the Future Sectors",
    detail: "Separate what is live today from active development and long-term ideas.",
    href: "/roadmap",
    accent: "border-fuchsia-300/20 bg-fuchsia-400/[0.06] text-fuchsia-100",
  },
];

const CALLSIGN_PREFIXES = [
  "Nebula",
  "Void",
  "Ion",
  "Orbit",
  "Nova",
  "Pulse",
  "Astra",
  "Cipher",
  "Quasar",
  "Vector",
];

const CALLSIGN_SUFFIXES = [
  "Rider",
  "Scout",
  "Runner",
  "Signal",
  "Pilot",
  "Nomad",
  "Hunter",
  "Drifter",
  "Core",
  "Seeker",
];

function createCallsign() {
  const prefix = CALLSIGN_PREFIXES[Math.floor(Math.random() * CALLSIGN_PREFIXES.length)];
  const suffix = CALLSIGN_SUFFIXES[Math.floor(Math.random() * CALLSIGN_SUFFIXES.length)];
  const serial = Math.floor(100 + Math.random() * 900);
  return `${prefix}${suffix}-${serial}`;
}

function formatUsd(
  value: number | null | undefined,
  status: "loading" | "ready" | "unavailable",
) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return status === "loading" ? "Checking…" : "Unavailable";
  }

  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toFixed(value < 10 ? 2 : 0)}`;
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function RrotaUniverse() {
  const [callsign, setCallsign] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [market, setMarket] = useState<MarketData | null>(null);
  const [marketStatus, setMarketStatus] = useState<
    "loading" | "ready" | "unavailable"
  >("loading");

  useEffect(() => {
    try {
      const storedCallsign = window.localStorage.getItem("rrota_explorer_callsign");
      const storedMissions = window.localStorage.getItem("rrota_explorer_missions");

      if (storedCallsign) setCallsign(storedCallsign);
      if (storedMissions) {
        const parsed: unknown = JSON.parse(storedMissions);
        if (Array.isArray(parsed)) {
          setCompleted(parsed.filter((item): item is string => typeof item === "string"));
        }
      }
    } catch {
      // The experience still works when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function loadMarket() {
      try {
        const response = await fetch("/api/rrota-market", {
          signal: controller.signal,
          cache: "no-store",
        });
        const payload: unknown = await response.json();
        if (active && payload && typeof payload === "object") {
          const next = payload as MarketData;
          setMarket(next);
          setMarketStatus(next.ok ? "ready" : "unavailable");
        }
      } catch {
        if (active) {
          setMarket(null);
          setMarketStatus("unavailable");
        }
      }
    }

    void loadMarket();
    const interval = window.setInterval(loadMarket, 60_000);

    return () => {
      active = false;
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  const progress = useMemo(
    () => Math.round((completed.length / MISSIONS.length) * 100),
    [completed.length],
  );

  const initializeExplorer = () => {
    const next = callsign ?? createCallsign();
    setCallsign(next);

    try {
      window.localStorage.setItem("rrota_explorer_callsign", next);
    } catch {
      // Local persistence is optional.
    }
  };

  const markMission = (id: string) => {
    setCompleted((current) => {
      if (current.includes(id)) return current;
      const next = [...current, id];

      try {
        window.localStorage.setItem("rrota_explorer_missions", JSON.stringify(next));
      } catch {
        // Local persistence is optional.
      }

      return next;
    });
  };

  return (
    <section id="Universe" className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_82%_35%,rgba(217,70,239,0.11),transparent_30%)]" />
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/8 shadow-[0_0_140px_rgba(34,211,238,0.06)]" />
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/8" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          <div className="xl:sticky xl:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              Live command center
            </div>

            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Enter the
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                RROTA Universe.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/64 sm:text-base">
              A living map of the ecosystem—not a static token landing page. Explore the game, verify the project, inspect race history, follow market signals, and discover what is being built next.
            </p>

            <div className="mt-6 rounded-[30px] border border-cyan-300/15 bg-[#07101d]/88 p-5 shadow-[0_0_60px_rgba(34,211,238,0.07)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/70">
                Explorer signal
              </div>

              {callsign ? (
                <>
                  <div className="mt-3 text-2xl font-black text-white">SIGNAL DETECTED</div>
                  <div className="mt-1 font-mono text-sm font-bold text-emerald-200">{callsign}</div>
                  <p className="mt-3 text-xs leading-5 text-white/48">
                    This local callsign is stored only in your browser. No wallet connection is required.
                  </p>
                </>
              ) : (
                <>
                  <div className="mt-3 text-2xl font-black text-white">Unknown explorer detected.</div>
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    Initialize a private explorer identity and start the discovery route. It has no token value and asks for no wallet permissions.
                  </p>
                  <button
                    type="button"
                    onClick={initializeExplorer}
                    className="mt-4 inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-200/28 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_0_26px_rgba(34,211,238,0.18)] transition hover:brightness-110"
                  >
                    Initialize signal
                  </button>
                </>
              )}

              <div className="mt-5">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                  <span>Discovery progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/7">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <WeeklyRacePulse />

              <div className="rounded-[26px] border border-fuchsia-300/18 bg-fuchsia-400/[0.045] p-5">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-200/70">
                  Market signal
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.14em] text-white/38">Liquidity</div>
                    <div className="mt-1 text-xl font-black text-white">{formatUsd(market?.liquidityUsd, marketStatus)}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.14em] text-white/38">24h volume</div>
                    <div className="mt-1 text-xl font-black text-white">{formatUsd(market?.volume24h, marketStatus)}</div>
                  </div>
                </div>
                <p className="mt-3 text-[10px] leading-5 text-white/38">
                  Live market references come from a third-party DEX data source and may be delayed. Always verify before acting.
                </p>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-violet-200/70">
                    Discovery missions
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">Explore. Verify. Decide for yourself.</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/52">
                  {completed.length}/{MISSIONS.length} explored
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {MISSIONS.map((mission) => {
                  const done = completed.includes(mission.id);
                  const className = `group block rounded-[26px] border p-5 transition hover:-translate-y-0.5 ${mission.accent}`;
                  const content = (
                    <>
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-65">Mission {mission.number}</div>
                        <div className={`rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.13em] ${done ? "border-emerald-300/25 bg-emerald-400/12 text-emerald-100" : "border-white/10 bg-black/15 text-white/46"}`}>
                          {done ? "Explored" : "Open"}
                        </div>
                      </div>
                      <div className="mt-3 text-lg font-black text-white">{mission.title}</div>
                      <p className="mt-2 text-xs leading-5 text-white/56">{mission.detail}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-white/82">
                        Enter sector
                        {mission.external ? <ExternalIcon /> : <ArrowIcon />}
                      </div>
                    </>
                  );

                  return mission.external ? (
                    <a
                      key={mission.id}
                      href={mission.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => markMission(mission.id)}
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={mission.id}
                      href={mission.href}
                      onClick={() => markMission(mission.id)}
                      className={className}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-sky-300/16 bg-sky-400/[0.045] p-4 transition hover:border-sky-200/28 hover:bg-sky-400/[0.075]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-200/65">Community signal</div>
                <div className="mt-2 text-sm font-black text-white">Telegram</div>
              </a>
              <a
                href={LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-white/12 bg-white/[0.035] p-4 transition hover:border-white/24 hover:bg-white/[0.06]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/48">Public updates</div>
                <div className="mt-2 text-sm font-black text-white">@rrotacoin</div>
              </a>
              <a
                href={LINKS.solscan}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-emerald-300/16 bg-emerald-400/[0.045] p-4 transition hover:border-emerald-200/28 hover:bg-emerald-400/[0.075]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200/65">On-chain identity</div>
                <div className="mt-2 text-sm font-black text-white">Verify $RTA</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
