import { Container, Profile } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();

    navigate('/');
  }

  return (
    <Container>
      <h2>Rocket Movies</h2>

      <Profile>
        <div>
          <strong>Monica Vaz</strong>
          <span>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </span>
        </div>

        <Link to="/profile">
          <img src="https://github.com/m0nicavaz.png" />
        </Link>
      </Profile>
    </Container>
  );
}
