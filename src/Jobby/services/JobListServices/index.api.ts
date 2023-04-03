import Cookies from "js-cookie";
import { ApiStatus } from "../../interface";

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

export const callJobList = async () => {
  const Response = await fetch("https://apis.ccbp.in/jobs", {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });

  return handleResponse(Response);
};
