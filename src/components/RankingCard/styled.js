import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent_light};
  color: ${({ theme }) => theme.colors.text_ultralight};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 2rem;

  flex: 1;

  height: 24rem;
  min-width: 38rem;

  margin: 2rem auto 0;

  padding: 2rem 3rem;
  border-radius: 16px;
  border: none;

  svg {
    color: ${({ theme }) => theme.colors.accent_md};
  }

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

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 8px;

    h3 {
      text-transform: capitalize;
      font-size: clamp(1.6rem, 1.8rem + 0.5vw, 2.2rem);
      color: ${({ theme }) => theme.colors.primary};
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    min-height: 10rem;
    min-width: 85vw;
  }
`;
