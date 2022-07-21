import styled from 'styled-components';

export const Container = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  visibility: ${({ isOpen }) => (isOpen ? `visible` : `hidden`)};

  backdrop-filter: blur(1.5px);
  position: absolute;
  height: 100vh;
  width: 100vw;

  display: grid;

  > div {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.bg_dark};

    align-self: center;
    justify-self: center;

    display: grid;
    place-content: center;
    text-align: center;
    gap: 2rem;

    width: min(85%, 45rem);
    height: 24rem;

    border-radius: 10px;
  }

  strong {
    font-size: 2rem;
  }

  span {
    display: block;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.text_ultralight};
  }

  button {
    background: transparent;
    padding: 1.2rem 2.4rem;

    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    border-radius: 10px;

    &:nth-child(2) {
      border: 1px solid ${({ theme }) => theme.colors.red};
      margin-left: 1.6rem;

      &:hover {
        color: ${({ theme }) => theme.colors.red};
        transition: color 250ms;
      }
    }
  }
`;
