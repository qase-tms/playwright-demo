import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"],
    [
      "playwright-qase-reporter",
      {
        environment: "prod",

        // If you use playwright projects, use these options to pass them as parameters.
        framework: {
          browser: {
            addAsParameter: true,
            parameterName: "Browser",
          },
        },
        
        
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: '48c887580c1d38e0c8e03550f626a3f45bd51e955fe5bdd1cdd2637d5992d229',
          },
          project: 'PARAM1',
          uploadAttachments: true,
          run: {
          //  id: 1,
            title: `Regression run - ${new Date().toISOString()}`,
            description: "Automated Test run by Playwright",
            complete: true,
          },
          environment: 'prod',
        },
      },
    ],
  ],

  
  /*projects: [
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
  ],*/
  use: {
    screenshot: "only-on-failure", // options: 'on', 'off', 'only-on-failure'
    video: "on", // options: 'on', 'off', 'on-first-retry'
    viewport: { width: 1280, height: 720 },
  },
  outputDir: "test-results/",
});
