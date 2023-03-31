// import { observer } from "mobx-react";

import { Props, UserDeatailsType } from "../../../interface/index";
import LoginComponent from "../../../Jobby/components/Login";

import { LoginApi } from "../../services/AuthService/index.api";

const LoginRoute = (props: Props) => {
  const handleSubmit = async (userDetails: UserDeatailsType) => {
    return await LoginApi(userDetails, props);
  };

  return <LoginComponent onSubmitForm={handleSubmit} HistoryProp={props} />;
};
export default LoginRoute;
