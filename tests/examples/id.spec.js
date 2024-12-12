import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

/* Delete line, to uncomment 
// Please, change the Id from `1` to any case Id present in your project before uncommenting the test.
 

test(qase(1, "Defining Id: Format 1"), () => {
  expect(true).toBe(true);
});


*/// Delete line, to uncomment 



/* Delete line, to uncomment 
// Please, change the Id from `2` to any case Id present in your project before uncommenting the test.
 

test("Defining Id: Format 2", () => {
  qase.id(2);
  expect(true).toBe(true);
});


*/// Delete line, to uncomment 



/* 
    The two tests showcase the two different formats for defining case ids:
  
  1. Inline with the test function: [Recommended]

      test(qase(<id>, 'Test Title'), () => {
        ...
      }); 

     This method is recommended as it immediately associates the test case ID with the test.
     

  2. Inside the test body:

      test('Test Title', () => {
        qase.id(<id>);
      }); 

     This method allows setting the case ID later inside the test body and is more elegant.

*/
