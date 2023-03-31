import { action, observable } from "mobx";
import { ApiStatus } from "../../interface";
import { ProfileObjectType } from "../../interface";
import { ProfileApi } from "../../services/index.api";

class ProfileStore {
  @observable ProfileDetail: ProfileObjectType = {
    profile_details: { name: "", profile_image_url: "", short_bio: "" },
  };
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchProfile = async () => {
    try {
      const Response = await ProfileApi();

      if (Response.data !== "none") {
        console.log("Mobx", Response.data.profile_details);
        this.ProfileDetail = Response.data;
      } else {
        this.ApiStatus = ApiStatus.failure;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };
}

export default ProfileStore;