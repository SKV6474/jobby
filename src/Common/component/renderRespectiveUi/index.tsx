import { LoadingWrapperProp } from "../../interface";
import Failure from "./Failure/index";
import Loader from "./Loader/index";

const LoadingWrapper = (props: LoadingWrapperProp): JSX.Element | undefined => {
  const { apiStatus, renderSuccessUi } = props;

  const renderRespectiveViewOfLoading = () => {
    switch (apiStatus) {
      case "initial":
      case "loading":
        return Loader();
      case "success":
        return renderSuccessUi();
      case "failure":
        return Failure();
    }
  };
  return renderRespectiveViewOfLoading();
};

export default LoadingWrapper;
