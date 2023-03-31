import React from "react";
import { FAILURE_VIEW_LIGHT } from "../../constants/Images";

import {
  FailureContainer,
  FailureContent,
  FailureContentDescription,
  FailureContentTitle,
  FailureImg,
  RetryBtn,
} from "./styledComponets";

const Failure = () => {
  return (
    <FailureContainer>
      <FailureImg src={FAILURE_VIEW_LIGHT} alt="Failure View"></FailureImg>
      <FailureContent>
        <FailureContentTitle>Oops! Something Went Wrong</FailureContentTitle>
        <FailureContentDescription>
          We cannot seem to find the page you are looking for.
        </FailureContentDescription>
        <div>
          <RetryBtn onClick={() => window.location.reload()}>Retry</RetryBtn>
        </div>
      </FailureContent>
    </FailureContainer>
  );
};

export default Failure;
