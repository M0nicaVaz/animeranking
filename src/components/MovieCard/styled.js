import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent_light};
  color: ${({ theme }) => theme.colors.text_ultralight};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.8rem;

  width: 100%;
  min-height: 20rem;

  margin: 2.4rem 0;

  padding: 3.2rem;
  border-radius: 16px;
  border: none;

  p {
    font-size: clamp(1.2rem, 1.2rem + 0.8vw, 1.6rem);

    text-align: left;
    line-height: 2rem;
    max-height: calc(2rem * 4);
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }

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
