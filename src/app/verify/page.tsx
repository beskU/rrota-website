export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/verify`;
const CONTACT_EMAIL = "info@rrota.xyz";

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;

export const metadata: Metadata = {
  title: "Verify RROTA",
  description:
    "Verify the official RROTA website, $RTA Solana mint, Spin-to-Win domains, Telegram bot, community channels, and contact address. Review anti-phishing checks before connecting a wallet.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Verify RROTA",
    description:
      "Confirm official RROTA domains, the $RTA mint, product access, community accounts, and contact information before connecting a wallet or approving a transaction.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify RROTA",
    description:
      "Use the official RROTA verification page before opening a game, token page, bot, community account, or wallet request.",
  },
};

type VerifiedIdentity = {
  category: string;
  title: string;
  value: string;
  description: string;
  href: string;
  external?: boolean;
  tone: string;
  badge: string;
};

const VERIFIED_IDENTITIES: VerifiedIdentity[] = [
  {
    category: "Primary website",
    title: "Official RROTA domain",
    value: "rrota.xyz",
    description:
      "Use this domain for the ecosystem overview, documentation, legal pages, official links, verification, and project information.",
    href: SITE_URL,
    external: true,
    tone: "border-emerald-400/16 bg-emerald-400/[0.045]",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
  {
    category: "Live product",
    title: "Spin-to-Win browser application",
    value: "spin.rrota.xyz",
    description:
      "This is the official browser entry point for the live RROTA Spin-to-Win product and current leaderboard activity.",
    href: SPIN_URL,
    external: true,
    tone: "border-cyan-400/16 bg-cyan-400/[0.045]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    category: "Telegram product",
    title: "Official Spin-to-Win bot",
    value: "@RROTASpin_Bot",
    description:
      "Use this exact Telegram bot username for the official RROTA Spin-to-Win Mini App.",
    href: TELEGRAM_BOT_URL,
    external: true,
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    category: "Community",
    title: "Official Telegram community",
    value: "t.me/rrotaOfficial",
    description:
      "Use the public community for announcements and discussion. Do not send private wallet or account credentials there.",
    href: TELEGRAM_URL,
    external: true,
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  },
  {
    category: "Public updates",
    title: "Official RROTA account on X",
    value: "@rrotacoin",
    description:
      "Follow this account for public project updates and verification posts. Similar names or copied profile pictures are not proof.",
    href: X_URL,
    external: true,
    tone: "border-violet-400/16 bg-violet-400/[0.04]",
    badge:
      "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  {
    category: "Private contact",
    title: "Official email",
    value: CONTACT_EMAIL,
    description:
      "Use this address for formal support, listings, partnerships, security reports, privacy requests, and verification questions.",
    href: `mailto:${CONTACT_EMAIL}`,
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
    badge:
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
  },
];

const VERIFICATION_STEPS = [
  {
    number: "01",
    title: "Read the complete domain",
    text:
      "Check every letter, subdomain, separator, and ending. A copied logo or similar-looking name does not prove that a website is official.",
  },
  {
    number: "02",
    title: "Compare the full $RTA mint",
    text:
      "Use the complete Solana mint instead of relying only on the RROTA name, $RTA ticker, logo, price, or token image.",
  },
  {
    number: "03",
    title: "Start from an official page",
    text:
      "Open products, social accounts, audit references, market tools, and support routes from rrota.xyz or the official links hub.",
  },
  {
    number: "04",
    title: "Review the wallet request",
    text:
      "Confirm that the requested signature or transaction matches the action you intentionally started. Reject unrelated or unexplained requests.",
  },
  {
    number: "05",
    title: "Check current information",
    text:
      "Old banners, screenshots, campaign posts, reward amounts, and countdowns may no longer apply. Use the live product and current announcement.",
  },
  {
    number: "06",
    title: "Stop when details conflict",
    text:
      "Do not continue when a domain, mint, bot username, wallet destination, reward message, or payment request differs from the official source.",
  },
];

const SUSPICIOUS_SIGNALS = [
  {
    title: "Look-alike spelling",
    text:
      "A domain may replace a letter with a number, add a hyphen, use an unexpected subdomain, or imitate rrota.xyz with another ending.",
  },
  {
    title: "Urgent wallet connection",
    text:
      "A page may claim that an airdrop, account, reward, whitelist, withdrawal, or limited-time benefit requires immediate wallet access.",
  },
  {
    title: "Recovery-information request",
    text:
      "A legitimate RROTA product or support route does not need a seed phrase, private key, wallet password, recovery code, or login code.",
  },
  {
    title: "Payment to unlock a result",
    text:
      "Be suspicious of requests to send SOL, RTA, or another asset to unlock a prize, support response, withdrawal, exchange listing, or account.",
  },
  {
    title: "Unverified support account",
    text:
      "Scammers can copy administrator names, profile pictures, bios, logos, and messages. Verify the exact account through the official site.",
  },
  {
    title: "Unexpected transaction details",
    text:
      "Reject a transaction when the destination, token, amount, authority, permission, or action does not match what the interface claimed.",
  },
  {
    title: "Guaranteed profit or reward",
    text:
      "RROTA does not guarantee token-price growth, investment returns, automatic leaderboard rewards, exchange listings, or income.",
  },
  {
    title: "Requests to keep communication secret",
    text:
      "A fake representative may discourage verification, move the conversation to a private account, or create pressure to act before checking.",
  },
];

const LOOKALIKE_EXAMPLES = [
  {
    label: "Official",
    value: "rrota.xyz",
    status: "Use",
    tone:
      "border-emerald-400/18 bg-emerald-400/[0.055] text-emerald-100",
  },
  {
    label: "Known look-alike example",
    value: "rr0ta.xyz",
    status: "Do not use",
    tone: "border-rose-400/18 bg-rose-400/[0.05] text-rose-100",
  },
  {
    label: "Official game",
    value: "spin.rrota.xyz",
    status: "Use",
    tone:
      "border-emerald-400/18 bg-emerald-400/[0.055] text-emerald-100",
  },
  {
    label: "Unexpected copy",
    value: "rrota-claim.example",
    status: "Do not assume",
    tone: "border-amber-400/18 bg-amber-400/[0.05] text-amber-100",
  },
];

const AFTER_FAKE_PAGE = [
  {
    title: "Do not approve anything else",
    text:
      "Close the suspicious page and reject any remaining wallet, login, download, payment, or remote-access request.",
  },
  {
    title: "Review what happened",
    text:
      "Identify whether you only opened the page, connected a wallet, signed a message, approved a transaction, transferred assets, or exposed credentials.",
  },
  {
    title: "Check public activity",
    text:
      "Review the relevant public wallet address and recent transaction signatures through a trusted explorer or wallet interface.",
  },
  {
    title: "Contact the wallet provider",
    text:
      "Use the wallet provider’s official support and security guidance when an approval, signature, transfer, or credential exposure may have occurred.",
  },
  {
    title: "Treat exposed recovery data as compromised",
    text:
      "Never continue using a seed phrase or private key that was entered into an unknown page. Seek official wallet-provider guidance immediately.",
  },
  {
    title: "Report the impersonation",
    text:
      "Send the exact URL, username, screenshots, transaction signature, and other safe evidence to the official RROTA contact address.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is the official RROTA website?",
    answer:
      "The official primary website is https://rrota.xyz. Product and community destinations should be opened through that domain or its official links page.",
  },
  {
    question: "What is the official RROTA token mint?",
    answer: `The official $RTA Solana mint is ${TOKEN_ADDRESS}. Compare the complete mint before using a token page, market interface, or wallet-related application.`,
  },
  {
    question: "Is rr0ta.xyz an official RROTA website?",
    answer:
      "No. rr0ta.xyz uses a zero in place of the letter o and is not the official RROTA domain. The official primary domain is rrota.xyz.",
  },
  {
    question: "Does RROTA support need my seed phrase or private key?",
    answer:
      "No. RROTA support does not need a seed phrase, private key, wallet password, recovery code, or authentication code.",
  },
  {
    question: "Does a leaderboard position guarantee a reward?",
    answer:
      "No. A displayed position may remain subject to campaign rules, account status, qualifying activity, wallet information, fair-play checks, and final eligibility review.",
  },
  {
    question: "Where should I report a fake RROTA page or account?",
    answer: `Send the exact URL, username, screenshots, and safe evidence to ${CONTACT_EMAIL}. Do not include seed phrases, private keys, passwords, or recovery codes.`,
  },
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

function ShieldIcon() {
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
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IdentityCard({
  item,
}: {
  item: VerifiedIdentity;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${item.badge}`}
        >
          {item.category}
        </span>

        {item.external ? (
          <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-200/48 transition group-hover:text-cyan-100" />
        ) : null}
      </div>

      <h3 className="mt-4 text-xl font-black text-white">
        {item.title}
      </h3>

      <div className="mt-2 break-all font-mono text-sm font-bold text-cyan-100">
        {item.value}
      </div>

      <p className="mt-3 flex-1 text-sm leading-7 text-white/56">
        {item.description}
      </p>

      <span className="mt-5 text-sm font-black text-cyan-200 transition group-hover:text-white">
        Open verified destination →
      </span>
    </>
  );

  const className = `group flex h-full flex-col rounded-[28px] border p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 ${item.tone}`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={item.href}
      className={className}
    >
      {content}
    </a>
  );
}

const VERIFY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Verify RROTA",
      description:
        "Official RROTA identity, token, product, channel, and anti-phishing verification information.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "RROTA",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      sameAs: [
        TELEGRAM_URL,
        X_URL,
        SPIN_URL,
        TELEGRAM_BOT_URL,
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
          name: "Verify",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function VerifyPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(VERIFY_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.13),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(244,63,94,0.09),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                <ShieldIcon />
                Official identity verification
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Verify RROTA
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-rose-200 bg-clip-text text-transparent">
                  before connecting or approving.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                Confirm the official domains, $RTA mint, product access,
                Telegram bot, community accounts, and contact address before
                connecting a wallet, approving a transaction, following a claim,
                or responding to support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/28 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Verify $RTA on Solscan
                  <ExternalIcon />
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Open official links
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 text-sm font-black text-white/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Report impersonation
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-rose-400/14 bg-rose-400/[0.035] p-6 shadow-[0_0_65px_rgba(244,63,94,0.08)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-300/72">
                Immediate warning
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                A copied name or logo proves nothing.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/58">
                Fake pages can copy the RROTA brand, token image, posts, admin
                names, and wallet prompts. Verify the exact domain, full mint,
                account username, and requested action together.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                  Official $RTA mint
                </div>

                <code className="mt-2 block break-all font-mono text-xs leading-6 text-white/76">
                  {TOKEN_ADDRESS}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
              Verified RROTA identities
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Match the exact destination.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              These are the primary official identities used by the current
              RROTA website, product, community, public updates, and formal
              support.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {VERIFIED_IDENTITIES.map((item) => (
              <IdentityCard
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-rose-400/14 bg-rose-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                  Look-alike warning
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Small spelling changes can lead to a different site.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Check every character. The known example below replaces the
                  letter “o” with the number “0.”
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {LOOKALIKE_EXAMPLES.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className={`rounded-2xl border p-4 ${item.tone}`}
                  >
                    <div className="text-[9px] font-black uppercase tracking-[0.17em] opacity-60">
                      {item.label}
                    </div>

                    <div className="mt-2 break-all font-mono text-base font-black">
                      {item.value}
                    </div>

                    <div className="mt-3 text-xs font-black uppercase tracking-[0.14em] opacity-70">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                Verification process
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Check identity before taking action.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                Use more than one signal. A safe check combines the official
                domain, mint, source link, wallet request, and current product
                information.
              </p>
            </div>

            <div className="space-y-3">
              {VERIFICATION_STEPS.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 rounded-[24px] border border-cyan-400/12 bg-cyan-400/[0.035] p-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/16 bg-cyan-400/[0.06] font-mono text-xs font-black text-cyan-200">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/56">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
              Suspicious signals
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Stop when a page creates pressure or hides details.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SUSPICIOUS_SIGNALS.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-amber-400/12 bg-amber-400/[0.035] p-5"
              >
                <h3 className="font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/14 bg-cyan-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                  Token verification
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Use the full mint as the token identifier.
                </h2>
              </div>

              <div>
                <code className="block break-all rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6 text-white/76">
                  {TOKEN_ADDRESS}
                </code>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Token names, symbols, logos, prices, and screenshots can be
                  copied. Compare the full Solana mint before reviewing a market
                  page or preparing a transaction.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={SOLSCAN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                  >
                    Verify on Solscan
                    <ExternalIcon />
                  </a>

                  <a
                    href={JUPITER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    Open verified Jupiter route
                    <ExternalIcon />
                  </a>

                  <Link
                    href="/tokenomics"
                    className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    Review token information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-rose-400/14 bg-rose-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                  After a suspicious page
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Respond based on what was exposed or approved.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Opening a page, connecting a wallet, signing a message,
                  approving a transaction, sending assets, and exposing recovery
                  information are different events and may require different
                  action.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {AFTER_FAKE_PAGE.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5"
                  >
                    <h3 className="font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/56">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=RROTA%20Impersonation%20or%20Phishing%20Report`}
              className="mt-7 inline-flex h-11 items-center justify-center rounded-2xl border border-rose-400/18 bg-rose-400/[0.07] px-4 text-sm font-black text-rose-100 transition hover:bg-rose-400/[0.12] hover:text-white"
            >
              Report fake RROTA activity
            </a>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-violet-300/72">
              Verification FAQ
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Common identity and safety questions.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <article
                key={item.question}
                className="rounded-[28px] border border-violet-400/12 bg-violet-400/[0.035] p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(244,63,94,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Begin every RROTA action from a verified source.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Bookmark rrota.xyz, use the official links hub, compare the full
                  mint, and reject any wallet or payment request that does not
                  match the action you deliberately started.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/links"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/24 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Open official links
                </Link>

                <Link
                  href="/risk-disclaimer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Review risks
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
