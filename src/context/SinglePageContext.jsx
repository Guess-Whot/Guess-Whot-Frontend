import { createContext, useContext, useState } from 'react';

export const SinglePageContext = createContext();

const SinglePageProvider = ({ children }) => {
  const [atHome, setAtHome] = useState(false);

  return (
    <SinglePageContext.Provider value={{ atHome, setAtHome }}>
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
