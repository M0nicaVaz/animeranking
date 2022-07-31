import { useState, useEffect } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Snackbar } from '../../components/Snackbar';
import { NarutoIcon } from '../../components/NarutoIcon';
import { Container, Form, Background, ButtonText } from './styled';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();
  function handleSignUp() {
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

        setTimeout(() => {
          navigate('/');
        }, 2000);
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

  function handleClose(event) {
    event.preventDefault();
    setIsOpen(!isOpen);

    return null;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, [isOpen]);

  return (
    <Container>
      <Form>
        <NarutoIcon />
        <h1>Anime Ranking</h1>
        <p>Aplicação para rankear os seus animes!</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />

        <ButtonText to="/">
          <FiArrowLeft />
          Voltar para o login
        </ButtonText>
      </Form>

      <Snackbar isOpen={isOpen} onClose={handleClose}>
        {alertMessage}
      </Snackbar>

      <Background />
    </Container>
  );
}
