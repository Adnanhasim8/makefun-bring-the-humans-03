// bring-the-humans-03 entry: copy VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has
// to do. The entry itself is the video: an original 15-second vertical ad
// for make.fun (ad.mp4 in this repository), posted publicly on TikTok, with
// make.fun's brand badge on screen from its first frame and the press
// pack's referral end card, carrying the entrant's own referral code, at
// its end. VIDEO.json names the video; the house reads its views from
// TikTok. Nothing this program writes about the video is scored.
//
// Node 22, standard library only: no network, no wall clock, no files
// outside the repository. The two runs of an entry write the same bytes:
// the file is copied byte for byte, after a read-only check that it is a
// JSON object with a string url.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

let bytes: Buffer;
try {
  bytes = readFileSync(source);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(bytes.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(target, bytes);
} catch (err) {
  console.error(`VIDEO.json could not be written to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Confirm the copy landed byte for byte; the gate reads this file, so a
// partial or altered write must fail loudly instead of passing silently.
if (!readFileSync(target).equals(bytes)) {
  console.error(`VIDEO.json written to ${OUTPUT_DIR} does not match the source.`);
  process.exit(1);
}
