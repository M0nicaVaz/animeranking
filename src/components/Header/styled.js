import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  width: 100vw;
  height: 10.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  padding: 0 min(8%, 12rem);
`;

export const Logo = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  img {
    width: clamp(2.8rem, 2.8rem + 1vw, 4.2rem);
  }

  h2 {
    color: ${({ theme }) => theme.colors.accent};
    font-size: clamp(1.8rem, 1.8rem + 1vw, 2.8rem);

    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;

    span {
      align-self: flex-end;
      font-size: clamp(1.2rem, 1.2rem + 0.2vw, 1.4rem);
    }

    strong {
      font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.6rem);
    }

    button {
      background: none;
      border: none;

      display: flex;
      gap: 1rem;
      color: ${({ theme }) => theme.colors.text_ultralight};

      font-size: clamp(1.4rem, 1.4rem + 0.2vw, 1.6rem);
    }
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;
