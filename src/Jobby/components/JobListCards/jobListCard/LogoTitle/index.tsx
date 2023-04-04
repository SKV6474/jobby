import React from "react";

import { LogoTitleContainerProps } from "../../../../interface";

import {
  Icons,
  Logo,
  LogoContainer,
  TitleContainer,
  TitleRatingContainer,
} from "../styledComponents";

const LogoTitleContainer = (props: LogoTitleContainerProps) => {
  const { companyLogo, title, rating } = props;

  return (
    <TitleContainer>
      <LogoContainer>
        <Logo src={companyLogo} alt="logo"></Logo>
      </LogoContainer>
      <TitleRatingContainer>
        <div>{title}</div>
        <div>
          <Icons
            className="fa-solid fa-star"
            style={{ color: " #fbbf24" }}
          ></Icons>
          {rating}
        </div>
      </TitleRatingContainer>
    </TitleContainer>
  );
};

export default LogoTitleContainer;
