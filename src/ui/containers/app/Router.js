import { Route, Switch } from 'react-router-dom';
import Feedback from '../Feedback';
import Page404 from './Page404';

import React from 'react';

const Router = () => {
  return (
    <Switch>
      <Route path='/feedback' component={Feedback} />
      <Route component={Page404} />
    </Switch>
  );
};

export default Router;
