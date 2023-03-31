import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png");
  background-position: 50% 50%;
  height: calc(100vh - 90px);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px 40px 0 50px;
  @media screen and (max-width: 768px) {
    background-image: url("https://assets.ccbp.in/frontend/react-js/home-sm-bg.png");
    padding: 20px 20px 0px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 650px;
  height: 100%;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 768px) {
    width: calc(100vw - 40px);
    justify-content: flex-start;
  }
`;

export const TitleContainer = styled.div`
  font-size: 70px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const DescriptionContainer = styled.div`
  font-size: 28px;
  line-height: 1.25;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  background-color: #6366f1;
  padding: 15px 20px;
  border-radius: 5px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    padding: 10px 15px;
  }
`;
