import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Character from '../components/CharCard';
import GameButtons from '../components/GameButtons';
import ChatRooms from '../components/roomChat';
import SecretChar from '../components/SecretChar';
import { StyledBoard } from '../components/Styles/StyledBoard';
import { StyledChat } from '../components/Styles/StyledChat';
import { StyledGame } from '../components/Styles/StyledGame';
import { StyledGameButtons } from '../components/Styles/StyledGameButtons';
import { StyledSecretChar } from '../components/Styles/StyledSecretChar';
import useRoomChat from '../hooks/useRoomChat';
import { fetchChar } from '../services/chars';

export default function Game() {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  const [error, setError] = useState(true);
  const history = useHistory();
  const { setRoom, joinRoom } = useRoomChat();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchChar();
        //data comes in as an image, and a name, we need it to leave here with flipped[id:1, name:bendy, url:image, flipped:false] THIS WAS AN IDEA... lol
        //map thru characters, ...spread each one out, adding {flipped: false}, putting them back together as an array and then setting chars to that data.
        setChars(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, []);

  const handleLeaveGame = () => {
    setRoom(1);
    joinRoom();
    history.push('/home');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <button onClick={handleLeaveGame}>Leave Game</button>
      <StyledGame>
        <StyledBoard>
          {chars.map((char) => (
            <Character
              key={char.id}
              id={char.id}
              name={char.name}
              url={char.url}
              flipped={false}
            />
          ))}
        </StyledBoard>
        <StyledChat>
          <ChatRooms />
        </StyledChat>
        <StyledGameButtons>
          <GameButtons />
        </StyledGameButtons>
        <StyledSecretChar>
          <SecretChar />
        </StyledSecretChar>
      </StyledGame>
    </>
  );
}
