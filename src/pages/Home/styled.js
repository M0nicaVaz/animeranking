import { Link } from 'react-router-dom';
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
    margin: 2rem auto;
    width: min(90%, 130rem);
  }

  .btnWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .add-anime {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  input {
    width: 100%;
    margin-bottom: 2.4rem;
    border-radius: 10px;
    padding: 1.9rem 2.4rem;
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

    @media (max-width: 480px) {
      width: 90vw;
      margin: 0 auto 2.4rem;
    }
  }

  main {
    grid-area: content;
    height: 60vh;
    margin: 2rem auto 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 1.5rem 12rem;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 2rem;
  }
`;

export const LinkButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};

  color: ${({ theme }) => theme.colors.bg_dark};

  font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.6rem);

  border-radius: 1rem;

  width: 16.5rem;
  margin-top: 1.6rem;

  border: none;
  padding: 2rem 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:focus {
    border: 0.5px solid black;
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    flex: 1;
    padding: 1.4rem 0.6rem;
  }
`;

export const Button = styled(Link)`
  background: none;
  border: none;
  margin-bottom: 2rem;
  width: fit-content;

  display: flex;
  align-items: center;

  gap: 1rem;
  color: ${({ theme }) => theme.colors.accent};

  font-size: clamp(1.4rem, 1.4rem + 0.3vw, 2rem);

  svg {
    color: ${({ theme }) => theme.colors.accent};
    align-self: center;
  }

  @media (max-width: 480px) {
    min-width: 80vw;
  }
`;
