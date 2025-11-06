#!/usr/bin/env node
/**
 * Image optimization script for the project.
 *
 * - Scans `public/projects` for images (png, jpg, jpeg).
 * - Generates WebP (and optional AVIF) resized variants into `public/projects/optimized`.
 * - Skips work when an optimized file already exists and is newer than the source.
 * - Usage:
 *    node scripts/optimize-images.js [--quality=80] [--sizes=96,128,256] [--formats=webp,avif] [--dry-run]
 *
 * Notes:
 * - This script requires `sharp` to be installed as a dependency.
 *   Install with: `npm install --save-dev sharp` (or add to package.json).
 * - It intentionally avoids extra dependencies so you can run it in most environments.
 */

import { promises as fs } from "fs";
import path from "path";
import os from "os";

let sharp;

const DEFAULT_SIZES = [96, 128, 256, 512];
const DEFAULT_FORMATS = ["webp"]; // add 'avif' if you want AVIF too (sharp supports it)
const INPUT_DIR = path.join(process.cwd(), "public", "projects");
const OUTPUT_DIR = path.join(INPUT_DIR, "optimized");

function parseArg(name, fallback) {
  const arg = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (!arg) return fallback;
  return arg.split("=")[1];
}

function parseCommaList(argValue, parser = (s) => s) {
  if (!argValue) return null;
  return argValue
    .split(",")
    .map((s) => parser(s.trim()))
    .filter(Boolean);
}

(async function main() {
  const qualityArg = parseArg("quality", null);
  const sizesArg = parseArg("sizes", null);
  const formatsArg = parseArg("formats", null);
  const dryRun = process.argv.includes("--dry-run");

  const quality = qualityArg ? Number(qualityArg) : 80;
  const sizes = sizesArg ? parseCommaList(sizesArg, Number) : DEFAULT_SIZES;
  const formats = formatsArg
    ? parseCommaList(formatsArg, (s) => s.toLowerCase())
    : DEFAULT_FORMATS;

  // load sharp dynamically so this script can be checked/installed without failing at parse time
  try {
    const sharpModule = await import("sharp");
    sharp =
      sharpModule && sharpModule.default ? sharpModule.default : sharpModule;
  } catch {
    console.error(
      "This script requires `sharp`. Install it with `npm install sharp` and try again.",
    );
    process.exit(1);
  }

  // Basic validation
  if (!Array.isArray(sizes) || sizes.some((s) => Number.isNaN(s) || s <= 0)) {
    console.error("Invalid sizes provided. Example: --sizes=96,128,256");
    process.exit(1);
  }
  if (!Array.isArray(formats) || formats.length === 0) {
    console.error("Invalid formats provided. Example: --formats=webp,avif");
    process.exit(1);
  }

  // Ensure input dir exists
  try {
    const stat = await fs.stat(INPUT_DIR);
    if (!stat.isDirectory()) {
      console.error(`${INPUT_DIR} exists but is not a directory.`);
      process.exit(1);
    }
  } catch {
    console.error(`Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const entries = await fs.readdir(INPUT_DIR, { withFileTypes: true });
  const imageFiles = entries
    .filter(
      (e) => e.isFile() && /\.(png|jpe?g|gif|bmp|webp)$/i.test(e.name), // consider common raster images (ignore already optimized folder)
    )
    .map((e) => e.name);

  if (imageFiles.length === 0) {
    console.log("No images found in", INPUT_DIR);
    return;
  }

  console.log(
    `Found ${imageFiles.length} image(s). Generating ${formats.join(", ")} variants for sizes: ${sizes.join(", ")}`,
  );
  if (dryRun) {
    console.log("Dry-run mode: no files will be written.");
  }

  // Process images with limited concurrency
  const concurrency = Math.max(1, Math.floor(os.cpus().length / 2));
  const queue = [...imageFiles];
  const workers = Array.from({ length: concurrency }, () => worker());

  await Promise.all(workers);

  console.log("Image optimization complete.");

  async function worker() {
    while (queue.length) {
      const filename = queue.shift();
      if (!filename) break;
      try {
        await processImage(filename);
      } catch (err) {
        console.error(`Error processing ${filename}:`, err);
      }
    }
  }

  async function processImage(filename) {
    const inputPath = path.join(INPUT_DIR, filename);
    const { name } = path.parse(filename);

    const srcStat = await fs.stat(inputPath);
    const srcMtimeMs = srcStat.mtimeMs;

    for (const size of sizes) {
      for (const fmt of formats) {
        // Map format to extension
        const ext = fmt === "avif" ? "avif" : fmt === "webp" ? "webp" : fmt;
        const outName = `${name}-${size}.${ext}`;
        const outPath = path.join(OUTPUT_DIR, outName);

        // Skip if already up-to-date
        let skip = false;
        try {
          const outStat = await fs.stat(outPath);
          if (outStat.mtimeMs >= srcMtimeMs) {
            skip = true;
          }
        } catch {
          // file doesn't exist -> proceed
        }
        if (skip) {
          console.log(
            `skipping (up-to-date): ${path.relative(process.cwd(), outPath)}`,
          );
          continue;
        }

        console.log(
          `generating: ${path.relative(process.cwd(), outPath)} (size: ${size}, format: ${fmt})`,
        );
        if (dryRun) continue;

        // Perform resize + encode
        let pipeline = sharp(inputPath)
          .rotate()
          .resize({ width: size, withoutEnlargement: true });

        // Some formats may not be supported depending on sharp build; try/catch
        try {
          if (fmt === "webp") {
            await pipeline.toFormat("webp", { quality }).toFile(outPath);
          } else if (fmt === "avif") {
            await pipeline.toFormat("avif", { quality }).toFile(outPath);
          } else if (fmt === "png") {
            await pipeline.png({ quality }).toFile(outPath);
          } else if (fmt === "jpeg" || fmt === "jpg") {
            await pipeline.jpeg({ quality }).toFile(outPath);
          } else {
            // fallback: use webp
            await pipeline.toFormat("webp", { quality }).toFile(outPath);
          }
        } catch (err) {
          console.warn(
            `warning: failed to encode ${outPath} as ${fmt}. Falling back to webp.`,
            err.message,
          );
          try {
            await pipeline
              .toFormat("webp", { quality })
              .toFile(outPath.replace(/\.[^.]+$/, ".webp"));
          } catch (err2) {
            console.error("fallback failed:", err2);
          }
        }
      }
    }
  }
})().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
