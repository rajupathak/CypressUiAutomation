/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Verify Google launch test", async () => {
  it("Verify Google logo text", async () => {
    await cy.visit("https://www.google.com");
    await cy.xpath(`//img[@alt="Google"]`).should("be.visible");
    // await cy.get('img[alt="Google"]').should("be.visible");
  });
});
