import React from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function Home() {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  return <div>Home</div>;
}
