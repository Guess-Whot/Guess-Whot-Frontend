import React from 'react';
import { useSinglePageContext } from '../context/SinglePageContext';
import useLobby from '../hooks/useLobby';

export default function Testing() {
  const { getRoomNames } = useLobby();
  const { setAtHome, atHome } = useSinglePageContext();
  return (
    <button
      onClick={() => {
        setAtHome(!atHome), getRoomNames();
      }}
    >
      Anything
    </button>
  );
}
