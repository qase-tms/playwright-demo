import { test } from "@playwright/test";

test("generate stderr logs", async ({}) => {
  // Test generating logs to stderr in a Playwright test.
  for (let i = 1; i <= 50; i++) {
    console.error(`Error line ${i} - This is a stderr message.`);
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
