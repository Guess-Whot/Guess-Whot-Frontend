import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:7890');

function App() {
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState('');
  const [room, setRoom] = useState('');

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
  };

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setReceived(data.message);
    });
  }, [socket]);

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
      {received}
    </div>
  );
}

export default App;
