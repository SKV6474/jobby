import Cookies from "js-cookie";

import { PROFILE_API } from "../../constants/ApiCalls";
import { handleResponse } from "../../utils";

export const ProfileApi = async () => {
  const response = await fetch(PROFILE_API, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });

  return handleResponse(response);
};
