import React from 'react';
import useRoomChat from '../../hooks/useRoomChat/useRoomChat';

export default function ChatRooms() {
  const { setMessage, received, setRoom, joinRoom, sendMessage } =
    useRoomChat();
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

      {received.map((data) => (
        <div key={data.id}>
          <li>{data}</li>
        </div>
      ))}
    </div>
  );
}