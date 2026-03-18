// // tests/first-test.spec.js
// import { test, expect } from '@playwright/test';
// 
// // Test pertama menggunakan Playwright
// test('my first test', async ({ page }) => {
//   // Navigate ke website
//   await page.goto('https://www.saucedemo.com/');
// 
//   // Verify title
//   await expect(page).toHaveTitle(/Swag Labs/);
// 
//   console.log('Test passed! 🎉');
// });
// 
// 
// test('should login successfully', async ({ page }) => {
//   // 1. Navigate ke login page
//   await page.goto('https://www.saucedemo.com/');
//   console.log('Navigated to login page');
// 
//   // 2. Fill username
//   await page.locator('#user-name').fill('standard_user');
//   console.log('Username filled');
// 
//   // 3. Fill password
//   await page.locator('#password').fill('secret_sauce');
//   console.log('Password filled');
// 
//   // 4. Click login button
//   await page.locator('#login-button').click();
// 
//   // 5. Verify redirect ke products page
//   await expect(page).toHaveURL(/inventory.html/);
//   console.log('Redirected to products page');
// 
// 
//   // 6. Verify page title "Products"
//   const pageTitle = page.locator('.title');
//   await expect(pageTitle).toHaveText('Products');
// 
//   console.log('Login successful! ✅');
// });