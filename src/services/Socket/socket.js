import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:7890');

function Socket() {
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]);
  const [room, setRoom] = useState('');

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
    setReceived((prevState) => [...prevState, message]);
  };

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setReceived((prevState) => [...prevState, data.message]);
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

      {received.map((data) => (
        <div key={data.id}>
          <li>{data}</li>
        </div>
      ))}
    </div>
  );
}

export default Socket;
