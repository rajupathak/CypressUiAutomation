/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"; //we need to define also
describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //first we need to load the iframe
    cy.frameLoaded("#courses-iframe");
    //now to access the iframe object we have to use find function
    //then using eq function we provided the index if more than 1 element matched
    cy.iframe().find(`a[href="mentorship"]`).eq(0).click();
    cy.iframe().find(`h1[class*="pricing-title"]`).should("have.length", 2);
  });
});
