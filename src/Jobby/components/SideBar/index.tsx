import { inject, observer } from "mobx-react";
import React from "react";
import LoadingWrapper from "../../../Common/component/renderRespectiveUi";
import { ApiStatus, ProfileObjectType } from "../../interface";
import {
  EmploymentType,
  InputContainer,
  InputEmployment,
  LinkBreak,
  Name,
  ProfileContainer,
  ProfileContainerHeightProps,
  ProfileImg,
  ShortBio,
  SidebarContainer,
} from "./styledComponent";

const SideBar = observer(
  (props: { ProfileDetail: ProfileObjectType; apiStatus: ApiStatus }) => {
    const { ProfileDetail, apiStatus } = props;
    const { profile_details } = ProfileDetail;
    const { name, profile_image_url, short_bio } = profile_details;

    const renderSuccessUi = () => {
      return (
        <>
          <ProfileContainer>
            <div>
              <ProfileImg src={profile_image_url} alt="Profile"></ProfileImg>
              <Name>{name}</Name>
              <ShortBio>{short_bio}</ShortBio>
            </div>
          </ProfileContainer>
        </>
      );
    };

    return (
      <SidebarContainer>
        <LoadingWrapper
          renderSuccessUi={renderSuccessUi}
          apiStatus={apiStatus}
          css={ProfileContainerHeightProps}
          type="profile"
        />

        <LinkBreak />
        <InputContainer>
          <div>Type Of Employment</div>
          <EmploymentType>
            <InputEmployment type="checkbox" /> Full Time
          </EmploymentType>
          <EmploymentType>
            <InputEmployment type="checkbox" /> Part Time
          </EmploymentType>
          <EmploymentType>
            <InputEmployment type="checkbox" /> Freelance
          </EmploymentType>
          <EmploymentType>
            <InputEmployment type="checkbox" /> Internship
          </EmploymentType>
        </InputContainer>
        <LinkBreak />
        <InputContainer>
          <div>Salary Range</div>
          <EmploymentType>
            <InputEmployment type="radio" /> Full Time
          </EmploymentType>
          <EmploymentType>
            <InputEmployment type="radio" /> Full Time
          </EmploymentType>
          <EmploymentType>
            <InputEmployment type="radio" /> Full Time
          </EmploymentType>
          <EmploymentType>
            <InputEmployment type="radio" /> Full Time
          </EmploymentType>
        </InputContainer>
      </SidebarContainer>
    );
  }
);
export default SideBar;
