import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test("Test with a defined suite", () => {
  qase.suite("Suite defined with qase.suite()");
  expect(true).toBe(true);
});

