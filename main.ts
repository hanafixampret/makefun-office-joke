import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Our team ships every release late except blame — it arrives early, fully tested, and addressed to me.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
