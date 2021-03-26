/// <reference types="Cypress" />
var faker = require("faker");

describe("Verify Rental Application API Functionalities", () => {
  it("create user return 200", () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    cy.request({
      method: "POST",
      headers: {
        "Content-Type": " application/json;charset=utf-8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      url: Cypress.env("apiUrl") + "/app/register",
      body: { email: email, password: password, areTermsAccepted: true },
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.email).to.contains(email);
    });
  });
});
