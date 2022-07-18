import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

export default function useRoomChat() {
  const { currentUser } = useAuthContext();

  const [flippedReceived, setFlippedReceived] = useState(Boolean);
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]); //for messages...
  const [room, setRoom] = useState(1);

  useEffect(() => {
    setRoom(1);
    joinRoom();
  }, []);

  const sendMessage = () => {
    //send currentuser thru this payload
    socket.emit('send_message', { message, room, currentUser });
    setReceived((prevState) => [...prevState, message]);
  };

  const flipHandlerBackend = (id, flipped) => {
    // console.log(id, 'Pennies');
    socket.emit('flipped_card', { id, flipped, room });
  };
  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
      console.log(currentUser); // works!!
    }
  };
  useEffect(() => {
    socket.on('flipped_received', (data) => {
      //is going to be useful for letting opposite player know what they clicked.
      // console.log(data, 'pennies');
    });
  }, [socket]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      // setFlipped(data.flipped);
      console.log(data.currentUser);
      setReceived((prevState) => [...prevState, data.message]);
    });
  }, [socket]);
  //pushing to dev branch
  return {
    setMessage,
    received,
    setRoom,
    joinRoom,
    sendMessage,
    flipHandlerBackend,
  };
}
