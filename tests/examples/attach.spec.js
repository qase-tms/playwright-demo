import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';


test('test', async () => {
  // upload files by path
  qase.attach({ paths: './attachments/test-file.txt' });
  expect(true).toBe(true);
});


//test('Ultimate Question of Life, The Universe, and Everything', async () => {
//  qase.id(6254)
//    .title('Ultimate Question of Life, The Universe, and Everything')
//    .fields({ severity: high, priority: medium })
//    .attach({ paths: './attachments/test-file.txt' });
//})

//test("A test case with qase.comment()", () => {
//  qase.attach({ paths: './attachments/test-file.txt' });
//  expect(true).toBe(true);
//});
