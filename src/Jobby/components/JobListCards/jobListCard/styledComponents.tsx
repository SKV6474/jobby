import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const JobDescriptionListLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 275px;
  border-radius: 10px;
  padding: 30px 20px;
  background-color: #202020;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    padding: 15px 20px;
    margin-bottom: 10px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media screen and (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled.div`
  height: 55px;
  width: 55px;
  margin-right: 15px;
  @media screen and (max-width: 576px) {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: middle;
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const LocationETypePackage = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const Icons = styled.i`
  margin-right: 10px;
`;

export const LinkBreak = styled.div`
  background-color: #475569;
  height: 2px !important;
  border-radius: 5px;
  margin: 20px 0;
  @media screen and (max-width: 576px) {
    margin: 14px 0;
  }
`;

export const DescriptionTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const Description = styled.div`
  line-height: 1.5;
  @media screen and (max-width: 576px) {
    font-size: 15px;
    line-height: 1.25;
  }
`;
