import { ApiStatus } from "../../interface";
import { ProfileApi } from "./index.api";
import fetch from "node-fetch";
import fetchMock from "fetch-mock";
import Cookies from "js-cookie";
import { PROFILE_API } from "../../constants/ApiCalls";

test("test for ProfileApi", async () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const response = await ProfileApi();

  const jwtToken = Cookies.get("jwt_token");
  const mockResponse = { message: "success" };

  fetchMock.get(PROFILE_API, mockResponse, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });

  expect(fetchMock.calls()).toHaveLength(1);
  expect(fetchMock.lastUrl()).toEqual(PROFILE_API);

  // expect(response.ApiStatus).toBe("success");
});
