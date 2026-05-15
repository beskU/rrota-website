import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

export const metadata: Metadata = {
  title: "RROTA Risk Disclaimer | $RTA on Solana",
  description:
    "Risk disclaimer for RROTA ($RTA), a Solana-based crypto asset and utility ecosystem. Crypto assets are volatile and involve risk.",
  alternates: {
    canonical: `${BASE_URL}/risk-disclaimer`,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <div className="mt-3 text-sm leading-7 text-white/64 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function RiskDisclaimerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050711] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.14),transparent_30%),linear-gradient(180deg,#050711_0%,#07101d_45%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/12"
        >
          ← Back to RROTA
        </Link>

        <section className="mt-6 rounded-[40px] border border-cyan-400/16 bg-white/[0.035] p-6 shadow-[0_0_70px_rgba(34,211,238,0.10),0_0_120px_rgba(217,70,239,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-amber-300">
            Risk Notice
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            RROTA Risk Disclaimer
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            RROTA ($RTA) is a crypto asset on Solana. Crypto assets are volatile,
            risky, and may lose value. This page explains general risks related
            to using the RROTA website, token, community links, games, and ecosystem
            products.
          </p>

          <div className="mt-8 grid gap-5">
            <Section title="No financial advice">
              <p>
                Nothing on rrota.xyz, the RROTA whitepaper, RROTA social channels,
                RROTA games, or any related ecosystem material is financial,
                investment, legal, tax, or trading advice. Users should make their
                own decisions and consult qualified professionals where needed.
              </p>
            </Section>

            <Section title="Crypto asset risk">
              <p>
                $RTA is a digital asset on Solana. Digital assets can be highly
                volatile. Prices may move quickly, liquidity may change, and users
                may lose part or all of the value they use to buy or interact with
                crypto assets.
              </p>
            </Section>

            <Section title="Wallet and transaction risk">
              <p>
                Users are responsible for their own wallets, private keys, seed
                phrases, transaction approvals, and wallet security. Always verify
                the official contract and links before connecting a wallet or signing
                any transaction.
              </p>

              <p className="mt-3 break-all rounded-2xl border border-cyan-400/14 bg-cyan-400/7 p-4 font-mono text-xs text-white/78">
                Official $RTA mint: {TOKEN_ADDRESS}
              </p>
            </Section>

            <Section title="Game and reward risk">
              <p>
                RROTA Spin-to-Win and future ecosystem products may include game
                features, rewards, withdrawals, deposits, eligibility checks, and
                treasury-based flows. These features may depend on security checks,
                anti-bot protection, treasury availability, network conditions,
                technical updates, and project rules.
              </p>
            </Section>

            <Section title="Third-party platform risk">
              <p>
                RROTA may link to third-party platforms such as wallets, explorers,
                DEX tools, chart platforms, or trading interfaces. RROTA does not
                control third-party platforms and is not responsible for their uptime,
                accuracy, fees, policies, security, or user experience.
              </p>
            </Section>

            <Section title="No guarantee of listing, price, or outcome">
              <p>
                RROTA does not guarantee exchange listings, tracker listings, token
                price performance, market movement, rewards, user growth, or any
                financial outcome. All roadmap items and ecosystem features may change
                based on development, security, compliance, market conditions, and
                project priorities.
              </p>
            </Section>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/links"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-400/16 bg-cyan-400/8 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/12"
            >
              Official Links
            </Link>

            <Link
              href="/whitepaper"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-5 text-sm font-black text-white/80 transition hover:bg-white/[0.08]"
            >
              Whitepaper
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-5 text-sm font-black text-white/80 transition hover:bg-white/[0.08]"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
