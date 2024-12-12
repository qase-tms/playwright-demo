import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter'; 

[
  { username: '@alice', expected: 'Hello, Alice!' },
  { username: '@bob', expected: 'Hello, Bob!' },
  { username: '@charlie', expected: 'Hello, Charlie!' },
].forEach(({ username, expected }) => {

  test(`Test login with ${username}`, async () => {
    qase.title("Verify if user is able to login.");

    qase.parameters({ 'Username': username }); 

    expect(true).toBe(true);
  });
});
