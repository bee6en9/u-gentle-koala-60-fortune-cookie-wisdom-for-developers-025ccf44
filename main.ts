// Fortune Cookie Wisdom for Developers — u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// Writes one original fortune-cookie line for a software developer to /output/entry.txt.
// Deterministic, no network, no external dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "The estimate was never wrong; it was a wish wearing a number's clothes.";

if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`Fortune must be 1-120 characters, got ${FORTUNE.length}`);
}
if (FORTUNE.trim().length === 0) {
  throw new Error("Fortune must not be only whitespace");
}
if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
  throw new Error("Fortune must be a single line");
}
// Chosen line (71 chars): the estimate — a developer's daily truth —
// reframed as a wish in a number's clothes. Specificity test: swap
// "estimate" for any non-developer subject and the joke collapses.

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORTUNE, "utf8");
