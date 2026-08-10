## Problem:

When using the `playwright-qase-reporter`, retrieving the Test Run ID dynamically for the latest test run is not straightforward. While direct access to the Test Run ID during execution is expected, there is no built-in way to retrieve it from the reporter.

### Scenarios:

1. **Slack/teams integration**: Teams may want to setup integration with an external messaging tool to send real time updates about a test run. They might need to contruct the Qase test run's URL for the message, and run id is required for this. 

## Workarounds:

### Use Qase's API to fetch run Id:

A call to this endpoint returns the total number of run Ids, and the latest run id is the same as the one from `result.total` in the JSON response.

The `playwright-qase-reporter` is designed to send test results to Qase, but it does not expose the Test Run ID for direct use. The reporter functions as a post-execution processor, meaning that by the time the Test Run ID is assigned, it is not directly available to the test scripts.

Additionally, the Qase API does not provide a mechanism to retrieve the run ID within the Playwright test execution flow unless external methods are used.

### Use a script to intercept the Run id at run time:

Once the execution starts, the reporter will first validate the project code and create a new run, then store the run id in this environment variable `QASE_TESTOPS_RUN_ID` and all subsequent requests use this variable.

We can read the run.id from this variable mid-execution and write the Id to an external file in your project which can later be used for any other means, as needed.

Here's an example script:
```js
//intercept.js

const fs = require("fs");
const path = require("path");

// File to store the captured ID
const outputFile = path.join(__dirname, "qase_run_id.txt");

// Function to check and save the variable
function checkAndSaveQaseId() {
  const runId = process.env.QASE_TESTOPS_RUN_ID;

  if (runId) {
    console.log(`✅ Captured QASE_TESTOPS_RUN_ID: ${runId}`);

    // Save to a file for later use
    fs.writeFileSync(outputFile, runId, "utf8");

    // Stop checking once we've captured the ID
    clearInterval(interval);
  }
}

// Periodically check if the variable is set (every 500ms)
const interval = setInterval(checkAndSaveQaseId, 500);
```

Please note that you must use `--require` to preload the script before execution, as it is an external script and not part of the reporter.

Example: `node --require ./intercept.js ./node_modules/.bin/playwright test path/to/you/tests`
