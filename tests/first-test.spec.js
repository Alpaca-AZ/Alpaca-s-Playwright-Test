// tests/first-test.spec.js
import { test, expect } from '@playwright/test';

// Test pertama menggunakan Playwright
test('my first test', async ({ page }) => {
  // Navigate ke website
  await page.goto('https://www.saucedemo.com/');

  // Verify title
  await expect(page).toHaveTitle(/Swag Labs/);

  console.log('Test passed! 🎉');
});


test('should login successfully', async ({ page }) => {
  // 1. Navigate ke login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Fill username
  await page.locator('#user-name').fill('standard_user');

  // 3. Fill password
  await page.locator('#password').fill('secret_sauce');

  // 4. Click login button
  await page.locator('#login-button').click();

  // 5. Verify redirect ke products page
  await expect(page).toHaveURL(/inventory.html/);

  // 6. Verify page title "Products"
  const pageTitle = page.locator('.title');
  await expect(pageTitle).toHaveText('Products');

  console.log('Login successful! ✅');
});