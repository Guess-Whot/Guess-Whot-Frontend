import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './views/Home';
import Lobby from './views/Lobby';
import Game from './views/Game';
import Auth from './views/Auth';
import { useAuthContext, useLoadingUser } from './context/AuthContext';
export default function App() {
  const { currentUser } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute> */}
          <Route exact path="/">
            {currentUser === 'undefined' ? <Home /> : <Redirect to="/auth" />}
          </Route>

          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
