"use client";

import { useEffect, useMemo, useState } from "react";
import {
  formatUtcDeadline,
  getNextWeeklyDeadline,
  getRemainingParts,
} from "../lib/race-schedule";

type WeeklyRacePulseProps = {
  compact?: boolean;
  showSeconds?: boolean;
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function WeeklyRacePulse({
  compact = false,
  showSeconds = false,
}: WeeklyRacePulseProps) {
  const [now, setNow] = useState(() => new Date());
  const [deadline, setDeadline] = useState(() => getNextWeeklyDeadline(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextNow = new Date();
      setNow(nextNow);

      if (nextNow.getTime() >= deadline.getTime()) {
        setDeadline(getNextWeeklyDeadline(nextNow));
      }
    }, 1_000);

    return () => window.clearInterval(interval);
  }, [deadline]);

  const remaining = useMemo(
    () => getRemainingParts(now, deadline),
    [now, deadline],
  );

  const urgency =
    remaining.totalMs <= 6 * 60 * 60 * 1000
      ? "text-rose-200"
      : remaining.totalMs <= 24 * 60 * 60 * 1000
        ? "text-amber-100"
        : "text-cyan-100";

  const countdown = `${remaining.days}d ${pad(remaining.hours)}h ${pad(remaining.minutes)}m${
    showSeconds ? ` ${pad(remaining.seconds)}s` : ""
  }`;

  if (compact) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-left sm:text-right">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/42">
          Weekly race closes in
        </div>
        <div className={`mt-1 text-base font-black tabular-nums ${urgency}`}>
          {countdown}
        </div>
        <div className="mt-1 text-[10px] font-semibold text-white/42">
          {formatUtcDeadline(deadline)}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[26px] border border-cyan-300/18 bg-cyan-400/[0.055] p-5">
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200/72">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]" />
        Live race clock
      </div>
      <div className={`mt-3 text-3xl font-black tabular-nums sm:text-4xl ${urgency}`}>
        {countdown}
      </div>
      <div className="mt-2 text-xs font-semibold text-white/48">
        Ends {formatUtcDeadline(deadline)}
      </div>
    </div>
  );
}
