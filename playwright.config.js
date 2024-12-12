import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    [
      'playwright-qase-reporter',
      {
        /*
        // You can define the reporter options here, or in a separate `qase.config.json` file.
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: 'api_key',
          },
          project: 'project_code',
          uploadAttachments: true,
          run: {
          //  id: 1,
            title: "Your test run title",
            description: "Automated Test run by Playwright",
            complete: true,
          },
          environment: 'prod',
        },
      */
      },
    ],
  ],
});
