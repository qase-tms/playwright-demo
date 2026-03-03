import { test, expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test(qase(115482, "Defining Id: Format 1"), async ({}, testInfo) => {
  // Fail on first attempt
  if (testInfo.retry === 0) {
    expect(false).toBe(true);
  }

  // Pass on retry
  expect(true).toBe(true);
});
