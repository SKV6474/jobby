import { ApiStatus } from "../../Jobby/interface";

export type LoadingWrapperProp = {
  apiStatus: ApiStatus;
  renderSuccessUi: () => JSX.Element;
};
