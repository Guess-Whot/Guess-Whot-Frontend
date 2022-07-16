import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { signInUser, signUpUser } from '../services/Users/users';

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
      if (see.email) {
        setCurrentUser(see.email);
        history.push('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      await signInUser({ email, password });
      history.push('/');
    } catch (error) {
      setEmail('');
      setPassword('');
      setError(error);
    }
  };

  const handleClick = () => {
    setSignIn(!signIn);
  };
  console.log(signIn);

  return (
    <>
      {error && <p>{error}</p>}
      {signIn ? (
        <>
          <button onClick={handleClick}>new user? Sign Up</button>
          <form className="signUp-form" onSubmit={handleSignIn}>
            <h3>Sign In</h3>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign in</button>
          </form>
        </>
      ) : (
        <>
          <button onClick={handleClick}>Already User? Sign In</button>
          <form className="signin-form" onSubmit={handleSignUp}>
            <h3>Sign Up</h3>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button>sign up</button>
          </form>
        </>
      )}
    </>
  );
}
