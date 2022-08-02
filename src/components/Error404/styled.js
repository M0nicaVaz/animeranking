import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(90vh - 10.5rem);
  display: grid;
  gap: 2rem;
  place-content: center;

  img {
    width: 34rem;
  }

  > div {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .yellow {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    justify-self: center;
    color: ${({ theme }) => theme.colors.accent};

    font-size: 2rem;
  }
`;
