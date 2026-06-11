const fs = require("fs");
const path = require("path");

const root = process.cwd();
const nextDir = path.join(root, ".next");
const standaloneDir = path.join(nextDir, "standalone");
const publicDir = path.join(root, "public");
const standalonePublicDir = path.join(standaloneDir, "public");
const standaloneStaticDir = path.join(standaloneDir, ".next", "static");
const nextStaticDir = path.join(nextDir, "static");

if (!fs.existsSync(nextDir)) {
  throw new Error("Next build output not found: .next");
}

if (!fs.existsSync(standaloneDir)) {
  throw new Error("Next standalone output not found: .next/standalone");
}

if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, standalonePublicDir, { recursive: true });
}

if (fs.existsSync(nextStaticDir)) {
  fs.cpSync(nextStaticDir, standaloneStaticDir, { recursive: true });
}

console.log("Hostinger standalone output prepared in .next/standalone");
