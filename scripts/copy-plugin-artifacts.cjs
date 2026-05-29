const fs = require("fs");
const path = require("path");

const targetDir = "D:/Program/Storage/Notebook/obs/i18n/.obsidian/plugins/better-plugins-manager";
const artifacts = ["main.js", "manifest.json", "styles.css"];

for (const artifact of artifacts) {
  const source = path.resolve(__dirname, "..", artifact);
  const target = path.join(targetDir, artifact);
  fs.copyFileSync(source, target);
}

console.log(`Copied ${artifacts.join(", ")} to ${targetDir}`);
