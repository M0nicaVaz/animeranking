import { Container } from './styled';
import { FiSearch } from 'react-icons/fi';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}
