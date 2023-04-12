import cypress from "cypress";

describe("for Stub Testing for login", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://apis.ccbp.in/login").as("users");
  });
  it("With wrong credential", () => {
    cy.visit("http://localhost:3001/login");
    cy.get("#usernameType").type("rahul");
    cy.get("#PasswordType").type("rahul@202");
    cy.get("#LoginBtn").click();
    cy.wait("@users");
    cy.get("#Error").should("have.text", "*username and password didn't match");
  });
});

describe("OtherApi Stubing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/login");
    cy.get("#usernameType").type("rahul");
    cy.get("#PasswordType").type("rahul@2021");
    cy.get("#LoginBtn").click();
  });
  it("Profile", () => {
    cy.intercept("GET", "https://apis.ccbp.in/profile").as("profile");
    cy.contains("Find Jobs").click();

    cy.wait("@profile");
    cy.get("#profileNameId").should("have.text", "Rahul Attluri");
  });

  it("JobList", () => {
    cy.intercept("GET", "https://apis.ccbp.in/jobs").as("JobList");
    cy.contains("Find Jobs").click();

    cy.wait("@JobList");
    cy.get('[href="/jobs/d6019453-f864-4a2f-8230-6a9642a59466"]').click();
    cy.get("#TitleId").should("have.text", "Backend Engineer");
  });
});
