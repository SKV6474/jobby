import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
// (global as any).window = dom.window as Window;
(global as any).document = dom.window.document;

describe("Header Component", () => {
  test("should replace the url to /login ", () => {
    render(
      <BrowserRouter>
        <Route exact path="/" component={Header} />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole("button");
    buttonElement.click();
    const currentUrl = window.location.href;
    expect(currentUrl).toBe("/login");
    expect(Cookies.get("jwt_token")).toBeUndefined();
  });
});
