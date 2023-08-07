import _ from "underscore";
import Page from "./Page";

class LoginPage extends Page {
  get usernameInput() {
    return cy.get("#username");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get submitButton() {
    return cy.get("[data-testid='loginButton']");
  }

  get header() {
    return cy.get("[data-testid='loginHeader']");
  }

  get errorMessage() {
    return cy.get("[data-testid='loginErrorMessage']");
  }

  get showPasswordIconButton() {
    return cy.xpath('//*[@data-testid="showPassword"]');
  }

  get hidePasswordIconButton() {
    return cy.xpath('//*[@data-testid="hidePassword"]');
  }

  get rememberCheckbox() {
    return cy.get("#rememberMe");
  }

  get statusMessageInput() {
    return cy.get("#initialStatusMessage");
  }

  get avaliabilityStatusId() {
    return cy.get("#outlined-select-currency");
  }

  get loginStatusMenuItems() {
    return cy.get('[data-testid="statusMenuItems"]');
  }

  async open() {
    await super.open("/chat/login");
  }

  async openChatURL() {
    await super.open("/chat");
  }

  async login(username, password, status) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    if (typeof status !== "undefined") {
      cy.log("inside status check");
      await this.selectStatusFromAvalibilityStatusList(status);
    }
    await this.submitButton.should("be.enabled");
    await this.submitButton.click({ force: true });
  }

  async loginWithEmptyStatus(username, password) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.statusMessageInput.click().type("{selectall}{backspace}");
  }

  async clickIconToShowPassword() {
    await this.showPasswordIconButton.click();
  }

  async getHidePasswordIconLabel() {
    return (
      await this.hidePasswordIconButton.invoke("attr", "aria-label")
    ).trim();
  }

  async getShowPasswordIconLabel() {
    return (
      await this.showPasswordIconButton.invoke("attr", "aria-label")
    ).trim();
  }

  async getPasswordType() {
    return (await this.passwordInput.invoke("attr", "type")).trim();
  }

  async selectStatusFromAvalibilityStatusList(status) {
    cy.log("inside selectStatusFromAvalibilityStatusList");
    await this.avaliabilityStatusId.click({ force: true });

    // Add a short delay to allow menu items to load

    this.loginStatusMenuItems.each((element) => {
      const elementText = element.text().trim();
      if (_.isEqual(elementText, status)) {
        cy.log("Element Text is ", elementText);
        cy.log("inside if check");
        cy.log("Element is ", element);

        // Scroll the element into view before clicking
        cy.wrap(element).click({ force: true });

        return false; // Exit the loop once found
      }
    });
  }
}

export default new LoginPage();
