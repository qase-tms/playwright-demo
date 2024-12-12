import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter'; 

const testCases = [
  { username: '@alice', browser: 'Chromium' },
  { username: '@bob', browser: 'Firefox' },
  { username: '@charlie', browser: 'Firefox' },
];
//].forEach(({ username, browser }) => {

testCases.forEach(({ username }) => {
  test(`Test login with ${username}`, async () => {
    qase.title("Verify if user is able to login.");

    qase.parameters({ 'Username': username }); 

    expect(true).toBe(true);
  });
});

testCases.forEach(({ username, browser }) => {
  test(`Test login with ${username} using qase.groupParameters`, async () => {
    // Set the test title
    qase.title("Verify if user is able to login with grouped parameters.");

    // Group parameters for better organization
    qase.groupParameters({
      'Browser': browser,
      'Username': username,
    });

    // Assertion for demonstration purposes
    expect(true).toBe(true);
  });
});
