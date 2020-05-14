import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Teams from './Teams';
import Team from './Team';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Teams} />
        <Route path={"/team/:teamId"} component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
