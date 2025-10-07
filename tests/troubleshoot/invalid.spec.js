import { test, expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test('Qase Demonstration Test #1 - Reports as "Fail"', async ({ page }) => {
  await page.goto(`https://www.google.com`);
  expect(await page.locator("#fake-id").isVisible()).toBe(true);
});

test('Qase Demonstration Test #2 - Reports as "Invalid"', async ({ page }) => {
  await page.goto(`https://www.google.com`);
  await expect(page.locator("#fake-id")).toBeVisible();
});
