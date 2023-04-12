import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";

describe("Header Component", () => {
  test("Header Event test Case", () => {
    const { container } = render(
      <MemoryRouter>
        <Route exact path="*" component={Header} />
      </MemoryRouter>
    );

    const HomeElement = container.querySelector("#HomeLinkId");
    // const jobListElement = container.querySelector("#JobListId");

    if (HomeElement !== null) {
      fireEvent.click(HomeElement);
    }

    expect(window.location.pathname).toBe("/");

    // const buttonElement = screen.getByRole("button");
    // console.log(buttonElement);
    // buttonElement.click();
    // const currentUrl = window.location.href;
    // expect(currentUrl).toBe("/login");
    // expect(Cookies.get("jwt_token")).toBeUndefined();
  });
});
