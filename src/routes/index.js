import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Order from '~/pages/Orders';
import Courier from '~/pages/Couriers';
import Recipient from '~/pages/Recipients';
import Problems from '~/pages/Delivery/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" component={Order} isPrivate />
      <Route path="/couriers" component={Courier} isPrivate />
      <Route path="/recipients" component={Recipient} isPrivate />
      <Route path="/delivery/problems" component={Problems} isPrivate />
    </Switch>
  );
}
