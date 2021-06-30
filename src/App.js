import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { SignUpPage } from './pages/sign-up';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
