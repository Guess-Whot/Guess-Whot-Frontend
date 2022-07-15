import io from 'socket.io-client';
import useRoomChat from '../hooks/useRoomChat/useRoomChat';

const socket = io.connect('http://localhost:7890');

export default function Character({ id, name, url }) {
  const { flipHandlerBackend } = useRoomChat();
  const [flipped, setFlipped] = useState(false);
  //flip handler changes state for local changes, and sends an id to a socket.emit function for non-local action.
  const flipHandler = () => {
    setFlipped(!flipped); //local changes
    flipHandlerBackend(id, flipped);
  };
  console.log(id);
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
