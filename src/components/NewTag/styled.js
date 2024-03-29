import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  flex: 1;
  max-width: 50rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.colors.bg_light};

  color: ${({ theme }) => theme.colors.primary};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.colors.accent}` : 'none'};

  border-radius: 1rem;
  padding-right: 1.6rem;

  &:focus {
    border: none;
    border-radius: 2pt;

    outline: none;
    transition: 0.1s;
  }

  button {
    margin: 0;

    width: 1rem;
    padding: 1.6rem;
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
    flex: 1;
    height: 5.6rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 1.2rem 1rem;
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text_ultralight};
    }
  }
`;
