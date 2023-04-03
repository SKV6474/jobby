import styled from "styled-components";

export const JobsContainer = styled.div`
  display: flex;
  color: #fff;
  padding: 25px 40px 0 50px;
  @media screen and (max-width: 768px) {
    padding: 25px 20px 0;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 95px);
  }
  @media screen and (max-width: 768px) {
    padding: 15px 20px 0;
  }
`;

export const JobListContainer = styled.div`
  width: calc(100% - 295px);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    height: 321px;
  }
`;

export const SerachBelow768 = styled.div`
  display: none;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

export const SerachAbove768 = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LoaderWrapperContainerForJobList = `
   height:calc(100vh - 185px);
  
`;
