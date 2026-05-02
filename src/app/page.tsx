import BlogPreview from "./components/blog-preview";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Why from "./components/why";
import Graph from "./components/graph";
import Tokenomics from "./components/tokenomics";
import Footer from "./components/footer";
import HowTo from "./components/howTo";
import Roadmap from "./components/roadmap";
import AboutUs from "./components/aboutus";

const SPIN_TO_WIN_URL = "https://rrota.xyz/spin-to-win";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";

function SpinToWinLiveSection() {
  return (
    <section className="mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(8,18,35,0.94),rgba(14,10,26,0.96))] shadow-[0_0_40px_rgba(34,211,238,0.10),0_0_70px_rgba(168,85,247,0.08)]">
        <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_34%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                Spin-to-Win is Live
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Play the official
                <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  {" "}
                  RROTA Spin-to-Win
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                Spin for RTA rewards, use free spins, unlock bonus spins, power up with Boost Credits,
                and connect directly to the RROTA ecosystem through the live game experience.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SPIN_TO_WIN_URL}
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.20)] transition-all hover:scale-[1.02] hover:brightness-110"
                >
                  Play Now
                </a>

                <a
                  href="#how-to-play"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 text-sm font-bold text-white/85 transition-all hover:border-cyan-300/25 hover:bg-white/10 hover:text-white"
                >
                  How It Works
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Free Spins",
                  "Bonus Spins",
                  "Boost Credits",
                  "Wallet Connect",
                  "Withdraw Rewards",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/60">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  Telegram
                </a>
                <span>•</span>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  X / Twitter
                </a>
                <span>•</span>
                <span>Use Phantom on desktop or open in Phantom on mobile if needed</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-cyan-400/16 bg-[linear-gradient(180deg,rgba(10,24,38,0.95),rgba(7,14,24,0.92))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_28px_rgba(34,211,238,0.08)]">
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/80">
                  Live Gameplay Highlights
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200/80">
                      Reward Loop
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      Free Spins → Bonus Spins → Boost Spins
                    </div>
                  </div>

                  <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/5 px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-fuchsia-200/80">
                      Utility
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      Deposit RTA, buy Boost Credits, withdraw real rewards
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-400/15 bg-amber-400/5 px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200/80">
                      Progression
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      Daily bonus, streaks, jackpot entries, and XP progression
                    </div>
                  </div>
                </div>

                <a
                  href={SPIN_TO_WIN_URL}
                  className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-sm font-black text-white transition-all hover:brightness-110"
                >
                  Enter Spin-to-Win
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative mx-auto w-full overflow-hidden font-inter">
      <Navbar />

      <main className="relative mt-10 w-full">
        <section className="mb-20 w-full">
          <Hero />
        </section>

        <SpinToWinLiveSection />

        <section className="mb-20 w-full">
          <Why />
        </section>

        <section className="mb-20 w-full">
          <Graph />
        </section>

        <section className="mb-20 w-full">
          <Tokenomics />
        </section>

        <BlogPreview />

        <section id="how-to-play" className="mb-20 w-full">
          <HowTo />
        </section>

        <section className="mb-20 w-full">
          <Roadmap />
        </section>

        <section className="my-20 w-full">
          <AboutUs />
        </section>
      </main>

      <Footer />
    </div>
  );
}
