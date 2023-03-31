import styled from "styled-components";

export const JobsContainer = styled.div`
  display: flex;
  color: #fff;
  padding: 25px 40px 0 50px;
  @media screen and (max-width: 768px) {
    padding: 25px 20px 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const JobListContainer = styled.div`
  width: calc(100% - 300px);
`;
