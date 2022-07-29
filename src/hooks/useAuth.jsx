import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        setIsOpen(true);
        setAlertMessage(error.response.data.message);
      } else {
        setIsOpen(true);
        setAlertMessage('Não foi possível entrar.');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketnotes:token');
    localStorage.removeItem('@rocketnotes:user');

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token');
    const user = localStorage.getItem('@rocketnotes:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        alertMessage,
        setIsOpen,
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
