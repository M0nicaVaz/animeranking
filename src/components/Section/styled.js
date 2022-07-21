import styled from 'styled-components';

export const Container = styled.section`
  margin: 2rem auto;
  width: min(90%, 130rem);

  > h2 {
    margin: 0 0 2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: clamp(2.2rem, 2.2rem + 0.5vw, 3.2rem);
  }
`;
