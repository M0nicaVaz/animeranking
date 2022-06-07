import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container } from './styled';

import { MovieCard } from '../../components/MovieCard';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Header />

      <Section>
        <div className="add-movie">
          <h2>Meus Filmes</h2>
          <Button icon={FiPlus} title="Adicionar Filme" />
        </div>

        <main>
          <MovieCard
            data={{
              title: 'Título do Filme',
              ratings: 3,
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur recusandae cum repellendus laborum ipsam nemo illo ducimus quia eius, repellat tempora, modi omnis deleniti reiciendis. Consequuntur consequatur nihil facilis.',
              tags: [
                { id: '1', name: 'drama' },
                { id: '2', name: 'comédia' },
              ],
            }}
          />
          <MovieCard
            data={{
              title: 'Título do Filme 2',
              ratings: 5,
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur recusandae cum repellendus laborum ipsam nemo illo ducimus quia eius, repellat tempora, modi omnis deleniti reiciendis. Consequuntur consequatur nihil facilis.',
              tags: [
                { id: '1', name: 'anime' },
                { id: '2', name: 'romance' },
                { id: '3', name: 'ação' },
              ],
            }}
          />
          <MovieCard
            data={{
              title: 'Título do Filme 3',
              ratings: 1,
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur recusandae cum repellendus laborum ipsam nemo illo ducimus quia eius, repellat tempora, modi omnis deleniti reiciendis. Consequuntur consequatur nihil facilis.',
              tags: [
                { id: '1', name: 'fantasia' },
                { id: '2', name: 'suspense' },
              ],
            }}
          />
        </main>
      </Section>
    </Container>
  );
}
