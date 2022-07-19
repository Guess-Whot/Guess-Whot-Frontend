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

  // useEffect(() => {
  //   console.log('you here');
  //   joinLobby();
  // }, []);

  const joinLobby = () => {
    console.log(currentUser, 'is joining a lobby');
    socket.emit('join_lobby');
  };

  useEffect(() => {
    socket.on('new_player', () => {
      console.log('fudge', currentUser);
    });
  }, [socket]);

  return {
    //FUNCTIONS
    joinLobby,
    playerList,
  };
}
