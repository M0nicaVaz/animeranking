import { Container } from './styled';

export function Section({ title, children }) {
  return (
    <Container>
      <h2> {title} </h2>
      {children}
    </Container>
  );
}
