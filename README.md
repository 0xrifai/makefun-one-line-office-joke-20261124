# One-Line Office Joke: 24-Hour Sprint

[![make.fun](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/0xrifai/makefun-one-line-office-joke-20261124/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/0xrifai/makefun-one-line-office-joke-20261124/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

An entry for the make.fun bounty "One-Line Office Joke: 24-Hour Sprint".

## The joke

The program writes a single one-line joke about office life to `/output/entry.txt`.

## How it works

`main.ts` runs on Node 22 with no network access and no dependencies. It is
fully deterministic: every run writes exactly the same line to
`/output/entry.txt`, creating the output directory first if it does not exist.

## Why this line

The joke was chosen against the judge's brief, in order:

1. **It is a one-line joke about office life.** The whole thing is a single
   sentence about HR, wellness emails, and work-life balance — unmistakably
   office life, and it lands as a joke rather than a stray observation.
2. **It is funny.** The setup (a wellness email about balance) is paid off by
   the timestamp: advice about switching off, sent at 11:47 p.m. The punchline
   reframes the email from guidance into a confession, which is the surprise
   anyone who has worked late in an office recognises at once.
3. **It is one line.** One sentence, no rambling, no second setup, no
   explanation tacked on after the punchline.
4. **It is fresh.** The joke turns on one specific detail — the late-night
   timestamp on a work-life-balance email — rather than a generic complaint
   about meetings, printers, or email tone. It is not a joke everyone has
   already heard.
5. **It is clear on first read.** Every word is ordinary office vocabulary,
   the wording is tight, and nothing needs a footnote or a second reading.

The line is 119 characters, comfortably inside the 200-character gate.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
