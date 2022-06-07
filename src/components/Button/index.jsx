import { Container } from './styled';

export function Button({ title, icon: Icon, reverse }) {
  return (
    <Container reverse={reverse} type="button">
      {Icon && <Icon />} {title}
    </Container>
  );
}
