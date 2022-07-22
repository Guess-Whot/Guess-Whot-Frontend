import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './views/Home';
import Lobby from './views/Lobby';
import Game from './views/Game';
import Auth from './views/Auth';
import { useAuthContext } from './context/AuthContext';
import Header from './components/Header';
import SecretChar from './components/SecretChar';
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
            {currentUser.email ? <Lobby /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/home">
            {currentUser.email ? <Home /> : <Redirect to="/auth" />}
          </Route>
          {/* <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute> */}

          <Route exact path="/auth">
            {!currentUser.email ? <Auth /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/game">
            {currentUser.email ? <Game /> : <Redirect to="/auth" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
