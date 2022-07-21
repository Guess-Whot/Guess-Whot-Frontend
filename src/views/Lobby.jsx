import React from 'react';
import { useSinglePageContext } from '../context/SinglePageContext';
import Game from './Game';
import Home from './Home';
import Testing from './Testing';

export default function Lobby() {
  const { atHome } = useSinglePageContext();
  return (
    <>
      {!atHome && <Home />}
      {atHome && <Game />}
    </>
  );
}
