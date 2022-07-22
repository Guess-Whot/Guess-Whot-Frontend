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
    </>
  );
}
