import styled from "styled-components";

export const SearchImageContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
  width: 376px;
  @media screen and (max-width: 576px) {
    width: 295px;
    height: 25px;
  }
`;

export const SearchInput = styled.input`
  color: #909090;
  width: 300px;
  height: 38px;
  padding: 5px 10px;
  outline: none;
  border: 0;
  background-color: transparent;
  border-radius: 5px 0px 0px 5px;
  @media screen and (max-width: 576px) {
    width: 295px;
    height: 20px;
  }
`;

export const SearchImg = styled.i`
  cursor: pointer;
  color: #f8fafc;
  padding: 10px 30px;
  border: 0;
  border-radius: 0 5px 5px 0;
  background-color: #272727;
  @media screen and (max-width: 576px) {
    height: 14px;
    padding: 5px 20px;
  }
`;
