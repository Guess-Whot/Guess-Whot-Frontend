import React from 'react';
import useRoomChat from '../hooks/useRoomChat';

export default function ChatRooms() {
  const { setMessage, received, setRoom, joinRoom, sendMessage, currentUser } =
    useRoomChat();
  // playerOne = currentUser;
  return (
    <div className="App">
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
          <li>
            {data.currentUser.email}
            {`  `}
            {data.message}
          </li>
        </div>
      ))}
    </div>
  );
}
