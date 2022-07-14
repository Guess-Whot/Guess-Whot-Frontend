import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:7890');

export default function useRoomChat() {
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]);
  const [room, setRoom] = useState('');

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
    setReceived((prevState) => [...prevState, message]);
  };

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setReceived((prevState) => [...prevState, data.message]);
    });
  }, [socket]);

  return { setMessage, received, setRoom, joinRoom, sendMessage };
}
