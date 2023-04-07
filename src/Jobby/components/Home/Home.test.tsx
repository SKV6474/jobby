import { JSDOM } from "jsdom";
import { BrowserRouter } from "react-router-dom";

import renderer from "react-test-renderer";
import Home from ".";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
// global.window = dom.window;
global.document = dom.window.document;

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
