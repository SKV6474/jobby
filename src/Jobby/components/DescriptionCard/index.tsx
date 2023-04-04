import React from "react";

import { JobDescriptionCompanyDetails, SkillsObject } from "../../interface";

import LocationEmploymentType from "../JobListCards/jobListCard/LocationEmploymentType";
import LogoTitleContainer from "../JobListCards/jobListCard/LogoTitle";
import {
  LinkBreak,
  LocationETypePackage,
} from "../JobListCards/jobListCard/styledComponents";

import Skills from "./skills";

import {
  DescriptionCardContainer,
  DescriptionDetailsContainer,
  DescriptionLinkContainer,
  LifeAtCompanyDescriptionContainer,
  LifeAtCompanyTitle,
  LifeCultureImgContainer,
  SkillContainerDiv,
  SkillTitle,
  VisitLink,
} from "./styledComponents";

const JobDescriptionCard = (props: {
  jobDetails: JobDescriptionCompanyDetails;
}) => {
  const {
    company_logo_url,
    title,
    rating,
    employment_type,
    location,
    package_per_annum,
    company_website_url,
    job_description,
    skills,
    life_at_company,
  } = props.jobDetails;

  const skillsList = skills.map((ele: SkillsObject) => (
    <Skills key={ele.name} skill={ele} />
  ));

  return (
    <DescriptionCardContainer>
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
        <DescriptionLinkContainer>
          <div>Description</div>
          <div>
            <VisitLink href={company_website_url} target="_blank">
              Visit <i className="fa-solid fa-arrow-up-right-from-square" />
            </VisitLink>
          </div>
        </DescriptionLinkContainer>
        <DescriptionDetailsContainer>
          {job_description}
        </DescriptionDetailsContainer>
      </div>
      <div>
        <SkillTitle>Skills</SkillTitle>
        <SkillContainerDiv>{skillsList}</SkillContainerDiv>
      </div>
      <div>
        <LifeAtCompanyTitle>Life At Company</LifeAtCompanyTitle>
        <LifeAtCompanyDescriptionContainer>
          <div>{life_at_company.description}</div>
          <LifeCultureImgContainer>
            <img src={life_at_company.image_url} alt="Life At Company"></img>
          </LifeCultureImgContainer>
        </LifeAtCompanyDescriptionContainer>
      </div>
    </DescriptionCardContainer>
  );
};

export default JobDescriptionCard;
