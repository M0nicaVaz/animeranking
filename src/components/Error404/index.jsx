import React from 'react';

import confusedGif from '../../assets/confused.gif';
import { ButtonText } from '../../components/ButtonText';
import { Container } from './styled';

export function Error404() {
  return (
    <Container>
      <img src={confusedGif} alt="Fruits Basket Gif" />
      <div>
        <span className="yellow">Oops! 404</span>
        <span>Como você veio parar aqui?</span>
      </div>
      <ButtonText title="Voltar" />
    </Container>
  );
}
