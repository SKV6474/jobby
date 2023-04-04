import Cookies from "js-cookie";
import { ApiStatus } from "../interface";

export const RemoveCookies = () => {
  Cookies.remove("jwt_token");
};

export const handleResponse = async (response: any) => {
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
