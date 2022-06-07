import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar, ButtonText } from './styled';

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText to="/">
          <FiArrowLeft />
          Voltar
        </ButtonText>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/m0nicavaz.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
