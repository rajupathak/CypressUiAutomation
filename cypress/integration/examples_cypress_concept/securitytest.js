/// <reference types="Cypress" />

describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      //So here we will capture the request and modify the URL by giving different username
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        //then we will capture the response and validate it
        req.continue((res) => {
          // expect(res.statusCode).to.equal(403)
        });
      }
    ).as("dummyUrl"); //here we need to yeild it means we need to store it some variable
    //so that we can wait later

    cy.get("button[class='btn btn-primary']").click(); //so get method will be called once u click on this
    cy.wait("@dummyUrl"); //and we are wating here until inercept is not resolved
  });
});
