import React from "react";
import { observer } from "mobx-react";

import LoadingWrapper from "../../../Common/component/renderRespectiveUi";

import { SideBarProps } from "../../interface";

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

const SideBar = observer((props: SideBarProps) => {
  const { ProfileDetail, apiStatus, onChangePackage, onChangeEmployment } =
    props;

  const { profile_details } = ProfileDetail;
  const { name, profile_image_url, short_bio } = profile_details;

  let ApiSearchArrayMinimumPackage: string[] = [];
  let ApiSearchArrayEmpolymentType: string[] = [];

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

  const handleLPAPackage = () => {
    ApiSearchArrayMinimumPackage = [];
    const input = document.querySelector('input[name="LPAValue"]:checked');
    if (input !== null) {
      const value = (input as HTMLInputElement).value;
      ApiSearchArrayMinimumPackage.push(`minimum_package=${value}`);
    }
    onChangePackage(ApiSearchArrayMinimumPackage);
  };

  const handleEmploymentType = () => {
    ApiSearchArrayEmpolymentType = [];
    let markedCheckbox = document.getElementsByName("EmploymentType");
    markedCheckbox.forEach((ele: any) => {
      if (ele.checked) {
        ApiSearchArrayEmpolymentType.push(ele.value);
      }
    });
    onChangeEmployment(ApiSearchArrayEmpolymentType);
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
        <EmploymentType onClick={handleEmploymentType}>
          <InputEmployment
            type="checkbox"
            id="FullTime"
            name="EmploymentType"
            value="FULLTIME"
          />{" "}
          Full Time
        </EmploymentType>
        <EmploymentType onClick={handleEmploymentType}>
          <InputEmployment
            type="checkbox"
            id="PartTime"
            name="EmploymentType"
            value="PARTTIME"
          />{" "}
          Part Time
        </EmploymentType>
        <EmploymentType onClick={handleEmploymentType}>
          <InputEmployment
            type="checkbox"
            id="Freelance"
            name="EmploymentType"
            value="FREELANCE"
          />{" "}
          Freelance
        </EmploymentType>
        <EmploymentType onClick={handleEmploymentType}>
          <InputEmployment
            type="checkbox"
            name="EmploymentType"
            id="Internship"
            value="INTERNSHIP"
          />{" "}
          Internship
        </EmploymentType>
      </InputContainer>
      <LinkBreak />
      <InputContainer>
        <div>Salary Range</div>
        <EmploymentType onClick={handleLPAPackage}>
          <InputEmployment
            type="radio"
            id="10 LPA and above"
            name="LPAValue"
            value="1000000"
          />
          <label htmlFor="10 LPA and above">10 LPA and above</label>
        </EmploymentType>
        <EmploymentType onClick={handleLPAPackage}>
          <InputEmployment
            type="radio"
            id="20 LPA and above"
            name="LPAValue"
            value="2000000"
          />
          <label htmlFor="20 LPA and above">20 LPA and above</label>
        </EmploymentType>
        <EmploymentType onClick={handleLPAPackage}>
          <InputEmployment
            type="radio"
            id="30 LPA and above"
            name="LPAValue"
            value="3000000"
          />
          <label htmlFor="30 LPA and above">30 LPA and above</label>
        </EmploymentType>
        <EmploymentType onClick={handleLPAPackage}>
          <InputEmployment
            type="radio"
            id="40 LPA and above"
            name="LPAValue"
            value="4000000"
          />
          <label htmlFor="40 LPA and above">40 LPA and above</label>
        </EmploymentType>
      </InputContainer>
    </SidebarContainer>
  );
});
export default SideBar;
