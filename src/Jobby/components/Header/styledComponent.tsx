import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 90px;
  background-color: #202020;
  @media screen and (max-width: 768px) {
    height: 70px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px 40px 15px 50px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  font-size: 18px;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconLinks = styled(NavLink)`
  display: none;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoutBtn = styled.button`
  padding: 10px 25px;
  background-color: #6366f1;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoutIcon = styled.i`
  display: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const IconContainerDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
  }
`;
