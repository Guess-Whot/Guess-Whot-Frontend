import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  border: solid 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    border: solid 2px black;
    border-radius: 20px;
    height: 25px;
    width: 205px;
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
