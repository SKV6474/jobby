import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

import { LOGIN } from "../../constants/Path";

const ProtectedRoute = (props: any) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to={LOGIN} />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
