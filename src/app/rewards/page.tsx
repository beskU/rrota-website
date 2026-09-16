import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { RACE_HISTORY } from "../lib/reward-history";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/rewards`;
const SPIN_URL = "https://spin.rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Past Winners, Race Results and Reward Transparency",
  description:
    "Review published RROTA weekly race winners, prize amounts, leaderboard earnings, review status, and public payout-proof status.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "RROTA Past Winners and Reward Transparency",
    description:
      "A public archive of RROTA race outcomes, reward allocations, review status, and payout-proof publication status.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Past Winners and Reward Transparency",
    description:
      "Review official RROTA weekly race results and public reward-verification status.",
  },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(new Date(value))
    .concat(" UTC");
}

const placeTone = {
  1: "border-amber-300/22 bg-amber-400/[0.07] text-amber-100",
  2: "border-cyan-300/18 bg-cyan-400/[0.055] text-cyan-100",
  3: "border-fuchsia-300/18 bg-fuchsia-400/[0.055] text-fuchsia-100",
} as const;

const payoutFlow = [
  ["1", "Race closes", "The race period ends and the final displayed order is captured."],
  ["2", "Under review", "Fair-play and eligibility checks are completed before official confirmation."],
  ["3", "Winners confirmed", "The qualifying positions are confirmed after review."],
  ["4", "Payout processed", "Competition rewards are handled after review; current SOL leaderboard payouts are not automatically executed by the game."],
  ["5", "Proof published", "A public transaction link can be attached to the winner record for independent verification."],
] as const;

export default function RewardsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RROTA Past Winners, Race Results and Reward Transparency",
    url: PAGE_URL,
    description:
      "Public RROTA race results and reward-verification status. A payout is only considered publicly verified when transaction evidence is attached.",
    isPartOf: {
      "@type": "WebSite",
      name: "RROTA",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#050711] px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="inline-flex rounded-full border border-amber-300/18 bg-amber-400/[0.07] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-amber-100">
            Past winners and public verification
          </div>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Results should be visible.
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              Payment proof should be separate and verifiable.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/64 sm:text-lg">
            This archive records published RROTA race-close standings. A player can
            appear here as an official race winner without the website claiming that
            the prize is publicly verified. Public verification only appears when a
            transaction reference is attached.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[26px] border border-cyan-300/14 bg-cyan-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200/68">
                Standings
              </div>
              <div className="mt-2 text-lg font-black">Race-close order is published.</div>
            </div>
            <div className="rounded-[26px] border border-emerald-300/14 bg-emerald-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200/68">
                Review
              </div>
              <div className="mt-2 text-lg font-black">Fair-play checks come before payout.</div>
            </div>
            <div className="rounded-[26px] border border-fuchsia-300/14 bg-fuchsia-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-200/68">
                Proof rule
              </div>
              <div className="mt-2 text-lg font-black">No proof link, no verified badge.</div>
            </div>
          </div>

          <section className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="max-w-3xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-100/68">
                What happens after a race ends?
              </div>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">From countdown zero to public proof.</h2>
            </div>

            <ol className="mt-6 grid gap-3 md:grid-cols-5">
              {payoutFlow.map(([number, title, text]) => (
                <li key={number} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <div className="font-mono text-xs font-black text-amber-100/60">{number}</div>
                  <h3 className="mt-2 text-sm font-black text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/48">{text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-2xl border border-cyan-300/12 bg-cyan-400/[0.04] p-4 text-xs leading-6 text-white/54">
              There is currently no fixed public payout-time guarantee on this page.
              Review time can depend on eligibility checks, wallet confirmation, and
              operational processing. RROTA should publish a service target only when
              it can be met consistently.
            </div>
          </section>

          <div className="mt-10 space-y-6">
            {RACE_HISTORY.map((race) => (
              <section
                key={race.raceId}
                className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-4 border-b border-white/9 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      Weekly race
                    </div>
                    <h2 className="mt-2 text-2xl font-black">
                      {formatDate(race.startsAt)} - {formatDate(race.endedAt)}
                    </h2>
                    <div className="mt-2 text-xs text-white/42">Source: {race.sourceLabel}</div>
                  </div>
                  <div className="rounded-full border border-emerald-300/18 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-100">
                    {race.reviewStatus}
                  </div>
                </div>

                <div className="grid gap-3 p-6 lg:grid-cols-3">
                  {race.results.map((result) => {
                    const hasProof = Boolean(result.payoutProofUrl);

                    return (
                      <article
                        key={`${race.raceId}-${result.place}`}
                        className={`rounded-[26px] border p-5 ${placeTone[result.place]}`}
                      >
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] opacity-65">
                          Place #{result.place}
                        </div>
                        <div className="mt-2 text-xl font-black text-white">{result.player}</div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-[9px] font-black uppercase tracking-[0.13em] text-white/40">
                              Leaderboard RTA
                            </div>
                            <div className="mt-1 text-sm font-black text-white">{result.rtaEarned}</div>
                          </div>
                          <div>
                            <div className="text-[9px] font-black uppercase tracking-[0.13em] text-white/40">
                              Prize allocation
                            </div>
                            <div className="mt-1 text-sm font-black text-white">{result.solPrize}</div>
                          </div>
                        </div>

                        <div className="mt-4 border-t border-white/10 pt-4">
                          <div className="text-[9px] font-black uppercase tracking-[0.13em] text-white/40">
                            Public payout verification
                          </div>
                          <div className="mt-2 text-xs leading-5 text-white/60">
                            {hasProof ? (
                              <a
                                href={result.payoutProofUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-emerald-200 underline underline-offset-4"
                              >
                                Verified transaction proof
                              </a>
                            ) : (
                              "Proof not attached - payment status is not asserted by this page."
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="border-t border-white/9 bg-black/15 px-6 py-4 text-xs leading-6 text-white/50">
                  Final standings and payout verification are separate records. A
                  missing proof link means only that this public archive has not
                  attached verifiable transaction evidence; it does not by itself
                  prove whether a private/manual payment occurred.
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[34px] border border-amber-300/16 bg-amber-400/[0.05] p-6 sm:p-7">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-100/68">
                Player question
              </div>
              <h2 className="mt-2 text-2xl font-black">How do winners get paid?</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                The current Spin implementation calculates standings but does not
                automatically send the Weekly SOL leaderboard prizes. The competition
                payout is handled after official review. The Player Guide explains
                the current wallet and payout model in more detail.
              </p>
              <Link
                href="/player-guide"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl border border-amber-300/18 bg-amber-400/[0.08] px-5 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.12]"
              >
                Open Player Guide
              </Link>
            </div>

            <div className="rounded-[34px] border border-cyan-300/16 bg-cyan-400/[0.05] p-6 sm:p-7">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100/68">
                Live competition
              </div>
              <h2 className="mt-2 text-2xl font-black">The current race is in Spin-to-Win.</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Use the live product for the current countdown, player order, account
                position, and any race-specific rule changes. Historical screenshots
                and old social posts can become outdated.
              </p>
              <a
                href={SPIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 text-sm font-black text-white transition hover:brightness-110"
              >
                Open live race
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
