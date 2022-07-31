import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.accent_light};
  color: ${({ theme }) => theme.colors.text_ultralight};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 1.8rem;

  max-width: 36rem;
  min-width: 30rem;
  flex: 1;
  min-height: 20rem;

  margin: 2.4rem 0;

  padding: 2rem;
  border-radius: 16px;
  border: none;

  span {
    font-size: clamp(1.4rem, 1.2rem + 0.2vw, 1.8rem);
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.accent_md};
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: clamp(1.6rem, 1.6rem + 0.2vw, 2.2rem);
    line-height: 2.4rem;
  }

  img {
    width: 18rem;
    height: 24rem;
    object-fit: cover;
    border-radius: 6px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;
