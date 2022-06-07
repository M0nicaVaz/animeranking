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
    padding: 0 3rem;

    margin: 1rem auto 0;
    width: min(90%, 125rem);
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 3.8rem auto;

  > header {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 3.6rem;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-size: clamp(2.2rem, 2.2rem + 0.5vw, 3.2rem);
    }
  }

  > section {
    width: 100%;
    margin-bottom: 3rem;
    p {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.text_ultralight};

      font-size: clamp(1.4rem, 1.6rem + 0.2vw, 1.8rem);
    }
  }

  .tags {
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.bg_darker};

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    div {
      flex: 1;
      min-width: 15rem;
      max-width: 100%;
    }
  }

  .split {
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;

    div,
    button {
      flex: 1;
    }
  }
`;
