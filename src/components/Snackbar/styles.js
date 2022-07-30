import styled from 'styled-components';

export const Container = styled.div`
  width: min(90%, 48rem);

  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg_dark};

  z-index: 9999;

  position: fixed;
  top: 60px;
  right: ${({ isOpen }) => (isOpen ? `20px` : `0`)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 0;
  padding: 1rem 2.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 400;

  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  visibility: ${({ isOpen }) => (isOpen ? `visible` : `hidden`)};

  transition: all 200ms ease-in-out;

  span {
    flex: 1;
    width: 100%;
    display: block;
  }

  > button {
    width: 2rem;
    display: flex;
    align-items: center;

    font-size: 18px;
    cursor: pointer;
    transition: 200ms;
    padding: 0;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.bg_dark};
  }

  @media (max-width: 769px) {
    top: 10vh;
  }
`;
