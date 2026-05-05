import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | RROTA Spin-to-Win",
  description:
    "Terms of Service for RROTA Spin-to-Win, a RROTA utility game on Solana.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
            RROTA Spin-to-Win
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/65">
            Last updated: May 5, 2026
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_50px_rgba(28,194,252,0.08)] sm:p-8">
          <div className="space-y-8 text-sm leading-7 text-white/75">
            <section>
              <h2 className="text-xl font-black text-white">1. Agreement</h2>
              <p className="mt-3">
                These Terms of Service govern your access to and use of RROTA
                Spin-to-Win, including the game, website, account features,
                wallet connection tools, deposit and withdrawal features, and
                related services.
              </p>
              <p className="mt-3">
                By using RROTA Spin-to-Win, you agree to these Terms. If you do
                not agree, do not use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                2. Description of the Service
              </h2>
              <p className="mt-3">
                RROTA Spin-to-Win is a utility-focused game connected to the
                RROTA ecosystem on Solana. Users may create accounts, play
                spins, use free spins, use Boost Credits, connect wallets, and
                interact with RROTA token-related features where available.
              </p>
              <p className="mt-3">
                Features may change over time. We may update, modify, pause, or
                discontinue parts of the service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                3. Eligibility
              </h2>
              <p className="mt-3">
                You must be legally allowed to use online games, digital wallets,
                and blockchain services in your jurisdiction. You are
                responsible for complying with your local laws and regulations.
              </p>
              <p className="mt-3">
                You may not use the service if you are prohibited from doing so
                under applicable law or if your use would violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                4. Accounts and Security
              </h2>
              <p className="mt-3">
                You are responsible for maintaining the security of your account,
                email, login method, device, and connected wallet. You must not
                share account access, private keys, seed phrases, or wallet
                recovery information.
              </p>
              <p className="mt-3">
                We are not responsible for losses caused by compromised
                accounts, unsafe devices, phishing, user mistakes, or loss of
                wallet access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                5. Wallets and Blockchain Transactions
              </h2>
              <p className="mt-3">
                When you connect a wallet or approve an on-chain action, you are
                responsible for reviewing the transaction before signing it.
                Blockchain transactions may be irreversible.
              </p>
              <p className="mt-3">
                RROTA Spin-to-Win does not control your wallet, private keys, or
                seed phrase. Never share your seed phrase with anyone.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                6. RTA Balance, Boost Credits, and Rewards
              </h2>
              <p className="mt-3">
                RTA Balance, Boost Credits, free spins, bonus spins, jackpot
                entries, and other game features are part of the RROTA
                Spin-to-Win experience.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Boost Credits are used for gameplay and cannot be withdrawn
                  directly.
                </li>
                <li>
                  Claimable or withdrawable RTA rewards, if available, are
                  subject to game rules, eligibility, security checks, treasury
                  availability, and technical confirmation.
                </li>
                <li>
                  Deposited RTA may be converted into Boost Credits according
                  to the active game rate.
                </li>
                <li>
                  Reward rates, limits, cooldowns, missions, and game economy
                  rules may be adjusted to protect the project and users.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                7. No Investment Advice
              </h2>
              <p className="mt-3">
                RROTA Spin-to-Win is not financial, investment, legal, or tax
                advice. Nothing in the service guarantees profit, token price
                increase, return on investment, liquidity, listing approval, or
                market performance.
              </p>
              <p className="mt-3">
                Digital assets are volatile and risky. You are responsible for
                your own decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                8. No Gambling Guarantee
              </h2>
              <p className="mt-3">
                RROTA Spin-to-Win is designed as a promotional utility and
                gameplay experience for the RROTA ecosystem. You should not use
                the service as a guaranteed income source or investment system.
              </p>
              <p className="mt-3">
                Availability of rewards, withdrawals, events, missions, and
                prize features may be limited, changed, paused, or removed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                9. Fair Use and Prohibited Activity
              </h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>use bots, scripts, automation, exploits, or abuse methods;</li>
                <li>create fake accounts or manipulate rewards;</li>
                <li>attempt to bypass limits, cooldowns, or security checks;</li>
                <li>interfere with the service or other users;</li>
                <li>attempt unauthorized access to systems or data;</li>
                <li>use the service for unlawful activity.</li>
              </ul>
              <p className="mt-3">
                We may suspend, restrict, reset, or remove accounts, balances,
                rewards, or access if abuse, fraud, manipulation, or security
                risk is detected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                10. Deposits and Withdrawals
              </h2>
              <p className="mt-3">
                Deposit and withdrawal features may depend on wallet connection,
                blockchain network status, treasury balance, smart contract or
                token account availability, security checks, and backend
                verification.
              </p>
              <p className="mt-3">
                Withdrawals may be delayed, limited, paused, or rejected if
                required for security, technical, operational, or abuse-prevention
                reasons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                11. Service Availability
              </h2>
              <p className="mt-3">
                We aim to keep the service available, but we do not guarantee
                uninterrupted operation. The service may experience downtime,
                bugs, maintenance, blockchain congestion, RPC issues, wallet
                provider issues, database issues, or other technical problems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                12. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, RROTA Spin-to-Win and
                its operators are not liable for indirect, incidental, special,
                consequential, or punitive damages, including loss of tokens,
                loss of account access, lost profits, lost data, blockchain
                transaction failures, wallet errors, or service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                13. Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms from time to time. Changes will be
                posted on this page with an updated date. Continued use of the
                service after changes means you accept the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">14. Contact</h2>
              <p className="mt-3">
                For questions about these Terms, contact us at:
              </p>
              <p className="mt-2 font-semibold text-cyan-300">
                info@rrota.xyz
              </p>
            </section>

            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-amber-100/90">
              This Terms page is a practical template for launch readiness. It
              should be reviewed by a qualified legal professional before a
              large public launch, paid campaign, or exchange/listing campaign.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
