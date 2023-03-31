import ProtectedRoute from "../../Authentication/components/ProtectedRoute";
import HomeRoute from "./HomeRoute";
import JobListRoute from "./JobListRoute";

export const JobbyAllRouteContainer = [
  <ProtectedRoute key="/" exact path="/" component={HomeRoute} />,
  <ProtectedRoute key="/jobs" exact path="/jobs" component={JobListRoute} />,
];
