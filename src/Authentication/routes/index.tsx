import { Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import { LOGIN } from "../constants/Path";

import LoginRoute from "./LoginAuthPage";

export const AuthenticationRoute = [
  <Route key={LOGIN} exact path={LOGIN} component={LoginRoute} />,
];
