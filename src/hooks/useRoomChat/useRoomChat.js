import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect(`${process.env.BACKEND_URL}`);

export default function useRoomChat() {
  const [flippedReceived, setFlippedReceived] = useState(Boolean);
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]); //for messages...
  const [room, setRoom] = useState(3);
  const sendMessage = () => {
    socket.emit('send_message', { message, room });
    setReceived((prevState) => [...prevState, message]);
  };

  const flipHandlerBackend = (id, flipped) => {
    // console.log(id, 'Pennies');
    socket.emit('flipped_card', { id, flipped, room });
  };
  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };
  useEffect(() => {
    socket.on('flipped_received', (data) => {
      //is going to be useful for letting opposite player know what they clicked.
      console.log(data, 'pennies');
    });
  }, [socket]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      // setFlipped(data.flipped);
      console.log(data);
      setReceived((prevState) => [...prevState, data.message]);
    });
  }, [socket]);

  return {
    setMessage,
    received,
    setRoom,
    joinRoom,
    sendMessage,
    flipHandlerBackend,
  };
}
