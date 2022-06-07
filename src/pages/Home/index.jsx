import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

import { Container, LinkButton } from './styled';

import { MovieCard } from '../../components/MovieCard';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Header />

      <Section>
        <div className="add-movie">
          <h2>Meus Filmes</h2>
          <LinkButton to="/new">
            <FiPlus />
            Adicionar Filme
          </LinkButton>
        </div>

        <main>
          <MovieCard
            data={{
              name: 'Monica Vaz',
              id: 1,
              title: 'Tenki No Ko',
              ratings: 4,
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor quasi corrupti quibusdam eaque fuga laborum itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.',
              tags: [
                { id: '1', name: 'drama' },
                { id: '2', name: 'anime' },
              ],
            }}
          />
          <MovieCard
            data={{
              name: 'Monica Vaz',
              id: 2,
              title: 'Na Natureza Selvagem',
              ratings: 5,
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor quasi corrupti quibusdam eaque fuga laborum itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis est, explicabo nulla perferendis voluptas officiis quasi deleniti id possimus.',
              tags: [
                { id: '1', name: 'drama' },
                { id: '2', name: 'aventura' },
              ],
            }}
          />
          <MovieCard
            data={{
              name: 'Monica Vaz',
              id: 3,
              title: 'Encanto',
              ratings: 2,
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor quasi corrupti quibusdam eaque fuga laborum itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.',
              tags: [
                { id: '1', name: 'musical' },
                { id: '2', name: 'disney' },
                { id: '3', name: 'animação' },
              ],
            }}
          />
        </main>
      </Section>
    </Container>
  );
}
