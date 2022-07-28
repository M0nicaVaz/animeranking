import { Container } from './styled';

export function Button({ title, icon: Icon, reverse, ...rest }) {
  return (
    <Container {...rest} reverse={reverse} type="button">
      {Icon && <Icon />} {title}
    </Container>
  );
}
