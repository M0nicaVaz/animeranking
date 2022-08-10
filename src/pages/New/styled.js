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

  .header-input {
    display: flex;
    gap: 1rem;

    > input {
      width: 100%;

      padding: 1.9rem 2.4rem;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.bg_light};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.6rem;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.colors.text_ultralight};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    input[type='number'] {
      -moz-appearance: textfield;
    }

    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  > section {
    width: 100%;
    margin-bottom: 3rem;

    span {
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
  }

  > button {
    width: min(58rem, 100%);
    margin: 0 auto;
  }
`;

export const ButtonText = styled.button`
  text-align: right;
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
