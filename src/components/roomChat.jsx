import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useRoomChat from '../hooks/useRoomChat';
import {
  StyledHomeContainer,
  StyledOpponent,
  StyledUser,
} from './Styles/StyledHome';

export default function ChatRooms() {
  const { setMessage, received, sendMessage, message } = useRoomChat();
  const { currentUser } = useAuthContext();
  return (
    <>
      <StyledHomeContainer className="App">
        <form onSubmit={sendMessage}>
          <button type="submit"> Send Message</button>
          <input
            placeholder="Message..."
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            value={message}
          />
        </form>
        <h1> Message:</h1>
        {received.map((data, index) => (
          <div key={index}>
            <div>
              {data.sender.email === currentUser.email ? (
                <StyledUser className="playerOne">
                  You: {data.message}
                </StyledUser>
              ) : (
                <StyledOpponent className="playerTwo">
                  {data.sender.email} : {data.message}
                </StyledOpponent>
              )}
            </div>
          </div>
        ))}
      </StyledHomeContainer>
    </>
  );
}
