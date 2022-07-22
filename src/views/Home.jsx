import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ChatRooms from '../components/roomChat';
import { StyledHomeContainer } from '../components/Styles/StyledHome';
import { StyledLobbyChat } from '../components/Styles/StyledLobbyChat';
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
<<<<<<< HEAD
<<<<<<< HEAD
        <StyledLobbyChat>
          <ChatRooms />
        </StyledLobbyChat>
        <h3 onClick={() => history.push('/game')}>Proceed to Game</h3>
      </div>
=======
=======
>>>>>>> 750cf34c5a61f834afceba7c2dce17736b6155dd

        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={goToGame}> Join Room</button>
        <ChatRooms />
<<<<<<< HEAD
      </StyledHomeContainer>
>>>>>>> ddb2a8ba8b75db0e6142ac3e227a0882e18c77f1
=======
      </StyledLobbyChat>
>>>>>>> 750cf34c5a61f834afceba7c2dce17736b6155dd
    </>
  );
}
