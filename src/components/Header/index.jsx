import { Container, Profile } from './styled';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h2>Rocket Movies</h2>

      <Profile>
        <div>
          <strong>Monica Vaz</strong>
          <span>
            <a href="#">Sair</a>
          </span>
        </div>

        <Link to="/profile">
          <img src="https://github.com/m0nicavaz.png" />
        </Link>
      </Profile>
    </Container>
  );
}
