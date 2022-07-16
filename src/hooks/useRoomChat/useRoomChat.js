import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:7890');

export default function useRoomChat() {
<<<<<<< HEAD
  const [flipped, setFlipped] = useState(false);
  const [flippedRecieved, setFlippedReceived] = useState(false);
=======
  const [flippedReceived, setFlippedReceived] = useState(Boolean);
>>>>>>> dcb27d232bd5d9911842e0680ed777921626ab9e
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]); //for messages...
  const [room, setRoom] = useState(3);
  const sendMessage = () => {
    socket.emit('send_message', { message, room });
    setReceived((prevState) => [...prevState, message]);
  };

  const flipHandler = () => {
    console.log(room);
    setFlipped(!flipped);
    socket.emit('flipped_card', { flipped, room });
  };
  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };
  useEffect(() => {
    socket.on('flipped_received', (data) => {
      console.log(data);
      setFlippedReceived(data.flipped);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setReceived((prevState) => [...prevState, data.message]);
    });
  }, [socket]);

  return {
    setMessage,
    received,
    setRoom,
    joinRoom,
    sendMessage,
    flipped,
    room,
    flipHandler,
    flippedRecieved,
  };
}
