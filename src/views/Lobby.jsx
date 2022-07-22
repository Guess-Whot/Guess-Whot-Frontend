import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSinglePageContext } from '../context/SinglePageContext';
import useRoomChat from '../hooks/useRoomChat';

export default function Lobby() {
  const history = useHistory();

  const { setRoom, joinRoom } = useRoomChat();
  useEffect(() => {
    setRoom(1);
    joinRoom();
  }, []);

  return (
    <>
      <h1>Meet the Whots</h1>
      <h3 onClick={() => history.push('/home')}>Proceed to Lobby</h3>

      <div>
        <h3>Alex Orlet Full-Stack Software Engineer. </h3>
        <p>He enjoys playing games and being a friend to all.</p>
        <h3>Andy Mascaro</h3>
        <p>
          Full-Stack Software Engineer. I enjoy spending time at the beach with
          my wife and kids.
        </p>
        <h3>Brenden Seifried</h3>
        <p>Full-Stack Engineer. Loves bad movies and animals.</p>
        <h3>Joshua Stresing</h3>
        <p>
          Full-Stack Engineer. Competitive gamer and snack aficionado and also
          likes to read.
        </p>
      </div>
    </>
  );
}
