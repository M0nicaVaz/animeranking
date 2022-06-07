import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.colors.accent_light};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2.5rem;
  }
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;
  gap: 0.8rem;
  width: min(85%, 34rem);
  margin: 3rem auto;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  button {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.colors.bg_dark};
    }
  }
`;
