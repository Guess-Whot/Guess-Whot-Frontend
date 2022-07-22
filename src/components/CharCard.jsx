import { useState } from 'react';
import useLobby from '../hooks/useLobby';
import {
  CardContainer,
  StyledCard,
  StyledCardInner,
} from './Styles/StyledCard';

export default function Character({ id, name, url }) {
  const { flipHandlerBackend } = useLobby();
  const [flipped, setFlipped] = useState(false);

  //flip handler changes state for local changes, and sends an id to a socket.emit function for non-local action.
  const flipHandler = () => {
    setFlipped(!flipped); //local changes
    flipHandlerBackend(id, flipped);
  };

  return (
    <CardContainer>
      <StyledCardInner>
        <StyledCard onClick={() => flipHandler()}>
          <img
            src={
              !flipped
                ? url
                : 'https://static.wikia.nocookie.net/enfuturama/images/1/13/Planet_express.png'
            }
            alt={`image of ${name} `}
          />
          <h3>{name}</h3>
        </StyledCard>
      </StyledCardInner>
    </CardContainer>
  );
}
