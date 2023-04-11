import { JSDOM } from "jsdom";
import { BrowserRouter } from "react-router-dom";

import renderer from "react-test-renderer";
import Home from ".";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
(global as any).window = dom.window as unknown as Window;
(global as any).document = dom.window.document;

test("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
