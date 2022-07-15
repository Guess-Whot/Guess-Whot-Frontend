import React, { useEffect, useState } from 'react';
import Character from '../components/CharCard';
import ChatRooms from '../components/RoomChat/roomChat';
import { fetchChar } from '../services/chars';
import io from 'socket.io-client';
import useRoomChat from '../hooks/useRoomChat/useRoomChat';

const socket = io.connect('http://localhost:7890');

export default function Game() {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  const [error, setError] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [flippedRecieved, setFlippedReceived] = useState(Boolean);

  const { setMessage, received, setRoom, room, joinRoom, sendMessage } =
    useRoomChat();

  const flipHandler = () => {
    console.log(flipped);
    setFlipped(!flipped);
    socket.emit('flipped_card', { flipped, room });
  };

  useEffect(() => {
    socket.on('flipped_received', (data) => {
      setFlippedReceived(data.flipped);
      setReceived((prevState) => [...prevState, data.message]);
    });
  }, [socket]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchChar();
        //data comes in as an image, and a name, we need it to leave here with flipped[id:1, name:bendy, url:image, flipped:false] THIS WAS AN IDEA... lol
        console.log(data);
        setChars(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <aside>
        <ChatRooms />
      </aside>
      <div onClick={() => flipHandler()}>
        {error && <p>{error}</p>}
        {chars.map((char) => (
          <Character key={char.id} name={char.name} url={char.url} />
        ))}
      </div>
    </>
  );
}
