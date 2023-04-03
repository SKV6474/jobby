import styled from "styled-components";

export const LoaderContainer = styled.div<{ css: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.css};
`;
