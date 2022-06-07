import { Container } from './styled';
import { FiArrowLeft } from 'react-icons/fi';

export function ButtonText({ title, noIcon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a href="/">
        {noIcon ? '' : <FiArrowLeft />}
        {title}
      </a>
    </Container>
  );
}
