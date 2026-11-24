import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, one sentence, about office life.
const JOKE =
  "HR sent a wellness email about work-life balance at 11:47 p.m., which felt less like advice and more like a confession.";

// Guard the gate before writing: a single line, 1-200 characters,
// valid UTF-8, and not whitespace-only. The line is a fixed string, so
// this check always passes; it is here to make the contract explicit.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
