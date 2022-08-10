import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme, reverse }) =>
    reverse ? theme.colors.bg_darker : theme.colors.accent};

  color: ${({ theme, reverse }) =>
    reverse ? theme.colors.accent : theme.colors.bg_dark};

  font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.6rem);
  height: 5.6rem;
  border-radius: 1rem;

  width: 180px;
  margin-top: 1.6rem;

  border: none;
  padding: 0 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
