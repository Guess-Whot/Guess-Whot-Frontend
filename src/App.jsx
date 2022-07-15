import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './views/Home';
import Lobby from './views/Lobby';
import Auth from './views/Auth';
import ChatRooms from './components/RoomChat/roomChat';
import { useAuthContext, useLoadingUser } from './context/AuthContext';
export default function App() {
  const { currentUser } = useAuthContext();
  let loading = useLoadingUser();
  console.log('currentuserconsole', currentUser);
  if (loading) return <div>loading...</div>;
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
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
