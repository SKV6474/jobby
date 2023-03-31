import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AuthenticationRoute } from "./Authentication/routes";
import { JobbyAllRouteContainer } from "./Jobby/routes";
import logo from "./logo.svg";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {AuthenticationRoute}
        {JobbyAllRouteContainer}
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
