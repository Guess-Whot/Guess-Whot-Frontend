import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { signOutUser } from '../services/users';

export default function Header() {
  const { currentUser, setCurrentUser } = useAuthContext();
  const history = useHistory();

  const handleLogout = async () => {
    await signOutUser();
    console.log('before', currentUser);
    setCurrentUser('');
    console.log('after', currentUser);
    history.push('/auth');
  };
  return (
    <div className="header">
      {currentUser?.email && (
        <div onClick={handleLogout}>
          <button className="out">Logout</button>
        </div>
      )}
    </div>
  );
}
