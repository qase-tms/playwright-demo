import { test, expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

const TOTAL_TESTS = 450;
const MAX_ATTACHMENTS = 6;
const ATTACHMENT_SIZE_KB = Number(process.env.QASE_LOAD_ATTACHMENT_SIZE_KB || 300);
const BATCH_ID = process.env.QASE_LOAD_BATCH_ID || "batch-1";

const attachmentDir = path.join(os.tmpdir(), `qase-load-${BATCH_ID}`);
if (!fs.existsSync(attachmentDir)) {
  fs.mkdirSync(attachmentDir, { recursive: true });
}

function createDeterministicFile(sizeKB, filename) {
  const filepath = path.join(attachmentDir, filename);
  if (!fs.existsSync(filepath)) {
    const sizeBytes = Math.max(1, Math.ceil(sizeKB * 1024));
    const buffer = Buffer.alloc(sizeBytes, "q");
    fs.writeFileSync(filepath, buffer);
  }
  return filepath;
}

// Deterministic 1..MAX_ATTACHMENTS cycle based on test index
function attachmentCountForIndex(index) {
  return (index % MAX_ATTACHMENTS) + 1;
}

test.describe(`Qase attachment concurrency load - ${BATCH_ID}`, () => {
  for (let i = 1; i <= TOTAL_TESTS; i++) {
    const attachmentCount = attachmentCountForIndex(i);
    const fileAttachmentCount = attachmentCount - 1; // remaining slot reserved for a real screenshot

    test(`Load result ${BATCH_ID}-${i} (attachments: ${attachmentCount})`, async ({ page }) => {
      await page.goto("about:blank");

      const expectedAttachmentPaths = [];

      // File attachments (binary files of deterministic size)
      for (let a = 1; a <= fileAttachmentCount; a++) {
        const filename = `${BATCH_ID}-test-${i}-file-${a}.bin`;
        const filepath = createDeterministicFile(ATTACHMENT_SIZE_KB, filename);
        expectedAttachmentPaths.push(filepath);
      }
      if (expectedAttachmentPaths.length > 0) {
        qase.attach({ paths: expectedAttachmentPaths });
      }

      // Real Playwright screenshot attachment (always included, counts toward the 6 max)
      const screenshotPath = path.join(
        attachmentDir,
        `${BATCH_ID}-test-${i}-screenshot.png`
      );
      await page.screenshot({ path: screenshotPath });
      qase.attach({ paths: screenshotPath });
      expectedAttachmentPaths.push(screenshotPath);

      // Deterministic assertions only - no flakiness introduced
      expect(expectedAttachmentPaths.length).toBe(attachmentCount);
      for (const p of expectedAttachmentPaths) {
        expect(fs.existsSync(p)).toBe(true);
      }
    });
  }
});