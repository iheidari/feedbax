import React from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

const Router = ({ match }) => {
  return (
    <>
      <Route path={`${match.url}`} exact component={List} />
      <Route path={`${match.url}/add`} component={Add} />
      <Route path={`${match.url}/edit/:id`} component={Edit} />
    </>
  );
};

export default Router;
