import React from "react";

import { JobListType } from "../../../interface";

import LocationEmploymentType from "./LocationEmploymentType";
import LogoTitleContainer from "./LogoTitle";
import {
  CardContainer,
  Description,
  DescriptionTitle,
  JobDescriptionListLink,
  LinkBreak,
  LocationETypePackage,
} from "./styledComponents";

const JobCard = (props: { jobData: JobListType }) => {
  const { jobData } = props;

  const {
    company_logo_url,
    employment_type,
    id,
    job_description,
    location,
    package_per_annum,
    rating,
    title,
  } = jobData;

  return (
    <JobDescriptionListLink to={`/jobs/${id}`}>
      <CardContainer>
        <LogoTitleContainer
          companyLogo={company_logo_url}
          title={title}
          rating={rating}
        />
        <LocationETypePackage>
          <LocationEmploymentType
            EmploymentType={employment_type}
            Location={location}
          />
          <div>{package_per_annum}</div>
        </LocationETypePackage>
        <LinkBreak />
        <div>
          <DescriptionTitle>Description</DescriptionTitle>
          <Description>{job_description}</Description>
        </div>
      </CardContainer>
    </JobDescriptionListLink>
  );
};

export default JobCard;
