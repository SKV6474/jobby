import Cookies from "js-cookie";

import { PROFILE_API } from "../../constants/ApiCalls";
import { handleResponse } from "../../utils";
import { profileObjectFixtureData } from "./index.fixture";
class ProfileService {
  profileApi = async () => {
    const response = await fetch(PROFILE_API, {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });

    return handleResponse(response);
  };

  fixtureProfileApi = () => {
    return profileObjectFixtureData;
  };
}

export default ProfileService;
