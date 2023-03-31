import styled from "styled-components";

export const SearchImageContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 95vw;
    /* margin-bottom: 5px; */
  }
`;

export const SearchInput = styled.input`
  color: #909090;
  width: 400px;
  height: 38px;
  padding: 5px 10px;
  outline: none;

  background-color: transparent;
  border: 1px solid #909090;
  border-right: 0;
  border-radius: 10px;
`;

export const SearchImg = styled.i`
  cursor: pointer;
  color: #909090;
  padding: 10px 30px;
  border: 1px solid #909090;
  border-radius: 10px;
  border-left: 0;
  background-color: #272727;
`;
