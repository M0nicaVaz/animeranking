import { Container } from './styled';

export function Tag({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
