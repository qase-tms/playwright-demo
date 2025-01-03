### Problem:
---
When using Playwright projects to run tests across various browsers the results are arranged under separate suites named after each browser.

For example, if you have three projects defined for three different browsers—Chrome, Edge, and Safari—when the tests are run, three different suites will be created, one for each browser. With each suite, separate test cases are also created and added to the respective suites.

This setup is not ideal, as the same test cases are being duplicated for each browser. Ideally, we should have a single set of test cases, but just run them across different browsers, without the need to create separate test cases for every project.

![Screenshot](../images/screenshot1.png)


### Cause:
---

In Qase, we have a concept called parameters, which allows us to run the same tests with different settings. This means that while we have separate test runs for each set of parameters, the test case and test steps remain the same. Essentially, there is only one test case for such scenarios, even though the runs are parameterized.

However, when we use Playwright projects, the reporter processes the results for each project individually. It runs one project at a time, creating test cases for that project then proceeds to run the next project and creates new test cases again.

If you have the Qase ID specified, the projects are executed one after the other, the test case keeps getting overwritten. This is not ideal, as once the test run is completed it is difficult to determine which run corresponds to which browser/project.

![Screenshot](../images/screenshot2.png)


### Workaround:
---

For now, the workaround would be to use Qase parameterized tests. You can define parameters in Qase either as single parameters or as grouped parameters. Once you have configured the parameters, make sure to remove the projects from the Playwright config file as well.

Below is an example demonstrating how to implement this:

```javascript
{{#include ../tests/examples/params.spec.js}}
```
<br>

![Screenshot](../images/screenshot3.png)