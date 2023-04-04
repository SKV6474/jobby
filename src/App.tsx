import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { AuthenticationRoute } from "./Authentication/routes";
import { JobbyAllRouteContainer } from "./Jobby/routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {AuthenticationRoute}
        {JobbyAllRouteContainer}
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
