## Problem

New test cases are being created when using `test.skip` to skip the test cases. The expected behavior is for the reporter to send a `skipped` result for the defined test case, but instead, a new test case with a `skipped` result is being created.

## Cause

This issue is mainly due to the syntax used to define the `Qase ID`. When the `Qase ID` is defined inside the body of the test case, the test skips to the next one without reading the test's body where the ID is located. Since the `Qase ID` is skipped, it cannot be linked to the existing test case, causing a new test case to be created instead.

For example:

```javascript
import { test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test.skip('Sample test title', async ({ page }) => {
  qaseId = 1; 
  // Add your test logic here
});
```

In the above code, the `qaseId` would be skipped because it is inside the body of the test case.

## Solution

The correct approach is to place the `Qase ID` outside the test body, as shown in the code below:

```javascript
import { test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test.skip(qase(1, 'Sample test title'), async ({ page }) => {
  // Add your test logic here
});
```

In this code, since the `Qase ID` is placed outside the test body, it will not be skipped. As a result, the test case will be linked properly and marked as `skipped` .
