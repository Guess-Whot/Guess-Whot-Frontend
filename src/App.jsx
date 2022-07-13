import io from 'socket.io-client';

export default function App() {
  const socket = io.connect('http://localhost:7890');
  const sendMessage = () => {
    // socket.emit('send_message', { message, room });
  };

  return (
    <div className="App">
      <input placeholder="Room Number..." />
      <button onClick={joinRoom}> Join Room</button>
      <input placeholder="Message..." />
      <button onClick={sendMessage}> Send Message</button>
    </div>
  );
}
