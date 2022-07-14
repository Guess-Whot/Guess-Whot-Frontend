import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
          <PrivateRoute exact path="/lobby">
            <Lobby />
          </PrivateRoute>
          <PrivateRoute exact path="/game">
            <Lobby />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}
