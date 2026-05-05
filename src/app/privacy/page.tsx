import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RROTA Spin-to-Win",
  description:
    "Privacy Policy for RROTA Spin-to-Win, a RROTA utility game on Solana.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
            RROTA Spin-to-Win
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/65">
            Last updated: May 5, 2026
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_50px_rgba(28,194,252,0.08)] sm:p-8">
          <div className="space-y-8 text-sm leading-7 text-white/75">
            <section>
              <h2 className="text-xl font-black text-white">1. Introduction</h2>
              <p className="mt-3">
                This Privacy Policy explains how RROTA Spin-to-Win collects,
                uses, and protects information when you access or use the
                RROTA Spin-to-Win game, website, account system, wallet
                connection features, and related services.
              </p>
              <p className="mt-3">
                RROTA Spin-to-Win is a utility game connected to the RROTA
                ecosystem on the Solana blockchain. By using the service, you
                agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We may collect the following types of information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold text-white">
                    Account information:
                  </span>{" "}
                  email address, authentication identifiers, and basic profile
                  information provided through login providers such as email,
                  Google, Clerk, or supported wallet login methods.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Wallet information:
                  </span>{" "}
                  public wallet addresses you connect for deposits,
                  withdrawals, or wallet verification. We do not collect your
                  private keys or seed phrase.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Gameplay information:
                  </span>{" "}
                  spins, rewards, bonus activity, boost credits, daily bonus
                  activity, leaderboard activity, balances, and game progress.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Blockchain transaction information:
                  </span>{" "}
                  public Solana transaction signatures, token transfers, and
                  wallet activity related to deposits or withdrawals.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Technical information:
                  </span>{" "}
                  device type, browser type, IP address, logs, error reports,
                  session data, and similar technical data used to keep the
                  service secure and functional.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Cookies and local storage:
                  </span>{" "}
                  information used for authentication, session management,
                  preferences, security, and basic analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                3. How We Use Information
              </h2>
              <p className="mt-3">We use information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>create and manage user accounts;</li>
                <li>operate the RROTA Spin-to-Win game;</li>
                <li>track game progress, rewards, bonuses, and balances;</li>
                <li>process wallet connections, deposits, and withdrawals;</li>
                <li>verify blockchain transactions;</li>
                <li>protect against fraud, abuse, bots, and unauthorized activity;</li>
                <li>improve performance, security, and user experience;</li>
                <li>provide support and respond to user requests;</li>
                <li>comply with legal, security, or operational obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                4. Wallets and Blockchain Data
              </h2>
              <p className="mt-3">
                Blockchain transactions are public. When you deposit or withdraw
                RROTA tokens, public wallet addresses and transaction data may
                be visible on Solana block explorers and other public blockchain
                tools.
              </p>
              <p className="mt-3">
                We never ask for, collect, store, or control your wallet private
                keys, recovery phrase, or seed phrase. You are responsible for
                keeping your wallet credentials safe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                5. Third-Party Services
              </h2>
              <p className="mt-3">
                We may use third-party services to operate the platform,
                including authentication, hosting, database storage, blockchain
                RPC providers, wallet providers, analytics, and security tools.
                These services may process information according to their own
                privacy policies.
              </p>
              <p className="mt-3">
                Examples may include services such as Clerk for authentication,
                Google for Google sign-in, Phantom for wallet interaction,
                Solana infrastructure providers, hosting providers, and database
                providers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                6. Data Sharing
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share
                information only when needed to operate the service, process
                authentication, complete blockchain-related actions, prevent
                fraud or abuse, comply with legal obligations, or protect users
                and the RROTA ecosystem.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                7. Data Security
              </h2>
              <p className="mt-3">
                We use reasonable technical and organizational measures to
                protect account and gameplay data. However, no online service,
                blockchain application, or internet transmission is completely
                secure. Users should protect their accounts, devices, and wallet
                credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                8. Data Retention
              </h2>
              <p className="mt-3">
                We keep information for as long as necessary to provide the
                service, maintain game integrity, prevent abuse, comply with
                obligations, resolve disputes, and enforce our Terms of Service.
                Public blockchain data may remain permanently visible on-chain.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                9. Your Choices
              </h2>
              <p className="mt-3">
                You may choose not to connect a wallet. You may also stop using
                the service at any time. Depending on your location, you may
                have rights to request access, correction, deletion, or
                restriction of certain personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                10. Children
              </h2>
              <p className="mt-3">
                RROTA Spin-to-Win is not intended for children. Users must be
                old enough to use online accounts, wallets, and blockchain
                services under applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">
                11. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated date. Continued use
                of the service after changes means you accept the updated
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white">12. Contact</h2>
              <p className="mt-3">
                For privacy questions or requests, contact us at:
              </p>
              <p className="mt-2 font-semibold text-cyan-300">
                info@rrota.xyz
              </p>
            </section>

            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-amber-100/90">
              This page is a practical policy template for launch readiness. It
              should be reviewed by a qualified legal professional before a
              large public launch or paid promotion campaign.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
