/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //To get the nth child of any row
    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      //$e1 is the first element ,index will start from 0
      const text = $e1.text();
      if (text.includes("Python")) {
        //now we need the next sibling column
        //so in cypress we can use next method but
        // we need to pass the index on the list element and then we need to resolve the promise also
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            //  const priceText = price.text();
            // expect(priceText).to.equal("25");
            cy.wrap(price).should("contain.text", "25");
          });
      }
    });
  });

  //inther way
  it("My FirstTest case", function () {
    // Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // To get the nth child of any row
    cy.get("tr td:nth-child(2)").each(($e1, index) => {
      const text = $e1.text();

      if (text.includes("Python")) {
        // Now we need the next sibling column
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .invoke("text") //here we are using invoke fucntion to get text of that column and then we areresolving the promice
          .then((priceText) => {
            // Use expect statement to assert the value
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
