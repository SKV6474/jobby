import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import AuthLogin from "../../../Authentication/components/AuthLogin";
import LogoImg from "../../../Common/component/logoImg";
// import LogoImg from "../../../Common/components/logoImg";

import { LoginComponentProp } from "../../../interface/index";

import {
  AppDiv,
  LoginDiv,
  LoginWrapper,
  LogoImgContainer,
} from "./styledComponents";
// import { getFromLocalStorage } from "../../utils";

const LoginComponent = (props: LoginComponentProp) => {
  const { onSubmitForm, HistoryProp } = props;
  const { history } = HistoryProp;

  const handleAuth = (data: any) => {
    if (data.jwt_token) {
      Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
      history.replace("/");
      <Redirect to="/" />;
    } else {
      (
        document.getElementById("Error") as HTMLInputElement
      ).innerHTML = `*${data.error_msg}`;
    }
  };

  return (
    <AppDiv>
      <LoginWrapper>
        <LoginDiv>
          <LogoImgContainer>
            <LogoImg />
          </LogoImgContainer>
          <AuthLogin onSubmitForm={onSubmitForm} onLoginEvent={handleAuth} />
        </LoginDiv>
      </LoginWrapper>
    </AppDiv>
  );
};

export default LoginComponent;
