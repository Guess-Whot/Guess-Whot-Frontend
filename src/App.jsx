import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Lobby from './views/Lobby';
import Game from './views/Game';
import Auth from './views/Auth';
import { useAuthContext } from './context/AuthContext';
import Header from './components/Header';
export default function App() {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {currentUser.email ? <Lobby /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/home">
            {currentUser.email ? <Home /> : <Redirect to="/auth" />}
          </Route>

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
