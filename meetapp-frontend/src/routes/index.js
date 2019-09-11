import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}
