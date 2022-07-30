import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Snackbar } from '../../components/Snackbar';

import { Container, Form, Avatar } from './styled';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile, isOpen, setIsOpen, alertMessage } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleClose(e) {
    e.preventDefault();
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
      <header>
        <ButtonText title="Voltar" onClick={handleGoBack} />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Snackbar isOpen={isOpen} onClose={handleClose}>
          {alertMessage}
        </Snackbar>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
