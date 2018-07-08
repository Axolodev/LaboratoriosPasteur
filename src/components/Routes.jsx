import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageHome from './PageHome';
import PageAbout from './PageAbout';
import PageContact from './PageContact';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <PageHome />} />
    <Route path="/about" render={() => <PageAbout />} />
    <Route path="/contact" render={() => <PageContact />} />
  </Switch>
);

export default Routes;