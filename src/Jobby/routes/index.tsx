import ProtectedRoute from "../../Authentication/components/ProtectedRoute";
import NotFoundPage from "../../Common/component/NotFoundPage";

import HomeRoute from "./HomeRoute";
import JobFullDescriptionRoute from "./JobFullDescriptionRoute";
import JobListRoute from "./JobListRoute";

export const JobbyAllRouteContainer = [
  <ProtectedRoute key="/" exact path="/" component={HomeRoute} />,
  <ProtectedRoute key="/jobs" exact path="/jobs" component={JobListRoute} />,
  <ProtectedRoute
    key="/jobs/:id"
    exact
    path="/jobs/:id"
    component={JobFullDescriptionRoute}
  />,
  <ProtectedRoute
    key="/not-found"
    exact
    path="/not-found"
    component={NotFoundPage}
  />,
];
