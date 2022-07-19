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
    <StyledCard
      className={flipped ? 'up' : 'down'}
      onClick={() => flipHandler()}
    >
      {/* <img src={url} /> */}
      {!flipped ? (
        <img src={url} alt={`image of ${name} `} />
      ) : (
        <img
          src={
            'https://static.wikia.nocookie.net/enfuturama/images/1/13/Planet_express.png'
          }
          alt="Flipped card showing planet express"
        />
      )}
      <h3>{name}</h3>
    </StyledCard>
  );
}
