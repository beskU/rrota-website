import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const SOLSCAN_URL = `https://solscan.io/token/${TOKEN_ADDRESS}`;
const JUPITER_URL = `https://jup.ag/tokens/${TOKEN_ADDRESS}`;
const SPIN_URL = "https://spin.rrota.xyz";
const TELEGRAM_URL = "https://t.me/rrotaOfficial";
const X_URL = "https://x.com/rrotacoin";
const GECKO_TERMINAL_URL = "https://www.geckoterminal.com/solana/pools/88tfQXQpH6RZj1s6nfb3TNCH9vt3wDftu7K2RStYjzT9";
const DEXTOOLS_URL = "https://www.dextools.io/app/en/solana/pair-explorer/88tfQXQpH6RZj1s6nfb3TNCH9vt3wDftu7K2RStYjzT9";

export const metadata: Metadata = {
  title: "RROTA Tokenomics — $RTA Supply, Burns, Utility and Verification",
  description:
    "RROTA ($RTA) tokenomics: Solana mint verification, supply transparency, burn notes, utility use cases, official links, and safety checks.",
  keywords: [
    "RROTA tokenomics",
    "RROTA coin",
    "RTA token",
    "RROTA Solana",
    "RROTA supply",
    "RROTA burn",
    "RROTA contract",
    "RROTA Spin-to-Win",
  ],
  alternates: { canonical: `${OFFICIAL_DOMAIN}/tokenomics` },
  openGraph: {
    title: "RROTA Tokenomics — $RTA on Solana",
    description:
      "Review RROTA ($RTA) tokenomics, utility, verification links, burn transparency, and official Solana mint details.",
    url: `${OFFICIAL_DOMAIN}/tokenomics`,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Tokenomics — $RTA on Solana",
    description:
      "Official RROTA tokenomics overview: $RTA utility, Solana mint verification, burn transparency, and safety checks.",
  },
};

const facts = [
  {
    label: "Token Name",
    value: "RROTA",
  },
  {
    label: "Ticker",
    value: "$RTA",
  },
  {
    label: "Blockchain",
    value: "Solana",
  },
  {
    label: "Main Utility",
    value: "RROTA ecosystem access, rewards, games and future tools",
  },
];

const utilityItems = [
  {
    title: "Spin-to-Win Public Beta",
    text: "RROTA Spin-to-Win is the first live utility experience in the ecosystem. It introduces gameplay, user activity, rewards logic, Boost Credits, wallet connection and early community engagement around $RTA.",
  },
  {
    title: "Crypto Gaming Direction",
    text: "RROTA is expanding toward a wider utility stack that includes future game-based experiences such as the planned Crypto Shooter concept and additional reward-focused products.",
  },
  {
    title: "Community Rewards",
    text: "$RTA is designed to support community participation, campaign rewards, future ecosystem incentives and engagement systems built around real user activity.",
  },
  {
    title: "Future Transport Utility",
    text: "The long-term RROTA vision includes public transportation related tools. This part is future-facing and should be treated as roadmap utility, not a finished product.",
  },
];

const verificationLinks = [
  {
    label: "Verify on Solscan",
    href: SOLSCAN_URL,
  },
  {
    label: "Buy on Jupiter",
    href: JUPITER_URL,
  },
  {
    label: "View GeckoTerminal",
    href: GECKO_TERMINAL_URL,
  },
  {
    label: "View DEXTools",
    href: DEXTOOLS_URL,
  },
];

const faqItems = [
  {
    question: "What is RROTA tokenomics?",
    answer:
      "RROTA tokenomics describes how the $RTA token is structured, verified, used inside the ecosystem and connected to current and future utilities such as Spin-to-Win, gaming, rewards and future transport tools.",
  },
  {
    question: "What blockchain is RROTA on?",
    answer:
      "RROTA ($RTA) is on the Solana blockchain. Users should always verify the official mint address before trading or interacting with any token page.",
  },
  {
    question: "What is the official RROTA mint address?",
    answer: TOKEN_ADDRESS,
  },
  {
    question: "Where can I buy RROTA?",
    answer:
      "RROTA can be accessed through the official Jupiter token link. Always confirm the mint address before swapping.",
  },
  {
    question: "Is Spin-to-Win the whole RROTA project?",
    answer:
      "No. Spin-to-Win is the first live utility experience. RROTA is positioned as a wider Solana utility ecosystem with gaming, community rewards and future public transportation tools.",
  },
];

export default function TokenomicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${OFFICIAL_DOMAIN}/tokenomics#webpage`,
        url: `${OFFICIAL_DOMAIN}/tokenomics`,
        name: "RROTA Tokenomics — $RTA Supply, Burns, Utility and Verification",
        description:
          "Official RROTA tokenomics overview for $RTA on Solana, including mint verification, utility, burn transparency and official links.",
        isPartOf: {
          "@type": "WebSite",
          name: "RROTA",
          url: OFFICIAL_DOMAIN,
        },
        about: {
          "@type": "Thing",
          name: "RROTA ($RTA)",
          description: "Utility-first Solana ecosystem token.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${OFFICIAL_DOMAIN}/tokenomics#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="relative w-full text-white pt-[110px] pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 overflow-hidden">
          <div className="relative">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1cc2fc]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative">
              <p className="inline-flex rounded-full border border-[#1cc2fc]/30 bg-[#1cc2fc]/10 px-4 py-2 text-sm font-semibold text-[#7dd9ff]">
                Official $RTA Tokenomics
              </p>

              <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
                RROTA Tokenomics
              </h1>

              <p className="mt-5 text-white/75 leading-8 max-w-[85ch] text-base md:text-lg">
                RROTA ($RTA) is a utility-first Solana ecosystem token focused
                on digital rewards, crypto gaming, community tools and future
                transport-related utility. This page explains the official $RTA
                tokenomics direction, how to verify the token on-chain, how
                burns and supply claims should be checked, and how $RTA connects
                to the wider RROTA ecosystem.
              </p>

              <div className="mt-7 rounded-2xl border border-[#1cc2fc]/20 bg-black/30 p-4 md:p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                  Official Solana Mint
                </p>
                <p className="mt-3 break-all font-mono text-sm md:text-base text-white/90">
                  {TOKEN_ADDRESS}
                </p>
                <p className="mt-3 text-white/60 leading-6">
                  Always compare this mint address before buying, checking a
                  chart, joining a campaign or interacting with any RROTA page.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
                  href={JUPITER_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy on Jupiter
                </a>
                <a
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify on Solscan
                </a>
                <Link
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
                  href="/links"
                >
                  Official Links
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid md:grid-cols-4 gap-4">
          {facts.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/25 p-5"
            >
              <p className="text-sm text-white/45">{item.label}</p>
              <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Supply, Burns and Transparency
            </h2>

            <p className="mt-4 text-white/75 leading-7">
              RROTA tokenomics should always be checked through public Solana
              explorers and official links. In crypto, numbers can be copied,
              edited or misrepresented by fake pages. For that reason, users
              should treat the official mint address and on-chain explorers as
              the source of truth.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-xl font-semibold">Supply Reference</h3>
                <p className="mt-2 text-white/70 leading-7">
                  The visible $RTA supply, holders, token accounts and market
                  data should be verified on Solscan, Jupiter and trusted chart
                  platforms. RROTA avoids relying on hidden numbers or unverifiable
                  claims.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-xl font-semibold">Burn Verification</h3>
                <p className="mt-2 text-white/70 leading-7">
                  RROTA community updates have referenced a 1B+ $RTA burn.
                  Burns are strongest when users can verify them on-chain, so
                  always check burn records, token supply changes and official
                  announcements before trusting any supply claim.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-xl font-semibold">No Blind Trust</h3>
                <p className="mt-2 text-white/70 leading-7">
                  The safest way to review RROTA tokenomics is to start from the
                  official domain, compare the mint address, then open the token
                  directly on Solscan or Jupiter. Avoid links sent through direct
                  messages, fake claim portals or copycat websites.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-[#1cc2fc]/20 bg-[#1cc2fc]/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Verification Checklist</h2>

            <ul className="mt-5 space-y-4 text-white/75 leading-7">
              <li>
                <span className="font-semibold text-white">1.</span> Check that
                the mint address matches the official $RTA address.
              </li>
              <li>
                <span className="font-semibold text-white">2.</span> Use Solscan
                to verify token details and holder data.
              </li>
              <li>
                <span className="font-semibold text-white">3.</span> Use Jupiter
                only through the official token link or by pasting the correct
                mint address.
              </li>
              <li>
                <span className="font-semibold text-white">4.</span> Avoid fake
                airdrops, wallet claim pages and accounts pretending to be the
                RROTA team.
              </li>
              <li>
                <span className="font-semibold text-white">5.</span> Remember:
                the RROTA team never DMs first with private investment offers.
              </li>
            </ul>

            <div className="mt-6 grid gap-3">
              {verificationLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-semibold text-[#7dd9ff] hover:bg-white/10 transition"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            How $RTA Is Used in the RROTA Ecosystem
          </h2>

          <p className="mt-4 text-white/75 leading-7 max-w-[90ch]">
            RROTA is not positioned as a one-page meme token. The project is
            building a wider utility stack around $RTA, starting with live
            gameplay and expanding toward additional digital reward systems,
            gaming products, community tools and future transportation utility.
            Spin-to-Win is the first visible product, but the tokenomics model
            should support the wider ecosystem over time.
          </p>

          <div className="mt-7 grid md:grid-cols-2 gap-4">
            {utilityItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/25 p-5"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70 leading-7">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href={SPIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open Spin-to-Win
            </a>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition"
              href="/roadmap"
            >
              View Roadmap
            </Link>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Official RROTA Sources
            </h2>

            <p className="mt-4 text-white/75 leading-7">
              Use official sources when checking RROTA tokenomics, trading links
              or ecosystem updates. Fake RROTA pages may copy the logo, the name
              or the token symbol, but they cannot replace the official mint
              address and official communication channels.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10 transition"
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="noreferrer"
              >
                Website →
              </a>
              <a
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10 transition"
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Telegram →
              </a>
              <a
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10 transition"
                href={X_URL}
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter →
              </a>
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10 transition"
                href="/links"
              >
                Official Links →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/5 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Safety Notes for $RTA Holders
            </h2>

            <p className="mt-4 text-white/75 leading-7">
              RROTA tokenomics and utility should always be reviewed from
              official sources. Never connect your wallet to unknown claim
              websites, never trust private messages offering special deals, and
              never buy from a token page unless the mint address matches the
              official $RTA mint.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
              <p className="text-white font-semibold">
                RROTA team safety rule:
              </p>
              <p className="mt-2 text-white/70 leading-7">
                The RROTA team never DMs first asking for wallet connection,
                seed phrases, private keys, secret recovery phrases or private
                payments.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            RROTA Tokenomics FAQ
          </h2>

          <div className="mt-6 grid gap-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-white/10 bg-black/25 p-5"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.question}
                </h3>
                <p className="mt-2 text-white/70 leading-7">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#1cc2fc]/20 bg-gradient-to-r from-[#1cc2fc]/15 via-white/5 to-fuchsia-500/15 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Continue Exploring RROTA
          </h2>

          <p className="mt-4 text-white/75 leading-7 max-w-[80ch]">
            After reviewing tokenomics, explore the full RROTA ecosystem,
            roadmap, official links and live Spin-to-Win public beta. Always
            verify the official mint address before trading or interacting with
            any RROTA-related page.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
              href="/"
            >
              RROTA Home
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/roadmap"
            >
              Roadmap
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/blog"
            >
              RROTA Blog
            </Link>
            <a
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition"
              href={SPIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              Spin-to-Win
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
