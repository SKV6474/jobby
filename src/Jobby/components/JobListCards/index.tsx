import React from "react";
import { JobListType } from "../../interface";
import JobCard from "./jobListCard";
import { AllJobCardContainer } from "./styledComponents";

const JobListCard = (props: { jobList: JobListType[] }) => {
  const { jobList } = props;

  let jobCardList: JSX.Element[] = [];

  if (jobList.length > 0) {
    jobCardList = jobList.map((object: JobListType) => (
      <JobCard key={object.id} jobData={object} />
    ));
  }

  return <AllJobCardContainer>{jobCardList}</AllJobCardContainer>;
};

export default JobListCard;
