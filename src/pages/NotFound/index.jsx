import { Header } from '../../components/Header';
import { Error404 } from '../../components/Error404';
import { Container } from './styled';

export function NotFound() {
  return (
    <Container>
      <Header />
      <Error404 />
    </Container>
  );
}
