import { Container } from './styles';

export function Modal({ isOpen, children }) {
  return (
    <Container isOpen={isOpen}>
      <div>
        <div>
          <strong>Deseja excluir este anime?</strong>
          <span>Essa ação não pode ser desfeita.</span>
        </div>

        <div>{children}</div>
      </div>
    </Container>
  );
}
