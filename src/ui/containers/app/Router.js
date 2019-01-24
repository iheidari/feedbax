import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Feedback from "../feedback";

import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={Dashboard} />
        <Route path="/feedback" component={Feedback} />
      </>
    </BrowserRouter>
  );
};

export default Router;
