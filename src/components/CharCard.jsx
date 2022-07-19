import { useState } from 'react';
import io from 'socket.io-client';
import useRoomChat from '../hooks/useRoomChat';
import { StyledCard } from './Styles/StyledCard';

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
    <StyledCard onClick={() => flipHandler()}>
      <h3>{name}</h3>
      <img src={url} />
      {flipped ? 'up' : 'down'}
    </StyledCard>
  );
}
