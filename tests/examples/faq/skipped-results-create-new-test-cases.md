# Problem
When i have this...
Then this happens...
And, this too happens...

# Cause
This happens because, xyz...

# Solution
This is the solution, please do XYZ

**Please, format your tests like so**:

``` javascript
import { qase } from "cypress-qase-reporter/mocha";

describe("Example: ignore.spec.js", () => {
  it("This test is executed by Cypress, however, it is NOT reported to Qase", () => {
    qase.ignore();
    expect(true).to.equal(true);
  });
});
```
*Italic, format your tests like so*:

1. Number one
2. Number two

* Not numbered
* But, still
* Bullet points

For example, you can add `monospace` characters like this. 

You can also add links like this. [Click here](https://qase.canny.io/bugs/p/the-background-isnt-transparent-in-uploaded-project-logo-of-png-type).

Images are added like this.
!(https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg)
