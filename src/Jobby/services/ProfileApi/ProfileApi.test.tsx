import { ProfileApi } from "./index.api";
import Cookies from "js-cookie";
import {
  profileObjectFixtureData,
  profileObjectFixtureDataForFailure,
} from "./index.fixture";
import { PROFILE_API } from "../../constants/ApiCalls";

jest.mock("js-cookie");

describe("ProfileApi", () => {
  it("Returns the expected profile object", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue(profileObjectFixtureData),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // const mockFailureResponse = {
    //   json: jest.fn().mockRejectedValue(profileObjectFixtureDataForFailure),
    // };
    // global.fetch = jest.fn().mockRejectedValue(mockFailureResponse);

    const result = await ProfileApi();

    expect(result).toEqual(profileObjectFixtureDataForFailure);

    // expect(fetch).toHaveBeenCalledWith(PROFILE_API, {
    //   method: "GET",
    //   headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    // });
  });
});
