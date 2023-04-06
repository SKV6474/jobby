import renderer from "react-test-renderer";
import NotFoundPage from ".";

describe("Logo Img", () => {
  test("Logo Img SnapShot", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
