import { useEffect } from 'react';
import { Container } from './styles.js';

export function Snackbar({ isOpen, setIsOpen, children }) {
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, [isOpen]);

  return (
    <Container isOpen={isOpen} setIsOpen={setIsOpen}>
      <span>{children}</span>
    </Container>
  );
}
