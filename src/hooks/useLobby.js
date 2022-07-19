import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

import React from 'react';
import { useHistory } from 'react-router-dom';

export default function useLobby() {
  const [playerList, setPlayerList] = useState([]);
  const { currentUser } = useAuthContext();
  const history = useHistory();

  const joinLobby = () => {
    console.log(currentUser, 'is joining a lobby');
    socket.emit('join_lobby', currentUser);
    history.push('/lobby');
  };

  useEffect(() => {
    socket.on('new_player', (data) => {
      console.log(data);
      const player = data.currentUser;
      setPlayerList((prevState) => [...prevState, player]);
    });
  }, [socket]);
  return {
    //FUNCTIONS
    joinLobby,
  };
}
