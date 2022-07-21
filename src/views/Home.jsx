import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Home() {
  const { currentUser } = useAuthContext();
  // console.log(currentUser);
  const history = useHistory();
  return (
    <>
      <div>
        <h1>GUESS WHOT?</h1>
        <h3 onClick={() => history.push('/lobby')}>Proceed to matchmaking</h3>
      </div>
    </>
  );
}
