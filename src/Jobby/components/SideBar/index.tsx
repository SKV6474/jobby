import { inject, observer } from "mobx-react";
import React from "react";
import { ProfileObjectType } from "../../interface";
import {
  EmploymentType,
  InputContainer,
  InputEmployment,
  LinkBreak,
  Name,
  ProfileContainer,
  ShortBio,
  SidebarContainer,
} from "./styledComponent";

const SideBar = observer((props: { ProfileDetail: ProfileObjectType }) => {
  const { ProfileDetail } = props;
  const { profile_details } = ProfileDetail;
  const { name, profile_image_url, short_bio } = profile_details;

  return (
    <SidebarContainer>
      <ProfileContainer>
        <div>
          <img src={profile_image_url} alt="Profile"></img>
          <Name>{name}</Name>
          <ShortBio>{short_bio}</ShortBio>
        </div>
      </ProfileContainer>
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
});
export default SideBar;
