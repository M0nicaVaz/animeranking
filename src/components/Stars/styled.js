import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  gap: 5px;

  span {
    font-size: clamp(14px, 14px + 0.6vw, 18px);
    color: ${({ theme }) => theme.colors.accent};
    padding: 0;
    margin: 0;
    max-height: 18px;
  }
`;
