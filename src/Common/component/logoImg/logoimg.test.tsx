import LogoImg from ".";
import renderer from "react-test-renderer";

describe("Logo Img", () => {
  test("Logo Img SnapShot", () => {
    const tree = renderer.create(<LogoImg />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
