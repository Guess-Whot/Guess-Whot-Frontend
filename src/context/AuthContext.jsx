import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/Users/users';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState({ email: null });
  console.log(currentUser);
  useEffect(() => {
    const userFetch = async () => {
      const user = await getUser();
      setCurrentUser(user);
    };
    userFetch();
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(true);
  const [error, setError] = useState('');
  const [username, setusername] = useState('');

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        type,
        setType,
        error,
        setError,
        username,
        setusername,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (data === undefined) {
    throw new Error('Auth ContextProvider not wrapped!');
  }
  return data;
};

export { AuthProvider, useAuthContext };
