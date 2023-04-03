import styled from "styled-components";

export const AllJobCardContainer = styled.div`
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

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100vh - 185px);
  padding: 30px 0 0;
  @media screen and (max-width: 768px) {
    padding: 2px;
    height: calc(100vh - 644px);
  }
  @media screen and (max-width: 576px) {
    padding: 2px;
    height: calc(100vh - 512px);
  }
`;
