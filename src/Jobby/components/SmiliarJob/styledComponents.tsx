import styled from "styled-components";

export const SimiliarCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SmiliarJobTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px 0;
  @media screen and (max-width: 768px) {
    font-size: 22px;

    margin: 20px 0;
  }
`;

// SimiliarCardContainer > :nth-child(even) {

// }
