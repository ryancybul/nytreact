import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from './Pages/NoMatch/';
import Home from './Pages/Home/';

const App = () => (
  <Router>
    <div>
      {/* <Nav /> Header */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Nav /> Footer */}
    </div>
  </Router>
);

export default App;
