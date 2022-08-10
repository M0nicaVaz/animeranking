import { useEffect, useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { NarutoIcon } from '../../components/NarutoIcon';
import { Snackbar } from '../../components/Snackbar';
import { Background, ButtonText, Container, Form } from './styled';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isOpen, setIsOpen, alertMessage } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <NarutoIcon />
        <h1>Anime Ranking</h1>
        <p>Aplicação para rankear os seus animes!</p>
        <h2>Faça seu login</h2>
        <Input
          required
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <ButtonText to="/register">Criar conta</ButtonText>
      </Form>

      <Snackbar isOpen={isOpen} setIsOpen={setIsOpen}>
        {alertMessage}
      </Snackbar>
      <Background />
    </Container>
  );
}
