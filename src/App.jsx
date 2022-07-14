import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Landing from './views/Landing';
import Lobby from './views/Lobby';
import Auth from './views/Auth';
import ChatRooms from './components/RoomChat/roomChat';
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
            <ChatRooms />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
