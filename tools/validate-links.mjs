#!/usr/bin/env node
/*
 * Validate the built digital garden: every root-relative link and asset must
 * resolve, and every #anchor must exist on its target page.
 *
 * Usage:
 *   npm run build && node tools/validate-links.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { parse } from "node-html-parser";

const REPO = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const DIST = path.join(REPO, "dist");

if (!fs.existsSync(DIST)) {
  console.error("dist/ not found - run `npm run build` first.");
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html"));

const problems = [];
const checked = { links: 0, assets: 0, anchors: 0 };

function decodeSafe(p) {
  try {
    return decodeURIComponent(p);
  } catch {
    return p;
  }
}

function existsInDist(rootRelativePath) {
  const p = path.join(DIST, decodeSafe(rootRelativePath));
  return fs.existsSync(p) || fs.existsSync(path.join(p, "index.html"));
}

function idsOnPage(htmlPath) {
  const html = fs.readFileSync(htmlPath, "utf8");
  const ids = new Set();
  for (const m of html.matchAll(/id="([^"]+)"/g)) ids.add(m[1]);
  return ids;
}

const idCache = new Map();
function getIds(htmlPath) {
  if (!idCache.has(htmlPath)) idCache.set(htmlPath, idsOnPage(htmlPath));
  return idCache.get(htmlPath);
}

for (const file of htmlFiles) {
  const rel = "/" + path.relative(DIST, file).replace(/\\/g, "/");
  const root = parse(fs.readFileSync(file, "utf8"));

  const targets = [];
  for (const a of root.querySelectorAll("a[href]")) targets.push(["a", a.getAttribute("href")]);
  for (const img of root.querySelectorAll("img[src]")) targets.push(["img", img.getAttribute("src")]);
  for (const src of root.querySelectorAll("source[srcset]")) {
    // srcset = "url1 300w, url2 600w" -> check the first candidate only
    const first = src.getAttribute("srcset").split(",")[0].trim();
    targets.push(["img", first.split(/\s+/)[0]]);
  }

  for (const [kind, rawHref] of targets) {
    if (!rawHref) continue;
    // hrefs may legitimately contain literal spaces (the theme emits permalinks
    // with spaces), so only trim - do not split.
    const href = rawHref.trim();
    if (/^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(href)) continue;
    if (href === "#") continue;

    const [linkPath, fragment] = href.split("#");
    checked[kind === "a" ? "links" : "assets"]++;

    let targetHtml = file;
    if (linkPath.startsWith("/")) {
      if (!existsInDist(linkPath)) {
        problems.push({ where: rel, kind, href, reason: "path not found in dist" });
        continue;
      }
      const decoded = decodeSafe(linkPath);
      const direct = path.join(DIST, decoded);
      targetHtml =
        fs.existsSync(direct) && fs.statSync(direct).isFile()
          ? direct
          : path.join(direct, "index.html");
    }

    if (fragment) {
      checked.anchors++;
      const id = decodeSafe(fragment);
      if (!getIds(targetHtml).has(id)) {
        problems.push({ where: rel, kind, href, reason: `anchor #${id} not found` });
      }
    }
  }
}

console.log(
  `Checked ${htmlFiles.length} pages: ${checked.links} links, ${checked.assets} assets, ${checked.anchors} anchors.`
);
if (problems.length === 0) {
  console.log("OK - no broken internal links, assets or anchors.");
} else {
  for (const p of problems) console.log(`${p.where}  ${p.kind}  ${p.href}  -> ${p.reason}`);
  console.log(`\n${problems.length} problem(s).`);
  process.exitCode = 1;
}
