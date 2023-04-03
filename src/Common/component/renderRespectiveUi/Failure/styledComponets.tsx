import styled from "styled-components";

export const FailureContainer = styled.div<{ css: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.css};
  font-family: Arial, Helvetica, sans-serif;
`;

export const RetryBtnContainer = styled.div<{ css: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.css};
`;

export const FailureImg = styled.img`
  height: 400px;
  width: 500px;
  @media screen and (max-width: 768px) {
    height: 225px;
    width: 300px;
  }
`;

export const FailureContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FailureContentTitle = styled.div`
  font-size: 40px;
  margin: 40px 0 30px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 19px;
    margin: 20px 0 15px;
  }
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin: 10px;
  }
`;

export const FailureContentDescription = styled.div`
  font-size: 16px;
  text-align: center;
  width: 500px;
  color: #f1f5f9;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 250px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  border: 0;
  width: 120px;
  height: 42px;
  @media screen and (max-width: 576px) {
    height: 30px;
    padding: 8px 15px;
  }
`;
