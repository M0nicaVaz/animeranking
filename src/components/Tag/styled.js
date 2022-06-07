import styled from 'styled-components';

export const Container = styled.span`
  font-size: clamp(1rem, 1rem + 0.2vw, 1.2rem);
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;

  text-transform: lowercase;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.border};
`;
