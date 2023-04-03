import { ThreeDots } from "react-loader-spinner";
import { LoaderContainer } from "./styledComponents";
import "styled-components/macro";

const Loader = (css: string) => {
  return (
    <LoaderContainer
      className="loader-container"
      data-testid="loader"
      css={css}
    >
      <ThreeDots color="#fff" height={50} width={50} />
    </LoaderContainer>
  );
};

export default Loader;
