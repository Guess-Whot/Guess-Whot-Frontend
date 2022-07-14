import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInKeeper, signUpKeeper } from '../services/keeper';

export function Auth() {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      await signUpUser({ email, password });
      history.replace('/landing');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      await signInUser({ email, password });
      history.replace('/landing');
    } catch (error) {
      setEmail('');
      setPassword('');
      setError(error.message);
    }
  };

  const handleClick = () => {
    setSignIn(!signIn);
  };

  return (
    <>
      {error && <p>{error}</p>}
      {signIn ? (
        <>
          <button onClick={handleClick}>Have an account? SignIn</button>
          <form className="signUp-form" onSubmit={handleSignUp}>
            <h3>Sign Up</h3>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {/* <input
              id="name"
              type="name"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            ></input> */}
            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>
          </form>
        </>
      ) : (
        <>
          <button onClick={handleClick}>New User? Sign Up</button>
          <form className="signin-form" onSubmit={handleSignIn}>
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
            <button>Sign In</button>
          </form>
        </>
      )}
    </>
  );
}
