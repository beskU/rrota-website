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

const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const DEXTOOLS_URL = "https://www.dextools.io/app/token/rrota";
const GECKO_URL =
  "https://www.geckoterminal.com/solana/pools/8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
const AUDIT_URL = "https://freshcoins.io/audit/rrota";

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4"
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

function SpinToWinLiveSection() {
  const featureCards = [
    {
      title: "Daily Bonus",
      text: "Players can return daily, claim bonus energy, and stay connected to the RROTA game loop.",
      tone: "cyan",
    },
    {
      title: "Free Spins",
      text: "A simple entry point for new players before they explore Boost Credits and wallet features.",
      tone: "emerald",
    },
    {
      title: "Boost Credits",
      text: "RTA can be converted into gameplay credits for boosted spins and deeper progression.",
      tone: "fuchsia",
    },
    {
      title: "Phantom Wallet",
      text: "Players can connect Phantom for deposits, withdrawals, and wallet-linked gameplay actions.",
      tone: "amber",
    },
  ];

  const toneClasses: Record<string, string> = {
    cyan: "border-cyan-400/18 bg-cyan-400/7 text-cyan-200",
    emerald: "border-emerald-400/18 bg-emerald-400/7 text-emerald-200",
    fuchsia: "border-fuchsia-400/18 bg-fuchsia-400/7 text-fuchsia-200",
    amber: "border-amber-400/18 bg-amber-400/7 text-amber-200",
  };

  return (
    <section className="relative mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-cyan-400/16 bg-[#050711] shadow-[0_0_70px_rgba(34,211,238,0.10),0_0_120px_rgba(217,70,239,0.07)]">
        <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.17),transparent_34%),radial-gradient(circle_at_50%_70%,rgba(250,204,21,0.07),transparent_32%),linear-gradient(135deg,rgba(8,18,35,0.95),rgba(8,7,18,0.98))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                Official Utility Live
              </div>

              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Spin-to-Win is the first live
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  RROTA utility experience.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                RROTA is moving from a transparent build phase into active utility. The official
                Spin-to-Win app gives users a real place to play, claim bonuses, use Boost Credits,
                connect Phantom, deposit RTA, and withdraw eligible RTA rewards.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_TO_WIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_0_34px_rgba(34,211,238,0.22)] transition-all hover:scale-[1.02] hover:brightness-110"
                >
                  Launch Game
                  <ExternalIcon />
                </a>

                <a
                  href="#how-to-play"
                  className="inline-flex h-13 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white/86 backdrop-blur-xl transition-all hover:border-cyan-300/25 hover:bg-cyan-400/10 hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href={JUPITER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-emerald-400/16 bg-emerald-400/8 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-emerald-100 transition-all hover:border-emerald-300/28 hover:bg-emerald-400/12 hover:text-white"
                >
                  Buy $RTA
                  <ExternalIcon />
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {featureCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-3xl border p-4 backdrop-blur-xl ${toneClasses[card.tone]}`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                      {card.title}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/68">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,24,38,0.96),rgba(7,10,20,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(34,211,238,0.10)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(217,70,239,0.14),transparent_38%)]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
                        Game Status
                      </div>
                      <div className="mt-1 text-xl font-black text-white">
                        RROTA Spin-to-Win
                      </div>
                    </div>

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                      Live
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Access", "Email, Google, and wallet login support"],
                      ["Gameplay", "Daily bonus, free spins, boost spins"],
                      ["Wallet", "Phantom connect, deposit, withdraw flow"],
                      ["Economy", "RTA Balance and Boost Credits separated"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                          {label}
                        </div>
                        <div className="mt-1 text-sm font-bold text-white/88">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-400/16 bg-amber-400/7 px-4 py-3">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-200/80">
                      Mobile wallet note
                    </div>
                    <p className="mt-1 text-xs leading-5 text-white/66">
                      If Phantom is not detected on mobile, open the game inside the Phantom app
                      browser. Email login remains the most reliable mobile login path.
                    </p>
                  </div>

                  <a
                    href={SPIN_TO_WIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/25 to-fuchsia-500/25 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:brightness-110"
                  >
                    Enter spin.rrota.xyz
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-cyan-400/14 bg-cyan-400/7 p-4 text-cyan-100 transition-all hover:bg-cyan-400/10"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200/70">
                    Verify
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm font-black text-white">
                    Solscan <ExternalIcon />
                  </div>
                </a>

                <a
                  href={AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-fuchsia-400/14 bg-fuchsia-400/7 p-4 text-fuchsia-100 transition-all hover:bg-fuchsia-400/10"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-200/70">
                    Check
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm font-black text-white">
                    Audit <ExternalIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficialLinksSection() {
  const links = [
    {
      label: "Play Spin-to-Win",
      detail: "Official live game app",
      href: SPIN_TO_WIN_URL,
      tone: "cyan",
    },
    {
      label: "Buy on Jupiter",
      detail: "Trade $RTA safely",
      href: JUPITER_URL,
      tone: "emerald",
    },
    {
      label: "Verify on Solscan",
      detail: "Official token contract",
      href: SOLSCAN_URL,
      tone: "fuchsia",
    },
    {
      label: "GeckoTerminal",
      detail: "Pool and chart data",
      href: GECKO_URL,
      tone: "amber",
    },
    {
      label: "DEXTools",
      detail: "Market chart",
      href: DEXTOOLS_URL,
      tone: "cyan",
    },
    {
      label: "Telegram",
      detail: "Official community",
      href: TELEGRAM_URL,
      tone: "emerald",
    },
    {
      label: "X / Twitter",
      detail: "Official updates",
      href: X_URL,
      tone: "fuchsia",
    },
    {
      label: "Audit",
      detail: "FreshCoins verification",
      href: AUDIT_URL,
      tone: "amber",
    },
  ];

  const toneClasses: Record<string, string> = {
    cyan: "hover:border-cyan-300/28 hover:bg-cyan-400/8",
    emerald: "hover:border-emerald-300/28 hover:bg-emerald-400/8",
    fuchsia: "hover:border-fuchsia-300/28 hover:bg-fuchsia-400/8",
    amber: "hover:border-amber-300/28 hover:bg-amber-400/8",
  };

  return (
    <section className="mb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_45px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-7">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/70">
              Official Link Lockbox
            </div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Verify before you click.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-white/56">
            Use only official RROTA links. Always verify the token contract before trading,
            connecting wallets, or opening third-party tools.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-3xl border border-white/10 bg-[#070A12]/70 p-4 transition-all ${toneClasses[link.tone]}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-black text-white">{link.label}</div>
                  <div className="mt-1 text-xs text-white/46">{link.detail}</div>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/14 bg-cyan-400/8 text-cyan-200 transition-all group-hover:scale-105">
                  <ExternalIcon />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-400/14 bg-cyan-400/6 px-4 py-3">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/70">
            Official Contract
          </div>
          <div className="mt-2 break-all font-mono text-xs font-semibold text-white/78 sm:text-sm">
            {TOKEN_ADDRESS}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative mx-auto w-full overflow-hidden bg-[#050711] font-inter text-white">
      <Navbar />

      <main className="relative w-full">
        <Hero />

        <SpinToWinLiveSection />

        <section id="how-to-play" className="mb-20 w-full">
          <HowTo />
        </section>

        <section className="mb-20 w-full">
          <Why />
        </section>

        <section className="mb-20 w-full">
          <Graph />
        </section>

        <section className="mb-20 w-full">
          <Tokenomics />
        </section>

        <OfficialLinksSection />

        <BlogPreview />

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
