import { createContext, useContext, useState } from 'react';

export const SinglePageContext = createContext();

const SinglePageProvider = ({ children }) => {
  const [atHome, setAtHome] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [flippedReceived, setFlippedReceived] = useState(Boolean);
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState([]); //for messages...
  const [room, setRoom] = useState('');
  return (
    <SinglePageContext.Provider
      value={{
        atHome,
        setAtHome,
        roomId,
        setRoomId,
        flippedReceived,
        setFlippedReceived,
        message,
        setMessage,
        received,
        setReceived,
        room,
        setRoom,
      }}
    >
      {children}
    </SinglePageContext.Provider>
  );
};

const useSinglePageContext = () => {
  const data = useContext(SinglePageContext);
  if (data === undefined) {
    throw new Error('SinglePage ContextProvider not wrapped!');
  }
  return data;
};

export { SinglePageProvider, useSinglePageContext };
