import React from "react";

import LogoImg from "../../../Common/component/logoImg";
import { Props } from "../../interface";
import { RemoveCookies } from "../../utils";
import {
  HeaderContainer,
  HeaderWrapper,
  IconContainerDiv,
  IconLinks,
  LinkContainer,
  Links,
  LogoutBtn,
  LogoutIcon,
} from "./styledComponent";

const Header = (props: Props) => {
  const { history } = props;

  const handleLogout = () => {
    history.replace("/login");
    RemoveCookies();
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div>
          <LogoImg></LogoImg>
        </div>
        <LinkContainer>
          <div>
            <Links to="/">Home</Links>
          </div>
          <div>
            <Links to="/jobs">Jobs</Links>
          </div>
        </LinkContainer>
        <IconContainerDiv>
          <IconLinks to="/">
            <i className="fa-solid fa-house"></i>
          </IconLinks>
          <IconLinks to="/jobs">
            <i className="fa-solid fa-briefcase"></i>
          </IconLinks>
          <LogoutIcon
            className="fa-solid fa-arrow-right-from-bracket"
            onClick={handleLogout}
          ></LogoutIcon>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </IconContainerDiv>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
