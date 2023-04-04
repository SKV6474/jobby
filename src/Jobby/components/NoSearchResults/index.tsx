import React from "react";

import { NO_JOBS_IMG } from "../../constants/Images";

import {
  NoSearchContent,
  NoSearchDiv,
  NoSearchImg,
  NoSearchTitle,
} from "./styledComponents";

const NoSearchResults = () => {
  return (
    <NoSearchDiv>
      <NoSearchImg src={NO_JOBS_IMG} alt="No Jobs"></NoSearchImg>
      <NoSearchTitle>No Jobs Found"</NoSearchTitle>
      <NoSearchContent>
        We could not find any jobs. Try other filters.
      </NoSearchContent>
    </NoSearchDiv>
  );
};

export default NoSearchResults;
