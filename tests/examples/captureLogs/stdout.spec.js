import { test } from "@playwright/test";

test("generate stdout logs", async ({}) => {
  // Test generating logs to stdout in a Playwright test.
  for (let i = 1; i <= 50; i++) {
    console.log(`Log line ${i} - This is a stdout message.`);
  }
});

/*
To enable reporting of logs, please, add the following section to your `qase.config.json`

```json
{
 "captureLogs": true
}
```
*/
