#!/usr/bin/env node
import { existsSync, copyFileSync, renameSync, rmSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const CLIENT = join(DIST, "client");
const SERVER = join(DIST, "server");

function fail(msg) {
  console.error("[static-build] " + msg);
  process.exit(1);
}

if (!existsSync(CLIENT)) fail("dist/client/ not found — run vite build first");
if (!existsSync(SERVER)) fail("dist/server/ not found — run vite build first");

const serverIndex = join(SERVER, "index.js");
const serverAlias = join(SERVER, "server.js");
if (existsSync(serverIndex) && !existsSync(serverAlias)) {
  copyFileSync(serverIndex, serverAlias);
  console.log("[static-build] aliased dist/server/index.js -> server.js");
}

const PORT = 4910;
const URL = `http://localhost:${PORT}/`;

console.log("[static-build] starting vite preview on port " + PORT);
const preview = spawn("npx", ["vite", "preview", "--port", String(PORT)], {
  cwd: ROOT,
  stdio: ["ignore", "inherit", "inherit"],
  env: process.env,
});

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(URL);
      if (res.status === 200) return;
    } catch {}
    await delay(500);
  }
  throw new Error("preview server did not become ready within 30s");
}

async function shutdown() {
  try { preview.kill("SIGTERM"); } catch {}
  await delay(500);
  try { preview.kill("SIGKILL"); } catch {}
}

try {
  await waitForServer();
  console.log("[static-build] preview ready, fetching /");
  const res = await fetch(URL);
  if (res.status !== 200) throw new Error("Fetch / returned " + res.status);
  const html = await res.text();
  const indexPath = join(CLIENT, "index.html");
  await import("node:fs/promises").then((fs) => fs.writeFile(indexPath, html, "utf8"));
  console.log("[static-build] wrote " + indexPath + " (" + html.length + " bytes)");
} catch (err) {
  await shutdown();
  fail(err.message || String(err));
}

await shutdown();

// Flatten dist/client/* -> dist/
function moveAll(src, dest) {
  for (const name of readdirSync(src)) {
    const from = join(src, name);
    const to = join(dest, name);
    if (existsSync(to)) rmSync(to, { recursive: true, force: true });
    renameSync(from, to);
  }
}
moveAll(CLIENT, DIST);
rmSync(CLIENT, { recursive: true, force: true });
rmSync(SERVER, { recursive: true, force: true });
console.log("[static-build] flattened dist/client into dist/ and removed dist/server");

const redirects = join(DIST, "_redirects");
if (!existsSync(redirects)) {
  const src = join(ROOT, "public", "_redirects");
  if (!existsSync(src)) fail("public/_redirects missing");
  copyFileSync(src, redirects);
  console.log("[static-build] copied _redirects into dist/");
}

function countFiles(dir) {
  let n = 0;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) n += countFiles(p);
    else n += 1;
  }
  return n;
}

console.log(`[static-build] success — ${countFiles(DIST)} files in dist/`);
