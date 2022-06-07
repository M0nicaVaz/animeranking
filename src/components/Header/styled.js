import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100vw;
  height: 10.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 0 min(8%, 12rem);

  > h2 {
    color: ${({ theme }) => theme.colors.accent};
    font-size: clamp(1.6rem, 1.6rem + 0.8vw, 2.4rem);

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
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`;
