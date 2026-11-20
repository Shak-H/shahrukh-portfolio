import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.pw.ts",
  use: {
    baseURL,
    browserName: "chromium",
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3100",
    url: baseURL,
  },
});
