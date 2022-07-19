import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './views/Home';
import Lobby from './views/Lobby';
import Game from './views/Game';
import Auth from './views/Auth';
import { useAuthContext, useLoadingUser } from './context/AuthContext';
import Header from './components/Header';
export default function App() {
  const { currentUser, setCurrentUser } = useAuthContext();
  console.log(currentUser);

  return (
    <>
      <BrowserRouter>
        {/* <Header currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}

        <Header />
        <Switch>
          <Route exact path="/">
            {currentUser.email ? <Home /> : <Redirect to="/auth" />}
          </Route>

          {/* <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute> */}

          <Route exact path="/auth">
            {!currentUser.email ? <Auth /> : <Redirect to="/" />}
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
