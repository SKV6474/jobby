import styled from "styled-components";

export const DescriptionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  padding: 40px 30px;
  background-color: #202020;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    padding: 15px 20px;
    margin-bottom: 10px;
  }
`;

export const DescriptionLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

export const VisitLink = styled.a`
  text-decoration: none;
  color: #b6c5ff;
  font-size: 16px;
`;

export const DescriptionDetailsContainer = styled.div`
  line-height: 1.5;
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const SkillContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillTitle = styled.div`
  margin: 40px 0 20px;
  font-size: 24px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    margin: 30px 0 15px;
    font-size: 22px;
  }
`;

export const LifeAtCompanyTitle = styled.div`
  margin: 20px 0 30px;
  font-size: 24px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    margin: 10px 0 20px;
    font-size: 22px;
  }
`;

export const LifeCultureImgContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const LifeAtCompanyDescriptionContainer = styled.div`
  display: flex;
  line-height: 1.5;
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
