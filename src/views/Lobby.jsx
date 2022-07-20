import React, { useEffect } from 'react';
import PlayerList from '../components/PlayerList';
import ChatRooms from '../components/roomChat';
import { useAuthContext } from '../context/AuthContext';
import useLobby from '../hooks/useLobby';

export default function Lobby() {
  const { playerList, joinLobby } = useLobby();
  const { currentUser } = useAuthContext();

  // useEffect(() => {
  //   console.log('you here 2');
  //   joinLobby();
  // }, []);

  return !currentUser.email ? (
    <p>loading...</p>
  ) : (
    <>
      <h1>Matchmaking!</h1>
      <h3>Click a name to start a game!</h3>
      <PlayerList currentUser={currentUser} />
      {/* <p>BrianStorming: clicking lobby could add currentUser.email to an array that gets displayed in matchmaking. Names are are clickable. Click a name, remove name from array (prevents other users from clicking on it, this will be important to prevent multiple ppl clicking on the same name/trying to enter same room), 

        socket.emit ('enter_lobby', {username: currentUser.email, room: lobby})

        useEffect(() => {socket.on('new_player'), (data) => { setLobby((prevState) => [...prevState, data.username])}})

        socket.emit 'send_invite' payload of clicked users split email, call socket.on 'receive_invite'
        
        socket.on 'receive_invite' needed which makes invite appear with yes/no. clicked user picks Yes: socket.emit 'invite_response', payload of accept. make the room the split email of the clicked user, redirect user to game. 
        
        No: socket.emit 'invite_response', payload of decline. 
        
        socket.on 'invite_response', payload will have accept/decline and split email to be used for room number.

        Question: passing 
        </p> */}
    </>
  );
}
