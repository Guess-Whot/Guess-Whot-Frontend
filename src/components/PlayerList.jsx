import React from 'react';
import useLobby from '../hooks/useLobby';

export default function PlayerList() {
  const { playerList } = useLobby();
  console.log(playerList);

  return (
    <>
      <div>PlayerList</div>
      {playerList.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </>
  );
}
