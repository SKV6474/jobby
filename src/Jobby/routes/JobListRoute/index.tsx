import { inject, observer, Provider } from "mobx-react";
import React, { useEffect } from "react";
import LoadingWrapper from "../../../Common/component/renderRespectiveUi";
import JobListCard from "../../components/JobListCards";
import Searchinput from "../../components/SearchBar";
import SideBar from "../../components/SideBar";
import WithHeader from "../../hocs/withHeader";
import { jobList, profileDetail } from "../../stores";
import {
  JobListContainer,
  JobsContainer,
  LoaderWrapperContainerForJobList,
  SerachAbove768,
  SerachBelow768,
} from "./styledComponent";

const JobListRoute = observer(() => {
  const profileDetails = profileDetail.ProfileDetail;
  const allJobList = jobList.jobList;
  useEffect(() => {
    profileDetail.fetchProfile();
    jobList.fetchJobListData();
  }, []);

  const renderSuccessUi = () => {
    return <JobListCard jobList={allJobList}></JobListCard>;
  };

  return (
    <JobsContainer>
      <SerachBelow768>
        <Searchinput />
      </SerachBelow768>
      <SideBar
        ProfileDetail={profileDetails}
        apiStatus={profileDetail.ApiStatus}
      />
      <JobListContainer>
        <SerachAbove768>
          <Searchinput />
        </SerachAbove768>
        <LoadingWrapper
          type="jobList"
          renderSuccessUi={renderSuccessUi}
          apiStatus={jobList.ApiStatus}
          css={LoaderWrapperContainerForJobList}
        />
      </JobListContainer>
    </JobsContainer>
  );
});

export default WithHeader(JobListRoute);
