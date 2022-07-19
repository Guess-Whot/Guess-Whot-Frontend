import { useState } from 'react';
import io from 'socket.io-client';
import useRoomChat from '../hooks/useRoomChat';

// const socket = io.connect('http://localhost:7890');
// const socket = io.connect(`${process.env.BACKEND_URL}:7890`);

export default function Character({ id, name, url }) {
  const { flipHandlerBackend } = useRoomChat();
  const [flipped, setFlipped] = useState(false);
  //flip handler changes state for local changes, and sends an id to a socket.emit function for non-local action.
  const flipHandler = () => {
    setFlipped(!flipped); //local changes
    flipHandlerBackend(id, flipped);
  };
  // console.log(id);
  return (
    <div onClick={() => flipHandler()}>
      <h2>{name}</h2>
      <img src={url} />
      {flipped ? 'up' : 'down'}
      <p></p>
    </div>
  );
}
