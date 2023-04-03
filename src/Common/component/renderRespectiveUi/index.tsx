import { LoadingWrapperProp } from "../../interface";
import Failure from "./Failure/index";
import Loader from "./Loader/index";

const LoadingWrapper = (props: LoadingWrapperProp): any => {
  const { apiStatus, renderSuccessUi, css, type } = props;

  const renderRespectiveViewOfLoading = () => {
    switch (apiStatus) {
      case "initial":
      case "loading":
        return Loader(css);
      case "success":
        return renderSuccessUi();
      case "failure":
        return Failure(css, type);
    }
  };
  return renderRespectiveViewOfLoading();
};

export default LoadingWrapper;
