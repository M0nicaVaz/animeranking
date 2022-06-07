import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background, ButtonText } from './styled';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Cadastrar" />

        <ButtonText to="/">
          <FiArrowLeft />
          Voltar para o login
        </ButtonText>
      </Form>

      <Background />
    </Container>
  );
}
