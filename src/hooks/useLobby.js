import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

import React from 'react';
import { useHistory } from 'react-router-dom';

export default function useLobby() {
  const [playerList, setPlayerList] = useState([]);
  const [user, setUser] = useState('');
  const { currentUser } = useAuthContext();
  const history = useHistory();

  // useEffect(() => {
  //   console.log('you here');
  //   joinLobby();
  // }, []);

  const joinLobby = () => {
    // console.log(currentUser, 'is joining a lobby');
    socket.emit('join_lobby');
    socket.emit('send-email', currentUser.email);
  };

  useEffect(() => {
    socket.on('receive_email', (data) => {
      console.log('fudge', currentUser.email, data);
      if (currentUser.email !== data) {
        setPlayerList((prevState) => [...prevState, data]);
      }
    });
  }, [socket]);

  return {
    setUser,
    joinLobby,
    playerList,
  };
}
