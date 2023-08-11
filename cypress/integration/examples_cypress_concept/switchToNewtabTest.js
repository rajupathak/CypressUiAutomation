/// <reference types="cypress-xpath" />

import "cypress-xpath";
describe("Handling Child Windows", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //we need to remove the target attribute which will open a new tab
    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.contains("a", "About us").click();
      // cy.xpath(`//a[text()="About us`).click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });

    //come to parent window
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();
  });
});
