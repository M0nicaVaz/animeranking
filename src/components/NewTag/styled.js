import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.colors.bg_light};

  color: ${({ theme }) => theme.colors.primary};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.colors.accent}` : 'none'};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: hsl(355, 50%, 54%);
  }

  .button-add {
    color: ${({ theme }) => theme.colors.accent};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    flex: 1;
    text-align: center;
    padding: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text_ultralight};
    }
  }
`;
