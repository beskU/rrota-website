"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type {
  CompetitionWindow,
  DataStatus,
  TransparencyData,
  TransparencyMetric,
} from "../lib/transparency-types";

const SPIN_URL = "https://spin.rrota.xyz";

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

function statusLabel(status: DataStatus) {
  switch (status) {
    case "live":
      return "Live";
    case "verified":
      return "Verified";
    case "pending":
      return "Verify";
    default:
      return "Unavailable";
  }
}

function statusTone(status: DataStatus) {
  switch (status) {
    case "live":
      return "border-cyan-300/20 bg-cyan-400/8 text-cyan-100";
    case "verified":
      return "border-emerald-300/20 bg-emerald-400/8 text-emerald-100";
    case "pending":
      return "border-amber-300/20 bg-amber-400/8 text-amber-100";
    default:
      return "border-white/10 bg-white/[0.04] text-white/48";
  }
}

function formatUsd(value: number | null, compact = true) {
  if (value === null || !Number.isFinite(value)) return null;

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

function formatInteger(value: number | null) {
  if (value === null || !Number.isFinite(value)) return null;
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function formatCompactNumber(value: number | null, suffix = "") {
  if (value === null || !Number.isFinite(value)) return null;

  const text = new Intl.NumberFormat("en-US", {
    notation: value >= 10_000 ? "compact" : "standard",
    maximumFractionDigits: value >= 10_000 ? 2 : 0,
  }).format(value);

  return suffix ? `${text} ${suffix}` : text;
}

function formatSupply(value: number | null) {
  if (value === null || !Number.isFinite(value)) return null;

  return `${new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 3,
  }).format(value)} RTA`;
}

function formatPercent(value: number | null) {
  if (value === null || !Number.isFinite(value)) return null;
  return `${value.toFixed(2)}%`;
}

function displayValue<T>(
  metric: TransparencyMetric<T>,
  formatter?: (value: T | null) => string | null,
) {
  if (metric.value === null) {
    return metric.status === "pending" ? "Verify live" : "Unavailable";
  }

  if (formatter) return formatter(metric.value) ?? "Unavailable";
  return String(metric.value);
}

function formatTimestamp(value: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(date);
}

function MetricCard<T>({
  label,
  metric,
  formatter,
  emphasis = false,
}: {
  label: string;
  metric: TransparencyMetric<T>;
  formatter?: (value: T | null) => string | null;
  emphasis?: boolean;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/46">
          {label}
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] ${statusTone(metric.status)}`}
        >
          {statusLabel(metric.status)}
        </span>
      </div>

      <div
        className={`mt-3 break-words font-black tracking-[-0.035em] ${
          emphasis ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {displayValue(metric, formatter)}
      </div>

      <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/38">
        {metric.source}
      </div>

      {metric.updatedAt ? (
        <div className="mt-1 text-[11px] text-white/34">
          Updated {formatTimestamp(metric.updatedAt)}
        </div>
      ) : null}

      {metric.note ? (
        <p className="mt-3 text-xs leading-5 text-white/48">{metric.note}</p>
      ) : null}
    </>
  );

  const classes = `group relative overflow-hidden rounded-[28px] border p-5 transition ${
    emphasis
      ? "border-cyan-300/18 bg-[linear-gradient(145deg,rgba(34,211,238,0.10),rgba(255,255,255,0.025))]"
      : "border-white/10 bg-white/[0.035]"
  } ${metric.href ? "hover:border-cyan-300/24 hover:bg-white/[0.055]" : ""}`;

  if (metric.href) {
    return (
      <a
        href={metric.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
        <ExternalIcon className="absolute bottom-5 right-5 h-4 w-4 text-white/20 transition group-hover:text-cyan-200/70" />
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200/64">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="max-w-3xl text-sm leading-7 text-white/54 lg:justify-self-end">
        {description}
      </p>
    </div>
  );
}

function RewardsMetric({
  rta,
  sol,
}: {
  rta: TransparencyMetric<number>;
  sol: TransparencyMetric<number>;
}) {
  const status: DataStatus =
    rta.status === "verified" || sol.status === "verified"
      ? "verified"
      : rta.status === "pending" || sol.status === "pending"
        ? "pending"
        : "unavailable";

  return (
    <a
      href={rta.href || sol.href || "/rewards"}
      className="group relative overflow-hidden rounded-[28px] border border-fuchsia-300/14 bg-fuchsia-400/[0.045] p-5 transition hover:border-fuchsia-200/24 hover:bg-fuchsia-400/[0.07]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/46">
          Verified Rewards Distributed
        </div>
        <span
          className={`rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] ${statusTone(status)}`}
        >
          {statusLabel(status)}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
        <span>{formatCompactNumber(rta.value, "RTA") ?? "— RTA"}</span>
        <span className="text-white/30">+</span>
        <span>{sol.value === null ? "— SOL" : `${sol.value.toLocaleString()} SOL`}</span>
      </div>

      <p className="mt-3 text-xs leading-5 text-white/48">
        {sol.note || rta.note || "Only publicly verified payout evidence is counted."}
      </p>
      <ExternalIcon className="absolute bottom-5 right-5 h-4 w-4 text-white/20 transition group-hover:text-fuchsia-200/70" />
    </a>
  );
}

function formatCompetitionDate(value: string | null) {
  if (!value) return "Not published";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not published";

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(date)
    .replace(",", " •")
    .concat(" UTC");
}

function remainingText(endIso: string | null, nowMs: number) {
  if (!endIso) return null;
  const end = new Date(endIso).getTime();
  if (!Number.isFinite(end)) return null;

  const totalSeconds = Math.max(0, Math.floor((end - nowMs) / 1000));
  if (totalSeconds <= 0) return "Period closed / rolling forward";

  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);

  return `${days}d ${hours}h ${minutes}m remaining`;
}

function CompetitionCard({ period, nowMs }: { period: CompetitionWindow; nowMs: number }) {
  const remaining = remainingText(period.endIso, nowMs);

  return (
    <a
      href={period.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(7,11,22,0.88))] p-6 transition hover:border-cyan-300/22 hover:bg-white/[0.055]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.07),transparent_42%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/42">
            {period.label} competition
          </div>
          <span className="rounded-full border border-emerald-300/18 bg-emerald-400/[0.07] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-100">
            {period.status}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-black">{period.label} Leaderboard</h3>

        <div className="mt-5 rounded-2xl border border-white/9 bg-black/20 p-4">
          <div className="text-[9px] font-black uppercase tracking-[0.15em] text-cyan-200/58">
            Current period ends
          </div>
          <div className="mt-1 text-sm font-black text-white/88">
            {formatCompetitionDate(period.endIso)}
          </div>
          {remaining ? (
            <div className="mt-2 text-xs font-bold text-cyan-100/68">{remaining}</div>
          ) : null}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/9 bg-white/[0.035] p-4">
            <div className="text-[9px] font-black uppercase tracking-[0.15em] text-white/38">
              Participants
            </div>
            <div className="mt-1 text-xl font-black">
              {period.participants === null
                ? "Unavailable"
                : formatInteger(period.participants)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/9 bg-white/[0.035] p-4">
            <div className="text-[9px] font-black uppercase tracking-[0.15em] text-white/38">
              Data source
            </div>
            <div className="mt-1 text-xs font-black leading-5 text-white/72">
              {period.participantSource}
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {period.rewards.map((reward) => (
            <div
              key={reward}
              className="rounded-xl border border-amber-300/10 bg-amber-400/[0.045] px-3 py-2 text-xs font-bold text-amber-100/72"
            >
              {reward}
            </div>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-100">
          Open live leaderboard <ExternalIcon className="h-3.5 w-3.5" />
        </div>
      </div>
    </a>
  );
}

export default function TransparencyDashboard({ initialData }: { initialData: TransparencyData }) {
  const [data, setData] = useState(initialData);
  const [refreshError, setRefreshError] = useState(false);
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNowMs(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let active = true;

    async function refresh() {
      try {
        const response = await fetch("/api/transparency", {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error(`Transparency refresh failed: ${response.status}`);
        const next = (await response.json()) as TransparencyData;

        if (active) {
          setData(next);
          setRefreshError(false);
        }
      } catch (error) {
        console.error("Unable to refresh RROTA transparency data:", error);
        if (active) setRefreshError(true);
      }
    }

    const interval = window.setInterval(refresh, 2 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const generatedAt = useMemo(() => formatTimestamp(data.generatedAt), [data.generatedAt]);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_84%_6%,rgba(217,70,239,0.13),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.08),transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/[0.07] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]" />
            RROTA Transparency Center
          </div>

          <div className="mt-6 grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[82px]">
                LIVE METRICS.
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                  VERIFIABLE SOURCES.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/64 sm:text-lg">
                One public dashboard for RROTA market health, product activity, community signals,
                on-chain security, and active competitions. Missing data stays missing—nothing is
                invented to make the project look stronger.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                    Dashboard refresh
                  </div>
                  <div className="mt-1 text-sm font-black text-white/82">
                    {generatedAt ? `Generated ${generatedAt}` : "Live source refresh"}
                  </div>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-cyan-100">
                  Auto 2 min
                </span>
              </div>

              {refreshError ? (
                <div className="mt-4 rounded-2xl border border-amber-300/16 bg-amber-400/[0.06] px-4 py-3 text-xs leading-5 text-amber-100/76">
                  A background refresh failed. The last successful values remain visible instead of being replaced with zero.
                </div>
              ) : null}

              <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <Link href="/proof" className="rounded-2xl border border-emerald-300/14 bg-emerald-400/[0.055] px-4 py-3 text-center text-xs font-black text-emerald-100 transition hover:bg-emerald-400/[0.09]">
                  Proof Vault
                </Link>
                <Link href="/rewards" className="rounded-2xl border border-fuchsia-300/14 bg-fuchsia-400/[0.055] px-4 py-3 text-center text-xs font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.09]">
                  Race History
                </Link>
                <a href={SPIN_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-cyan-300/14 bg-cyan-400/[0.055] px-4 py-3 text-center text-xs font-black text-cyan-100 transition hover:bg-cyan-400/[0.09]">
                  Live Product ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="px-4 pb-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          <section id="market" aria-labelledby="transparency-market-title">
            <SectionHeader
              eyebrow="01 • Market"
              title="Public market signals"
              description="Current market metrics come from independent market/token providers. Historical values stay unavailable until real snapshots exist; 24h volume is never multiplied to imitate a 7-day number."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <MetricCard label="Price" metric={data.market.priceUsd} formatter={(value) => formatUsd(value, false)} emphasis />
              <MetricCard label="Market Cap" metric={data.market.marketCapUsd} formatter={formatUsd} />
              <MetricCard label="Liquidity" metric={data.market.liquidityUsd} formatter={formatUsd} />
              <MetricCard label="24h Volume" metric={data.market.volume24hUsd} formatter={formatUsd} />
              <MetricCard label="7d Volume" metric={data.market.volume7dUsd} formatter={formatUsd} />
              <MetricCard label="Holders" metric={data.market.holders} formatter={formatInteger} emphasis />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <MetricCard label="24h Transactions" metric={data.market.transactions24h} formatter={formatInteger} />
              <MetricCard label="24h Buys" metric={data.market.buys24h} formatter={formatInteger} />
              <MetricCard label="24h Sells" metric={data.market.sells24h} formatter={formatInteger} />
            </div>
          </section>

          <section id="game" aria-labelledby="transparency-game-title">
            <SectionHeader
              eyebrow="02 • Product"
              title="Spin-to-Win activity"
              description="The website is ready for privacy-safe aggregate production statistics. Until the Spin server exposes that public aggregate endpoint, game metrics are deliberately shown as unavailable instead of being inferred from individual player screens."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <MetricCard label="Total Players" metric={data.game.totalPlayers} formatter={formatInteger} />
              <MetricCard label="Active Players • 7D" metric={data.game.activePlayers7d} formatter={formatInteger} />
              <MetricCard label="Total Spins" metric={data.game.totalSpins} formatter={formatInteger} emphasis />
              <MetricCard label="Weekly Participants" metric={data.game.weeklyParticipants} formatter={formatInteger} />
              <RewardsMetric rta={data.game.verifiedRewardsRta} sol={data.game.verifiedRewardsSol} />
            </div>
          </section>

          <section id="community" aria-labelledby="transparency-community-title">
            <SectionHeader
              eyebrow="03 • Community"
              title="Community reach and holder growth"
              description="Official channels are linked directly. Social counts are not scraped or manually inflated; they activate only when a reliable source is connected. Holder growth requires stored historical snapshots."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard label="Telegram Members" metric={data.community.telegramMembers} formatter={formatInteger} />
              <MetricCard label="X Followers" metric={data.community.xFollowers} formatter={formatInteger} />
              <MetricCard label="Holder Growth • 7D" metric={data.community.holderGrowth7d} formatter={formatInteger} />
              <MetricCard label="Holder Growth • 30D" metric={data.community.holderGrowth30d} formatter={formatInteger} />
            </div>
          </section>

          <section id="security" aria-labelledby="transparency-security-title">
            <SectionHeader
              eyebrow="04 • Security & On-chain"
              title="Verify the token foundation"
              description="Authority and supply checks prefer direct Solana mint-account data. Liquidity-lock state is intentionally not hard-coded because ownership, lock percentages, and expiry can change over time."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <MetricCard label="Mint Authority" metric={data.security.mintAuthority} />
              <MetricCard label="Freeze Authority" metric={data.security.freezeAuthority} />
              <MetricCard label="Current Supply" metric={data.security.supply} formatter={formatSupply} emphasis />
              <MetricCard label="Token Decimals" metric={data.security.decimals} formatter={formatInteger} />
              <MetricCard label="LP / Lock Status" metric={data.security.lpStatus} />
              <MetricCard label="LP Burn" metric={data.security.lpBurnPercent} formatter={formatPercent} />
              <MetricCard label="Burned / Removed RTA" metric={data.security.burnedOrRemovedRta} formatter={formatSupply} />

              <div className="rounded-[28px] border border-emerald-300/14 bg-emerald-400/[0.045] p-5 sm:col-span-2 xl:col-span-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/46">Published Reviews</div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-400/8 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-100">Published</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {data.security.audits.map((audit) => (
                    <a key={audit.name} href={audit.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/9 bg-black/15 px-4 py-4 text-sm font-black text-white/78 transition hover:border-emerald-300/20 hover:text-white">
                      <span>{audit.name}</span>
                      <ExternalIcon className="h-4 w-4 text-emerald-200/58 transition group-hover:text-emerald-100" />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-5 text-white/46">Audit/review publication is evidence about the reviewed scope; it is not a guarantee of future market performance or safety.</p>
              </div>
            </div>
          </section>

          <section id="competition" aria-labelledby="transparency-competition-title">
            <SectionHeader
              eyebrow="05 • Competition"
              title="Weekly, monthly and yearly race windows"
              description="Period timing is pulled from the Spin leaderboard API when available and falls back to the public RROTA schedule when that endpoint is unavailable. Participant counts require the aggregate game endpoint."
            />

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              <CompetitionCard period={data.competition.weekly} nowMs={nowMs} />
              <CompetitionCard period={data.competition.monthly} nowMs={nowMs} />
              <CompetitionCard period={data.competition.yearly} nowMs={nowMs} />
            </div>
          </section>

          <section id="sources" aria-labelledby="transparency-sources-title" className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/9 p-6 sm:p-8">
              <SectionHeader
                eyebrow="Data provenance"
                title="How every metric is sourced"
                description="A missing provider response never becomes zero. Each source reports its own state so visitors and listing reviewers can distinguish live, verified, pending and unavailable data."
              />
            </div>

            <div className="divide-y divide-white/8">
              {data.sources.map((source) => (
                <div key={source.label} className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-sm font-black text-white/88">{source.label}</div>
                      <span className={`rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] ${statusTone(source.status)}`}>
                        {statusLabel(source.status)}
                      </span>
                    </div>
                    {source.note ? <p className="mt-2 text-xs leading-5 text-white/48">{source.note}</p> : null}
                    {source.updatedAt ? <div className="mt-1 text-[11px] text-white/32">Updated {formatTimestamp(source.updatedAt)}</div> : null}
                  </div>

                  {source.href ? (
                    <a href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-4 text-xs font-black text-white/68 transition hover:border-cyan-300/20 hover:bg-cyan-400/[0.07] hover:text-white">
                      Verify source <ExternalIcon className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[36px] border border-cyan-300/14 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_35%),rgba(255,255,255,0.025)] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/64">Verification first</div>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Need the evidence behind a metric?</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/56">Use the Proof Vault for token/security references and Race History for published standings and payout-proof status. The dashboard summarizes; those pages provide the deeper verification trail.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/proof" className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 text-sm font-black text-white transition hover:brightness-110">Open Proof Vault</Link>
                <Link href="/rewards" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/78 transition hover:bg-white/[0.075] hover:text-white">Open Race History</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
