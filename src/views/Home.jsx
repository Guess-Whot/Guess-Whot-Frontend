import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useLobby from '../hooks/useLobby';

export default function Home() {
  const { currentUser } = useAuthContext();
  const { joinLobby } = useLobby();
  // console.log(currentUser);
  const history = useHistory();
  return (
    <>
      <div>
        <h1>GUESS WHOT?</h1>
        <h3 onClick={() => joinLobby()}>Proceed to matchmaking</h3>
      </div>
    </>
  );
}
