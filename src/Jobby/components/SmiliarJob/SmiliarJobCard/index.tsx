import React from "react";

import { SimilarJobObject } from "../../../interface";

import LocationEmploymentType from "../../JobListCards/jobListCard/LocationEmploymentType";
import LogoTitleContainer from "../../JobListCards/jobListCard/LogoTitle";

import {
  LogoTitleContainerDiv,
  SimiliarJobDetailsContainer,
  SmiliarJobDescriptionDetails,
  SmiliarJobDescriptionTitle,
  SmiliarJobLink,
} from "./styledComponents";

const SimiliarJobCard = (props: { object: SimilarJobObject }) => {
  const {
    company_logo_url,
    employment_type,
    job_description,
    location,
    rating,
    title,
    id,
  } = props.object;

  return (
    <SmiliarJobLink exact to={`/jobs/${id}`}>
      <SimiliarJobDetailsContainer className="ChildDiv">
        <LogoTitleContainerDiv>
          <LogoTitleContainer
            companyLogo={company_logo_url}
            title={title}
            rating={rating}
          />
        </LogoTitleContainerDiv>
        <SmiliarJobDescriptionTitle>Description</SmiliarJobDescriptionTitle>
        <SmiliarJobDescriptionDetails>
          {job_description}
        </SmiliarJobDescriptionDetails>
        <div>
          <LocationEmploymentType
            EmploymentType={employment_type}
            Location={location}
          />
        </div>
      </SimiliarJobDetailsContainer>
    </SmiliarJobLink>
  );
};

export default SimiliarJobCard;
