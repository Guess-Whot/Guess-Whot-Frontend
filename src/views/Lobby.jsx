import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  StyledHeader,
  StyledLobby,
  StyledParent,
} from '../components/Styles/StyledLobby';
import { useSinglePageContext } from '../context/SinglePageContext';
import useRoomChat from '../hooks/useRoomChat';

export default function Lobby() {
  const history = useHistory();

  const { setRoom, joinRoom } = useRoomChat();
  useEffect(() => {
    setRoom(1);
    joinRoom();
  }, []);

  return (
    <>
      <StyledParent>
        <StyledHeader>
          <h1>Meet the Whots</h1>
          <h3 onClick={() => history.push('/home')}>Proceed to Lobby</h3>
        </StyledHeader>
        <StyledLobby>
          <div className="devCard">
            <a href="https://www.linkedin.com/in/alexorlet89/">
              <img src="https://i.imgur.com/Jz9kSxF.png" />
            </a>
            <h3>Alex Orlet Full-Stack Software Engineer. </h3>
            <p>He enjoys playing games and being a friend to all.</p>
          </div>
          <div className="devCard">
            <a
              href="http://www.linkedin.com/in/Andy-Mascaro
"
            >
              <img src="https://i.imgur.com/RncQneJ.png" />
            </a>
            <h3>Andy Mascaro</h3>
            <p>
              Full-Stack Software Engineer. I enjoy spending time at the beach
              with my wife and kids.
            </p>
          </div>

          <div className="devCard">
            <a
              href="https://www.linkedin.com/in/brendenseifried/
"
            >
              <img src="https://i.imgur.com/RHOt8mV.png" />
            </a>
            <h3>Brenden Seifried</h3>
            <p>Full-Stack Engineer. Loves bad movies and animals.</p>
          </div>
          <div className="devCard">
            <a href="https://www.linkedin.com/in/joshua-stresing/">
              <img src="https://i.imgur.com/cHojgpK.png" />
            </a>
            <h3>Joshua Stresing</h3>
            <p>
              Full-Stack Engineer. Competitive gamer and snack aficionado and
              also likes to read.
            </p>
          </div>
        </StyledLobby>
      </StyledParent>
    </>
  );
}
