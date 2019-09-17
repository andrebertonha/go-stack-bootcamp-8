import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import MeetUp from '../pages/Meetup';
import Details from '../pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup" component={MeetUp} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
    </Switch>
  );
}
