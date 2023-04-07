import { ProfileApi } from "./index.api";
import Cookies from "js-cookie";
import {
  profileObjectFixtureData,
  profileObjectFixtureDataForFailure,
} from "./index.fixture";
import { PROFILE_API } from "../../constants/ApiCalls";

// jest.mock("js-cookie");

describe("ProfileApi", () => {
  it("Returns the expected profile object", async () => {
    cy.request(PROFILE_API)
      .its("body")
      .should("deep.eq", profileObjectFixtureDataForFailure);

    // const mockResponse = {
    //   json: jest.fn().mockResolvedValue(profileObjectFixtureData),
    // };
    // global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // // const mockFailureResponse = {
    // //   json: jest.fn().mockRejectedValue(profileObjectFixtureDataForFailure),
    // // };
    // // global.fetch = jest.fn().mockRejectedValue(mockFailureResponse);

    // const result = await ProfileApi();

    // expect(result).toEqual(profileObjectFixtureData);
    // assert.

    // expect(fetch).toHaveBeenCalledWith(PROFILE_API, {
    //   method: "GET",
    //   headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    // });
  });
});

// import { ApiStatus } from "../../interface";
// import { ProfileApi } from "./index.api";
// // import fetch from "node-fetch";
// import fetchMock from "fetch-mock";
// import Cookies from "js-cookie";
// import { PROFILE_API } from "../../constants/ApiCalls";

// import { profileObjectFixtureData } from "./index.fixture";

// const ProfileApiFunc = require("./index.api");

// describe("Profile Api", () => {
//   test("test for ProfileApi", async () => {
//     const response = await ProfileApi();

//     const jwtToken = Cookies.get("jwt_token");
//     const mockResponse = ProfileApiFunc;

//     fetchMock.get(PROFILE_API, mockResponse, {
//       headers: { Authorization: `Bearer ${jwtToken}` },
//     });

//     expect(fetchMock.calls()).toHaveLength(1);
//     expect(fetchMock.lastUrl()).toEqual(PROFILE_API);
//   });
// });
