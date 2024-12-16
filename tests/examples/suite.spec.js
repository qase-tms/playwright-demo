import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test("Test with a defined suite", () => {
  qase.suite("Suite defined with qase.suite()");
  expect(true).toBe(true);
});


test("Test within multiple levels of suite" , () => {
  qase.suite("Application\tAuthentication\tLogin\tEdge_case");
    // A `\t` is used for dividing each suite name
  expect(true).toBe(true);
});

