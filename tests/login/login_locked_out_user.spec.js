import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

test('should not login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  console.log('Attempted to login with locked_out_user');

  // Verify not successful login
  const errorText = await loginPage.getErrorMessage();
  expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out.');
});