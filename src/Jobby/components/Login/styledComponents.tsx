import styled from "styled-components";

export const AppDiv = styled.div`
  height: 100vh;
  background-color: #000;
`;

export const LoginWrapper = styled.div`
  height: 100vh;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginDiv = styled.div`
  width: 340px;
  height: 425px;
  background-color: #2c2b2b;
  padding: 0 50px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
    margin: 0 20px;
    padding: 0 20px;
  }
`;

export const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 50px;
`;
