import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import { ProductPage } from "../../pages/ProductPage.js";
import { VALID_USER } from "../../utils/testData.js";

test("should add product to cart successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Login terlebih dahulu & menunggu assertion login berhasil
  await loginPage.goto();
  await loginPage.login(VALID_USER.username, VALID_USER.password);
  await page.waitForURL("**/inventory.html");
  await expect(page.locator('.title')).toHaveText('Products');
  await expect(page.locator('.inventory_item')).toHaveCount(6);

  // Tambahkan produk "Sauce Labs Backpack" ke keranjang
  await productPage.addProductToCart("Sauce Labs Backpack");

  // Verifikasi bahwa produk berhasil ditambahkan ke keranjang
  const cartItemCount = await productPage.getCartItemCount();
  expect(cartItemCount).toBe(1);
});