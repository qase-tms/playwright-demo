# Problem
When i have this...
Then this happens...
And, this too happens...

# Cause
This happens because, xyz...

# Solution
This is the solution, please do XYZ

Please, format your tests like so:

``` javascript
import { qase } from "cypress-qase-reporter/mocha";

describe("Example: ignore.spec.js", () => {
  it("This test is executed by Cypress, however, it is NOT reported to Qase", () => {
    qase.ignore();
    expect(true).to.equal(true);
  });
});
```
