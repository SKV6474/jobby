import React from "react";
import { FAILURE_VIEW_LIGHT } from "../../../constants/Images";

import {
  FailureContainer,
  FailureContent,
  FailureContentDescription,
  FailureContentTitle,
  FailureImg,
  RetryBtn,
  RetryBtnContainer,
} from "./styledComponets";
import "styled-components/macro";
const Failure = (css: string, type: string) => {
  if (type === "profile") {
    return (
      <RetryBtnContainer css={css}>
        <RetryBtn onClick={() => window.location.reload()}>Retry</RetryBtn>
      </RetryBtnContainer>
    );
  } else {
    return (
      <FailureContainer css={css}>
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
  }
};

export default Failure;
