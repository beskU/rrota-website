export const WEEKLY_RACE_END_DAY_UTC = 6; // Saturday
export const WEEKLY_RACE_END_HOUR_UTC = 16;
export const WEEKLY_RACE_END_MINUTE_UTC = 0;

export const WEEKLY_REWARDS = [
  { place: "1st place", reward: "2 SOL", icon: "🥇" },
  { place: "2nd place", reward: "1 SOL", icon: "🥈" },
  { place: "3rd place", reward: "0.5 SOL", icon: "🥉" },
] as const;

export type RaceWindow = {
  startsAt: Date;
  endsAt: Date;
};

export function getNextWeeklyDeadline(now = new Date()): Date {
  const deadline = new Date(now);
  const day = deadline.getUTCDay();
  let daysUntilEndDay = (WEEKLY_RACE_END_DAY_UTC - day + 7) % 7;

  deadline.setUTCHours(
    WEEKLY_RACE_END_HOUR_UTC,
    WEEKLY_RACE_END_MINUTE_UTC,
    0,
    0,
  );

  if (daysUntilEndDay === 0 && now.getTime() >= deadline.getTime()) {
    daysUntilEndDay = 7;
  }

  deadline.setUTCDate(deadline.getUTCDate() + daysUntilEndDay);
  return deadline;
}

export function getCurrentWeeklyRace(now = new Date()): RaceWindow {
  const endsAt = getNextWeeklyDeadline(now);
  const startsAt = new Date(endsAt.getTime() - 7 * 24 * 60 * 60 * 1000);

  return { startsAt, endsAt };
}

export function formatUtcDeadline(deadline: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(deadline)
    .replace(",", " •")
    .concat(" UTC");
}

export function getRemainingParts(now: Date, deadline: Date) {
  const totalMs = Math.max(0, deadline.getTime() - now.getTime());
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  return { totalMs, days, hours, minutes, seconds };
}
