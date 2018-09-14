import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import PricingPage from "./PricingPage.jsx";



const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/pricing" component={PricingPage}/>
    </Switch>
  </Router>
);
