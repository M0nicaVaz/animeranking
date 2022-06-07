import styled from 'styled-components';
import backgroundImg from '../../assets/homebg.jpg';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  min-width: min(100vw, 60rem);
  padding: 0 clamp(5rem, 5rem + 2vw, 10rem);
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: clamp(3rem, 3rem + 4vw, 4.8rem);
    color: ${({ theme }) => theme.colors.accent};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 3rem 0;
  }

  > p {
    font-size: clamp(1.4rem, 1.4rem + 0.2vw, 1.6rem);
    color: ${({ theme }) => theme.colors.text_ultralight};
  }

  > button:first-of-type {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  opacity: 0.4;
`;

export const ButtonText = styled(Link)`
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
