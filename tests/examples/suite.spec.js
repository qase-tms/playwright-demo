import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test("Title of this test", () => {
  qase.title("This will be the title of the test, in Qase");
  expect(true).toBe(true);
});

