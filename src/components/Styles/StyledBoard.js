import styled from 'styled-components';

export const StyledBoard = styled.div`
    display: grid; 
    max-height: 100vh;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 1em 1em; 
    grid-template-areas: 
      ". . . . . . . ."
      ". . . . . . . ."
      ". . . . . . . ."; 

  width: 100%;
  height: 100%;
  border: '0px solid' : '4px solid';
  border-bottom-color: rgba(0, 0, 255, 0.1);
  border-right-color: rgba(0, 0, 255, 1);
  border-top-color: rgba(0, 0, 255, 1);
  border-left-color: rgba(0, 0, 255, 0.3);
  background-color: blue;
  object-fit: contain;
  border-style: solid;
  border-color: blue;
`;
