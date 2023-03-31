import Cookies from "js-cookie";
import { PROFILE_API } from "../constants/ApiCalls";
import { ApiStatus } from "../interface";

const handleResponse = async (response: any) => {
  if (response.ok) {
    const data = await response.json();
    const Response = {
      data: data,
      ApiStatus: ApiStatus.success,
    };
    return Response;
  } else {
    const Response = {
      data: "none",
      ApiStatus: ApiStatus.failure,
    };
    return Response;
  }
};

export const ProfileApi = async () => {
  const response = await fetch(PROFILE_API, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });

  return handleResponse(response);
};
