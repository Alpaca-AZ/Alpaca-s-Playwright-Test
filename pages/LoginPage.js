// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    // Locators untuk username, password, login button, dan error message
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Methods
  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isLoginSuccessful() {
    await this.page.waitForURL('**/inventory.html');
    return this.page.url().includes('inventory.html');
  }
}