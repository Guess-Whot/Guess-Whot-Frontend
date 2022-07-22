import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  border: solid 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  input {
    border: solid 2px black;
    border-radius: 20px;
    height: 25px;
    width: 300px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    text-style: bold;
  }

  label {
    font-size: 20px;
  }

  button {
    height: 30px;
    border-radius: 5px;
    letter-spacing: 0.2rem;
    background: #7ec8e3;
    margin: 0.5rem;
  }

  p {
    font-weight: bold;
    border: solid 2px;
    text-align: center;
  }
`;

export const StyledUser = styled.div`
  background-color: rgba(4, 7, 198, 0.712);
  font-size: large;
  border-radius: 10px;
  border: 5px solid;

  color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export const StyledOpponent = styled.div`
  background-color: rgba(19, 136, 213, 0.712);
  font-size: large;
  border-radius: 10px;
  border: 5px solid;

  color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
