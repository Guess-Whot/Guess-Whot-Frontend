import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ChatRooms from '../components/roomChat';
import { StyledHomeContainer } from '../components/Styles/StyledHome';
import { StyledLobbyChat } from '../components/Styles/StyledLobbyChat';
import { StyledChat } from '../components/Styles/StyledChat';
import useRoomChat from '../hooks/useRoomChat';

export default function Home() {
  const { setRoom, joinRoom } = useRoomChat();
  const history = useHistory();
  useEffect(() => {
    setRoom(1);
    joinRoom();
  }, []);

  const goToGame = () => {
    joinRoom();
    history.push('/game');
  };

  return (
    <>
      <StyledLobbyChat>
        <h1>GUESS WHOT?</h1>

        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={goToGame}> Join Room</button>
      </StyledLobbyChat>
      <StyledChat>
        <ChatRooms />
      </StyledChat>
    </>
  );
}
