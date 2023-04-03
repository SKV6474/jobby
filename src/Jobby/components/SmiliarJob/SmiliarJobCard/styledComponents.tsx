import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SmiliarJobLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export const SimiliarJobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  /* margin-bottom: 30px; */
  background-color: #202020;
  &.ChildDiv {
    margin: 0 20px 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
    &.ChildDiv {
      margin: 0 0px 20px;
    }
  }
`;

export const LogoTitleContainerDiv = styled.div`
  margin-bottom: 10px;
`;

export const SmiliarJobDescriptionTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SmiliarJobDescriptionDetails = styled.div`
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
  margin: 25px 0 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 15px 0 10px;
  }
`;
