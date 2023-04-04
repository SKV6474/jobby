import { observer } from "mobx-react";
import React, { useEffect } from "react";

import LoadingWrapper from "../../../Common/component/renderRespectiveUi";

import JobListCard from "../../components/JobListCards";
import NoSearchResults from "../../components/NoSearchResults";
import Searchinput from "../../components/SearchBar";
import SideBar from "../../components/SideBar";
import WithHeader from "../../hocs/withHeader";
import { ApiStatus } from "../../interface";
import { jobList, profileDetail } from "../../stores";

import {
  JobListContainer,
  JobsContainer,
  LoaderWrapperContainerForJobList,
  NoSearchResultContainer,
  SerachAbove768,
  SerachBelow768,
} from "./styledComponent";

const JobListRoute = observer(() => {
  const profileDetails = profileDetail.ProfileDetail;
  const allJobList = jobList.jobList;
  const customApi = jobList.coustomApi;

  useEffect(() => {
    jobList.fetchJobListData();

    if (profileDetail.ApiStatus !== ApiStatus.success) {
      profileDetail.fetchProfile();
    }
  }, [customApi]);

  const handleSearching = (input: string) => {
    jobList.updateSearch(`search=${input}`);
  };

  const handleEmploymentType = (array: string[]) => {
    const emplomentTypeString: string = array.join(",");
    jobList.updateEmploymentType(`employment_type=${emplomentTypeString}`);
  };

  const handlePackage = (array: string[]) => {
    const packageString: string = array.join(",");
    jobList.updatePackage(packageString);
  };

  const renderSuccessUi = () => {
    return (
      <>
        {jobList.jobList.length > 0 ? (
          <JobListCard jobList={allJobList} />
        ) : (
          <NoSearchResultContainer>
            <NoSearchResults />
          </NoSearchResultContainer>
        )}
      </>
    );
  };

  return (
    <JobsContainer>
      <SerachBelow768>
        <Searchinput onChange={handleSearching} />
      </SerachBelow768>
      <SideBar
        onChangeEmployment={handleEmploymentType}
        onChangePackage={handlePackage}
        ProfileDetail={profileDetails}
        apiStatus={profileDetail.ApiStatus}
      />
      <JobListContainer>
        <SerachAbove768>
          <Searchinput onChange={handleSearching} />
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
