// One-off image optimizer. Resizes oversized PNGs in public/ to display-appropriate
// dimensions and re-encodes at smart quality. Overwrites the original filenames so
// no component code needs to change.
//
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const PUBLIC = path.resolve("public");

// Spec: for each file, the target max width/height. Aspect preserved automatically.
// Files not listed are left alone.
const plan = [
  // Phone mockups — displayed max ~500px wide, source was 1024x1536
  { file: "findtable-phone.png", maxWidth: 720 },
  { file: "addhotel-phone.png", maxWidth: 720 },
  { file: "findsalad-phone.png", maxWidth: 720 },
  // Hero / full-bleed wallpapers — displayed at viewport width, ~1400px max container
  { file: "hero.png", maxWidth: 1600 },
  { file: "about-hero.png", maxWidth: 1600 },
  { file: "leadership-hero.png", maxWidth: 1600 },
  { file: "solutions.png", maxWidth: 1400 },
  // Logos / small surface images
  { file: "keelcrest-logo.png", maxWidth: 800 },
  { file: "logo.png", maxWidth: 600 },
  { file: "tree.png", maxWidth: 600 },
  // Favicon / apple-touch — square-ish icons
  { file: "favicon.png", maxWidth: 512 },
  { file: "apple-touch-icon.png", maxWidth: 512 },
  // Leader portrait (only the oversized one)
  { file: "leader-01.png", maxWidth: 600 },
];

async function sizeOf(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.size;
  } catch {
    return null;
  }
}

function human(bytes) {
  if (bytes == null) return "-";
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + " MB";
  return (bytes / 1024).toFixed(0) + " KB";
}

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const { file, maxWidth } of plan) {
    const src = path.join(PUBLIC, file);
    const before = await sizeOf(src);
    if (before == null) {
      console.log(`skip ${file} (not found)`);
      continue;
    }

    // Read + resize + re-encode. compressionLevel 9 is lossless but heavier compute.
    const pipeline = sharp(src, { failOn: "none" }).resize({
      width: maxWidth,
      withoutEnlargement: true,
      fit: "inside",
    });

    const buffer = await pipeline
      .png({ compressionLevel: 9, palette: true, quality: 85, effort: 10 })
      .toBuffer();

    await fs.writeFile(src, buffer);
    const after = buffer.length;
    totalBefore += before;
    totalAfter += after;

    console.log(
      `${file.padEnd(24)} ${human(before).padStart(10)} -> ${human(after).padStart(10)}  (${Math.round((1 - after / before) * 100)}% smaller)`
    );
  }

  console.log(
    `\nTotal: ${human(totalBefore)} -> ${human(totalAfter)}  (saved ${human(totalBefore - totalAfter)})`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
