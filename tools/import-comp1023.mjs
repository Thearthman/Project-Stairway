#!/usr/bin/env node
/*
 * Import the HKUST COMP1023 ("Introduction to Python Programming") vault notes
 * into the digital garden under src/site/notes/HKUST/COMP1023/.
 *
 * Usage:
 *   node tools/import-comp1023.mjs [source-dir]
 *
 * Behaviour
 *   - Every *.md in the source folder is imported except the excluded list.
 *   - Obsidian wikilinks [[note]], [[note|label]] and [[note#heading]] are
 *     rewritten to root-relative markdown links that resolve inside the garden.
 *     Links to notes that are not part of the garden are turned into plain
 *     text (or dropped when they are the only thing on a list item).
 *   - Cross-references are only rewritten OUTSIDE fenced/inline code, because
 *     these notes are full of Python list literals like [[0, 2]] and
 *     [[19 20 21 22]] that must stay untouched.
 *   - Obsidian embeds ![[file|width]] and images are copied into
 *     src/site/img/user/Attachments/ and rewritten to /img/user/Attachments/.
 *   - {"dg-publish":true,"permalink":...} front matter is written for the theme.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { headerToId } = require("../src/helpers/utils");

const REPO = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");

// Vault locations (used only to resolve embedded attachments / excalidraws).
const VAULT_ROOT = "/home/johnmich/Onedrive/Lefun";
const SRC_ATTACHMENTS = path.join(VAULT_ROOT, "5-Utility", "Attachments");
const SRC_EXCALIDRAW = path.join(VAULT_ROOT, "5-Utility", "Excalidraw");

// Garden locations.
const NOTES_DIR = path.join(REPO, "src", "site", "notes", "HKUST", "COMP1023");
const DEST_ATTACHMENTS = path.join(REPO, "src", "site", "img", "user", "Attachments");
const COURSE_PATH = "HKUST/COMP1023";
const INDEX_NAME = "COMP1023";

// Notes deliberately kept out of the garden.
const EXCLUDED = new Set(["1023-1.1", "1023-Libraries"]);

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp", ".avif"]);
const ASSET_EXT = new Set([...IMAGE_EXT, ".pdf", ".excalidraw", ".canvas"]);

const SRC_DIR = path.resolve(process.argv[2] || path.join(
  VAULT_ROOT,
  "5-Utility",
  "Archived",
  "Study",
  "COMP",
  "COMP1023"
));

if (!fs.existsSync(SRC_DIR)) {
  console.error(`Source folder not found: ${SRC_DIR}`);
  process.exit(1);
}

const sourceNames = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.slice(0, -3));

const importedNames = sourceNames.filter((n) => !EXCLUDED.has(n));
const importedSet = new Set(importedNames);

const copied = [];
const missing = [];
const warnings = [];

function encodePath(p) {
  return p
    .split("/")
    .map((part) => (part === "" ? part : encodeURIComponent(part)))
    .join("/");
}

/** Garden URL for a note (the course index lives at the folder root). */
function permalinkFor(noteName) {
  if (noteName === INDEX_NAME) return `/${COURSE_PATH}/`;
  return `/${COURSE_PATH}/${encodeURIComponent(noteName)}/`;
}

/** Raw permalink written into front matter (matches the vault convention). */
function frontMatterPermalink(noteName) {
  if (noteName === INDEX_NAME) return `/${COURSE_PATH}/`;
  return `/${COURSE_PATH}/${noteName}/`;
}

function resolveAsset(rawTarget) {
  const base = path.basename(rawTarget);
  const candidates = [
    path.join(SRC_ATTACHMENTS, base),
    path.join(SRC_EXCALIDRAW, base),
    path.join(VAULT_ROOT, rawTarget),
  ];
  return candidates.find((c) => fs.existsSync(c));
}

/** Copy an embedded asset into the garden. Returns its public URL or null. */
function assetUrl(rawTarget) {
  const found = resolveAsset(rawTarget);
  const base = path.basename(rawTarget);
  if (!found) {
    missing.push(rawTarget);
    return null;
  }
  fs.mkdirSync(DEST_ATTACHMENTS, { recursive: true });
  const dest = path.join(DEST_ATTACHMENTS, base);
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(found, dest);
    copied.push(base);
  }
  return `/img/user/Attachments/${encodePath(base)}`;
}

/** [[wikilink]] -> markdown link, or plain text when it is not in the garden. */
function convertWikilink(raw, currentNote) {
  const inner = raw.slice(2, -2);
  const [targetAndRef, ...labelParts] = inner.split("|");
  const label = labelParts.join("|").trim();
  const [rawTarget, ref] = targetAndRef.split("#");
  const target = (rawTarget || "").trim();
  const isBlock = (ref || "").startsWith("^");

  // [[#heading|label]] -> same-note anchor
  if (!target) {
    const anchor = ref && !isBlock ? `#${headerToId(ref)}` : "";
    return `[${label || ref || currentNote}](${permalinkFor(currentNote)}${anchor})`;
  }

  const ext = path.extname(target).toLowerCase();
  if (ASSET_EXT.has(ext)) {
    const urlPath = assetUrl(target);
    const base = path.basename(target);
    if (!urlPath) return `<!-- MISSING ASSET: ${target} -->`;
    return IMAGE_EXT.has(ext) ? `![${base}](${urlPath})` : `[${label || base}](${urlPath})`;
  }

  if (!importedSet.has(target)) {
    warnings.push(`unresolved link [[${inner}]] -> plain text`);
    return label || target;
  }

  const anchor = ref && !isBlock ? `#${headerToId(ref)}` : "";
  if (isBlock) warnings.push(`block ref [[${inner}]] -> note link without anchor`);
  return `[${label || ref || target}](${permalinkFor(target)}${anchor})`;
}

/** ![[embed]] -> copied asset / image (or a link for non-image files). */
function convertEmbed(raw) {
  const inner = raw.slice(3, -2);
  const [targetAndRef, ...meta] = inner.split("|");
  const metaStr = meta.join("|").trim();

  if (targetAndRef.includes("#")) {
    const [note, ref] = targetAndRef.split("#");
    const targetNote = importedSet.has(note.trim()) ? note.trim() : null;
    if (!targetNote) {
      warnings.push(`unresolved embed [[${inner}]] -> plain text`);
      return ref || note;
    }
    const anchor = ref && !ref.startsWith("^") ? `#${headerToId(ref)}` : "";
    return `[${ref || targetNote}](${permalinkFor(targetNote)}${anchor})`;
  }

  const urlPath = assetUrl(targetAndRef);
  const base = path.basename(targetAndRef);
  if (!urlPath) return `<!-- MISSING ASSET: ${targetAndRef} -->`;
  const ext = path.extname(targetAndRef).toLowerCase();
  if (ASSET_EXT.has(ext) && !IMAGE_EXT.has(ext)) return `[${base}](${urlPath})`;
  const width = metaStr && !Number.isNaN(Number(metaStr)) ? `|${metaStr}` : "";
  return `![${base}${width}](${urlPath})`;
}

/**
 * Run `replace` on a line but leave backtick-delimited inline code untouched.
 * (Fenced code blocks are handled a level up, line by line.)
 */
function replaceOutsideInlineCode(line, regex, replacer) {
  let out = "";
  let i = 0;
  while (i < line.length) {
    if (line[i] === "`") {
      let ticks = 1;
      while (line[i + ticks] === "`") ticks++;
      const fence = "`".repeat(ticks);
      const end = line.indexOf(fence, i + ticks);
      if (end === -1) {
        out += line.slice(i);
        break;
      }
      out += line.slice(i, end + ticks);
      i = end + ticks;
    } else {
      const next = line.indexOf("`", i);
      const chunk = next === -1 ? line.slice(i) : line.slice(i, next);
      out += chunk.replace(regex, replacer);
      i = next === -1 ? line.length : next;
    }
  }
  return out;
}

function convertContent(content, currentNote) {
  const lines = content.split("\n");
  const out = [];
  let inFence = false;

  for (const raw of lines) {
    const trimmed = raw.trim();

    // Obsidian Waypoint markers and standalone %% comments carry no meaning here.
    if (/^%%\s*(Begin|End)\s+Waypoint\s*%%\s*$/i.test(trimmed)) continue;

    if (/^(```|~~~)/.test(trimmed)) {
      inFence = !inFence;
      out.push(raw);
      continue;
    }
    if (inFence) {
      out.push(raw);
      continue;
    }

    let converted = replaceOutsideInlineCode(
      raw,
      /!\[\[[^\[\]]*\]\]/g,
      (m) => convertEmbed(m)
    );
    converted = replaceOutsideInlineCode(
      converted,
      /(?<!!)\[\[[^\[\]]*\]\]/g,
      (m) => convertWikilink(m, currentNote)
    );

    // A list item that was a single wikilink to a note we do not have becomes
    // an empty bullet; drop it instead of leaving a dangling entry.
    if (/^\s*[-*+]\s+\[\[/.test(raw) && !/\]\(/.test(converted)) continue;

    out.push(converted);
  }

  return out.join("\n");
}

fs.mkdirSync(NOTES_DIR, { recursive: true });

for (const noteName of importedNames) {
  const srcFile = path.join(SRC_DIR, `${noteName}.md`);
  let content = fs.readFileSync(srcFile, "utf8");

  // Drop any pre-existing front matter so we can write our own.
  content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");

  const body = convertContent(content, noteName);
  const heading =
    noteName === INDEX_NAME ? `# COMP1023 – Introduction to Python Programming\n\n` : "";
  const frontMatter = `---\n{"dg-publish":true,"permalink":"${frontMatterPermalink(noteName)}"}\n---\n\n`;

  fs.writeFileSync(path.join(NOTES_DIR, `${noteName}.md`), frontMatter + heading + body, "utf8");
}

console.log(`Imported ${importedNames.length} note(s) into ${path.relative(REPO, NOTES_DIR)}`);
console.log(`  ${importedNames.join("\n  ")}`);
console.log(`Skipped (${EXCLUDED.size}): ${[...EXCLUDED].join(", ")}`);
console.log(`Assets copied (${copied.length}): ${copied.join(", ") || "-"}`);
if (missing.length) console.log(`!! Assets MISSING (${missing.length}): ${missing.join(", ")}`);
if (warnings.length) warnings.forEach((w) => console.log(`  note: ${w}`));
