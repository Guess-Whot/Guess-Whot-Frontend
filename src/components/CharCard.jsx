import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import useRoomChat from '../hooks/useRoomChat/useRoomChat';

const socket = io.connect('http://localhost:7890');

export default function Character({ id, name, url, flipped }) {
  //const [flipped, setFlipped] = useState(false);
  //flip handler changes state for local changes, and sends an id to a socket.emit function for non-local action.
  const { flipHandler } = useRoomChat();
  console.log(flipped);

  return (
    <div onClick={() => flipHandler()}>
      <h2>{name}</h2>
      <img src={url} />
      {flipped ? 'up' : 'down'}
      <p></p>
    </div>
  );
}
