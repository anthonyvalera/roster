import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Registration from './pages/Registration';
import './scss/styles';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/registration' component={Registration} />
      <Route exact path='/profile' component={EditProfile} />
      <Route component={() => <p>That does not exist!</p>} />
    </Switch>
  </Router>
);

export default App;