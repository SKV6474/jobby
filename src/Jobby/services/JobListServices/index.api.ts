import Cookies from "js-cookie";

import { JOBS_API } from "../../constants/ApiCalls";
import { handleResponse } from "../../utils";
import { jobListFixtureDataList } from "./index.fixture";

export const callJobList = async (input: string[]) => {
  if (input.length > 0) {
    const Response = await fetch(
      `https://apis.ccbp.in/jobs?${input.join("&")}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
      }
    );

    return handleResponse(Response);
  } else {
    const Response = await fetch(JOBS_API, {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });

    return handleResponse(Response);
  }
};

export const fixtureJobList = () => {
  return jobListFixtureDataList;
};
