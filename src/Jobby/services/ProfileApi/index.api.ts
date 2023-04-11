import Cookies from "js-cookie";

import { PROFILE_API } from "../../constants/ApiCalls";
import { handleResponse } from "../../utils";
import { profileObjectFixtureData } from "./index.fixture";

export const ProfileApi = async () => {
  const response = await fetch(PROFILE_API, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });

  return handleResponse(response);
};

export const fixtureProfileApi = () => {
  return profileObjectFixtureData;
};
