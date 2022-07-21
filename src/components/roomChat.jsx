import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useRoomChat from '../hooks/useRoomChat';
import { StyledHomeContainer } from './Styles/StyledHome';

export default function ChatRooms() {
  const { setMessage, received, setRoom, joinRoom, sendMessage } =
    useRoomChat();
  // playerOne = currentUser;
  const { currentUser } = useAuthContext();

  return (
    <StyledHomeContainer className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {/* <h1>{currentUser}</h1> currentUser doesn't come from roomchat*/}

      {received.map((data, index) => (
        <div key={index}>
          <div>
            {data.sender.email === currentUser.email ? (
              <div className="playerOne">You: {data.message}</div>
            ) : (
              <div className="playerTwo">
                {data.sender.email} : {data.message}
              </div>
            )}
          </div>
        </div>
      ))}
    </StyledHomeContainer>
  );
}
