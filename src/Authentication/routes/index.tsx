import { Route } from "react-router-dom";

import { LOGIN } from "../constants/Navigation";

import LoginRoute from "./LoginAuthPage";

export const AuthenticationRoute = [
  <Route key={LOGIN} exact path={LOGIN} component={LoginRoute} />,
];
