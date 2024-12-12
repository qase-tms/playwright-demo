import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter'; 

const testCases = [
  { username: '@alice', browser: 'Chromium' },
  { username: '@bob', browser: 'Firefox' },
  { username: '@charlie', browser: 'Firefox' },
];

testCases.forEach(({ username }) => {
  test(`Test login with ${username}`, async () => {
    qase.title("Verify if user is able to login.");

      /*
       * Instead of creating three separate test cases in Qase, this method will add a 'Username' parameter, with three values. 
       */
    qase.parameters({ 'Username': username }); 

    expect(true).toBe(true);
  });
});

testCases.forEach(({ username, browser }) => {
  test(`Test login with ${username} using qase.groupParameters`, async () => {
    qase.title("Verify if user is able to login with grouped parameters.");

      /*
       * Here, instead of testing three users' login across all browsers, you can specify combinations that makes sense for you.
       */

    qase.groupParameters({
      'Browser': browser,
      'Username': username,
    });

    expect(true).toBe(true);
  });
});
