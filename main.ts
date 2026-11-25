// One Word From Grandma — entry program.
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt:
// the single word a grandma would text about AI.
//
// Chosen word: "Chatterbox"
//   A real word grandmas actually use for a talkative soul, applied
//   affectionately to the chatbot. Warm, a little baffled, funny in
//   one word, and the "chat" in it ties it straight to a chatbot.
//
// Node 22+, standard library only. Deterministic: the same word is
// written on every run. No network, no environment secrets, reads
// nothing outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Chatterbox";

// Gate validation: the entry must be exactly one word — a single
// token of 1 to 30 characters, no spaces, no punctuation tricks.
// Refuse to write anything that would fail the competition gate.
const SINGLE_WORD = /^[A-Za-z][A-Za-z]*$/;
if (!SINGLE_WORD.test(WORD) || WORD.length < 1 || WORD.length > 30) {
  console.error(`Invalid entry word: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

// Empty or whitespace-only env var falls back to the sandbox default,
// so `MAKEFUN_OUTPUT_DIR=` behaves the same as it being unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, WORD + "\n", "utf8");

console.log(`Wrote ${WORD.length}-character word ${JSON.stringify(WORD)} to ${outPath}`);
