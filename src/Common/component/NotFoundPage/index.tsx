import React from "react";

import { NOT_FOUND_IMG } from "../../constants/Images";

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundContentDescription,
  NotFoundContentTitle,
  NotFoundImg,
  NotFoundPageWrapper,
} from "./styledComponet";

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <NotFoundContainer>
        <NotFoundImg src={NOT_FOUND_IMG} alt="Not Found"></NotFoundImg>

        <NotFoundContent>
          <NotFoundContentTitle>Page Not Found</NotFoundContentTitle>
          <NotFoundContentDescription>
            We are sorry, the page you requested could not be found
          </NotFoundContentDescription>
        </NotFoundContent>
      </NotFoundContainer>
    </NotFoundPageWrapper>
  );
};
export default NotFoundPage;
