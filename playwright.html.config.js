import { defineConfig } from "@playwright/test";

export default defineConfig({
  // Enable parallel execution
  workers: process.env.CI ? 2 : undefined,
  
  // Configure for sharding
  shard: process.env.SHARD ? { 
    current: parseInt(process.env.SHARD_CURRENT || '1'), 
    total: parseInt(process.env.SHARD_TOTAL || '1') 
  } : undefined,

  // Use blob reporter for sharding, HTML for final report
  reporter: [["blob"], ["list"]],

  projects: [
    {
      name: "Chromium",
      use: {
        browserName: "chromium",
        headless: true,
        viewport: { width: 1280, height: 720 },
        video: "retain-on-failure",
        screenshot: "only-on-failure",
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
        headless: true,
        viewport: { width: 1280, height: 720 },
        video: "retain-on-failure",
        screenshot: "only-on-failure",
      },
    },
    {
      name: "Webkit",
      use: {
        browserName: "webkit",
        headless: true,
        viewport: { width: 1280, height: 720 },
        video: "retain-on-failure",
        screenshot: "only-on-failure",
      },
    },
  ],
  
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    viewport: { width: 1280, height: 720 },
    trace: "retain-on-failure",
  },
  
  outputDir: "test-results/",
  
  // Retry configuration
  retries: process.env.CI ? 2 : 0,
  
  // Test timeout
  timeout: 30000,
});
