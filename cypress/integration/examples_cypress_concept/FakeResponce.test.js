describe("This test suite is used to test API responce and fake the API calls", () => {
  it("To verify mocking the API GET call using cypress intercept", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.get(`button[class='btn btn-primary']`).should("be.visible");

    //now on click of button books will be displayed we need to mock the get call and display only one book

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookDetails");

    cy.get(`button[class='btn btn-primary']`).click();
    //Once we have clicked on the getbook button we need to wait for the intercept to resolve the promice the send
    // the fake response to the browser so tht ui should update accrodingly
    cy.wait("@bookDetails");
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });

  it.only("To verify response and UI should be in sync", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.get(`button[class='btn btn-primary']`).should("be.visible");

    //now on click of button books will be displayed we need to mock the get call and display only one book

    //so here we are telling the cypress when you receive the request go and mock the response
    cy.intercept(
      //below is request object
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      //below is mocked response
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookDetails");

    cy.get(`button[class='btn btn-primary']`).click();
    //here we need to caprture the request and response and then validate the response
    cy.wait("@bookDetails").then(({ request, response }) => {
      cy.get(`tr`).should("have.length", response.body.length + 1);
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
