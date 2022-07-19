import React, { useEffect, useState } from 'react';
import Character from '../components/CharCard';
import ChatRooms from '../components/roomChat';
import { StyledBoard } from '../components/Styles/StyledBoard';
import { StyledChat } from '../components/Styles/StyledChat';
import { fetchChar } from '../services/chars';
import './Game.css';

export default function Game() {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchChar();
        //data comes in as an image, and a name, we need it to leave here with flipped[id:1, name:bendy, url:image, flipped:false] THIS WAS AN IDEA... lol
        //map thru characters, ...spread each one out, adding {flipped: false}, putting them back together as an array and then setting chars to that data.
        // console.log(data);
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
    <div>
      <StyledChat>
        <ChatRooms />
      </StyledChat>
      <StyledBoard>
        {/* {error && <p>{error}</p>} */}
        {chars.map((char) => (
            <Character key={char.id}
              id={char.id}
              name={char.name}
              url={char.url}
              flipped={false}
            />
        ))}
      </StyledBoard>
    </div>
  );
}
