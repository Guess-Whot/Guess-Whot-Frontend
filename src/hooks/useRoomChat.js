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

  const sendMessage = () => {
    //send currentuser thru this payload
    socket.emit('send_message', { message, room, currentUser });
    const payload = { message, sender: currentUser };
    setReceived((prevState) => [...prevState, payload]);
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
    });
  }, [socket]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('recieved data', data);
      const receivedPayload = {
        message: data.message,
        sender: data.currentUser,
      };
      setReceived((prevState) => [...prevState, receivedPayload]);
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
