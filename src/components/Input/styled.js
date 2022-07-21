import styled from 'styled-components';

export const Container = styled.div`
  grid-area: search;

  display: flex;
  align-items: center;
  width: min(90%, 130rem);
  margin: 0 auto;
  padding: 4rem 1.5rem 0;

  > input {
    flex: 1;
    padding: 1.9rem 2.4rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.bg_light};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.6rem;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text_ultralight};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
