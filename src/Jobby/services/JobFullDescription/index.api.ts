import Cookies from "js-cookie";

import { handleResponse } from "../../utils";

export const FetchJobFullDetail = async (id: string) => {
  const Response = await fetch(`https://apis.ccbp.in/jobs/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });
  return handleResponse(Response);
};
