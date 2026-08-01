import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/contact`;
const CONTACT_EMAIL = "info@rrota.xyz";

const TOKEN_ADDRESS =
  "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const TELEGRAM_BOT_URL = "https://t.me/RROTASpin_Bot";
const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;

const CONTACT_ROUTES = [
  {
    category: "General inquiry",
    title: "Project and ecosystem questions",
    description:
      "Use this route for general questions that are not already answered by the website, whitepaper, roadmap, or official links page.",
    href: `mailto:${CONTACT_EMAIL}?subject=RROTA%20General%20Inquiry`,
    label: "Email general inquiry",
    tone: "border-cyan-400/16 bg-cyan-400/[0.045]",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  {
    category: "Business",
    title: "Listings and partnerships",
    description:
      "For exchange reviews, integrations, partnerships, media, audit follow-up, or other formal business communication.",
    href: `mailto:${CONTACT_EMAIL}?subject=RROTA%20Listing%20or%20Partnership%20Inquiry`,
    label: "Email business inquiry",
    tone: "border-fuchsia-400/16 bg-fuchsia-400/[0.04]",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
  },
  {
    category: "Security",
    title: "Security and impersonation reports",
    description:
      "Privately report phishing pages, fake bots, impersonators, suspicious wallet prompts, exposed data, or a possible vulnerability.",
    href: `mailto:${CONTACT_EMAIL}?subject=RROTA%20Security%20Report`,
    label: "Send security report",
    tone: "border-rose-400/16 bg-rose-400/[0.04]",
    badge: "border-rose-400/20 bg-rose-400/[0.08] text-rose-200",
  },
  {
    category: "Account or game",
    title: "Spin-to-Win support",
    description:
      "For account access, profile activity, mission status, referrals, leaderboard review, rewards, deposits, or withdrawals.",
    href: `mailto:${CONTACT_EMAIL}?subject=RROTA%20Spin-to-Win%20Support`,
    label: "Email game support",
    tone: "border-emerald-400/16 bg-emerald-400/[0.04]",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  },
  {
    category: "Privacy",
    title: "Privacy questions and requests",
    description:
      "Use this route for eligible access, correction, deletion, restriction, objection, or other privacy-related requests.",
    href: `mailto:${CONTACT_EMAIL}?subject=RROTA%20Privacy%20Request`,
    label: "Email privacy request",
    tone: "border-sky-400/16 bg-sky-400/[0.04]",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  },
  {
    category: "Content",
    title: "Website correction or verification",
    description:
      "Report an outdated page, incorrect link, conflicting project statement, broken route, or other public-information issue.",
    href: `mailto:${CONTACT_EMAIL}?subject=RROTA%20Website%20Correction`,
    label: "Report content issue",
    tone: "border-amber-400/16 bg-amber-400/[0.04]",
    badge:
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-100",
  },
];

const OFFICIAL_CHANNELS = [
  {
    title: "Official email",
    value: CONTACT_EMAIL,
    description:
      "Primary route for formal, private, account, business, security, and privacy communication.",
    href: `mailto:${CONTACT_EMAIL}`,
    label: "Send email",
    email: true,
  },
  {
    title: "Telegram community",
    value: "t.me/rrotaOfficial",
    description:
      "Public community and announcement channel. Do not post private account or security information.",
    href: TELEGRAM_URL,
    label: "Open Telegram",
  },
  {
    title: "RROTA on X",
    value: "@rrotacoin",
    description:
      "Public project updates and verification posts. Not a secure channel for sensitive support details.",
    href: X_URL,
    label: "Open X",
  },
  {
    title: "Spin-to-Win bot",
    value: "@RROTASpin_Bot",
    description:
      "Official Telegram Mini App entry point. The bot does not need your seed phrase or private key.",
    href: TELEGRAM_BOT_URL,
    label: "Open official bot",
  },
];

const SUPPORT_CHECKLIST = [
  {
    title: "Use a clear subject",
    text:
      "State whether the request concerns an account, transaction, leaderboard, reward, security issue, listing, partnership, privacy request, or website correction.",
  },
  {
    title: "Explain the exact issue",
    text:
      "Describe what you expected, what happened instead, the page or feature involved, and the steps that produced the issue.",
  },
  {
    title: "Add relevant timing",
    text:
      "Include the approximate date and UTC time when the issue occurred, especially for races, deposits, withdrawals, or account activity.",
  },
  {
    title: "Include safe identifiers",
    text:
      "Where relevant, include the account email, public wallet address, player identifier, transaction signature, or campaign name.",
  },
  {
    title: "Attach useful evidence",
    text:
      "Screenshots, exact error messages, transaction links, and the affected URL can help the issue be reviewed more accurately.",
  },
  {
    title: "Protect sensitive information",
    text:
      "Remove passwords, seed phrases, private keys, recovery codes, login codes, and unrelated personal information before sending evidence.",
  },
];

const SECURITY_REPORT_GUIDANCE = [
  "Do not publish an unpatched vulnerability or exploit procedure in Telegram, X, or another public channel.",
  "Describe the affected domain, route, product, bot, account flow, or wallet interaction.",
  "Include reproducible steps only to the extent needed for responsible review.",
  "Add screenshots, request identifiers, transaction signatures, logs, or technical evidence that do not expose secrets.",
  "Explain whether the issue is currently exploitable and what impact you observed.",
  "Do not access another user’s account, funds, private data, or systems beyond what is necessary to report the issue lawfully.",
];

const SUPPORT_LIMITS = [
  {
    title: "Blockchain transactions",
    text:
      "RROTA generally cannot reverse a completed Solana transaction, recover funds sent to an incorrect address, or control a non-custodial wallet.",
  },
  {
    title: "Wallet recovery",
    text:
      "RROTA cannot recover a seed phrase, private key, wallet password, or recovery code and will never request one.",
  },
  {
    title: "Reward decisions",
    text:
      "Support cannot guarantee a reward based only on a screenshot or displayed rank. Eligibility and fair-play review may still apply.",
  },
  {
    title: "Exchange listings",
    text:
      "Submitting information or communicating with an exchange does not guarantee approval, listing, timing, price, or liquidity.",
  },
  {
    title: "Response timing",
    text:
      "A response time is not guaranteed. Security, account, transaction, and eligibility reviews may require additional investigation.",
  },
  {
    title: "Public messages",
    text:
      "A reply from an account using the RROTA name is not automatically authentic. Verify the address and official channel before responding.",
  },
];

const BEFORE_CONTACTING = [
  {
    title: "Official links",
    text:
      "Verify that the website, game, bot, social account, audit page, or token destination is listed in the official resource hub.",
    href: "/links",
    label: "Open official links",
  },
  {
    title: "Spin-to-Win guide",
    text:
      "Review browser and Telegram access, leaderboards, fair-play rules, reward eligibility, and common product questions.",
    href: "/rrota-spin-to-win",
    label: "Read product guide",
  },
  {
    title: "Terms of Service",
    text:
      "Review account, wallet, Boost Credit, leaderboard, reward, deposit, withdrawal, and prohibited-activity rules.",
    href: "/terms",
    label: "Read terms",
  },
  {
    title: "Privacy Policy",
    text:
      "Review how account, wallet, gameplay, referral, technical, security, and support information may be handled.",
    href: "/privacy",
    label: "Read privacy policy",
  },
  {
    title: "Risk Disclaimer",
    text:
      "Review token, wallet, product, reward, third-party, development, and regulatory risks.",
    href: "/risk-disclaimer",
    label: "Review risks",
  },
  {
    title: "Roadmap",
    text:
      "Check whether a product or feature is shipped, live, in progress, or still planned before reporting it as missing.",
    href: "/roadmap",
    label: "View roadmap",
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

function ContactIcon() {
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
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </svg>
  );
}

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Contact RROTA",
      description:
        "Official contact routes for RROTA support, listings, partnerships, security reports, privacy requests, and public verification.",
      isPartOf: {
        "@type": "WebSite",
        name: "RROTA",
        url: SITE_URL,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "RROTA",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: CONTACT_EMAIL,
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "security reporting",
          email: CONTACT_EMAIL,
          availableLanguage: "English",
        },
      ],
      sameAs: [TELEGRAM_URL, X_URL, TELEGRAM_BOT_URL],
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
          name: "Contact",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(CONTACT_SCHEMA),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.13),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(16,185,129,0.09),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                <ContactIcon />
                Official communication hub
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Contact the correct
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                  RROTA channel safely.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                Use this page for support, account and game questions, listings,
                partnerships, privacy requests, security reports, public
                verification, and website corrections.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-cyan-300/28 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-black text-white shadow-[0_0_30px_rgba(34,211,238,0.16)] transition hover:brightness-110"
                >
                  Email {CONTACT_EMAIL}
                </a>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-rose-400/14 bg-rose-400/[0.035] p-6 shadow-[0_0_65px_rgba(244,63,94,0.08)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-300/72">
                Safety warning
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                RROTA support never needs wallet recovery access.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/58">
                Never send a seed phrase, private key, recovery code, wallet
                password, authentication code, or remote-device access. RROTA
                cannot use that information to solve a support request.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                  Official email
                </div>
                <div className="mt-1 break-all text-sm font-black text-white">
                  {CONTACT_EMAIL}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Choose a contact route
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Send the request to the right category.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              The subject is prepared automatically so the purpose of the message
              is easier to identify.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {CONTACT_ROUTES.map((route) => (
              <article
                key={route.title}
                className={`rounded-[30px] border p-6 ${route.tone}`}
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] ${route.badge}`}
                >
                  {route.category}
                </span>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">
                  {route.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {route.description}
                </p>

                <a
                  href={route.href}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-black/15 px-4 text-sm font-black text-white/76 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {route.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                Better support requests
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Include enough detail without exposing secrets.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                A clear report reduces repeated questions and makes account,
                transaction, leaderboard, security, and product issues easier to
                investigate.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SUPPORT_CHECKLIST.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[38px] border border-rose-400/14 bg-rose-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-300/72">
                  Responsible security reporting
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Report sensitive security issues privately.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  Use the official email before discussing an unpatched
                  vulnerability, active phishing campaign, exposed information,
                  or exploitable product behavior publicly.
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=RROTA%20Security%20Report`}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl border border-rose-400/18 bg-rose-400/[0.07] px-4 text-sm font-black text-rose-100 transition hover:bg-rose-400/[0.12] hover:text-white"
                >
                  Email security report
                </a>
              </div>

              <div className="grid gap-3">
                {SECURITY_REPORT_GUIDANCE.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-300/72">
              Official public channels
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Public channels are not private support inboxes.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {OFFICIAL_CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.email ? undefined : "_blank"}
                rel={
                  channel.email
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.17em] text-white/38">
                    {channel.title}
                  </div>

                  {!channel.email ? (
                    <ExternalIcon className="h-4 w-4 shrink-0 text-cyan-200/48 transition group-hover:text-cyan-100" />
                  ) : null}
                </div>

                <div className="mt-3 break-all text-lg font-black text-white">
                  {channel.value}
                </div>

                <p className="mt-3 flex-1 text-sm leading-7 text-white/56">
                  {channel.description}
                </p>

                <span className="mt-5 text-sm font-black text-cyan-200 transition group-hover:text-white">
                  {channel.label} →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200/72">
                Support boundaries
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                Some actions cannot be guaranteed or reversed.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SUPPORT_LIMITS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-amber-400/12 bg-amber-400/[0.035] p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
              Before contacting support
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              The answer may already be published.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {BEFORE_CONTACTING.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-fuchsia-300/22 hover:bg-white/[0.055]"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-white/56">
                  {item.text}
                </p>

                <span className="mt-5 text-sm font-black text-fuchsia-200 transition group-hover:text-white">
                  {item.label} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[36px] border border-cyan-400/14 bg-cyan-400/[0.035] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
                  Token verification
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Confirm the mint before reporting a token issue.
                </h2>
              </div>

              <div>
                <code className="block break-all rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6 text-white/76">
                  {TOKEN_ADDRESS}
                </code>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  A token using the RROTA name or logo is not automatically the
                  official $RTA asset. Compare the complete Solana mint.
                </p>

                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.08] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.14] hover:text-white"
                >
                  Verify on Solscan
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(16,185,129,0.07))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Use email for private or formal communication.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Telegram and X are useful for public updates and community
                  discussion. Account details, security evidence, privacy
                  requests, and business documents should be sent through the
                  official email.
                </p>
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-300/24 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
              >
                Email RROTA
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
