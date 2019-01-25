import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard";
import Feedback from "../feedback";
import Page404 from './Page404';

import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/feedback" component={Feedback} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
