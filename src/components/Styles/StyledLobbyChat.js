import styled from 'styled-components';

export const StyledLobbyChat = styled.aside`
  width: 60%;
  height: 60vh;
  overflow: auto;
  border-style: solid;
  background-color: green;

  button {
    height: 30px;
    border-radius: 5px;
    letter-spacing: 0.2rem;
    background: #7ec8e3;
    margin: 0.5rem;
  }

  input {
    border: solid 2px black;
    border-radius: 20px;
    height: 25px;
    width: 205px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
