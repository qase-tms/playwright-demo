import { defineConfig } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "Chromium",
      use: {
        browserName: "chromium",
        headless: false,
        viewport: { width: 1280, height: 720 },
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        video: "on-first-retry",
        screenshot: "only-on-failure",
        geolocation: { longitude: 12.4924, latitude: 41.8902 },
        locale: "en-US",
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
        headless: true,
        viewport: { width: 1024, height: 768 },
        video: "on",
        screenshot: "on",
        storageState: "state.json",
      },
    },
    {
      name: "Webkit",
      use: {
        browserName: "webkit",
        headless: false,
        viewport: { width: 1280, height: 720 },
        video: "on-first-retry",
        geolocation: { longitude: -73.935242, latitude: 40.73061 },
        locale: "fr-FR",
        bypassCSP: true,
      },
    },
  ],
  reporter: [
    ['list'], ['html'],
    [
      "playwright-qase-reporter",
      {
        framework: {
          browser: {
            addAsParameter: true,
            parameterName: 'Browser Name',
          }
        }
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
