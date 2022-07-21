import styled from 'styled-components';

export const StyledGame = styled.div`

    display: grid; 
    grid-template-columns: 1.2fr 0.2fr; 
    grid-template-rows: 2fr 0.4fr; 
    gap: 2em 2em; 
    grid-template-areas: 
      "Board Chat"
      "Buttons SecretChar"; 

    background-color: blue;

  .Board { grid-area: Board; }
  .Chat { grid-area: Chat; }
  .Buttons { grid-area: Buttons; }
  .SecretChar { grid-area: SecretChar; }
  `