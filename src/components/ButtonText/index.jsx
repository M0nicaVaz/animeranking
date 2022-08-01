import { Container } from './styled';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function ButtonText({ title, noIcon, ...rest }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container type="button" onClick={handleGoBack} {...rest}>
      {noIcon ? '' : <FiArrowLeft />}
      {title}
    </Container>
  );
}
