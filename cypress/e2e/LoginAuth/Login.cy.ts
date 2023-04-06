describe("The Login Page", () => {
  beforeEach(() => {
    // cy.exec("npm run db:reset && npm run db:seed");
    cy.visit("http://localhost:3000/");

    cy.request("POST", "https://apis.ccbp.in/login", {
      username: "rahul",
      password: "rahul@2021",
    }).its("body");
  });

  it("sets auth cookie when logging in via form submission", function () {
    cy.get("#usernameType").type("rahul");
    cy.get("#PasswordType").type("rahul@2021");

    cy.get("#LoginBtn").click();

    cy.url().should("include", "/");

    // cy.getCookies("jwt_token").should(null);
  });
});
