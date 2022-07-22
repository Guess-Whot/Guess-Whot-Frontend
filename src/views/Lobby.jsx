import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSinglePageContext } from '../context/SinglePageContext';
import useRoomChat from '../hooks/useRoomChat';

export default function Lobby() {
  const { setRoom } = useSinglePageContext();
  const { joinRoom } = useRoomChat();
  useEffect(() => {
    setRoom(1);
    joinRoom();
  }, []);

  return (
    <>
      <Link to="/Home">
        <h1>Meet the Whots</h1>
      </Link>
    </>
  );
}
