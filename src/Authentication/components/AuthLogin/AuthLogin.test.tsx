import { mount } from "cypress/react18";
import AuthLogin from ".";
import { UserDeatailsType } from "../../interface";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", () => {
  return mount(
    <AuthLogin
      onSubmitForm={function (userDetails: UserDeatailsType): void {}}
      onLoginEvent={function (data: any) {}}
    />
  );
});

it("stepper should default to 0", () => {
  cy.mount(""); //giving a empty string because it gives some error to give some arguments

  cy.get("#usernameType").type("rahul");
  cy.get("#PasswordType").type("rahul@2021");

  cy.get("#LoginBtn").click();

  cy.request("POST", "https://apis.ccbp.in/login", {
    username: "rahul",
    password: "rahul@2021",
  }).its("body");

  cy.url().should("include", "/");
});
