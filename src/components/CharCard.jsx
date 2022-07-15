import io from 'socket.io-client';
import useRoomChat from '../hooks/useRoomChat/useRoomChat';

const socket = io.connect('http://localhost:7890');
export default function Character({ name, url }) {
  const { flipHandler, flipped, flippedRecieved } = useRoomChat();
  // const [flipped, setFlipped] = useState(false);
  // const [flippedRecieved, setFlippedReceived] = useState(false);

  return (
    <div onClick={flipHandler}>
      <h2>{name}</h2>
      <img src={url} alt="test" />
      {flippedRecieved ? 'Smol Board Up' : 'Smol board down'}
      <h1>The Great Divide</h1>
      {flipped ? 'Main board up' : 'Main board down'}
    </div>
  );
}
