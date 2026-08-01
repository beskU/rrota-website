import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/privacy`;
const LAST_UPDATED = "August 1, 2026";
const CONTACT_EMAIL = "info@rrota.xyz";

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;

export const metadata: Metadata = {
  title: "RROTA Privacy Policy",
  description:
    "Learn how RROTA may collect, use, disclose, retain, and protect account, wallet, gameplay, referral, leaderboard, technical, support, and blockchain-related information.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Privacy Policy",
    description:
      "Privacy information for the RROTA website, Spin-to-Win, Telegram Mini App, accounts, wallets, leaderboards, referrals, support, and related ecosystem services.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Privacy Policy",
    description:
      "Review how RROTA handles account, wallet, gameplay, leaderboard, referral, technical, support, and blockchain-related information.",
  },
};

type PolicySectionProps = {
  id: string;
  number: string;
  title: string;
  summary?: string;
  children: React.ReactNode;
};

const contents = [
  ["Scope and responsibility", "#scope"],
  ["Information collected", "#information"],
  ["Sources of information", "#sources"],
  ["How information is used", "#uses"],
  ["Lawful bases", "#lawful-bases"],
  ["Wallets and blockchain", "#blockchain"],
  ["Cookies and storage", "#cookies"],
  ["Fraud and fair-play review", "#fair-play"],
  ["Sharing and service providers", "#sharing"],
  ["International processing", "#international"],
  ["Retention", "#retention"],
  ["Security", "#security"],
  ["Privacy rights", "#rights"],
  ["User choices", "#choices"],
  ["Children", "#children"],
  ["Third-party services", "#third-parties"],
  ["Changes", "#changes"],
  ["Contact and legal review", "#contact"],
];

const informationCategories = [
  {
    title: "Account and profile information",
    examples: [
      "Email address",
      "Authentication identifiers",
      "Display name or profile information",
      "Account creation and login records",
      "Account status and preferences",
    ],
    purpose:
      "Create accounts, authenticate users, maintain profiles, and protect access.",
    tone: "border-cyan-400/16 bg-cyan-400/[0.04]",
  },
  {
    title: "Wallet and token information",
    examples: [
      "Public Solana wallet addresses",
      "Connected-wallet status",
      "Token-account information",
      "Public balances relevant to a feature",
      "Transaction signatures and public transfers",
    ],
    purpose:
      "Support wallet-linked features, verify transactions, process supported deposits or withdrawals, and review eligibility.",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
  },
  {
    title: "Gameplay and product activity",
    examples: [
      "Spins and cooldowns",
      "Missions and daily bonuses",
      "Boost Credits and internal balances",
      "Player progression and profile activity",
      "Product feature usage",
    ],
    purpose:
      "Operate Spin-to-Win, maintain product state, provide progression, and improve the user experience.",
    tone: "border-emerald-400/16 bg-emerald-400/[0.04]",
  },
  {
    title: "Leaderboard and campaign information",
    examples: [
      "Weekly, monthly, yearly, and all-time scores",
      "Campaign participation",
      "Reward eligibility records",
      "Winner-review information",
      "Reward and withdrawal status",
    ],
    purpose:
      "Calculate rankings, administer campaigns, review eligibility, publish results, and process approved rewards.",
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
  },
  {
    title: "Referral and community activity",
    examples: [
      "Referral codes and inviter relationships",
      "Referral completion records",
      "Campaign source information",
      "Community-support communications",
      "Public interaction submitted to RROTA",
    ],
    purpose:
      "Operate referral features, prevent manipulation, measure campaign activity, and respond to community requests.",
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
  },
  {
    title: "Technical and security information",
    examples: [
      "IP address",
      "Device and browser information",
      "Session and authentication logs",
      "Error and performance logs",
      "Security, abuse, and fraud signals",
    ],
    purpose:
      "Keep Services functional, investigate incidents, prevent abuse, diagnose errors, and secure accounts.",
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
  },
  {
    title: "Support and contact information",
    examples: [
      "Email messages",
      "Support requests",
      "Security reports",
      "Listing or partnership inquiries",
      "Files or evidence voluntarily submitted",
    ],
    purpose:
      "Respond to requests, investigate reports, maintain records, and manage formal communication.",
    tone: "border-rose-400/16 bg-rose-400/[0.035]",
  },
  {
    title: "Website and content activity",
    examples: [
      "Pages viewed",
      "Navigation and referral source",
      "Cookie or local-storage identifiers",
      "Basic analytics events",
      "Language or interface preferences",
    ],
    purpose:
      "Understand website use, preserve preferences, improve content, and diagnose navigation or performance issues.",
    tone: "border-teal-400/16 bg-teal-400/[0.035]",
  },
];

const processingPurposes = [
  "Create, authenticate, secure, and manage accounts.",
  "Operate RROTA websites, Spin-to-Win, Telegram Mini App access, profiles, missions, bonuses, referrals, and progression.",
  "Calculate and display weekly, monthly, yearly, all-time, promotional, and event-based leaderboard activity.",
  "Review reward eligibility, investigate suspicious activity, and administer approved rewards or withdrawals.",
  "Connect public wallets and verify relevant public blockchain activity.",
  "Detect bots, abuse, duplicate accounts, manipulated referrals, exploits, fraud, phishing, and unauthorized access.",
  "Maintain internal balances, Boost Credits, game records, campaign records, and product integrity.",
  "Provide support, answer inquiries, investigate security reports, and maintain formal communications.",
  "Measure performance, diagnose errors, improve user experience, and develop new features.",
  "Comply with legal obligations, enforce the Terms, resolve disputes, and protect users, RROTA, and third parties.",
];

const lawfulBases = [
  {
    title: "Contract and requested services",
    text:
      "Processing may be necessary to create an account, operate requested product features, maintain game state, administer campaigns, or respond to a user request.",
  },
  {
    title: "Legitimate interests",
    text:
      "RROTA may process information to secure Services, prevent fraud and abuse, improve products, maintain records, communicate updates, and protect users where those interests are not overridden by applicable rights.",
  },
  {
    title: "Legal obligations",
    text:
      "Information may be processed or retained where necessary to comply with applicable law, lawful requests, accounting or tax requirements, sanctions, security duties, or dispute obligations.",
  },
  {
    title: "Consent",
    text:
      "Where required, RROTA may rely on consent for optional cookies, marketing communication, or another specific activity. Consent can be withdrawn where applicable.",
  },
];

const serviceProviderCategories = [
  {
    title: "Authentication providers",
    text:
      "Services that support account creation, login, session management, identity tokens, and account security.",
  },
  {
    title: "Hosting and infrastructure providers",
    text:
      "Services used to host websites, applications, APIs, databases, backups, logs, and related infrastructure.",
  },
  {
    title: "Blockchain and wallet infrastructure",
    text:
      "Solana RPC providers, explorers, wallet software, token-account tools, and transaction-related services.",
  },
  {
    title: "Communication platforms",
    text:
      "Email, Telegram, social networks, and support tools used for user communication and community access.",
  },
  {
    title: "Analytics and security providers",
    text:
      "Tools used to measure performance, identify errors, detect abuse, secure sessions, and investigate incidents.",
  },
  {
    title: "Professional and legal recipients",
    text:
      "Lawyers, accountants, auditors, security specialists, authorities, or other advisers where reasonably necessary.",
  },
];

const privacyRights = [
  {
    title: "Access",
    text:
      "Request confirmation of whether certain personal information is processed and obtain a copy where required by law.",
  },
  {
    title: "Correction",
    text:
      "Request correction of inaccurate or incomplete personal information that RROTA controls.",
  },
  {
    title: "Deletion",
    text:
      "Request deletion of eligible personal information, subject to legal, security, fraud-prevention, dispute, and recordkeeping exceptions.",
  },
  {
    title: "Restriction",
    text:
      "Request that certain processing be limited where the right applies.",
  },
  {
    title: "Objection",
    text:
      "Object to processing based on legitimate interests or to direct marketing where applicable.",
  },
  {
    title: "Portability",
    text:
      "Request eligible information in a structured, commonly used, machine-readable format where required.",
  },
  {
    title: "Withdraw consent",
    text:
      "Withdraw consent for future processing where consent is the applicable legal basis.",
  },
  {
    title: "Complaint",
    text:
      "Contact a competent data-protection or privacy authority where applicable.",
  },
];

const userChoices = [
  "Browse many public RROTA pages without creating a game account.",
  "Choose not to connect a wallet where a wallet is optional.",
  "Disconnect a wallet through the wallet provider or applicable interface.",
  "Control cookies or local storage through browser and device settings, subject to essential-function limitations.",
  "Stop using the Services at any time.",
  "Request eligible privacy actions through the official contact address.",
  "Unsubscribe from optional marketing communication where an unsubscribe method is provided.",
];

const retentionFactors = [
  "The period an account remains active",
  "The time needed to provide a requested Service",
  "Leaderboard, campaign, reward, and withdrawal review periods",
  "Security, abuse-prevention, fraud-detection, and dispute needs",
  "Backup, logging, and technical recovery cycles",
  "Legal, tax, accounting, compliance, and recordkeeping obligations",
  "The need to establish, exercise, or defend legal claims",
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

function PrivacyIcon() {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <path d="M12 15v2" />
    </svg>
  );
}

function PolicySection({
  id,
  number,
  title,
  summary,
  children,
}: PolicySectionProps) {
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

const PRIVACY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "RROTA Privacy Policy",
      description:
        "Information about how RROTA may collect, use, disclose, retain, and protect information in connection with its websites, products, accounts, wallets, leaderboards, campaigns, and support services.",
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
          name: "Privacy Policy",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PRIVACY_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.12),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(16,185,129,0.09),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                <PrivacyIcon />
                RROTA privacy information
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                How RROTA handles
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                  account, wallet, and product data.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                This Policy explains information practices for the RROTA website,
                Spin-to-Win, Telegram Mini App, accounts, wallets, missions,
                referrals, leaderboards, campaigns, support, and related ecosystem
                services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/terms"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-cyan-300/22 bg-cyan-400/[0.08] px-6 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                >
                  Read terms
                </Link>

                <Link
                  href="/risk-disclaimer"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read risk disclaimer
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Contact RROTA
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.09)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Policy status
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
                    Privacy contact
                  </div>
                  <div className="mt-1 text-sm font-black text-white">
                    {CONTACT_EMAIL}
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-400/14 bg-emerald-400/[0.045] p-4">
                  <div className="text-[9px] font-black uppercase tracking-[0.17em] text-emerald-200/64">
                    Wallet credentials
                  </div>
                  <div className="mt-1 text-sm font-black text-emerald-100">
                    Never requested or stored
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-white/46">
                RROTA does not need your seed phrase, private key, recovery code,
                or wallet password to provide support or verify an account.
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
            <div className="rounded-[30px] border border-emerald-400/14 bg-emerald-400/[0.04] p-6">
              <h2 className="text-xl font-black text-white">
                Important wallet privacy notice
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Public wallet addresses and blockchain transactions are visible
                on public networks and can remain available permanently. RROTA
                does not collect or control your private keys, seed phrase, or
                wallet recovery information.
              </p>
            </div>

            <PolicySection
              id="scope"
              number="01"
              title="Scope and responsibility"
              summary="This Policy applies to personal information processed through RROTA-operated Services that reference it."
            >
              <p>
                “RROTA,” “we,” “us,” and “our” refer to the operator of the
                applicable RROTA Service. “Services” include rrota.xyz,
                Spin-to-Win, the official Telegram Mini App, user accounts,
                product features, community tools, support channels, campaigns,
                and future services that reference this Policy.
              </p>

              <p>
                Where required by applicable law, RROTA acts as the controller or
                equivalent responsible party for personal information it decides
                how and why to process. Certain third-party services may act as
                processors for RROTA or as independent controllers under their own
                policies.
              </p>

              <p>
                This Policy does not govern an independent third party’s website,
                wallet, blockchain application, market tracker, social platform,
                exchange, authentication system, or other service.
              </p>
            </PolicySection>

            <PolicySection
              id="information"
              number="02"
              title="Information RROTA may collect"
              summary="The categories collected depend on which pages, accounts, wallet features, campaigns, and products a user chooses to access."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {informationCategories.map((category) => (
                  <div
                    key={category.title}
                    className={`rounded-[24px] border p-5 ${category.tone}`}
                  >
                    <h3 className="text-lg font-black text-white">
                      {category.title}
                    </h3>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-white/60">
                      {category.examples.map((example) => (
                        <li
                          key={example}
                          className="flex gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-white/48">
                      {category.purpose}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-rose-400/14 bg-rose-400/[0.035] p-5">
                <h3 className="font-black text-white">
                  Information RROTA does not need
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  Do not provide a wallet seed phrase, private key, recovery code,
                  wallet password, full payment-card details, government identity
                  document, or other highly sensitive information unless a future
                  feature expressly requires lawful verification and provides a
                  specific privacy notice.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="sources"
              number="03"
              title="Sources of information"
            >
              <p>RROTA may receive information:</p>

              <ul className="space-y-2">
                {[
                  "Directly from a user during account creation, product use, wallet connection, support, or communication.",
                  "Automatically from a browser, device, application, server, security system, cookie, or local-storage mechanism.",
                  "From authentication, hosting, database, analytics, wallet, blockchain, communication, or infrastructure providers.",
                  "From the public Solana blockchain and public block explorers.",
                  "From campaign, referral, leaderboard, mission, reward, or transaction activity generated through a Service.",
                  "From public communications, social profiles, or community interactions where a user chooses to contact or mention RROTA.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection
              id="uses"
              number="04"
              title="How RROTA may use information"
            >
              <ul className="space-y-2">
                {processingPurposes.map((purpose) => (
                  <li
                    key={purpose}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>{purpose}</span>
                  </li>
                ))}
              </ul>

              <p>
                RROTA may combine information from different Services where
                reasonably necessary for account security, product operation,
                campaign administration, fraud prevention, support, or a
                consistent user experience.
              </p>

              <p>
                RROTA does not use seed phrases or private keys because those
                credentials are not collected.
              </p>
            </PolicySection>

            <PolicySection
              id="lawful-bases"
              number="05"
              title="Lawful bases for processing"
              summary="Where privacy law requires a lawful basis, the applicable basis depends on the information, purpose, Service, and jurisdiction."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {lawfulBases.map((basis) => (
                  <div
                    key={basis.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5"
                  >
                    <h3 className="font-black text-white">
                      {basis.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {basis.text}
                    </p>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection
              id="blockchain"
              number="06"
              title="Wallets, public blockchains, and on-chain data"
            >
              <p>
                Public blockchain information is different from ordinary private
                database information. A wallet address, token transfer,
                transaction signature, amount, time, and related account activity
                may be visible to anyone through Solana infrastructure and block
                explorers.
              </p>

              <p>
                RROTA may associate a public wallet address with an account,
                deposit, withdrawal, eligibility review, reward, campaign, or
                support request where necessary to provide a feature.
              </p>

              <p>
                RROTA generally cannot delete, modify, hide, or reverse information
                already recorded on a public blockchain. Closing an account or
                submitting a deletion request does not remove public blockchain
                records.
              </p>

              <p>
                Wallet addresses can become linked to a person through other
                activity. Users should consider the privacy implications before
                using the same wallet across multiple applications.
              </p>

              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
              >
                View the official token on Solscan
                <ExternalIcon />
              </a>
            </PolicySection>

            <PolicySection
              id="cookies"
              number="07"
              title="Cookies, local storage, and similar technology"
            >
              <p>
                RROTA Services may use cookies, browser storage, session tokens,
                device identifiers, or similar technology for authentication,
                account security, preferences, language, session continuity,
                product state, analytics, performance, and fraud prevention.
              </p>

              <p>
                Some storage may be essential for login, security, or core
                functionality. Blocking essential storage may prevent an account,
                game, wallet-linked feature, or preference from working correctly.
              </p>

              <p>
                Browser and device settings can be used to delete or block many
                cookies and local-storage items. Where legally required, RROTA may
                request consent before using non-essential technologies.
              </p>
            </PolicySection>

            <PolicySection
              id="fair-play"
              number="08"
              title="Fraud prevention, fair play, and automated signals"
            >
              <p>
                RROTA may use technical signals, account patterns, referral data,
                activity timing, device or session information, wallet
                information, transaction records, and gameplay data to detect
                bots, duplicate accounts, farming, manipulation, fraud, abuse, or
                security threats.
              </p>

              <p>
                Automated rules or scoring may help flag activity for restriction
                or review. Where required by law, RROTA will provide applicable
                rights relating to a decision based solely on automated processing
                that produces a legal or similarly significant effect.
              </p>

              <p>
                Suspicious activity may be reviewed manually. RROTA may preserve
                relevant information for security, investigation, dispute,
                enforcement, and fraud-prevention purposes even after an account
                is restricted or closed.
              </p>

              <p>
                RROTA is not required to publish confidential abuse-detection
                logic, security thresholds, investigation methods, or signals that
                could enable circumvention.
              </p>
            </PolicySection>

            <PolicySection
              id="sharing"
              number="09"
              title="Sharing, disclosure, and service providers"
              summary="RROTA does not sell personal information for monetary consideration."
            >
              <p>
                Information may be disclosed where reasonably necessary to
                operate, secure, support, and improve the Services, administer
                campaigns, process requested actions, comply with law, or protect
                rights and safety.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {serviceProviderCategories.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5"
                  >
                    <h3 className="font-black text-white">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {category.text}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Information may also be disclosed in connection with a merger,
                restructuring, financing, acquisition, transfer of assets,
                insolvency, or similar transaction, subject to applicable law and
                appropriate protections.
              </p>

              <p>
                RROTA may disclose information to authorities or other parties
                where reasonably believed necessary to comply with law, respond
                to a valid legal request, investigate fraud or security incidents,
                enforce agreements, or protect users, RROTA, or third parties.
              </p>

              <p>
                Aggregated or de-identified information that does not reasonably
                identify an individual may be used or disclosed for analytics,
                product development, reporting, security, and communication.
              </p>
            </PolicySection>

            <PolicySection
              id="international"
              number="10"
              title="International processing and transfers"
            >
              <p>
                RROTA and its service providers may process information in
                countries other than the user’s location. Those countries may
                have different privacy and data-protection rules.
              </p>

              <p>
                Where required, RROTA may use contractual safeguards, adequacy
                decisions, consent, necessity for providing a requested Service,
                or another legally recognized transfer mechanism.
              </p>

              <p>
                Public blockchain information is distributed across a global
                network and is not limited to one country.
              </p>
            </PolicySection>

            <PolicySection
              id="retention"
              number="11"
              title="Data retention"
            >
              <p>
                RROTA retains information for no longer than reasonably necessary
                for the purposes described in this Policy, subject to applicable
                legal, security, fraud-prevention, operational, and dispute needs.
              </p>

              <p>Retention periods may depend on:</p>

              <ul className="space-y-2">
                {retentionFactors.map((factor) => (
                  <li
                    key={factor}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>

              <p>
                Information may remain in backups for a limited period after it is
                removed from active systems. Public blockchain records may remain
                available permanently and are not controlled by RROTA.
              </p>

              <p>
                RROTA may retain limited records after an account closes where
                necessary to prevent repeat abuse, demonstrate compliance,
                complete a transaction, resolve a dispute, or enforce the Terms.
              </p>
            </PolicySection>

            <PolicySection
              id="security"
              number="12"
              title="Data security"
            >
              <p>
                RROTA uses reasonable technical and organizational measures
                intended to protect information against unauthorized access,
                misuse, loss, alteration, and disclosure.
              </p>

              <p>
                Measures may include access controls, authentication, encrypted
                transport, infrastructure security, logging, backups, monitoring,
                fraud detection, least-privilege practices, and incident review.
                The exact measures may change as Services develop.
              </p>

              <p>
                No internet service, database, blockchain application, wallet,
                authentication system, transmission method, or storage system is
                completely secure. RROTA cannot guarantee absolute security.
              </p>

              <p>
                Users are responsible for securing devices, email accounts,
                authentication methods, browser sessions, wallets, recovery
                information, and transaction approvals.
              </p>
            </PolicySection>

            <PolicySection
              id="rights"
              number="13"
              title="Privacy rights"
              summary="Rights vary by location and may be subject to identity verification, legal exceptions, and limitations."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {privacyRights.map((right) => (
                  <div
                    key={right.title}
                    className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.035] p-5"
                  >
                    <h3 className="font-black text-white">
                      {right.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {right.text}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                RROTA may need enough information to verify identity, account
                ownership, wallet relationship, jurisdiction, and the scope of a
                request. Additional sensitive credentials such as a seed phrase or
                private key will never be required.
              </p>

              <p>
                A request may be denied or limited where permitted by law,
                including where information must be retained for security, fraud
                prevention, legal obligations, disputes, transaction records, or
                the rights of another person.
              </p>

              <p>
                Public blockchain information generally cannot be deleted or
                corrected by RROTA.
              </p>
            </PolicySection>

            <PolicySection
              id="choices"
              number="14"
              title="User choices"
            >
              <ul className="space-y-2">
                {userChoices.map((choice) => (
                  <li
                    key={choice}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{choice}</span>
                  </li>
                ))}
              </ul>

              <p>
                Some choices can limit functionality. For example, refusing
                authentication storage may prevent login, and refusing to connect
                a wallet may prevent wallet-linked features.
              </p>
            </PolicySection>

            <PolicySection
              id="children"
              number="15"
              title="Children and age restrictions"
            >
              <p>
                RROTA Services are not directed to children who are below the age
                required to consent to data processing or enter the applicable
                agreement in their jurisdiction.
              </p>

              <p>
                Users must satisfy the eligibility requirements in the Terms.
                RROTA does not knowingly seek to collect personal information from
                a child in violation of applicable law.
              </p>

              <p>
                A parent, guardian, or other person who believes a child has
                provided information unlawfully should contact RROTA so the matter
                can be reviewed.
              </p>
            </PolicySection>

            <PolicySection
              id="third-parties"
              number="16"
              title="Third-party services and external links"
            >
              <p>
                RROTA may link to independent services such as wallets, Solana
                infrastructure, explorers, market trackers, trading interfaces,
                Telegram, social networks, ChatGPT, authentication providers,
                audit providers, hosting providers, and other applications.
              </p>

              <p>
                Those services may collect information directly and process it
                under their own privacy policies. RROTA does not control their
                cookies, security, retention, data sharing, account rules, or
                international transfers.
              </p>

              <p>
                Users should review the third party’s policy before creating an
                account, connecting a wallet, approving a transaction, or
                submitting information.
              </p>

              <Link
                href="/links"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
              >
                Open official resource hub
              </Link>
            </PolicySection>

            <PolicySection
              id="changes"
              number="17"
              title="Changes to this Privacy Policy"
            >
              <p>
                RROTA may update this Policy to reflect new products, data
                practices, service providers, security measures, legal
                requirements, or operational changes.
              </p>

              <p>
                The updated date will be shown on this page. Material changes may
                also be announced through the website, product interface, blog,
                email, Telegram, or another official channel where appropriate.
              </p>

              <p>
                Continued use after an update may be treated as acknowledgment of
                the revised Policy where permitted by applicable law. Where
                consent is required for a new purpose, RROTA will seek it as
                required.
              </p>
            </PolicySection>

            <PolicySection
              id="contact"
              number="18"
              title="Privacy contact and legal-review status"
            >
              <p>
                Privacy questions and eligible requests can be sent to:
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>

              <p>
                To protect accounts and users, RROTA may request reasonable
                verification before acting on an access, correction, deletion, or
                similar request. Never send a seed phrase, private key, wallet
                password, or recovery code.
              </p>

              <div className="rounded-2xl border border-amber-400/14 bg-amber-400/[0.045] p-5">
                <h3 className="font-black text-white">
                  Professional privacy review remains necessary
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  This Policy is an operational draft for the current RROTA
                  ecosystem and should be reviewed by qualified privacy counsel
                  before a large public launch, paid promotion campaign,
                  substantial expansion of deposits or withdrawals, deployment in
                  additional regulated jurisdictions, or material change in data
                  collection.
                </p>
              </div>
            </PolicySection>
          </article>
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(16,185,129,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Never send wallet recovery information.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  RROTA support may ask for an account identifier, public wallet
                  address, transaction signature, or screenshot relevant to an
                  issue. It will not require a seed phrase, private key, recovery
                  code, or wallet password.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/22 bg-cyan-400/[0.09] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.15] hover:text-white"
                >
                  Contact RROTA
                </Link>

                <Link
                  href="/links"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Verify official links
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
