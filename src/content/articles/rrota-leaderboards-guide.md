---
title: "RROTA Leaderboards Explained: Weekly, Monthly, Yearly and All-Time"
description: "Understand the current RROTA Spin-to-Win ranking logic, leaderboard periods, September 2026 Monthly/Yearly clarification, winner review, payouts, and past-winner verification."
date: "2026-09-16"
author: "RROTA Research"
tags: ["RROTA leaderboards", "Spin-to-Win", "Solana gaming", "RROTA rewards", "RROTA player guide"]
coverImage: "/articles/rrota-leaderboards-guide.webp"
---

# RROTA Leaderboards Explained: Weekly, Monthly, Yearly and All-Time

RROTA Spin-to-Win uses four leaderboard views:

- **Weekly**
- **Monthly**
- **Yearly**
- **All-Time**

These boards are designed to show performance across different time windows. The current production implementation ranks period leaderboards primarily by the amount of **RTA won from spin records inside the selected leaderboard period**.

For the complete player-help page, see the [RROTA Player Guide](/player-guide).

> **September 2026 clarification:** a production review found that the live Monthly and Yearly boards currently use the same historical start reference. This can make their totals and rankings appear identical. Weekly uses separate rolling race logic. A Spin product update is being prepared to separate Monthly and Yearly into their intended competition windows.

---

## How RROTA Leaderboard Ranking Works

For Weekly, Monthly, and Yearly period boards, the current server calculates player performance from game-session records inside the applicable period.

The primary ranking value is:

**Total RTA won from spins during the leaderboard period**

If players have the same total, the current server uses these tie-breakers in order:

1. **Player level**
2. **Best single win**
3. **Total spins**

The leaderboard also calculates supporting statistics such as spin count, best win, win rate, and jackpot hits.

This means the number displayed beside a player is not a separate hidden points formula. It reflects RTA won during the period used by that board.

---

## Weekly Leaderboard

The Weekly board uses a rolling seven-day window.

The current RROTA schedule is anchored to **Saturday at 16:00 UTC**. When a weekly window closes, the next weekly window begins.

This creates regular short races with fresh competition.

A Weekly reset does not delete the underlying player account, deposits, balance, lifetime statistics, or historical spin records. It only changes which spin records are included in the current Weekly ranking calculation.

Current prizes, qualifying positions, and eligibility should always be checked inside the live game or an official RROTA announcement.

---

## Monthly Leaderboard

The Monthly board is intended to represent a month-long competition period.

However, the September 2026 production review found that the live Monthly configuration currently uses the same historical start reference as the Yearly board.

Because both boards can read from the same starting point, their totals and rankings can match.

This is a configuration/design issue being corrected in the Spin product. Until the update is deployed, treat matching Monthly and Yearly totals as **provisional** rather than as proof that both competitions are intentionally identical.

The intended direction is for Monthly to have its own clear start and end window.

---

## Yearly Leaderboard

The Yearly board is intended to represent the longer 2026 championship season.

It should remain separate from the shorter Monthly period.

As noted above, the current live Monthly and Yearly boards share the same historical start reference, so they can currently produce identical totals. The planned Spin update will separate these periods and enforce clear period boundaries.

---

## All-Time Leaderboard

The All-Time board is the lifetime activity view.

Unlike Weekly, Monthly, and Yearly period boards, All-Time uses lifetime game statistics rather than a short competition start date.

An All-Time position does not automatically mean that a specific reward exists. Rewards apply only when an official campaign or live product interface clearly publishes them.

---

## Can the Same Spin Count in More Than One Board?

Yes.

A spin can occur inside several active time windows at the same time. For example, one spin can belong to:

- the current Weekly window,
- the current Monthly period,
- the current Yearly season,
- and lifetime All-Time statistics.

That overlap is normal. What should be different is the **start and end boundary** for each competition period.

---

## What Happens When a Weekly Race Ends?

A displayed race-close position should not be confused with automatic payment.

The expected competition workflow is:

1. The race closes.
2. The race-close standings are captured.
3. Accounts and qualifying activity can be reviewed.
4. Fair-play and eligibility checks are completed.
5. Official winners are confirmed.
6. Competition payouts are processed.
7. Public transaction proof can be attached to the race archive.

The current live game calculates leaderboard standings, but it does **not** contain an automatic SOL payout engine for the Weekly leaderboard prizes.

That is why RROTA separates the race result from the public payout-proof status on the [Past Winners and Race Results page](/rewards).

---

## How Are Winners' Wallets Handled?

The current Spin product can store a player's Solana wallet address for product functions such as deposits and RTA withdrawals.

The next Spin update should strengthen this for competition payouts by adding cryptographic wallet-ownership verification.

Until that is deployed, players should not assume that simply connecting a wallet means a SOL leaderboard prize will automatically be sent to that address.

RROTA support never needs a seed phrase or private key to verify a reward.

---

## Where Can I See Past Winners?

Use the official [RROTA Race Results archive](/rewards).

The archive records published race-close standings and prize allocations.

It deliberately keeps these two facts separate:

- **The player finished in a winning position**
- **A public payout transaction has been attached and verified**

If a public transaction link has not been attached, the website does not label the payout as publicly verified.

A missing public proof link does not by itself prove that a private or manual payment did not occur. It only means the public archive does not yet contain independently verifiable transaction evidence.

---

## How Long Does a Leaderboard Payout Take?

RROTA has not published a fixed payout-time guarantee on the Player Guide.

Race review can depend on eligibility checks, wallet confirmation, fair-play review, and operational processing.

A specific service target should only be published when it can be met consistently.

Players should follow official RROTA channels and the race archive for payout updates.

---

## RTA Balance, Wallet RTA and Boost Credits Are Different

These values should not be confused.

### Wallet RTA

RTA held in a connected Solana wallet. This is on-chain token balance.

### RTA Balance

An in-game balance credited through Spin-to-Win activity. The current product can use RTA Balance for Boost Credit conversion or eligible RTA withdrawal.

### Boost Credits

Gameplay credits used for Boost Spins.

The current conversion is:

**10 RTA = 1 Boost Credit**

Boost Credits are not the same thing as wallet RTA.

---

## How RTA Deposits Work

The official game deposit flow sends real on-chain RTA to the configured game treasury.

The server then verifies the Solana transaction before credits are added.

The current flow checks that the transaction matches the expected RROTA token, treasury destination, source wallet, amount, and transaction status before it can be credited.

After verification, the deposited RTA is converted to Boost Credits using the current conversion rule.

The live game currently requires at least **100,000 verified deposited RTA** to unlock Boost Spins and also applies a minimum active RTA-value condition for continued Boost gameplay.

Deposits are gameplay funding. They do not guarantee leaderboard position, prizes, profit, or token-price appreciation.

The live Spin FAQ currently states that deposited RTA is not refundable after conversion into Boost Credits.

---

## How RTA Withdrawals Work

The official RTA withdrawal flow is separate from leaderboard SOL prizes.

An eligible player can request an RTA withdrawal from the in-game RTA Balance to the saved Solana wallet.

The current minimum RTA withdrawal is **5,000,000 RTA**.

A Weekly SOL competition prize is a different reward flow handled after leaderboard review.

---

## Fair-Play Review

RROTA competition rewards remain subject to fair-play and eligibility review.

Review may consider issues such as:

- duplicate or multi-account abuse,
- bots or automated activity,
- exploit usage,
- manipulated referrals,
- invalid wallet or account information,
- campaign-specific rules,
- other activity that undermines fair competition.

Only legitimate activity should qualify for competition rewards.

---

## Player Safety

Use only official RROTA entry points:

- [RROTA website](https://rrota.xyz)
- [Spin-to-Win](https://spin.rrota.xyz)
- [Official links](/links)
- [Proof Vault](/proof)

Never share:

- a seed phrase,
- private key,
- wallet recovery phrase,
- account password,
- authentication code.

A legitimate support process does not require those secrets.

---

## Quick Answers

### Why are my Monthly and Yearly totals the same?

The current live configuration uses the same historical start reference for both boards. The Spin update will separate their intended periods.

### Does Weekly reset my Monthly or Yearly activity?

No. Weekly is a separate rolling period.

### What mainly determines my rank?

Total RTA won from spins inside the selected period, followed by level, best win, and total spins as tie-breakers.

### Where are past winners?

Use [rrota.xyz/rewards](/rewards).

### Are leaderboard prizes paid automatically?

The current live game does not automatically send Weekly SOL leaderboard prizes. Winners are reviewed and competition rewards are processed after review.

### Where can I read the complete player help page?

Open the [RROTA Player Guide](/player-guide).
