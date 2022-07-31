import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;

  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    height: auto;

    overflow-y: auto;
    padding: 0 1rem 5rem;

    margin: 1rem auto 0;
    width: min(90%, 125rem);

    header {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 3.6rem;

      .action-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    button {
      margin-top: 2.4rem;
    }

    p {
      margin-top: 2.5rem;
      font-size: clamp(1.2rem, 1.2rem + 1vw, 1.6rem);
      color: ${({ theme }) => theme.colors.text_light};

      line-height: 2.4rem;

      text-align: justify;
    }
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;

  font-size: clamp(1.8rem, 1.6rem + 0.5vw, 3rem);
  text-transform: capitalize;
  svg {
    align-self: center;
  }
`;

export const AuthorInfo = styled.div`
  color: ${({ theme }) => theme.colors.text_ultralight};
  display: flex;

  flex-wrap: wrap;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-items: space-between;
    gap: 0.8rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  img {
    width: 30px;
    border-radius: 50%;
  }
`;

export const ButtonText = styled.button`
  margin-top: 2rem;
  background: none;
  border: none;

  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.accent};

  font-size: clamp(1.4rem, 1.4rem + 0.2vw, 1.6rem);

  svg {
    color: ${({ theme }) => theme.colors.accent};
    align-self: center;
  }
`;
