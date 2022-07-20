import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

import React from 'react';
import { useHistory } from 'react-router-dom';

export default function useLobby() {
  const [roomName, setRoomName] = useState('');
  const [roomList, setRoomList] = useState([]);

  const createRoom = () => {
    socket.emit('create_room', roomName, (response) => {
      console.log({ response });
    });
  };

  const getRoomNames = () => {
    socket.emit('get_roomnames', 'booger', (data) => {
      console.log(data);
      setRoomList(data);
    });
  };

  // useEffect(() => {
  //   socket.on('receive_rooms', (data) => {
  //     console.log('receive_rooms triggered');
  //   });
  //   getRoomNames();
  //   console.log('prove the console log is triggering getRoomNames');
  // }, [socket]);

  return {
    getRoomNames,
    setRoomName,
    createRoom,
    roomList,
  };
}
