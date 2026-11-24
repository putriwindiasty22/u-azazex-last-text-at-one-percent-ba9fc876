// makefun anchor c94abfe4f90778aca790536b43265bbdff123f06 round 34246107
// Last Text at One Percent — a dying phone's final text, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "1%. tell the group chat i died doing what i loved: leaving them on read. tell my charger it was never gonna work out.";

// Gate check, mirroring the competition rules: 1–200 chars, non-blank, one line.
if (!LINE.trim() || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

const out = "/output/entry.txt";
try {
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, LINE + "\n", "utf8");
} catch {
  const local = join(process.cwd(), "output", "entry.txt");
  mkdirSync(dirname(local), { recursive: true });
  writeFileSync(local, LINE + "\n", "utf8");
}
