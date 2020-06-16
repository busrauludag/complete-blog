import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/screens/Home';
import Category from './components/screens/Category';
import Single from './components/screens/Single';
import NotFound from './components/screens/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
