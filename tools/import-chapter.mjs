#!/usr/bin/env node
/*
 * Import a single Obsidian A-Level Computer Science note into the garden.
 *
 * Usage:
 *   node tools/import-chapter.mjs "<source .md path>" "<target note name>"
 *
 * What it does:
 *   1. Copies every referenced image / attachment into
 *      src/site/img/user/Attachments/
 *   2. Rewrites Obsidian embeds  ![[file|width]]  into garden markdown images
 *      ![](/img/user/Attachments/file)
 *   3. Rewrites Obsidian note/heading wikilinks [[note#heading|label]] into
 *      root-relative markdown links that stay inside the site
 *   4. Adds the {"dg-publish":true,"permalink":...} front matter used by the
 *      digital-garden theme
 *
 * It never deletes or overwrites anything outside its own target note and the
 * Attachments folder.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { createRequire } from "node:module";
import { renderExcalidrawFile } from "./excalidraw-render.mjs";

const require = createRequire(import.meta.url);
const { headerToId } = require("../src/helpers/utils");

const REPO = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const NOTES_DIR = path.join(REPO, "src", "site", "notes", "A-Level", "Computer Science");
const DEST_ATTACHMENTS = path.join(REPO, "src", "site", "img", "user", "Attachments");
const SRC_ATTACHMENTS = "/home/johnmich/Onedrive/Lefun/5-Utility/Attachments";
const SRC_EXCALIDRAW = "/home/johnmich/Onedrive/Lefun/5-Utility/Excalidraw";
const VAULT_ROOT = "/home/johnmich/Onedrive/Lefun";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp", ".avif"]);
const ASSET_EXT = new Set([...IMAGE_EXT, ".pdf"]);

const [, , srcArg, targetArg] = process.argv;
if (!srcArg || !targetArg) {
  console.error('Usage: node tools/import-chapter.mjs "<source .md>" "<target name>"');
  process.exit(1);
}

const SRC = path.resolve(srcArg);
const TARGET = targetArg.replace(/\.md$/i, "");

const copied = [];
const missing = [];
const warnings = [];

/** Obsidian folder name -> target Note name (mirrors the garden restructure). */
function noteNameToTarget(name) {
  return name
    .replace(/\.md$/i, "")
    .replace(/\s*&\s*/g, " and ")
    .trim();
}

/**
 * Source note title -> garden note title, for the notes whose vault file name
 * differs from the name used in the garden (the vault keeps the coursebook /
 * syllabus file names, which do not match the chapter numbers published here).
 */
const NOTE_MAP = {
  "ComputerScience": "Computer Science",
  "Chpt4.1_Processor Fundamentals": "Chpt5_Processor Fundamentals",
  "Chpt4.2_Assembly Language and Machine Code": "Chpt6_Assembly Language and Machine Code",
  "Chpt4.3_Monitoring and Control Systems": "Chpt7_Monitoring and Control Systems",
  "Chpt5_System Software": "Chpt8_System Software",
  "Chpt6_Security, Privacy and Data Integrity": "Chpt9_Security, Privacy and Data Integrity",
  "Chpt7_Ethics & Ownerships": "Chpt10_Ethics and Ownerships",
  "Chpt9_Algorithm design": "Chpt12_Algorithm design",
  "Chpt14_Communication & Internet Technologies": "Chpt14_Communication and Internet Technologies",
  "Chpt15.1_Hardware & VM": "Chpt15.1_Hardware and VM",
  "Chpt15.2_Logic circuits & Boolean algebra": "Chpt15.2_Logic circuits and Boolean algebra",
};

/** Every note name that exists in the garden (or is created by this import). */
const GARDEN_NOTES = new Set([
  ...fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)),
  ...Object.values(NOTE_MAP),
]);

/** Resolve a [[wikilink]] target to a garden note name, or null if unknown. */
function resolveNoteName(name) {
  const key = String(name).trim();
  if (NOTE_MAP[key]) return NOTE_MAP[key];
  const guess = noteNameToTarget(key);
  return GARDEN_NOTES.has(guess) ? guess : null;
}

function encodePath(p) {
  return p
    .split("/")
    .map((part) => (part === "" ? part : encodeURIComponent(part)))
    .join("/");
}

function permalinkFor(targetNoteName) {
  return `/A-Level/Computer%20Science/${encodeURIComponent(targetNoteName)}/`;
}

/** Locate an attachment by basename, honouring the various prefixes used. */
function resolveAsset(rawTarget) {
  const base = path.basename(rawTarget);
  const candidates = [];
  // Obsidian stores the drawing itself as "<name>.excalidraw.md" while notes
  // embed it as "![[.../<name>.excalidraw]]"; also allow an exported raster.
  if (/\.excalidraw$/i.test(rawTarget)) {
    candidates.push(path.join(SRC_EXCALIDRAW, `${base}.md`));
    candidates.push(path.join(SRC_ATTACHMENTS, `${base}.md`));
    candidates.push(path.join(SRC_EXCALIDRAW, `${base}.png`));
    candidates.push(path.join(SRC_ATTACHMENTS, `${base}.png`));
    candidates.push(path.join(SRC_EXCALIDRAW, `${base}.svg`));
    candidates.push(path.join(SRC_ATTACHMENTS, `${base}.svg`));
  }
  if (rawTarget.startsWith("5-Utility/Attachments/")) {
    candidates.push(path.join(SRC_ATTACHMENTS, base));
  } else if (rawTarget.startsWith("5-Utility/Excalidraw/")) {
    candidates.push(path.join(SRC_EXCALIDRAW, base));
  }
  candidates.push(path.join(SRC_ATTACHMENTS, base));
  candidates.push(path.join(SRC_EXCALIDRAW, base));
  candidates.push(path.join(VAULT_ROOT, rawTarget));
  return candidates.find((c) => fs.existsSync(c));
}

function copyAsset(rawTarget) {
  const found = resolveAsset(rawTarget);
  const base = path.basename(rawTarget);
  if (!found) {
    missing.push(rawTarget);
    return null;
  }
  fs.mkdirSync(DEST_ATTACHMENTS, { recursive: true });
  // Drawings: use an existing raster export when present, otherwise render the
  // scene to an SVG so it can be shown on the site.
  if (/\.excalidraw\.md$/i.test(found) || /\.excalidraw$/i.test(found)) {
    const svgName = `${base.replace(/\.excalidraw$/i, "")}.svg`;
    const dest = path.join(DEST_ATTACHMENTS, svgName);
    fs.writeFileSync(dest, renderExcalidrawFile(found), "utf8");
    copied.push(`${svgName} (rendered)`);
    return `/img/user/Attachments/${encodePath(svgName)}`;
  }
  const destName = path.basename(found);
  const dest = path.join(DEST_ATTACHMENTS, destName);
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(found, dest);
    copied.push(destName);
  }
  return `/img/user/Attachments/${encodePath(destName)}`;
}

function assetUrl(rawTarget) {
  return copyAsset(rawTarget);
}

function convertEmbed(raw) {
  // raw = "![[target]]" or "![[target|width]]" or "![[note#heading]]"
  const inner = raw.slice(3, -2);
  const [targetAndRef, ...meta] = inner.split("|");
  const metaStr = meta.join("|").trim();

  if (targetAndRef.includes("#")) {
    const [note, ref] = targetAndRef.split("#");
    const targetNote = resolveNoteName(note) || TARGET;
    const isBlock = ref.startsWith("^");
    const anchor = isBlock ? "" : `#${headerToId(ref)}`;
    const label = isBlock ? targetNote : ref;
    warnings.push(`block/heading transclusion -> link to ${targetNote}${anchor}`);
    return `[${label}](${permalinkFor(targetNote)}${anchor})`;
  }

  const ext = path.extname(targetAndRef).toLowerCase();
  const urlPath = assetUrl(targetAndRef);
  const base = path.basename(targetAndRef);
  if (!urlPath) {
    return `<!-- MISSING ASSET: ${targetAndRef} -->`;
  }
  if (ASSET_EXT.has(ext) && !IMAGE_EXT.has(ext)) {
    // non-image embed (e.g. a pdf) -> render a normal link
    return `[${base}](${urlPath})`;
  }
  const width = metaStr && !Number.isNaN(Number(metaStr)) ? `|${metaStr}` : "";
  const alt = /\.excalidraw$/i.test(base) ? base.replace(/\.excalidraw$/i, "") : base;
  return `![${alt}${width}](${urlPath})`;
}

function convertLink(raw) {
  // raw = "[[target]]" or "[[target|label]]" or "[[note#heading|label]]"
  const inner = raw.slice(2, -2);
  if (!inner.trim()) return ""; // Obsidian stray empty link [[]]
  const [targetAndRef, ...labelParts] = inner.split("|");
  const label = labelParts.join("|").trim();

  const [rawTarget, ref] = targetAndRef.split("#");
  const target = (rawTarget || "").trim();
  const isBlock = (ref || "").startsWith("^");
  const ext = path.extname(target).toLowerCase();

  if (ASSET_EXT.has(ext) && !ref) {
    const urlPath = assetUrl(target);
    const base = path.basename(target);
    // The attachment is gone from the vault: keep the text, drop the dead link.
    if (!urlPath) return label || base;
    return `[${label || base}](${urlPath})`;
  }

  if (!target) {
    // same-note link: [[#heading|label]]
    const anchor = ref && !isBlock ? `#${headerToId(ref)}` : "";
    if (isBlock) warnings.push(`same-note block ref -> heading-less link in ${TARGET}`);
    return `[${label || ref || TARGET}](${permalinkFor(TARGET)}${anchor})`;
  }

  const targetNote = resolveNoteName(target);
  if (!targetNote) {
    warnings.push(`unresolved note link [[${inner}]] -> plain text`);
    return label || target;
  }
  const anchor = ref && !isBlock ? `#${headerToId(ref)}` : "";
  if (isBlock) warnings.push(`block ref [[${inner}]] -> note link without anchor`);
  return `[${label || ref || targetNote}](${permalinkFor(targetNote)}${anchor})`;
}

let content = fs.readFileSync(SRC, "utf8");

// strip any pre-existing front matter so we can write our own
content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");

// order matters: embeds first, then plain links
content = content.replace(/!\[\[[^\]]*\]\]/g, convertEmbed);
content = content.replace(/(?<!!)\[\[[^\]]*\]\]/g, convertLink);

// Obsidian "broken" empty markdown links [text]() -> plain text
content = content.replace(/(?<!\!)\[([^\]]*)\]\(\s*\)/g, "$1");
// occasional malformed external protocol in the vault notes
content = content.replace(/\]\(https:www\./g, "](https://www.");

const frontMatter = `---\n{"dg-publish":true,"permalink":"/A-Level/Computer Science/${TARGET}/"}\n---\n\n`;

fs.mkdirSync(NOTES_DIR, { recursive: true });
const destFile = path.join(NOTES_DIR, `${TARGET}.md`);
fs.writeFileSync(destFile, frontMatter + content, "utf8");

console.log(`Wrote ${path.relative(REPO, destFile)}`);
console.log(`Assets copied (${copied.length}): ${copied.join(", ") || "-"}`);
if (missing.length) console.log(`!! Assets MISSING (${missing.length}): ${missing.join(", ")}`);
if (warnings.length) warnings.forEach((w) => console.log(`  note: ${w}`));
