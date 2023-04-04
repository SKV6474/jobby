import LoginComponent from "../../../Jobby/components/Login";

import { Props, UserDeatailsType } from "../../interface";
import { LoginApi } from "../../services/AuthService/index.api";

const LoginRoute = (props: Props) => {
  const handleSubmit = async (userDetails: UserDeatailsType) => {
    return await LoginApi(userDetails, props);
  };

  return <LoginComponent onSubmitForm={handleSubmit} HistoryProp={props} />;
};
export default LoginRoute;
