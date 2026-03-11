#!/usr/bin/env node
/**
 * Runs Sanity graphql deploy only when SANITY_DEPLOY_STUDIO_TOKEN (or SANITY_AUTH_TOKEN) is set.
 * Used in CI so deploy previews don't fail when the token is not configured.
 */
const { execSync } = require("child_process");
const path = require("path");

const token =
  process.env.SANITY_DEPLOY_STUDIO_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!token || token.trim() === "") {
  console.log(
    "Skipping graphql-deploy (SANITY_DEPLOY_STUDIO_TOKEN not set). Set it in Netlify for full builds."
  );
  process.exit(0);
}

const studioDir = path.join(__dirname, "..", "studio");
process.env.SANITY_AUTH_TOKEN = token;

try {
  execSync("npm run graphql-deploy", {
    cwd: studioDir,
    stdio: "inherit",
    env: { ...process.env, SANITY_AUTH_TOKEN: token },
  });
} catch (err) {
  console.error("graphql-deploy failed:", err.message);
  process.exit(err.status || 1);
}
