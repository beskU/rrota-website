import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { RACE_HISTORY } from "../lib/reward-history";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/rewards`;
const SPIN_URL = "https://spin.rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Race Results & Reward Transparency",
  description:
    "Review published RROTA weekly race results, prize amounts, leaderboard earnings, review status, and public payout-proof status.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "RROTA Race Results & Reward Transparency",
    description:
      "A public archive of RROTA race outcomes, reward allocations, review status, and payout-proof publication status.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Race Results & Reward Transparency",
    description:
      "Review official RROTA weekly race results and the status of public reward verification.",
  },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(value));
}

const placeTone = {
  1: "border-amber-300/22 bg-amber-400/[0.07] text-amber-100",
  2: "border-cyan-300/18 bg-cyan-400/[0.055] text-cyan-100",
  3: "border-fuchsia-300/18 bg-fuchsia-400/[0.055] text-fuchsia-100",
} as const;

export default function RewardsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RROTA Race Results & Reward Transparency",
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
            Public race archive
          </div>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Results should be visible.
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              Proof should be public.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/64 sm:text-lg">
            This page records published RROTA race-close results. It deliberately separates leaderboard outcomes from payout verification: a prize is not labelled publicly verified until an on-chain transaction proof is attached.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[26px] border border-cyan-300/14 bg-cyan-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200/68">Archive rule</div>
              <div className="mt-2 text-lg font-black">No proof, no “paid” badge.</div>
            </div>
            <div className="rounded-[26px] border border-emerald-300/14 bg-emerald-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200/68">Fair-play rule</div>
              <div className="mt-2 text-lg font-black">Final review before payout.</div>
            </div>
            <div className="rounded-[26px] border border-fuchsia-300/14 bg-fuchsia-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-200/68">Next improvement</div>
              <div className="mt-2 text-lg font-black">Attach Solana transaction proofs.</div>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {RACE_HISTORY.map((race) => (
              <section key={race.raceId} className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] backdrop-blur-xl">
                <div className="flex flex-col gap-4 border-b border-white/9 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Weekly race</div>
                    <h2 className="mt-2 text-2xl font-black">Ended {formatDate(race.endedAt)} UTC</h2>
                    <div className="mt-2 text-xs text-white/42">Source: {race.sourceLabel}</div>
                  </div>
                  <div className="rounded-full border border-emerald-300/18 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-100">
                    {race.reviewStatus}
                  </div>
                </div>

                <div className="grid gap-3 p-6 lg:grid-cols-3">
                  {race.results.map((result) => (
                    <article key={`${race.raceId}-${result.place}`} className={`rounded-[26px] border p-5 ${placeTone[result.place]}`}>
                      <div className="text-[10px] font-black uppercase tracking-[0.18em] opacity-65">Place #{result.place}</div>
                      <div className="mt-2 text-xl font-black text-white">{result.player}</div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-[9px] font-black uppercase tracking-[0.13em] text-white/40">Leaderboard $RTA</div>
                          <div className="mt-1 text-sm font-black text-white">{result.rtaEarned}</div>
                        </div>
                        <div>
                          <div className="text-[9px] font-black uppercase tracking-[0.13em] text-white/40">Prize</div>
                          <div className="mt-1 text-sm font-black text-white">{result.solPrize}</div>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-white/54">
                        <strong className="text-white/76">Payout proof:</strong>{" "}
                        {result.payoutProofUrl ? (
                          <a
                            href={result.payoutProofUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-emerald-200 underline underline-offset-4"
                          >
                            Verify transaction
                          </a>
                        ) : (
                          "Not yet attached"
                        )}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="border-t border-white/9 bg-black/15 px-6 py-4 text-xs leading-6 text-white/50">
                  Leaderboard results and payout verification are separate. Each winner receives an individual proof link only when a public transaction reference has been attached and checked.
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-[34px] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.055))] p-6 sm:p-8">
            <h2 className="text-2xl font-black">The new race is already live.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
              Current deadlines, qualifying positions, and live leaderboard data should always be checked inside the product. Historical screenshots and old social posts can become outdated.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={SPIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:brightness-110">
                Open live race
              </a>
              <Link href="/proof" className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white">
                Open Proof Vault
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
