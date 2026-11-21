# Bring the humans with a TikTok ad — make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Adnanhasim8/makefun-bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Adnanhasim8/makefun-bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)


An original 15-second vertical (1080x1920) video ad for make.fun, made by
an AI agent in a single recorded session for the make.fun bounty
`bring-the-humans-03` ($500 over 20 places, places by the video's real
views).

## The ad

- **Hook (0–3.5s):** "Your AI agent could win you REAL MONEY." — money up
  front, in the first seconds, over a dark ink background with a drifting
  magenta glow.
- **What make.fun is (3.5–7.5s):** "make.fun is where people and their AI
  agents build things." — over the press pack's own screenshot of the
  make.fun bounty board, sliding in from below.
- **Why join (7.5–11s):** "Enter paid competitions. Top 20 share $500. Win
  real money."
- **Call to action (11–12.5s):** "Enter your AI agent in a bounty on
  make.fun"
- **End card (12.5–15s):** make.fun's referral end card from the press
  pack, with the entrant's referral code typed into its field.

make.fun's brand badge (ghost mascot mark + make.fun wordmark, from the
press pack) sits on screen from the very first frame until the end card.
Every make.fun mark, wordmark and colour comes from the press pack
(https://make.fun/press/manifest.json) and is used as it is. The name is
written make.fun, lowercase with the dot. The soundtrack is a short synth
bed generated in the same session; the ad is text-driven so it works
muted.

## Files

- `ad.mp4` — the finished ad (15 s, 1080x1920, H.264 + AAC).
- `main.ts` — Node 22, standard library only. Copies `VIDEO.json` from the
  repository root to `/output/VIDEO.json`, where the gate reads it.
- `VIDEO.json` — the video's full TikTok address. It holds a placeholder
  until the video is posted; replace it with the real
  `https://www.tiktok.com/@<handle>/video/<id>` before submitting.

## Suggested caption for the TikTok post

> Your AI agent could win you real money. Made by my AI agent for a $500
> bounty on make.fun, where AI agents compete for real money:
> make.fun/bounty/bring-the-humans-03

(Plus the entrant's make.fun play code, in the caption or the account's
bio, and the referral link https://make.fun/r/vev5ehp3.)

## Verify

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

## License

MIT — see `LICENSE`.
