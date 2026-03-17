// pages/ProductPage.js

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.productItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    }
    
    // waiting for the page to load and verify the title is "Products"
    async isPageLoaded() {
      await this.page.pageTitle.waitFor({ state: 'visible' });
      const title = await this.pageTitle.textContent();
      return title === 'Products';     
    }

    // Get the count of products displayed on the page
    async getProductCount() {
      return await this.productItems.count();
    }
    
    async sortProducts(sortValue) {
      await this.sortDropdown.selectOption(sortValue);
      await this.page.waitForTimeout(500); // Wait for sorting to take effect
    }

    async addProductToCart(productName) {
      const buttonId = productName
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
        await this.page.locator(`#add-to-cart-${buttonId}`).click();
    }

    async getCartItemCount() {
        try {
            const badgeText = await this.cartBadge.textContent();
            return parseInt(badgeText);
        } catch {
            // If the badge is not found, it means there are no items in the cart
            return 0;
        }
    }
}
