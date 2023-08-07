import LoginPage from "../pageObjects/LoginPage";

describe(`This is the first Cypress test suite`, () => {
  it(`Verifies the login test`, async () => {
    await cy.visit("https://st-test4.iris.cwp.pnp-hcl.com/chat/login");

    // Wait for the elements to be visible before proceeding
    await LoginPage.usernameInput.should("be.visible");
    await LoginPage.passwordInput.should("be.visible");
    await LoginPage.submitButton.should("be.visible");
    await LoginPage.rememberCheckbox.should("be.disabled");

    // Enter Valid Credentials and then login
    // await LoginPage.usernameInput.type("adams8");
    // await LoginPage.passwordInput.type("samet1me");
    // await LoginPage.rememberCheckbox.should("be.enabled");
    // await LoginPage.submitButton.click();
    LoginPage.login("adams8", "samet1me", "In a meeting");
  });
});
