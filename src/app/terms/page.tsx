import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/terms`;
const LAST_UPDATED = "August 1, 2026";

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const CONTACT_EMAIL = "info@rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Terms of Service",
  description:
    "Terms governing use of the RROTA website, Spin-to-Win, Telegram Mini App, accounts, wallets, Boost Credits, leaderboards, campaigns, rewards, deposits, withdrawals, and related ecosystem services.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Terms of Service",
    description:
      "Review the terms governing RROTA websites, products, accounts, wallets, leaderboards, rewards, and ecosystem services.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Terms of Service",
    description:
      "Terms for the RROTA website, Spin-to-Win, accounts, wallets, Boost Credits, leaderboards, rewards, and related services.",
  },
};

type TermsSectionProps = {
  id: string;
  number: string;
  title: string;
  summary?: string;
  children: React.ReactNode;
};

const contents = [
  ["Agreement and scope", "#agreement"],
  ["Definitions", "#definitions"],
  ["Eligibility", "#eligibility"],
  ["Accounts and security", "#accounts"],
  ["Wallets and blockchain", "#wallets"],
  ["Spin-to-Win services", "#game"],
  ["Balances and Boost Credits", "#balances"],
  ["Leaderboards and rewards", "#leaderboards"],
  ["Fair play", "#fair-play"],
  ["Deposits and withdrawals", "#transactions"],
  ["Third-party services", "#third-parties"],
  ["Information and AI", "#information"],
  ["Intellectual property", "#intellectual-property"],
  ["Privacy", "#privacy"],
  ["Availability and changes", "#availability"],
  ["No professional advice", "#advice"],
  ["Disclaimers", "#disclaimers"],
  ["Liability", "#liability"],
  ["Suspension and termination", "#termination"],
  ["General provisions", "#general"],
  ["Contact and review status", "#contact"],
];

const prohibitedActivities = [
  "Using bots, scripts, automation, macros, emulators, exploits, or other methods intended to create artificial activity.",
  "Creating, controlling, purchasing, or coordinating multiple accounts to manipulate missions, referrals, rankings, bonuses, rewards, or withdrawals.",
  "Attempting to bypass cooldowns, limits, eligibility checks, wallet checks, account review, anti-abuse systems, or technical restrictions.",
  "Providing false, misleading, stolen, or manipulated account, identity, wallet, referral, or transaction information.",
  "Interfering with the Services, servers, APIs, databases, networks, accounts, leaderboards, or other users.",
  "Attempting unauthorized access to systems, data, accounts, private endpoints, administrative functions, or security controls.",
  "Using the Services to distribute malware, phishing links, spam, harassment, impersonation, fraud, or unlawful content.",
  "Selling, transferring, renting, or sharing accounts where such activity could affect eligibility, rewards, security, or fair play.",
  "Using RROTA names, logos, pages, bots, or communications to impersonate RROTA or mislead another person.",
  "Using the Services in violation of applicable law, sanctions, platform rules, or these Terms.",
];

const rewardConditions = [
  "The applicable competition or campaign must be officially published.",
  "The participant must satisfy the rules for the relevant weekly, monthly, yearly, all-time, special, or promotional period.",
  "The account and related activity may be reviewed for automation, duplication, farming, referral manipulation, fraud, or other abuse.",
  "Wallet information, account information, qualifying activity, and requested verification must be complete and accurate.",
  "A displayed leaderboard position remains provisional until the relevant competition closes and any review is completed.",
  "Reward processing may depend on technical availability, treasury availability, network conditions, and operational review.",
  "Taxes, reporting duties, wallet fees, network fees, and local legal obligations remain the responsibility of the recipient.",
];

const serviceExamples = [
  "rrota.xyz and its public pages",
  "spin.rrota.xyz",
  "the official @RROTASpin_Bot Telegram Mini App",
  "RROTA accounts, profiles, missions, referrals, bonuses, leaderboards, and progression systems",
  "wallet connection, deposit, withdrawal, and token-related functionality where available",
  "RROTA AI references, blog content, documentation, official links, and community resources",
  "future RROTA products, campaigns, tools, integrations, and related services that reference these Terms",
];

function ExternalIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
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
      <path d="M21 14v5a2 2 0 0 1-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h5" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function TermsSection({
  id,
  number,
  title,
  summary,
  children,
}: TermsSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="font-mono text-xs font-black text-cyan-300/52">
        {number}
      </div>

      <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h2>

      {summary ? (
        <p className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
          {summary}
        </p>
      ) : null}

      <div className="mt-6 space-y-4 text-sm leading-7 text-white/64 sm:text-base">
        {children}
      </div>
    </section>
  );
}

const TERMS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Terms of Service",
      description:
        "Terms governing access to and use of RROTA websites, products, accounts, wallets, game features, leaderboards, rewards, and related ecosystem services.",
      dateModified: "2026-08-01",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Terms of Service",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(TERMS_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.12),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.09),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                <DocumentIcon />
                RROTA operating terms
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Terms governing
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  the RROTA ecosystem and services.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                These Terms apply to the RROTA website, Spin-to-Win, Telegram
                Mini App, accounts, wallets, Boost Credits, leaderboards,
                campaigns, rewards, deposits, withdrawals, and related services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/risk-disclaimer"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-400/[0.07] px-6 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.12] hover:text-white"
                >
                  Read risk disclaimer
                </Link>

                <Link
                  href="/privacy"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read privacy policy
                </Link>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.09)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Document status
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                    Last updated
                  </div>
                  <div className="mt-1 text-sm font-black text-white">
                    {LAST_UPDATED}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                    Primary scope
                  </div>
                  <div className="mt-1 text-sm font-black text-white">
                    Website + ecosystem products
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                    Contact
                  </div>
                  <div className="mt-1 text-sm font-black text-white">
                    {CONTACT_EMAIL}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-white/46">
                Continued use after an updated version is published may constitute
                acceptance of the revised Terms where permitted by applicable law.
              </p>
            </div>
          </div>
        </section>

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[250px_1fr] lg:px-8">
          <aside className="h-fit rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl lg:sticky lg:top-28">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300/68">
              Contents
            </div>

            <nav className="mt-4 space-y-1.5">
              {contents.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-white/54 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="font-mono text-[10px] text-cyan-300/44">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="space-y-6">
            <div className="rounded-[30px] border border-amber-400/14 bg-amber-400/[0.04] p-6">
              <h2 className="text-xl font-black text-white">
                Read these Terms before using the Services
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                By accessing or using a Service, creating an account, connecting a
                wallet, participating in a campaign, making a deposit, requesting
                a withdrawal, or otherwise interacting with RROTA, you agree to
                these Terms. Do not use the Services if you do not agree.
              </p>
            </div>

            <TermsSection
              id="agreement"
              number="01"
              title="Agreement and scope"
              summary="These Terms form an agreement between the user and the person or entity operating the applicable RROTA Service."
            >
              <p>
                In these Terms, “RROTA,” “we,” “us,” and “our” refer to the
                operator of the applicable RROTA Service. “You” and “user” refer
                to any person accessing or using a Service.
              </p>

              <p>These Terms apply to services including:</p>

              <ul className="space-y-2">
                {serviceExamples.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Additional product, campaign, leaderboard, reward, wallet,
                deposit, withdrawal, or promotion rules may apply. Where a
                specific published rule conflicts with these general Terms, the
                more specific rule applies to that feature unless it states
                otherwise.
              </p>
            </TermsSection>

            <TermsSection
              id="definitions"
              number="02"
              title="Definitions"
            >
              <p>
                <strong className="text-white">“Services”</strong> means the
                websites, applications, bots, accounts, product features,
                campaigns, content, and tools operated or published by RROTA and
                referencing these Terms.
              </p>

              <p>
                <strong className="text-white">“$RTA” or “RTA”</strong> means the
                RROTA Solana token identified by the official mint:
              </p>

              <code className="block break-all rounded-2xl border border-cyan-400/14 bg-cyan-400/[0.045] p-4 font-mono text-xs leading-6 text-white/78">
                {TOKEN_ADDRESS}
              </code>

              <p>
                <strong className="text-white">“Boost Credits”</strong> means
                internal game credits used within supported RROTA product
                features. Boost Credits are not automatically equivalent to
                on-chain RTA, fiat currency, stored value, or a withdrawable
                balance.
              </p>

              <p>
                <strong className="text-white">“Reward”</strong> means a token,
                credit, spin, bonus, prize, eligibility benefit, or other item
                offered under a specific published campaign or product rule.
              </p>

              <p>
                <strong className="text-white">“Leaderboard”</strong> means any
                weekly, monthly, yearly, all-time, special, campaign, or
                promotional ranking displayed by a Service.
              </p>
            </TermsSection>

            <TermsSection
              id="eligibility"
              number="03"
              title="Eligibility and legal compliance"
            >
              <p>
                You must be at least the age of legal majority required to enter
                a binding agreement in your jurisdiction and legally permitted to
                use online games, digital wallets, blockchain services, crypto
                assets, and reward features.
              </p>

              <p>
                You may not use the Services where prohibited by applicable law,
                sanctions, court order, platform restriction, age requirement, or
                another binding rule.
              </p>

              <p>
                You are responsible for determining whether your use, token
                activity, receipt of rewards, deposits, withdrawals, and related
                transactions are lawful and whether tax, reporting, licensing, or
                other obligations apply.
              </p>

              <p>
                We may restrict, refuse, suspend, or terminate access based on
                legal, security, platform, location, age, sanctions, compliance,
                or operational requirements.
              </p>
            </TermsSection>

            <TermsSection
              id="accounts"
              number="04"
              title="Accounts, authentication, and security"
            >
              <p>
                You are responsible for the accuracy of information supplied
                through your account and for maintaining control of your email,
                login method, device, browser session, authentication credentials,
                connected wallet, and recovery methods.
              </p>

              <p>
                You must not share access where doing so could affect security,
                fair play, eligibility, rewards, withdrawals, account ownership,
                or compliance with these Terms.
              </p>

              <p>
                Notify RROTA promptly through the official contact route if you
                reasonably believe an account has been compromised. Notification
                does not guarantee recovery, reversal of transactions, restoration
                of balances, or reinstatement of rewards.
              </p>

              <p>
                RROTA is not responsible for losses caused by compromised
                credentials, unsafe devices, malicious extensions, phishing,
                impersonation, user mistakes, shared access, lost recovery
                information, or unauthorized wallet activity outside RROTA’s
                reasonable control.
              </p>
            </TermsSection>

            <TermsSection
              id="wallets"
              number="05"
              title="Wallets and blockchain transactions"
            >
              <p>
                RROTA does not control your non-custodial wallet, private keys,
                seed phrase, wallet provider, or the Solana network. You must
                review every wallet connection, signature, transaction, approval,
                token, amount, destination, fee, and permission before proceeding.
              </p>

              <p>
                Blockchain transactions may be irreversible. RROTA cannot
                guarantee reversal, recovery, refund, correction, or cancellation
                of an on-chain transaction.
              </p>

              <p>
                Network congestion, RPC problems, wallet-provider issues, token
                account requirements, block production, smart-contract behavior,
                fees, and third-party infrastructure may delay, fail, or alter the
                expected result of an action.
              </p>

              <p>
                Never provide a seed phrase, private key, password, recovery code,
                or login code to RROTA staff, community administrators, support
                accounts, bots, or another person.
              </p>

              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
              >
                Verify $RTA on Solscan
                <ExternalIcon />
              </a>
            </TermsSection>

            <TermsSection
              id="game"
              number="06"
              title="Spin-to-Win and product features"
            >
              <p>
                RROTA Spin-to-Win is an interactive ecosystem product that may
                include spins, cooldowns, free spins, daily bonuses, missions,
                referrals, Boost Credits, profiles, wallet features, leaderboards,
                campaigns, deposits, withdrawals, and reward-related functions.
              </p>

              <p>
                Features, availability, rules, rates, limits, probabilities,
                cooldowns, missions, reward structures, eligibility requirements,
                interfaces, and technical behavior may be changed, paused, reset,
                restricted, or discontinued.
              </p>

              <p>
                The live product interface and current official campaign
                announcement are the primary sources for active feature and race
                information. Old screenshots, posts, banners, messages, or cached
                pages may no longer apply.
              </p>

              <p>
                Spin-to-Win is not represented as guaranteed income, an investment
                product, interest-bearing account, savings product, or promise of
                profit.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                >
                  Open browser game
                  <ExternalIcon />
                </a>

                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/[0.07] px-4 text-sm font-black text-fuchsia-100 transition hover:bg-fuchsia-400/[0.12] hover:text-white"
                >
                  Open Telegram bot
                  <ExternalIcon />
                </a>
              </div>
            </TermsSection>

            <TermsSection
              id="balances"
              number="07"
              title="RTA Balance, Boost Credits, spins, and internal records"
            >
              <p>
                A balance, score, spin, bonus, mission, referral count, Boost
                Credit amount, jackpot entry, leaderboard point, or other value
                displayed by a Service may be an internal product record rather
                than an on-chain asset.
              </p>

              <p>
                Boost Credits are intended for supported gameplay functions and
                cannot be withdrawn directly unless a current official rule
                expressly states otherwise.
              </p>

              <p>
                Where supported, deposited RTA may be converted into Boost Credits
                or another internal game value according to the active rate and
                product rules shown before the transaction. Conversion may be
                irreversible.
              </p>

              <p>
                Internal records may be corrected, adjusted, reset, frozen, or
                removed where reasonably necessary to fix an error, enforce
                campaign rules, prevent abuse, respond to a security incident, or
                maintain product integrity.
              </p>

              <p>
                A displayed internal balance does not guarantee withdrawal,
                redemption, market value, liquidity, transferability, or legal
                ownership of an equivalent amount of on-chain tokens.
              </p>
            </TermsSection>

            <TermsSection
              id="leaderboards"
              number="08"
              title="Leaderboards, campaigns, and rewards"
            >
              <p>
                RROTA may operate weekly, monthly, yearly, all-time, event-based,
                promotional, referral, mission, or other campaigns. Each campaign
                may have separate dates, positions, calculations, qualifying
                activity, limits, review procedures, and rewards.
              </p>

              <p>
                Leaderboard data can be provisional, delayed, corrected, reviewed,
                or reset. A displayed rank does not create an automatic right to a
                reward.
              </p>

              <p>Reward eligibility may require all of the following:</p>

              <ul className="space-y-2">
                {rewardConditions.map((condition) => (
                  <li
                    key={condition}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>

              <p>
                RROTA may withhold, delay, adjust, substitute, cancel, or deny a
                reward where the applicable rules permit, required verification
                is incomplete, suspicious activity is identified, a technical
                error affected the result, or delivery is unlawful or not
                reasonably possible.
              </p>

              <p>
                Reward values, token values, and market values may change between
                announcement, qualification, review, approval, and delivery.
              </p>
            </TermsSection>

            <TermsSection
              id="fair-play"
              number="09"
              title="Fair play and prohibited activity"
            >
              <p>
                You must use the Services honestly and must not interfere with
                fair competition, security, availability, data integrity, or
                another user’s experience.
              </p>

              <p>You agree not to:</p>

              <ul className="space-y-2">
                {prohibitedActivities.map((activity) => (
                  <li
                    key={activity}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>

              <p>
                RROTA may investigate suspicious activity and may suspend,
                restrict, reset, disqualify, reverse internal records, remove
                rewards, deny withdrawals, or terminate access where reasonably
                necessary to enforce these Terms or protect the Services and
                users.
              </p>

              <p>
                RROTA is not required to disclose confidential anti-abuse methods,
                security rules, detection signals, or investigation procedures.
              </p>
            </TermsSection>

            <TermsSection
              id="transactions"
              number="10"
              title="Deposits, conversions, withdrawals, and fees"
            >
              <p>
                Deposit, conversion, and withdrawal features may depend on wallet
                connection, network status, token-account availability, treasury
                availability, account status, minimum or maximum limits, security
                review, backend verification, product rules, and applicable law.
              </p>

              <p>
                A deposit may be final after blockchain confirmation. Where a
                deposit is converted into Boost Credits or another internal value,
                the original on-chain amount may not remain available for direct
                withdrawal.
              </p>

              <p>
                Withdrawal requests may be delayed, limited, paused, rejected, or
                cancelled for technical, security, operational, liquidity,
                compliance, treasury, eligibility, or abuse-prevention reasons.
              </p>

              <p>
                Users are responsible for providing a compatible and accurate
                wallet address. RROTA is not responsible for loss resulting from
                an incorrect address, incompatible account, unsupported token
                account, compromised wallet, or user-approved transaction.
              </p>

              <p>
                Network fees, wallet fees, third-party fees, taxes, or other costs
                may apply and may be deducted or paid separately.
              </p>
            </TermsSection>

            <TermsSection
              id="third-parties"
              number="11"
              title="Third-party services and links"
            >
              <p>
                The Services may link to or depend on independent providers,
                including wallets, Solana infrastructure, Telegram, ChatGPT,
                explorers, market trackers, trading interfaces, hosting services,
                authentication providers, databases, analytics tools, audit
                platforms, and social networks.
              </p>

              <p>
                RROTA does not control third-party availability, security,
                accuracy, fees, policies, content, transaction behavior, account
                restrictions, or service changes.
              </p>

              <p>
                A link does not constitute a guarantee, endorsement, warranty, or
                acceptance of liability for the third party. You must review the
                third party’s terms, privacy practices, risks, and transaction
                details.
              </p>

              <p>
                Third-party service failure may prevent access, login, wallet use,
                game activity, market access, data retrieval, communication, or
                reward processing.
              </p>
            </TermsSection>

            <TermsSection
              id="information"
              number="12"
              title="Information, articles, AI, and changing data"
            >
              <p>
                RROTA pages, articles, documentation, market displays, roadmaps,
                AI responses, announcements, community messages, and educational
                materials are provided for general information.
              </p>

              <p>
                Price, liquidity, supply, holder counts, volume, market
                capitalization, audit-platform displays, race deadlines, reward
                structures, product status, and third-party data may change or be
                incomplete.
              </p>

              <p>
                RROTA AI and other automated tools may produce inaccurate,
                incomplete, outdated, or misunderstood information. Users must
                verify important facts through the official source and should not
                rely on an AI response as financial, legal, tax, technical,
                security, or transaction advice.
              </p>

              <p>
                The current live product, current Terms, current campaign rules,
                current roadmap, and current official announcements may replace
                older content.
              </p>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              number="13"
              title="Intellectual property and permitted use"
            >
              <p>
                RROTA names, logos, designs, interfaces, text, graphics, game
                systems, code, documentation, branding, and original content may
                be protected by intellectual-property and other applicable rights.
              </p>

              <p>
                Subject to these Terms, RROTA grants you a limited, revocable,
                non-exclusive, non-transferable permission to access and use the
                Services for their intended personal or authorized purpose.
              </p>

              <p>
                You may not copy, sell, license, reverse engineer, reproduce,
                scrape, modify, create a misleading derivative service, remove
                notices, impersonate RROTA, or commercially exploit protected
                materials except where expressly permitted or legally allowed.
              </p>

              <p>
                Feedback, suggestions, and voluntary ideas submitted to RROTA may
                be used to improve the Services without creating an obligation to
                compensate or implement the suggestion, subject to applicable
                law.
              </p>
            </TermsSection>

            <TermsSection
              id="privacy"
              number="14"
              title="Privacy and data handling"
            >
              <p>
                Use of the Services may involve account, device, wallet, referral,
                gameplay, mission, leaderboard, security, analytics, support, and
                transaction-related information.
              </p>

              <p>
                The RROTA Privacy Policy explains relevant data-handling
                practices. Third-party services may independently collect and
                process information under their own policies.
              </p>

              <p>
                You must not submit another person’s personal, wallet, account, or
                confidential information without lawful authority.
              </p>

              <Link
                href="/privacy"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Read privacy policy
              </Link>
            </TermsSection>

            <TermsSection
              id="availability"
              number="15"
              title="Service availability, maintenance, and changes"
            >
              <p>
                RROTA does not guarantee uninterrupted, error-free, secure, or
                permanent operation. Services may experience bugs, data errors,
                maintenance, hosting problems, database issues, authentication
                failures, wallet-provider problems, blockchain congestion, RPC
                failures, attacks, or other disruptions.
              </p>

              <p>
                RROTA may add, modify, replace, pause, reset, restrict, migrate, or
                discontinue any Service or feature. This can include products,
                missions, rules, probabilities, balances, credits, leaderboards,
                reward structures, deposits, withdrawals, APIs, accounts, or
                supported platforms.
              </p>

              <p>
                Where reasonably possible, material changes may be communicated
                through the website, product interface, blog, community channels,
                or another official source. Advance notice is not guaranteed,
                especially for security or emergency changes.
              </p>
            </TermsSection>

            <TermsSection
              id="advice"
              number="16"
              title="No financial, investment, legal, or tax advice"
            >
              <p>
                Nothing in the Services, whitepaper, roadmap, articles, AI output,
                community channels, market information, game, rewards, audits, or
                communications is financial, investment, trading, legal, tax,
                accounting, or regulatory advice.
              </p>

              <p>
                RROTA does not evaluate your financial position, jurisdiction,
                goals, risk tolerance, age, tax obligations, legal status, or
                suitability for any crypto asset, wallet, game, transaction, or
                reward feature.
              </p>

              <p>
                No content guarantees token-price appreciation, profit, income,
                liquidity, repayment, exchange listing, tracker approval,
                partnership, product launch, reward, or return on investment.
              </p>
            </TermsSection>

            <TermsSection
              id="disclaimers"
              number="17"
              title="Disclaimers and no warranties"
            >
              <p>
                To the maximum extent permitted by applicable law, the Services
                are provided on an “as is” and “as available” basis without
                warranties of any kind, whether express, implied, statutory, or
                otherwise.
              </p>

              <p>
                RROTA does not warrant that the Services will be uninterrupted,
                secure, accurate, current, complete, compatible, lawful in every
                jurisdiction, free from harmful components, or suitable for a
                particular purpose.
              </p>

              <p>
                Audits, public documentation, revoked authorities, product
                development, official links, community growth, and security
                controls can improve transparency but do not eliminate market,
                liquidity, wallet, product, technical, legal, or third-party risk.
              </p>

              <Link
                href="/risk-disclaimer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-amber-400/14 bg-amber-400/[0.05] px-4 text-sm font-black text-amber-100 transition hover:bg-amber-400/[0.09] hover:text-white"
              >
                Read full risk disclaimer
              </Link>
            </TermsSection>

            <TermsSection
              id="liability"
              number="18"
              title="Limitation of liability and indemnification"
            >
              <p>
                To the maximum extent permitted by applicable law, RROTA and its
                operators, contributors, contractors, service providers, and
                representatives will not be liable for indirect, incidental,
                special, consequential, exemplary, or punitive damages.
              </p>

              <p>
                This includes loss of tokens, funds, opportunity, profit, data,
                account access, wallet access, rewards, ranking, business,
                reputation, or use arising from or related to the Services,
                blockchain activity, third-party services, security incidents,
                downtime, bugs, user error, or these Terms.
              </p>

              <p>
                Nothing in these Terms excludes or limits liability that cannot
                lawfully be excluded or limited.
              </p>

              <p>
                To the extent permitted by law, you agree to indemnify and hold
                harmless RROTA and its operators from claims, losses, liabilities,
                costs, and expenses arising from your unlawful use, violation of
                these Terms, infringement of another person’s rights, fraud,
                abuse, or misuse of the Services.
              </p>
            </TermsSection>

            <TermsSection
              id="termination"
              number="19"
              title="Suspension, restriction, and termination"
            >
              <p>
                RROTA may suspend, restrict, review, reset, or terminate access
                without prior notice where reasonably necessary for security,
                maintenance, legal compliance, fraud prevention, fair play,
                protection of users, enforcement of these Terms, or service
                discontinuation.
              </p>

              <p>
                Suspension or termination may affect accounts, sessions, internal
                balances, Boost Credits, missions, referrals, rankings, rewards,
                deposits, withdrawals, and access to product features.
              </p>

              <p>
                Termination does not require RROTA to reverse completed
                blockchain transactions or restore internal records that were
                removed under the applicable rules.
              </p>

              <p>
                Provisions that by their nature should continue—including
                intellectual-property, disclaimer, risk, liability, dispute,
                record, and enforcement provisions—survive termination where
                permitted by law.
              </p>
            </TermsSection>

            <TermsSection
              id="general"
              number="20"
              title="Changes, severability, waiver, and entire agreement"
            >
              <p>
                RROTA may update these Terms to reflect product, security,
                operational, legal, regulatory, or business changes. The updated
                date will be displayed on this page.
              </p>

              <p>
                Continued use after an update may constitute acceptance where
                permitted by law. Material changes may also be communicated
                through an official RROTA channel.
              </p>

              <p>
                If a provision is found invalid or unenforceable, the remaining
                provisions remain effective to the maximum extent permitted by
                law.
              </p>

              <p>
                Failure to enforce a provision is not a waiver of the right to
                enforce it later.
              </p>

              <p>
                These Terms, together with the Privacy Policy, Risk Disclaimer,
                applicable campaign rules, and other expressly incorporated
                documents, form the agreement governing use of the Services.
              </p>
            </TermsSection>

            <TermsSection
              id="contact"
              number="21"
              title="Contact and legal-review status"
            >
              <p>
                Questions about these Terms can be sent to:
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>

              <div className="rounded-2xl border border-amber-400/14 bg-amber-400/[0.045] p-5">
                <h3 className="font-black text-white">
                  Professional review remains necessary
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  These Terms are an operational draft for the current RROTA
                  ecosystem and should be reviewed by qualified legal counsel
                  before a large public launch, paid campaign, material deposit or
                  withdrawal expansion, regulated-jurisdiction rollout, exchange
                  listing campaign, or other major commercial change.
                </p>
              </div>
            </TermsSection>
          </article>
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Use the current official rules before participating.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Product features, leaderboard periods, campaigns, reward
                  structures, deposit rules, and withdrawal conditions may change
                  after these general Terms are published.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/links"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/22 bg-cyan-400/[0.09] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.15] hover:text-white"
                >
                  Official resource hub
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Contact RROTA
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
