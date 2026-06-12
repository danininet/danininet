const fs = require("fs");
const path = require("path");

const root = process.cwd();
const nextDir = path.join(root, ".next");
const standaloneDir = path.join(nextDir, "standalone");
const publicDir = path.join(root, "public");
const nextStaticDir = path.join(nextDir, "static");
const distDir = path.join(root, "dist");
const distNextDir = path.join(distDir, ".next");

function copyIfExists(source, target) {
  if (fs.existsSync(source)) {
    fs.cpSync(source, target, { recursive: true });
  }
}

if (!fs.existsSync(nextDir)) {
  throw new Error("Next build output not found: .next");
}

if (!fs.existsSync(standaloneDir)) {
  throw new Error("Next standalone output not found: .next/standalone");
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

copyIfExists(standaloneDir, distDir);
copyIfExists(publicDir, path.join(distDir, "public"));
copyIfExists(nextStaticDir, path.join(distNextDir, "static"));

const serverPath = path.join(distDir, "server.js");
if (!fs.existsSync(serverPath)) {
  throw new Error("Hostinger output is missing server.js after standalone copy");
}

console.log("Hostinger deploy output prepared in dist");
