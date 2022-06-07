import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent_light};
  color: ${({ theme }) => theme.colors.text_ultralight};
  font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.6rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.8rem;

  text-align: left;

  width: 100%;
  min-height: 20rem;
  margin: 2.4rem 0;

  padding: 3.2rem;
  border-radius: 16px;
  border: none;

  > div {
    display: flex;
    flex-direction: column;

    gap: 8px;

    h3 {
      font-size: clamp(1.6rem, 1.8rem + 0.5vw, 2.2rem);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
