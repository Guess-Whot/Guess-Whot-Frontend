import styled from 'styled-components';

export const AuthContainer = styled.div`
  background: url('./splatter.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const LoginContainer = styled.div`
  transform: translate(120%, 40%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  width: 30%;
  background: #2b2d42;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 100px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

export const HeaderText = styled.h1`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 80%;
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
`;

export const StyledButton = styled.button`
  background: #7ec8e3;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export const StyledButtonContain = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAlready = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 35%;
  height: 35px;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
