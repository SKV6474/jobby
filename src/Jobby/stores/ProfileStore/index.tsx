import { action, observable } from "mobx";

import { ApiStatus, ProfileObjectType } from "../../interface";

class ProfileStore {
  @observable ProfileDetail: ProfileObjectType = {
    profile_details: { name: "", profile_image_url: "", short_bio: "" },
  };
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  profileService: any;

  constructor(service: any) {
    this.profileService = service;
  }

  @action.bound
  fetchProfile = async () => {
    try {
      const Response = await this.profileService.profileApi();

      if (Response.data !== "none") {
        this.ProfileDetail = Response.data;
        this.ApiStatus = Response.ApiStatus;
      } else {
        this.ApiStatus = ApiStatus.failure;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  fetchFixtureData = () => {
    const response = this.profileService.fixtureProfileApi();
    this.ProfileDetail = response;
    this.ApiStatus = ApiStatus.success;
  };
}

export default ProfileStore;
