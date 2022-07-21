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

  .add-movie {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  main {
    grid-area: content;
    height: 60vh;
    margin: 2rem auto 0;
    overflow-y: auto;
    padding: 0 1.5rem 2rem;
  }
`;

export const LinkButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};

  color: ${({ theme }) => theme.colors.bg_dark};

  font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.6rem);
  height: 5.6rem;
  border-radius: 1rem;

  width: 16.5rem;
  margin-top: 1.6rem;

  border: none;
  padding: 0 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    width: 12rem;
    padding: 0 1rem;
  }
`;
