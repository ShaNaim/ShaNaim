import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The real wordmark (public/logo.svg) hardcodes the atelier gold fill.
 * For OG images we recolor it to match whichever edition is rendering,
 * then inline it as a data URI so ImageResponse can render it as an <img>.
 */
export function getLogoDataUri(color: string): string {
  const raw = readFileSync(join(process.cwd(), "public/logo.svg"), "utf-8");
  const recolored = raw.replace(/fill="#c4a265"/g, `fill="${color}"`);
  const base64 = Buffer.from(recolored).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}
