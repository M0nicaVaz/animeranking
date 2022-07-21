import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NewTag } from '../../components/NewTag';
import { FiArrowLeft } from 'react-icons/fi';

import { Button } from '../../components/Button';

import { Container, Form, ButtonText } from './styled';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText to="/">
              <FiArrowLeft />
              Voltar
            </ButtonText>
            <h1>Novo Filme</h1>
          </header>

          <div className="header-input">
            <input placeholder="Título" />
            <input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>

          <Textarea placeholder="Observações" />

          <section>
            <p>Tags</p>
            <div className="tags">
              <NewTag value="terror" />
              <NewTag value="FilmeMuitoBom" />
              <NewTag value="anime" />
              <NewTag isNew placeholder="Nova Tag" />
            </div>
          </section>

          <div className="split ">
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
