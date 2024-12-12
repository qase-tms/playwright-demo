import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test("A test case with qase.comment()", () => {
  qase.comment("This comment will be displayed in the 'Actual Result' field of the test result in Qase.");
  expect(true).toBe(true);
});
