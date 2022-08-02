import { useState, useEffect } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Snackbar } from '../../components/Snackbar';
import { NarutoIcon } from '../../components/NarutoIcon';
import { Container, Form, Background, ButtonText } from './styled';
import { useAuth } from '../../hooks/useAuth';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, isOpen, setIsOpen, alertMessage, setAlertMessage } =
    useAuth();

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      setIsOpen(true);
      setAlertMessage('Preencha todos os campos!');
      return null;
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setIsOpen(true);
      setAlertMessage('Digite um email válido!');
      return null;
    }

    signUp({ name, email, password }).then(() => {
      setIsOpen(true);
      setAlertMessage('Usuário cadastrado!');

      setTimeout(() => {
        navigate('/');
      }, 1000);
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
          required
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          required
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          required
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
