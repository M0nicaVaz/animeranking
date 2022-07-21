import { Container } from './styles.js';
import { FiX } from 'react-icons/fi';

export function Snackbar({ isOpen, onClose, children }) {
  return (
    <Container isOpen={isOpen}>
      <span>{children}</span>
      <button onClick={onClose}>
        <FiX />
      </button>
    </Container>
  );
}
