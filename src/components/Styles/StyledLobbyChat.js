import styled from 'styled-components';

export const StyledLobbyChat = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #2b2d42;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 100px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  button {
    margin: 10px;
    background: linear-gradient(to left, #000c66 0%, #0000ff 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
  }
  input {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 30%;
    height: 3rem;
    border-radius: 50px;
    padding: 10px;
    border: solid 2px;
    outline: none;
    color: white;
    padding-left: 20px;
    margin-left: 20px;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
    &::placeholder {
      color: white;
      font-weight: 100;
      font-size: 1rem;
    }
  }
`;

export const StyledBtn = styled.button`
  button {
    margin: 10px;
    background: linear-gradient(to left, #000c66 0%, #0000ff 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
  }
  input {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 30%;
    height: 3rem;
    border-radius: 50px;
    padding: 10px;
    border: solid 2px;
    outline: none;
    color: white;
    padding-left: 20px;
    margin-left: 20px;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
    &::placeholder {
      color: white;
      font-weight: 100;
      font-size: 1rem;
    }
  }
`;
