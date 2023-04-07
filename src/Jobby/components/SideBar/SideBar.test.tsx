import SideBar from ".";

import { mount } from "cypress/react18";
import { ApiStatus } from "../../interface";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", () => {
  return mount(
    <SideBar
      ProfileDetail={{
        profile_details: {
          profile_image_url:
            "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
          name: "Rahul Attluri",
          short_bio: "Lead Software Developer and AI-ML expert",
        },
      }}
      apiStatus={ApiStatus.success}
      onChangePackage={function (Array: string[]): void {}}
      onChangeEmployment={function (Array: string[]): void {}}
    />
  );
});

it("stepper should default to 0", () => {
  cy.mount(""); //giving a empty string because it gives some error to give some arguments
  cy.get("#FullTime").click().should("not.have.value", "FULLTIME");

  // cy.get("#20 LPA and above").click();
});
