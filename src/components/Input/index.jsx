import { Container } from './styled';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}
