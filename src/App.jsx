import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/">
            <Landing />
          </PrivateRoute>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
          <Route exact path="/game">
            <Lobby />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
