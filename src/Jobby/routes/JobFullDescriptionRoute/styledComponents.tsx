import styled from "styled-components";

export const JobDescriptionContainer = styled.div`
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #909090;
  }

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 25px 40px 0 50px;
  height: calc(100vh - 115px);
  @media screen and (max-width: 768px) {
    padding: 25px 20px 0;
    /* align-items: center; */
  }
  @media screen and (max-width: 768px) {
    padding: 15px 20px 0;
  }
`;

export const LoaderAndFailureContainer = `
height: calc(100vh - 120px);
`;
