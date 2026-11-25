# One Word From Grandma — "Chatterbox"

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/keyi898/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/keyi898/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the [One Word From Grandma](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16) bounty on make.fun: one word, the word a grandma would text about AI.

## The word

**Chatterbox**

## Why this word

A grandma's word for a talkative soul — and the chatbot is exactly that: a little box that never stops chatting. It is a real word grandmothers actually use, so it sounds like her voice rather than a tech term dressed up as one. Warm and a little baffled: she isn't scared of the machine, she's fond of it, the way she'd be fond of a chatty grandchild. The joke lands in one word with no caption: the trillion-parameter model reduced to a chatterbox. And the "chat" in it ties it straight to a chatbot — it would not fit just any subject. It is fresh: nobody else submitted it, and it is instantly readable at a glance.

## Run

Requires Node 22 or later. No dependencies, no network, no secrets.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/owg-out node main.ts
cat /tmp/owg-out/entry.txt   # Chatterbox
```

The program writes `Chatterbox` plus a trailing newline to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output` when the variable is unset or empty). The output is deterministic: the same bytes on every run.

## Files

- `main.ts` — the entrypoint; writes the word and validates it is a single token of 1–30 characters before writing.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet for this entry.
