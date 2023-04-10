describe("template spec", () => {
  it("From Home", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1000, 800);
    cy.get("#usernameType").type("rahul");
    cy.get("#PasswordType").type("rahul@2021");
    cy.get("#LoginBtn").click();
    cy.contains("Find Jobs").click();
    cy.get("#FullTime").click();

    cy.get('[href="/jobs/d6019453-f864-4a2f-8230-6a9642a59466"]').click();
  });
});
