import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import { ProductPage } from "../../pages/ProductPage.js";

test("should add product to cart successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Login terlebih dahulu
  await loginPage.goto();
  await loginPage.login("error_user", "secret_sauce");

  // Tambahkan produk "Sauce Labs Backpack" ke keranjang
  await productPage.addProductToCart("Sauce Labs Backpack");
  await productPage.removeProductFromCart("Sauce Labs Backpack");

  // Verifikasi bahwa produk berhasil ditambahkan ke keranjang
  const cartItemCount = await productPage.getCartItemCount();
  expect(cartItemCount).toBe(1);
});