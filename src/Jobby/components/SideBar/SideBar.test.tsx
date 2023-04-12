import { fireEvent, render } from "@testing-library/react";
import { ApiStatus } from "../../interface";
import SideBar from ".";

describe("SideBar TestCases", () => {
  it("Test for Click Employment Type", () => {
    const { container } = render(
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

    const fullTimeInputValue = (
      document.getElementById("FullTime") as HTMLInputElement
    ).checked;

    expect(fullTimeInputValue).toBeFalsy();

    const fullTimeElement = container.querySelector("#FullTime");

    if (fullTimeElement !== null) {
      fireEvent.click(fullTimeElement);
    }

    const fullTimeInputValueAfter = (
      document.getElementById("FullTime") as HTMLInputElement
    ).checked;

    expect(fullTimeInputValueAfter).toBeTruthy();
  });
});
