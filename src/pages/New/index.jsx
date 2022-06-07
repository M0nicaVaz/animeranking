import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NewTag } from '../../components/NewTag';

import { Button } from '../../components/Button';

import { Container, Form } from './styled';
import { ButtonText } from '../../components/ButtonText';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" />
            <h1>Novo Filme</h1>
          </header>

          <div className="split">
            <div>
              <Input placeholder="Título" />
            </div>
            <div>
              <Input placeholder="Sua nota (de 0 a 5)" type="number" />
            </div>
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
            <Button reverse title="Excluir Filme" />
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
