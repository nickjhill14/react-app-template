import { defineConfig, devices, PlaywrightTestConfig } from "@playwright/test";

const playwrightTestConfig: PlaywrightTestConfig = {
  testDir: "./e2eTests",
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
  },
};

export default defineConfig(playwrightTestConfig);
