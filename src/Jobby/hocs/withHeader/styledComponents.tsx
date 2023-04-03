import styled from "styled-components";

export const WrappedComponentContainer = styled.div`
  background-color: #121212;
  height: calc(100vh - 90px);
  @media screen and (max-width: 768px) {
    height: calc(100vh - 70px);
  }
`;

export const MaxWidthDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
