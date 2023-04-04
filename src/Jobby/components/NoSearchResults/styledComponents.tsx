import styled from "styled-components";

export const NoSearchDiv = styled.div`
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0px 20px 0;
  }
`;

export const NoSearchImg = styled.img`
  height: 300px;
  width: 400px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
`;

export const NoSearchTitle = styled.div`
  font-size: 24px;
  height: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.COLOR};
  margin: 30px 0 25px;
  @media screen and (max-width: 768px) {
    margin: 15px 0 10px;
    font-size: 22px;
    height: auto;
  }
`;

export const NoSearchContent = styled.div`
  height: 24px;
  color: ${(props) => props.theme.CHILD_TEXT_COLOR};
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
