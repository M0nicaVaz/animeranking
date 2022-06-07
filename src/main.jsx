import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/globalStyle';
import theme from './style/theme';

import { Details } from './pages/Details';

const data = {
  title: 'Tenki no Ko',
  name: 'Monica Vaz',
  ratings: 3,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur recusandae cum repellendus laborum ipsam nemo illo ducimus quia eius, repellat tempora, modi omnis deleniti reiciendis. Consequuntur consequatur nihil facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo, soluta harum dolor modi fugit! Reiciendis amet totam, recusandae obcaecati, quidem nihil cum excepturi sunt maiores repudiandae omnis dolore ab distinctio? Laborum, iste officia tenetur quam dolorum quia cum id architecto cupiditate. Quaerat molestiae saepe at distinctio laborum recusandae, iure, non facilis laboriosam veritatis, quo quidem delectus minus ipsum laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur recusandae cum repellendus laborum ipsam nemo illo ducimus quia eiat distinctio laborum recusandae, iure, non facilis laboriosam veritatis, quo quidem delectus minus ipsum laudantium!',
  tags: [
    { id: '1', name: 'drama' },
    { id: '2', name: 'romance' },
    { id: '3', name: 'anime' },
  ],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details data={data} />
    </ThemeProvider>
  </React.StrictMode>
);
