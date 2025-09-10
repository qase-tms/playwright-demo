// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results/', // optional
  reporter: [
    ['junit', { outputFile: 'playwright-report/results.xml' }] // Fixed path for Qase CLI
  ],
});
