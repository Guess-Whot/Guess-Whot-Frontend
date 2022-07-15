import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Lobby from './views/Lobby';
import Home from './views/Home';
import Game from './views/Game';
import Auth from './views/Auth';
import ChatRooms from './components/RoomChat/roomChat';
import Landing from './views/Testing';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            <Landing />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
          <Route exact path="/game">
            <ChatRooms />
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
