import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Container } from './styled';

import confusedGif from '../../assets/confused.gif';

export function NotFound() {
  return (
    <Container>
      <Header />
      <main>
        <img src={confusedGif} alt="Fruits Basket Gif" />
        <div>
          <span className="yellow">Oops! 404</span>
          <span>Como você veio parar aqui?</span>
        </div>
        <ButtonText title="Voltar" />
      </main>
    </Container>
  );
}
