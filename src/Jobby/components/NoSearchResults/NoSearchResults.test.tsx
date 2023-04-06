import renderer from "react-test-renderer";
import NoSearchResults from ".";

it("renders correctly", () => {
  const tree = renderer.create(<NoSearchResults />).toJSON();
  expect(tree).toMatchSnapshot();
});
