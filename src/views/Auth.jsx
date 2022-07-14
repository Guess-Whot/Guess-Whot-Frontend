import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { signInUser, signUpUser } from '../services/Users/users';

export default function Auth() {
  const { setUser, email, setEmail, password, setPassword, error, setError } =
    useAuthContext();
  const [signIn, setSignIn] = useState(true);
  const history = useHistory();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      await signUpUser({ email, password });
      history.replace('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      await signInUser({ email, password });
      history.replace('/');
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
