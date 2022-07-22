import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { signInUser, signUpUser } from '../services/users';

export default function useAuth() {
  const { email, setEmail, password, setPassword } = useAuthContext();
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
  return {
    handleClick,
    handleSignIn,
    handleSignUp,
    signIn,
    setSignIn,
    email,
    setEmail,
    password,
    setPassword,
  };
}
