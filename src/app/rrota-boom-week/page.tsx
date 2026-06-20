import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RROTA Boom Week — 72H Global Spin Race with 6 SOL Rewards",
  description:
    "RROTA Boom Week is a 72-hour global Spin-to-Win race with free entry, a live leaderboard, 6 SOL reward pool, and RTA holder boost.",
  openGraph: {
    title: "RROTA Boom Week Is Live",
    description:
      "Join the 72H Global Spin Race. Free entry, live leaderboard, 6 SOL reward pool, and RTA holder boost.",
    url: "https://rrota.xyz/rrota-boom-week",
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Boom Week Is Live",
    description:
      "72H Global Spin Race with free entry, live leaderboard, 6 SOL reward pool, and RTA holder boost.",
  },
};

export default function RrotaBoomWeekPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/40 via-black to-blue-950/40 p-8 shadow-2xl shadow-cyan-500/10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            RROTA Boom Week
          </p>

          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            🚨 RROTA Boom Week Is Live
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
            A 72-hour Global Spin Race built around the RROTA Spin-to-Win
            experience. Enter for free, spin, climb the live leaderboard, and
            compete for a 6 SOL reward pool.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
              <p className="text-3xl">🎰</p>
              <h3 className="mt-3 font-bold">Free Entry</h3>
              <p className="mt-2 text-sm text-gray-400">
                Start playing and compete in the race.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
              <p className="text-3xl">🏆</p>
              <h3 className="mt-3 font-bold">6 SOL Rewards</h3>
              <p className="mt-2 text-sm text-gray-400">
                Top 3 leaderboard players win.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
              <p className="text-3xl">📊</p>
              <h3 className="mt-3 font-bold">Live Leaderboard</h3>
              <p className="mt-2 text-sm text-gray-400">
                Every spin can change the ranking.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
              <p className="text-3xl">⚡</p>
              <h3 className="mt-3 font-bold">RTA Holder Boost</h3>
              <p className="mt-2 text-sm text-gray-400">
                Holders receive extra race power.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://spin.rrota.xyz"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-black text-black transition hover:bg-cyan-300"
            >
              🎰 Play Now
            </Link>

            <Link
              href="https://spin.rrota.xyz/leaderboard"
              className="rounded-full border border-cyan-400 px-8 py-4 text-center font-black text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              📊 View Leaderboard
            </Link>

            <Link
              href="https://t.me/rrotaOfficial"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-black"
            >
              💬 Join Telegram
            </Link>
          </div>

          <p className="mt-6 text-sm font-semibold text-yellow-300">
            ⏳ Ends: June 25, 2026 — 18:00 UTC
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-black">🏆 6 SOL Reward Pool</h2>

            <div className="mt-6 space-y-4 text-lg">
              <p>🥇 1st Place — 3 SOL</p>
              <p>🥈 2nd Place — 2 SOL</p>
              <p>🥉 3rd Place — 1 SOL</p>
            </div>

            <p className="mt-6 text-gray-400">
              Leaderboard review and fair-play checks will happen after the race
              ends. Final winners will be announced after verification.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-black">⚡ RTA Holder Boost</h2>

            <p className="mt-6 text-gray-300">
              Everyone can join and play for free. RTA holders receive extra race
              power during Boom Week, helping them compete harder on the
              leaderboard.
            </p>

            <p className="mt-4 text-gray-400">
              This connects the RROTA token directly to the Spin-to-Win race
              system through gameplay utility.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black">How to Join</h2>

          <ol className="mt-6 list-decimal space-y-3 pl-6 text-gray-300">
            <li>Open https://spin.rrota.xyz</li>
            <li>Start playing or connect your wallet</li>
            <li>Spin daily</li>
            <li>Climb the live leaderboard</li>
            <li>Compete until the timer ends</li>
          </ol>

          <p className="mt-6 text-cyan-300">
            Every spin can change the leaderboard.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-8">
          <h2 className="text-3xl font-black text-yellow-300">
            Fair-Play Rules
          </h2>

          <p className="mt-6 text-gray-300">
            RROTA Boom Week is built for real players. Botting, multi-account
            abuse, fake referrals, leaderboard manipulation, or suspicious
            activity may lead to disqualification after review.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-950/20 p-8">
          <h2 className="text-3xl font-black">Official Links</h2>

          <div className="mt-6 grid gap-4 text-gray-300 md:grid-cols-2">
            <p>
              Website:{" "}
              <Link href="https://rrota.xyz" className="text-cyan-300">
                https://rrota.xyz
              </Link>
            </p>

            <p>
              Spin-to-Win:{" "}
              <Link href="https://spin.rrota.xyz" className="text-cyan-300">
                https://spin.rrota.xyz
              </Link>
            </p>

            <p>
              Telegram:{" "}
              <Link href="https://t.me/rrotaOfficial" className="text-cyan-300">
                https://t.me/rrotaOfficial
              </Link>
            </p>

            <p>
              X:{" "}
              <Link href="https://x.com/rrotacoin" className="text-cyan-300">
                https://x.com/rrotacoin
              </Link>
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-black/40 p-5">
            <p className="text-sm text-gray-400">Contract Address</p>
            <p className="mt-2 break-all font-mono text-cyan-300">
              3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Important notice: RROTA Boom Week is a game and community race
            event. Nothing on this page is financial advice. Always verify
            official links and make your own decisions.
          </p>
        </div>
      </section>
    </main>
  );
}
