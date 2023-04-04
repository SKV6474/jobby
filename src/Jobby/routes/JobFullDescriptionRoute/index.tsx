import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingWrapper from "../../../Common/component/renderRespectiveUi";
import JobDescriptionCard from "../../components/DescriptionCard";
import SmiliarJob from "../../components/SmiliarJob";
import WithHeader from "../../hocs/withHeader";
import { JobDescriptionData, Props } from "../../interface";
import { jobDescription } from "../../stores";
import {
  JobDescriptionContainer,
  LoaderAndFailureContainer,
} from "./styledComponents";

const JobFullDescriptionRoute = observer((props: Props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const location = useLocation();

  const jobDescriptionObject: JobDescriptionData =
    jobDescription.JobDescription;

  useEffect(() => {
    jobDescription.fetchJobDescriptionData(id);
  }, [location, id]);

  const renderSuccessUi = () => {
    return (
      <>
        <JobDescriptionCard jobDetails={jobDescriptionObject.job_details} />
        <SmiliarJob similarJobs={jobDescriptionObject.similar_jobs} />
      </>
    );
  };

  return (
    <JobDescriptionContainer>
      <LoadingWrapper
        type="jobFullDescription"
        css={LoaderAndFailureContainer}
        apiStatus={jobDescription.ApiStatus}
        renderSuccessUi={renderSuccessUi}
      />
    </JobDescriptionContainer>
  );
});

export default WithHeader(JobFullDescriptionRoute);
