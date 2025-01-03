## The new test cases are being created when user annotate test with `test.skip` for skipping the test cases.

This is primarliy related to the syntax used to define the `Qase ID`. When `Qase ID` is defined within the body of the test, it skips onto the next test without reading that test's body where the Id is present. Since, qaseID is skipped it wont be able to link it with the existing test case and rather create a new test case.

For example -
``` javascript
import { test } from '@playwright/test';

test.skip('Buyer login and checkout using balance', async ({ page }) => {
  // Qase test case ID
  const qaseId = 408;

  // Example steps (these won't execute as the test is skipped)
  await page.goto('https://example.com');
  console.log(`Test skipped with Qase ID: ${qaseId}`);
});
```
In the above code the qaseID would be skipped as it is inside the body of the test case. 

The correct format is to include the `Qase ID` outside of the test body as shown in the code below -

``` javascript

import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test.describe('Example: id.spec.js', () => {
    // Please, change the Id from "1" to any case Id present in your project before uncommenting the test.
    test(qase(1, "Defining Id: Format 1"), () => {
        expect(true).toBe(true);
    });

    test.skip(qase(123, 'Buyer login - Checkout produk Voucher - Berhasil Checkout dengan Saldo Pembeli'), async ({ page }) => {
        await test.step('Pre-condition: Buyer sudah login dan berada di detail brand halaman gercep', async () => {
            await gercepPage.openGercepDetailBrandPage('mobile-legends', 'top-up-game');
        });
    });
});
```
In the above code, as `Qase ID` is mentioned outside the test body, it will not be skipped and hence the result would be link to the existing test case as skipped.
