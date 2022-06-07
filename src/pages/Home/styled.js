import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';

  .add-movie {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  main {
    grid-area: content;
    height: 60vh;
    margin: 2rem auto 0;
    overflow-y: auto;
    padding: 0 1.5rem;
  }
`;
