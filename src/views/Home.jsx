import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ChatRooms from '../components/roomChat';
import { StyledHomeContainer } from '../components/Styles/StyledHome';
import { useAuthContext } from '../context/AuthContext';
import useRoomChat from '../hooks/useRoomChat';

export default function Home() {
  const { setRoom, joinRoom } = useRoomChat();
  const { currentUser } = useAuthContext();
  // console.log(currentUser);
  const history = useHistory();
  // useEffect(() => {
  //   setRoom(1);
  //   joinRoom();
  // }, []);

  const goToGame = () => {
    joinRoom();
    history.push('/game');
  };

  return (
    <>
      <StyledHomeContainer>
        <h1>GUESS WHOT?</h1>

        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={goToGame}> Join Room</button>
        <ChatRooms />
      </StyledHomeContainer>
    </>
  );
}
