import React from 'react';
import useAuth from '../hooks/useAuth';
import {
  AuthContainer,
  HeaderText,
  LoginContainer,
  StyledButton,
  StyledButtonContain,
  StyledInput,
} from '../components/Styles/StyledAuth';

export default function AuthCard() {
  const {
    handleClick,
    handleSignIn,
    handleSignUp,
    signIn,
    setSignIn,
    email,
    setEmail,
    password,
    setPassword,
  } = useAuth();
  return (
    <AuthContainer>
      {' '}
      <LoginContainer>
        {signIn ? (
          <>
            <StyledButton onClick={handleClick}>new user? Sign Up</StyledButton>
            <form onSubmit={handleSignIn}>
              <HeaderText>Sign In</HeaderText>
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
              <StyledButtonContain>
                <StyledButton type="submit">Sign in</StyledButton>
              </StyledButtonContain>
            </form>
          </>
        ) : (
          <>
            <StyledButton onClick={handleClick}>
              Already User? Sign In
            </StyledButton>
            <form className="signin-form" onSubmit={handleSignUp}>
              <HeaderText>Sign Up</HeaderText>

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
              <StyledButtonContain>
                <StyledButton>sign up</StyledButton>
              </StyledButtonContain>
            </form>
          </>
        )}
      </LoginContainer>
    </AuthContainer>
  );
}
