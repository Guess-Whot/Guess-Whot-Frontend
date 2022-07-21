import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSinglePageContext } from '../context/SinglePageContext';

export default function useLobby() {
  const [roomName, setRoomName] = useState('');
  // const [roomId, setRoomId] = useState('eee');
  const { roomId, setRoomId } = useSinglePageContext();
  const [roomList, setRoomList] = useState([]);
  const setReady = () => {
    socket.emit('ready');
  };

  const createRoom = () => {
    socket.emit('create_room', roomName, (data) => {
      console.log(
        'Room created, USE THIS CALLBACK TO CONTINUE GAME PROCESS!!',
        data
      );
      setRoomId(data);
      setReady();
    });
  };

  const getRoomNames = () => {
    socket.emit('get_roomnames', 'booger', (data) => {
      console.log(data);
      setRoomList(data);
    });
  };

  const joinRoom = (selected) => {
    setRoomId(selected);
    console.log(selected);
    socket.emit('join_room', selected, () => {
      //send to game, as you will be the second person joining room.
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
    joinRoom,
  };
}
