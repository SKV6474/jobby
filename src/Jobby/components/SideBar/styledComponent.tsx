import styled from "styled-components";

export const SidebarContainer = styled.div`
  margin-right: 20px;
  width: 275px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    width: calc(100vw - 40px);
    height: 475px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
    height: 356px;
  }
`;

export const ProfileContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/profile-bg.png");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 195px;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    background-position: right top;
    padding: 10px;
    height: 150px;
  }
  @media screen and (max-width: 576px) {
    height: 115px;
  }
`;

export const ProfileContainerHeightProps = `
height: 195px;
  @media screen and (max-width: 768px) {    
    height: 150px;
  }
  @media screen and (max-width: 576px) {
    height: 115px;
  }
`;

export const ProfileImg = styled.img`
  @media screen and (max-width: 576px) {
    height: 50px;
  }
`;
export const Name = styled.div`
  color: #6366f1;
  font-size: 18px;
  margin: 8px 0 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 5px 0 10px;
  }
  @media screen and (max-width: 576px) {
    margin: 3px 0 8px;
  }
`;

export const ShortBio = styled.div`
  color: #475569;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LinkBreak = styled.div`
  background-color: #475569;
  height: 2px;
  border-radius: 5px;
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
  @media screen and (max-width: 576px) {
    margin: 8px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  padding: 10px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 768px) {
    height: 135px;
  }
  @media screen and (max-width: 576px) {
    height: 100px;
    padding: 5px 0 0;
    font-size: 15px;
  }
`;

export const EmploymentType = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const InputEmployment = styled.input`
  height: 15px;
  width: 15px;
  margin: 0 10px 0 0;
`;
