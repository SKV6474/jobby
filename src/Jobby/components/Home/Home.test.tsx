import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Home from ".";

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
