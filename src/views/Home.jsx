import e from 'cors';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useLobby from '../hooks/useLobby';

export default function Home() {
  const {
    setRoomName,
    createRoom,
    getRoomNames,
    roomList,
    joinRoom,
    setRoomId,
  } = useLobby();

  const createRoomHandler = () => {
    createRoom();
  };
  const refreshRooms = () => {
    getRoomNames();
    console.log(roomList);
  };
  const joinHandler = async (roomId) => {
    // console.log(roomId);
    // setRoomId(roomId);
    await joinRoom(roomId);
  };

  return (
    <>
      <div>
        <h1>GUESS WHOT?</h1>
        <div>
          <label>Create Room</label>
          <input
            type="text"
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          ></input>
          <button onClick={() => createRoomHandler()}>CreateRoom</button>
        </div>
        <div>
          <label>Join Room</label>
          <button onClick={() => refreshRooms()}>Refresh Rooms</button>
          <p>Room List</p>
          <p>Room List</p>
          <div>
            {roomList.map((room) => (
              <div
                key={room.id}
                onClick={() => {
                  joinHandler(room.id);
                }}
              >
                <p>{room.name}</p>
              </div>
            ))}
          </div>
          <p>Room List</p>
        </div>
      </div>
    </>
  );
}
