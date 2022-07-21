import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.bg_light};
  color: ${({ theme }) => theme.colors.primary};

  border: none;
  resize: none;

  margin: 2rem 0;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_ultralight};
  }
`;
