import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { SignUpPage } from './pages/sign-up';
import { SignInPage } from './pages/sign-in';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
