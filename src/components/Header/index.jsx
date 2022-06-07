import { Container, Profile } from './styled';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h2>Rocket Movies</h2>
      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Monica Vaz</strong>
          <span>
            <a href="#">Sair</a>
          </span>
        </div>

        <img src="https://github.com/m0nicavaz.png" />
      </Profile>
    </Container>
  );
}
