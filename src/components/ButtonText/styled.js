import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;

  a {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.accent};

    font-size: clamp(1.4rem, 1.4rem + 0.2vw, 1.6rem);
  }

  svg {
    align-self: center;
  }
`;
