import styled from 'styled-components';

export const Container = styled.div`
  grid-area: search;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg_light};
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  > input {
    width: 100%;
    border-radius: 10px;
    padding: 1.9rem 2.4rem;
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

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
