import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { VALID_USER } from '../../utils/testData.js'; 

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(VALID_USER.username, VALID_USER.password);

  // Verify successful login
  const isSuccess = await loginPage.isLoginSuccessful();
  expect(isSuccess).toBe(true);
});