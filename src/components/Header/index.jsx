import { Container, Profile } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    signOut();

    navigate('/');
  }

  return (
    <Container>
      <h2>Rocket Movies</h2>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <span>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </span>
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt={`Foto de ${user.name}`} />
        </Link>
      </Profile>
    </Container>
  );
}
