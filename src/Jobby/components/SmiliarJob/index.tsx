import React from "react";

import { SimilarJobObject } from "../../interface";

import SimiliarJobCard from "./SmiliarJobCard";
import { SimiliarCardContainer, SmiliarJobTitle } from "./styledComponents";

const SmiliarJob = (props: { similarJobs: SimilarJobObject[] }) => {
  const { similarJobs } = props;

  const SimiliarJobCardList = similarJobs.map((ele: SimilarJobObject) => {
    return <SimiliarJobCard key={ele.id} object={ele} />;
  });

  return (
    <>
      <SmiliarJobTitle>Similar Jobs</SmiliarJobTitle>
      <SimiliarCardContainer className="ParentDiv">
        {SimiliarJobCardList}
      </SimiliarCardContainer>
    </>
  );
};

export default SmiliarJob;
