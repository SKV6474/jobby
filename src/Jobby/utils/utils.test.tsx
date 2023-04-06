import Cookies from "js-cookie";
import { handleResponse, RemoveCookies } from "./index";

test("Test For RemoveCookies", () => {
  RemoveCookies();
  expect(Cookies.get("jwt_token")).toBeUndefined();
});
