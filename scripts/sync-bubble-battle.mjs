/**
 * Copy Bubble Battle from BubbleBattle-Prototype into public/bubble-battle for static hosting.
 * Uses jsDelivr importmap so Three.js is not vendored under public/.
 *
 * Usage (from portfolio root):
 *   npm run sync:bubble-battle
 *
 * Optional: BUBBLE_BATTLE_SRC=/path/to/BubbleBattle-Prototype
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORTFOLIO_ROOT = path.resolve(__dirname, "..");
const DEST_DIR = path.join(PORTFOLIO_ROOT, "public", "bubble-battle");

const DEFAULT_SRC = path.resolve(PORTFOLIO_ROOT, "..", "BubbleBattle-Prototype");
const SOURCE_ROOT = process.env.BUBBLE_BATTLE_SRC
  ? path.resolve(process.env.BUBBLE_BATTLE_SRC)
  : DEFAULT_SRC;

const SOURCE_INDEX = path.join(SOURCE_ROOT, "index.html");
const SOURCE_ASSETS = path.join(SOURCE_ROOT, "Assets");

const THREE_VER = "0.184.0";
const IMPORTMAP_SNIPPET = `  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@${THREE_VER}/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@${THREE_VER}/examples/jsm/"
    }
  }
  </script>`;

function main() {
  if (!fs.existsSync(SOURCE_INDEX)) {
    console.error(
      "Missing source index.html at:\n  " +
        SOURCE_INDEX +
        "\nSet BUBBLE_BATTLE_SRC to your BubbleBattle-Prototype folder."
    );
    process.exit(1);
  }
  if (!fs.existsSync(SOURCE_ASSETS)) {
    console.error("Missing Assets folder at:\n  " + SOURCE_ASSETS);
    process.exit(1);
  }

  fs.mkdirSync(DEST_DIR, { recursive: true });

  let html = fs.readFileSync(SOURCE_INDEX, "utf8");
  const importmapRe =
    /<script type="importmap">[\s\S]*?<\/script>/;
  if (!importmapRe.test(html)) {
    console.error("Could not find importmap in source index.html");
    process.exit(1);
  }
  html = html.replace(importmapRe, IMPORTMAP_SNIPPET.trimEnd());
  fs.writeFileSync(path.join(DEST_DIR, "index.html"), html, "utf8");

  const destAssets = path.join(DEST_DIR, "Assets");
  fs.rmSync(destAssets, { recursive: true, force: true });
  fs.cpSync(SOURCE_ASSETS, destAssets, { recursive: true });

  console.log("Bubble Battle synced to public/bubble-battle/");
  console.log("  from " + SOURCE_ROOT);
}

main();
