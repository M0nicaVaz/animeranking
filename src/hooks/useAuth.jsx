import { createContext, useContext, useEffect, useState } from 'react';
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

      localStorage.setItem('@animeranking:user', JSON.stringify(user));
      localStorage.setItem('@animeranking:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

  async function signUp(name, email, password) {
    try {
      await api.post('/users', { name, email, password });
    } catch (error) {
      console.log(error);
      if (error.response) {
        setIsOpen(true);
        setAlertMessage(error.response.data.message);
      }
    }
  }

  async function signUp({ name, email, password }) {
    if (!name || !email || !password) {
      setIsOpen(true);
      setAlertMessage('Preencha todos os campos!');
      return null;
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        setIsOpen(true);
        setAlertMessage('Usuário cadastrado!');
      })
      .catch((error) => {
        if (error.response) {
          setIsOpen(true);
          setAlertMessage(error.response.data.message);
        } else {
          setIsOpen(true);
          setAlertMessage('Não foi possível cadastrar');
        }
      });
  }

  function signOut() {
    localStorage.removeItem('@animeranking:token');
    localStorage.removeItem('@animeranking:user');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@animeranking:user', JSON.stringify(user));

      setData({ user, token: data.token });

      setIsOpen(true);
      setAlertMessage('Perfil atualizado!');
    } catch (error) {
      if (error.response) {
        setIsOpen(true);
        setAlertMessage(error.response.data.message);
      } else {
        setIsOpen(true);
        setAlertMessage('Erro ao atualizar o perfil.');
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@animeranking:token');
    const user = localStorage.getItem('@animeranking:user');

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
        setAlertMessage,
        setIsOpen,
        signIn,
        signOut,
        signUp,
        updateProfile,
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
