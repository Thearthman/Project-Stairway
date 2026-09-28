#!/usr/bin/env node
/*
 * Render an Obsidian Excalidraw drawing (`.excalidraw.md`) into a standalone SVG
 * so it can be published on the digital garden like any other image.
 *
 * Usage:
 *   node tools/excalidraw-render.mjs "<source .excalidraw.md>" "<output .svg>"
 *
 * The Obsidian Excalidraw plugin stores the scene inside a ```compressed-json
 * fenced block as an LZString `compressToBase64` payload. We decode that here
 * and paint the elements ourselves (rectangles, diamonds, ellipses, lines,
 * arrows, freedraw strokes and text). Roughness/hachure are flattened to clean
 * strokes/fills – the goal is a faithful *readable* picture, not a pixel-exact
 * clone of the Excalidraw renderer.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const KEY_STR_BASE64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

/** LZString.decompressFromBase64 (the flavour used by the Excalidraw plugin). */
export function decompressFromBase64(input) {
  if (input == null) return "";
  if (input === "") return null;

  const baseReverseDic = {};
  const getBaseValue = (alphabet, character) => {
    if (!baseReverseDic[alphabet]) {
      baseReverseDic[alphabet] = {};
      for (let i = 0; i < alphabet.length; i += 1) {
        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
      }
    }
    return baseReverseDic[alphabet][character];
  };

  const length = input.length;
  const resetValue = 32;
  const dictionary = [];
  let enlargeIn = 4;
  let dictSize = 4;
  let numBits = 3;
  let entry = "";
  const result = [];
  const data = { val: getBaseValue(KEY_STR_BASE64, input.charAt(0)), position: resetValue, index: 1 };

  const readBits = (max) => {
    let bits = 0;
    let power = 1;
    while (power !== max) {
      const resb = data.val & data.position;
      data.position >>= 1;
      if (data.position === 0) {
        data.position = resetValue;
        data.val = getBaseValue(KEY_STR_BASE64, input.charAt(data.index++));
      }
      bits |= (resb > 0 ? 1 : 0) * power;
      power <<= 1;
    }
    return bits;
  };

  for (let i = 0; i < 3; i += 1) dictionary[i] = i;

  let next;
  switch ((next = readBits(Math.pow(2, 2)))) {
    case 0:
      dictionary[3] = String.fromCharCode(readBits(Math.pow(2, 8)));
      break;
    case 1:
      dictionary[3] = String.fromCharCode(readBits(Math.pow(2, 16)));
      break;
    case 2:
      return "";
    default:
      break;
  }

  let c = dictionary[3];
  let w = c;
  result.push(c);
  while (true) {
    if (data.index > length) return "";
    const cc = readBits(Math.pow(2, numBits));
    switch (cc) {
      case 0:
        dictionary[dictSize++] = String.fromCharCode(readBits(Math.pow(2, 8)));
        c = dictSize - 1;
        enlargeIn -= 1;
        break;
      case 1:
        dictionary[dictSize++] = String.fromCharCode(readBits(Math.pow(2, 16)));
        c = dictSize - 1;
        enlargeIn -= 1;
        break;
      case 2:
        return result.join("");
      default:
        c = cc;
    }
    if (enlargeIn === 0) {
      enlargeIn = Math.pow(2, numBits);
      numBits += 1;
    }
    if (dictionary[c] !== undefined) entry = dictionary[c];
    else if (c === dictSize) entry = w + w.charAt(0);
    else return null;
    result.push(entry);
    dictionary[dictSize++] = w + entry.charAt(0);
    enlargeIn -= 1;
    w = entry;
    if (enlargeIn === 0) {
      enlargeIn = Math.pow(2, numBits);
      numBits += 1;
    }
  }
}

/** Pull the scene JSON out of an Obsidian Excalidraw markdown file. */
export function parseExcalidrawMarkdown(markdown) {
  const match = markdown.match(/```compressed-json\n([\s\S]*?)```/);
  if (!match) throw new Error("no ```compressed-json block found");
  const payload = match[1].replace(/\s+/g, "");
  const json = decompressFromBase64(payload);
  if (!json) throw new Error("could not decompress the scene");
  return JSON.parse(json);
}

const num = (n) => Math.round(n * 100) / 100;
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function strokeDash(el) {
  if (el.strokeStyle === "dashed") return ` stroke-dasharray="${8 * (el.strokeWidth || 1)} ${8 * (el.strokeWidth || 1)}"`;
  if (el.strokeStyle === "dotted") return ` stroke-dasharray="${2 * (el.strokeWidth || 1)} ${6 * (el.strokeWidth || 1)}"`;
  return "";
}

function fontFamily(family) {
  if (family === 1) return "Virgil, 'Comic Sans MS', 'Segoe Print', cursive";
  if (family === 3) return "'Cascadia Code', Consolas, 'Courier New', monospace";
  return "Helvetica, Arial, sans-serif";
}

/** Absolute points (in scene space) of a line/arrow/freedraw element. */
function absolutePoints(el) {
  return (el.points || []).map(([px, py]) => [el.x + px, el.y + py]);
}

function elementBounds(el) {
  if (el.type === "line" || el.type === "arrow" || el.type === "freedraw") {
    const pts = absolutePoints(el);
    if (!pts.length) return null;
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    return { minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys) };
  }
  if (el.type === "text") {
    return { minX: el.x, minY: el.y, maxX: el.x + el.width, maxY: el.y + el.height };
  }
  return { minX: el.x, minY: el.y, maxX: el.x + el.width, maxY: el.y + el.height };
}

function shapeTransform(el, inner) {
  if (!el.angle) return inner;
  const cx = num(el.x + el.width / 2);
  const cy = num(el.y + el.height / 2);
  const deg = num((el.angle * 180) / Math.PI);
  return `<g transform="rotate(${deg} ${cx} ${cy})">${inner}</g>`;
}

function strokeAttrs(el) {
  const opacity = (el.opacity ?? 100) / 100;
  return `stroke="${el.strokeColor || "#1e1e1e"}" stroke-width="${el.strokeWidth || 1}" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"${strokeDash(el)}`;
}

function renderShape(el) {
  const fill = el.backgroundColor && el.backgroundColor !== "transparent" ? el.backgroundColor : "none";
  const fillOpacity = (el.opacity ?? 100) / 100;
  const common = `${strokeAttrs(el)} fill="${fill}" fill-opacity="${fillOpacity}"`;
  const w = el.width;
  const h = el.height;
  if (el.type === "rectangle") {
    const rx = el.roundness ? Math.min(32, Math.min(w, h) / 4) : 0;
    return shapeTransform(el, `<rect x="${num(el.x)}" y="${num(el.y)}" width="${num(w)}" height="${num(h)}" rx="${num(rx)}" ry="${num(rx)}" ${common}/>`);
  }
  if (el.type === "ellipse") {
    return shapeTransform(el, `<ellipse cx="${num(el.x + w / 2)}" cy="${num(el.y + h / 2)}" rx="${num(w / 2)}" ry="${num(h / 2)}" ${common}/>`);
  }
  if (el.type === "diamond") {
    const pts = [
      [el.x + w / 2, el.y],
      [el.x + w, el.y + h / 2],
      [el.x + w / 2, el.y + h],
      [el.x, el.y + h / 2],
    ]
      .map(([x, y]) => `${num(x)},${num(y)}`)
      .join(" ");
    return shapeTransform(el, `<polygon points="${pts}" ${common}/>`);
  }
  return "";
}

function arrowHead(tip, from, el) {
  const angle = Math.atan2(tip[1] - from[1], tip[0] - from[0]);
  const size = 8 + 4 * (el.strokeWidth || 1);
  const a1 = angle + Math.PI - 0.42;
  const a2 = angle + Math.PI + 0.42;
  const p1 = [tip[0] + size * Math.cos(a1), tip[1] + size * Math.sin(a1)];
  const p2 = [tip[0] + size * Math.cos(a2), tip[1] + size * Math.sin(a2)];
  const opacity = (el.opacity ?? 100) / 100;
  return `<polygon points="${num(tip[0])},${num(tip[1])} ${num(p1[0])},${num(p1[1])} ${num(p2[0])},${num(p2[1])}" fill="${el.strokeColor || "#1e1e1e"}" stroke="none" fill-opacity="${opacity}"/>`;
}

function renderLinear(el) {
  const pts = absolutePoints(el);
  if (pts.length < 2) return "";
  let d;
  if (el.type === "freedraw") {
    d = `M ${num(pts[0][0])},${num(pts[0][1])}`;
    for (let i = 1; i < pts.length; i += 1) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      d += ` L ${num(x1)},${num(y1)}`;
    }
  } else {
    d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${num(x)},${num(y)}`).join(" ");
  }
  const inner = `<path d="${d}" fill="none" ${strokeAttrs(el)}/>`;
  let heads = "";
  if (el.type === "arrow") {
    if (el.endArrowhead) heads += arrowHead(pts[pts.length - 1], pts[pts.length - 2], el);
    if (el.startArrowhead) heads += arrowHead(pts[0], pts[1], el);
  }
  return shapeTransform(el, inner + heads);
}

function renderText(el) {
  const fontSize = el.fontSize || 20;
  const lineHeight = el.lineHeight || 1.25;
  const lines = String(el.text ?? "").split("\n");
  const anchor = el.textAlign === "center" ? "middle" : el.textAlign === "right" ? "end" : "start";
  const x = el.textAlign === "center" ? el.x + el.width / 2 : el.textAlign === "right" ? el.x + el.width : el.x;
  const firstBaseline = el.y + fontSize * 0.8;
  const tspans = lines
    .map((line, i) => `<tspan x="${num(x)}" y="${num(firstBaseline + i * fontSize * lineHeight)}">${esc(line) || " "}</tspan>`)
    .join("");
  const inner = `<text font-family="${fontFamily(el.fontFamily)}" font-size="${fontSize}" text-anchor="${anchor}" fill="${el.strokeColor || "#1e1e1e"}" fill-opacity="${(el.opacity ?? 100) / 100}" xml:space="preserve">${tspans}</text>`;
  return shapeTransform(el, inner);
}

function renderImage(el, files) {
  const file = files && el.fileId ? files[el.fileId] : null;
  if (!file || !file.dataURL) return "";
  return shapeTransform(el, `<image href="${esc(file.dataURL)}" x="${num(el.x)}" y="${num(el.y)}" width="${num(el.width)}" height="${num(el.height)}" preserveAspectRatio="none"/>`);
}

/** Render a decoded Excalidraw scene object to an SVG string. */
export function renderSceneToSvg(scene, { padding = 24, background = "#ffffff" } = {}) {
  const elements = (scene.elements || []).filter((el) => el && !el.isDeleted);
  const files = scene.files || {};
  const bg = (scene.appState && scene.appState.viewBackgroundColor) || background;

  let bounds = null;
  for (const el of elements) {
    const b = elementBounds(el);
    if (!b) continue;
    if (!bounds) bounds = { ...b };
    else {
      bounds.minX = Math.min(bounds.minX, b.minX);
      bounds.minY = Math.min(bounds.minY, b.minY);
      bounds.maxX = Math.max(bounds.maxX, b.maxX);
      bounds.maxY = Math.max(bounds.maxY, b.maxY);
    }
  }
  if (!bounds) bounds = { minX: 0, minY: 0, maxX: 100, maxY: 100 };

  const width = Math.ceil(bounds.maxX - bounds.minX + padding * 2);
  const height = Math.ceil(bounds.maxY - bounds.minY + padding * 2);
  const tx = num(-bounds.minX + padding);
  const ty = num(-bounds.minY + padding);

  const parts = [];
  for (const el of elements) {
    switch (el.type) {
      case "rectangle":
      case "ellipse":
      case "diamond":
        parts.push(renderShape(el));
        break;
      case "line":
      case "arrow":
      case "freedraw":
        parts.push(renderLinear(el));
        break;
      case "text":
        parts.push(renderText(el));
        break;
      case "image":
        parts.push(renderImage(el, files));
        break;
      default:
        break;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<rect width="100%" height="100%" fill="${bg}"/>
<g transform="translate(${tx} ${ty})">
${parts.join("\n")}
</g>
</svg>
`;
}

export function renderExcalidrawFile(sourcePath, options) {
  return renderSceneToSvg(parseExcalidrawMarkdown(fs.readFileSync(sourcePath, "utf8")), options);
}

const isMain = process.argv[1] && url.pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  const [, , srcArg, outArg] = process.argv;
  if (!srcArg || !outArg) {
    console.error('Usage: node tools/excalidraw-render.mjs "<source .excalidraw.md>" "<output .svg>"');
    process.exit(1);
  }
  const svg = renderExcalidrawFile(path.resolve(srcArg));
  fs.mkdirSync(path.dirname(path.resolve(outArg)), { recursive: true });
  fs.writeFileSync(path.resolve(outArg), svg, "utf8");
  console.log(`Wrote ${outArg} (${svg.length} bytes)`);
}
