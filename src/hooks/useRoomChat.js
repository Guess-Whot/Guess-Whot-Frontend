import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';
import { useSinglePageContext } from '../context/SinglePageContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

export default function useRoomChat() {
  const { currentUser } = useAuthContext();
  const { setRoom, room } = useSinglePageContext();
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]); //for messages...

  const sendMessage = (e) => {
    e.preventDefault();
    //send currentuser thru this payload
    socket.emit('send_message', { message, room, currentUser });
    const payload = { message, sender: currentUser };
    setReceived((prevState) => [payload, ...prevState]);
    setMessage('');
  };

  const flipHandlerBackend = (id, flipped) => {
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
    });
  }, [socket]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      const receivedPayload = {
        message: data.message,
        sender: data.currentUser,
      };
      setReceived((prevState) => [receivedPayload, ...prevState]);
    });
  }, [socket]);
  return {
    setMessage,
    received,
    setRoom,
    joinRoom,
    sendMessage,
    flipHandlerBackend,
    message,
  };
}
