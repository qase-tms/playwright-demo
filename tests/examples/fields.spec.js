import { test, expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";
import { markdownContent } from "./markdownContent";

test.describe("Example: fields.spec.js - Test cases with field: Priority", () => {
  /*
   * Meta data such as Priority, Severity, Layer fields, Description, and pre-conditions can be updated from code.
   * This enables you to manage test cases from code directly.
   */

  test("Priority = low", async ({}, testInfo) => {
    qase.fields({ priority: "low" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Priority = medium", async ({}, testInfo) => {
    qase.fields({ priority: "medium" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Priority = high", async ({}, testInfo) => {
    qase.fields({ priority: "high" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });
});

test.describe("Example: fields.spec.js - Test cases with field: Severity", () => {
  test("Severity = trivial", async ({}, testInfo) => {
    qase.fields({ severity: "trivial" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Severity = minor", async ({}, testInfo) => {
    qase.fields({ severity: "minor" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Severity = normal", async ({}, testInfo) => {
    qase.fields({ severity: "normal" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Severity = major", async ({}, testInfo) => {
    qase.fields({ severity: "major" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Severity = critical", async ({}, testInfo) => {
    qase.fields({ severity: "critical" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Severity = blocker", async ({}, testInfo) => {
    qase.fields({ severity: "blocker" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });
});

test.describe("Example: fields.spec.js - Test cases with field: Layer", () => {
  test("Layer = e2e", async ({}, testInfo) => {
    qase.fields({ layer: "e2e" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Layer = api", async ({}, testInfo) => {
    qase.fields({ layer: "api" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Layer = unit", async ({}, testInfo) => {
    qase.fields({ layer: "unit" });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });
});

test.describe("Example: fields.spec.js - Test cases with Description, Pre & Post Conditions", () => {
  test("Description with Markdown Support", async ({}, testInfo) => {
    qase.fields({ description: markdownContent });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Preconditions with Markdown Support", async ({}, testInfo) => {
    qase.fields({ preconditions: markdownContent });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });

  test("Postconditions with Markdown Support", async ({}, testInfo) => {
    qase.fields({ postconditions: markdownContent });
    qase.parameters({ Browser: testInfo.project.name });
    expect(true).toBe(true);
  });
});
