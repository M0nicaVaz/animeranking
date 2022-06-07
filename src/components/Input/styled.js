import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: min(62rem, 100%);

  > input {
    width: min(100%, 63rem);
    margin: 0 auto;
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

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
