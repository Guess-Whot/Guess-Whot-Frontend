import styled from 'styled-components';

export const StyledLobby = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;

  color: white;
  img {
    cursor: crosshair;
  }
`;
export const StyledParent = styled.div`
  background: blue;
  height: 100%;

  color: white;
`;
export const StyledHeader = styled.div`
  text-align: center;
  justify-content: center;
  align-item: center;
  h1 {
    font-size: 8rem;
  }
  h3 {
    margin-left: 45.5%;
    border: 5px solid black;
    width: 200px;
    border-radius: 20px;
    background: black;
    cursor: crosshair;
  }
`;
