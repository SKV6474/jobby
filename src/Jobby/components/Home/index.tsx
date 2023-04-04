import React from "react";

import { JOB_ROUTE } from "../../constants/Path";
import { Props } from "../../interface";

import {
  ContentContainer,
  DescriptionContainer,
  HomeContainer,
  Link,
  TitleContainer,
} from "./styledComponents";

const Home = (props: Props) => {
  return (
    <HomeContainer>
      <ContentContainer>
        <TitleContainer>Find The Job That Fits Your Life</TitleContainer>
        <DescriptionContainer>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </DescriptionContainer>
        <div>
          <Link to={JOB_ROUTE}>Find Jobs</Link>
        </div>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
