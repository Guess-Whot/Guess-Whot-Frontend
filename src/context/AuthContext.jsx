import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(true);
  const [error, setError] = useState('');
  const [username, setusername] = useState('');
  const [currentUser, setCurrentUser] = useState({ email: null });

  useEffect(() => {
    const userFetch = async () => {
      const user = await getUser();
      console.log('AuthContextUserTest', user);
      setCurrentUser({ email: user?.email });
      setLoading(false);
    };
    userFetch();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useLoadingUser = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (data === undefined) {
    throw new Error('Auth ContextProvider not wrapped!');
  }
  return data;
};

export { AuthProvider, useAuthContext, useLoadingUser };
