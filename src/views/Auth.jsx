import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AuthContainer,
  HeaderText,
  StyledAlready,
  StyledButton,
  StyledButtonContain,
  StyledInput,
  StyledInputContain,
} from '../components/Styles/StyledAuth';
import { useAuthContext } from '../context/AuthContext';
import { signInUser, signUpUser } from '../services/users';

export default function Auth() {
  const {
    currentUser,
    setCurrentUser,
    email,
    setEmail,
    password,
    setPassword,
  } = useAuthContext();
  const [signIn, setSignIn] = useState(false);
  const history = useHistory();

  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      const see = await signUpUser({ email, password });
      // if (see.email) {
      // setCurrentUser(see.email);
      history.go(0);
      // }
      // console.log('we out hereee');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      await signInUser({ email, password });
      history.go(0);
    } catch (error) {
      setEmail('');
      setPassword('');
      setError(error);
    }
  };

  const handleClick = () => {
    setSignIn(!signIn);
  };
  // console.log(signIn);

  return (
    <AuthContainer>
      {/* <div>{error && <p>{error}</p>}</div> 
      this line throws a objects are not valid react children error */}

      {signIn ? (
        <>
          <StyledButton onClick={handleClick}>new user? Sign Up</StyledButton>
          <form onSubmit={handleSignIn}>
            <HeaderText>Sign In</HeaderText>
            <StyledInputContain>
              <StyledInput
                id="email"
                type="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <StyledInput
                id="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </StyledInputContain>
            <StyledButtonContain>
              <StyledButton type="submit">Sign in</StyledButton>
            </StyledButtonContain>
          </form>
        </>
      ) : (
        <>
          <StyledAlready onClick={handleClick}>
            Already User? Sign In
          </StyledAlready>
          <form className="signin-form" onSubmit={handleSignUp}>
            <HeaderText>Sign Up</HeaderText>
            <StyledInput
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></StyledInput>
            <StyledInput
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></StyledInput>
            <StyledButtonContain>
              <StyledButton>sign up</StyledButton>
            </StyledButtonContain>
          </form>
        </>
      )}
    </AuthContainer>
  );
}
