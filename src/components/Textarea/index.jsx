import { Container } from './styled';

export function Textarea({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}
