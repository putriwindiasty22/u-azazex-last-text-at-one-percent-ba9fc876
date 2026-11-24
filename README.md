# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![Rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/putriwindiasty22/u-azazex-last-text-at-one-percent-ba9fc876/rank.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![Reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/putriwindiasty22/u-azazex-last-text-at-one-percent-ba9fc876/reward.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)

An entry for the [Last Text at One Percent](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876) bounty on [make.fun](https://make.fun): the funniest final text a dying phone sends at one percent battery, under 200 characters, in the voice of the phone itself.

## The text

> 1%. tell the group chat i died doing what i loved: leaving them on read. tell my charger it was never gonna work out.

## How it works

`main.ts` (Node, no dependencies, no network) writes that single line to `/output/entry.txt`, falling back to `./output/entry.txt` when `/output` is not writable. It validates the line first: non-blank, at most 200 characters, a single line — the entry as written is 117 characters.

The joke is a two-part goodbye: a heroic death ("doing what I loved: leaving them on read") followed by a breakup note to the charger that could never save it. Both halves stay in the phone's own voice, right up to the last percent.

Run it with:

```sh
node main.ts
```

## Referral

Referral code: `j9d1a2d9`
