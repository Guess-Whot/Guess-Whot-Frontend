import React, { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import useLobby from '../hooks/useLobby';

export default function PlayerList() {
  const { playerList, joinLobby } = useLobby();
  console.log(playerList);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    joinLobby({ room: 'lobby' });
  }, []);

  return (
    <>
      <div>PlayerList</div>
      {playerList.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </>
  );
}
