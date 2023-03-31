import { inject, observer, Provider } from "mobx-react";
import React, { useEffect } from "react";
import JobListCard from "../../components/JobListCards";
import Searchinput from "../../components/SearchBar";
import SideBar from "../../components/SideBar";
import WithHeader from "../../hocs/withHeader";
import { profileDetail } from "../../stores";
import { JobListContainer, JobsContainer } from "./styledComponent";

const JobListRoute = observer(() => {
  const profileDetails = profileDetail.ProfileDetail;

  useEffect(() => {
    profileDetail.fetchProfile();
  }, []);

  return (
    <JobsContainer>
      <SideBar ProfileDetail={profileDetails} />
      <JobListContainer>
        <Searchinput />
        <JobListCard></JobListCard>
      </JobListContainer>
    </JobsContainer>
  );
});

export default WithHeader(JobListRoute);
