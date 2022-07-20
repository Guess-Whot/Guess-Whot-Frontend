import React, { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import useLobby from '../hooks/useLobby';

export default function PlayerList({ currentUser }) {
  const { playerList, joinLobby, setUser } = useLobby();
  // console.log(playerList);

  // useEffect(() => {
  //   setUser('bob');
  // }, []);

  useEffect(() => {
    setUser('bob');
    joinLobby();
  }, [currentUser]);

  return (
    <>
      <div>PlayerList</div>
      {playerList.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </>
  );
}
