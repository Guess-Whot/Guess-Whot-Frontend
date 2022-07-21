import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ChatRooms from '../components/roomChat';
import { useAuthContext } from '../context/AuthContext';

export default function Home() {
  const { currentUser } = useAuthContext();
  // console.log(currentUser);
  const history = useHistory();
  // useEffect(() => {
  //   setRoom(1);
  // }, []);
  return (
    <>
      <div>
        <h1>GUESS WHOT?</h1>
        <ChatRooms />
        <h3 onClick={() => history.push('/lobby')}>Proceed to matchmaking</h3>
      </div>
    </>
  );
}
