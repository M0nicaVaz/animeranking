import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 10.5rem 6.4rem auto;
  grid-template-areas:
    'header'
    'search'
    'content';

  section {
    > h2,
    > button {
      padding: 0 2.4rem;
    }
  }

  main {
    grid-area: content;
    height: 60vh;
    margin: 2rem auto 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 1.5rem 6rem;

    display: flex;

    gap: 2rem;
    flex-wrap: wrap;

    justify-content: center;
    max-width: 90vw;

    .loading {
      align-self: center;
      font-size: 2.8rem;
    }

    @media (max-width: 480px) {
      margin: 0;
    }
  }

  .search {
    width: 100%;
    display: flex;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    gap: 2rem;
    align-items: center;
    padding: 0 1.5rem 2.2rem;

    input {
      border-radius: 10px;
      padding: 1.9rem 2.4rem;
      background-color: ${({ theme }) => theme.colors.bg_light};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.6rem;
      border: none;
      flex: 1;

      &::placeholder {
        color: ${({ theme }) => theme.colors.text_ultralight};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      @media (max-width: 480px) {
        padding: 1.6rem 2.4rem;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};

  color: ${({ theme }) => theme.colors.bg_dark};

  font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.6rem);
  border-radius: 1rem;

  width: 16.5rem;
  border: none;
  padding: 2rem 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 520px) {
    min-width: 14rem;
    gap: 0.5rem;
    flex: 1;
    padding: 1.6rem 0.3rem;
  }
`;
