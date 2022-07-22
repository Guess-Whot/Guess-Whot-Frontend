import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../context/AuthContext';

const socket = io.connect(`${process.env.BACKEND_URL}`);

export default function useLobby() {
  const { currentUser } = useAuthContext();

  const [received, setReceived] = useState([]); //for messages...
  const [room, setRoom] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomList, setRoomList] = useState([]);

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
      setReceived((prevState) => [...prevState, receivedPayload]);
    });
  }, [socket]);

  return {
    setRoomName,
    roomList,
    // setMessage,
    received,
    setRoom,
    joinRoom,
    // sendMessage,
    flipHandlerBackend,
  };
}
