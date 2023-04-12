import cypress from "cypress";

describe("for Stub Testing for login", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://apis.ccbp.in/login").as("users");
  });
  it("Api", () => {
    cy.visit("http://localhost:3001/login");
    cy.get("#usernameType").type("rahul");
    cy.get("#PasswordType").type("rahul@202");
    cy.get("#LoginBtn").click();
    cy.wait("@users");
    cy.get("#Error").should("have.text", "*username and password didn't match");
  });
});
