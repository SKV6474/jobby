import styled from "styled-components";

export const SkillContainerDiv = styled.div`
  display: flex;
  align-items: center;

  width: 345px;
  height: 100px;
  @media screen and (max-width: 843px) {
    width: 275px;
  }
  @media screen and (max-width: 655px) {
    width: 200px;
  }
  @media screen and (max-width: 483px) {
    width: 150px;
  }
  @media screen and (max-width: 383px) {
    width: 135px;
  }
`;

export const SkillImgContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const SkillImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;
