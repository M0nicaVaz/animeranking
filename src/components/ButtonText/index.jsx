import { Container } from './styled';
import { FiArrowLeft } from 'react-icons/fi';

export function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a href="/">
        <FiArrowLeft />
        {title}
      </a>
    </Container>
  );
}
