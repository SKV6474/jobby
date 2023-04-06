import renderer from "react-test-renderer";
import Searchinput from ".";

function handleSearching(input: string): void {}

it("renders correctly", () => {
  const tree = renderer
    .create(<Searchinput onChange={handleSearching} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
