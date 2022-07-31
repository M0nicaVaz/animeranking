import { FiMail, FiLock } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Snackbar } from '../../components/Snackbar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NarutoIcon } from '../../components/NarutoIcon';
import { Container, Form, ButtonText, Background } from './styled';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isOpen, setIsOpen, alertMessage } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
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
        <h1>Anime Rank</h1>
        <p>Aplicação para rankear os seus animes!</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <ButtonText to="/register">Criar conta</ButtonText>
      </Form>

      <Snackbar isOpen={isOpen} onClose={handleClose}>
        {alertMessage}
      </Snackbar>
      <Background />
    </Container>
  );
}
