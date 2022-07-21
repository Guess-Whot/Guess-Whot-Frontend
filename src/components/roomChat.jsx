import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useLobby from '../hooks/useLobby';

export default function ChatRooms() {
  const { setMessage, received, setRoom, joinRoom, sendMessage } = useLobby();
  // playerOne = currentUser;
  const { currentUser } = useAuthContext();

  return (
    <div className="App">
      <form onSubmit={sendMessage}>
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button type="submit"> Send Message</button>
      </form>

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
    </div>
  );
}
