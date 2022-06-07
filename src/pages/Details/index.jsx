import { Stars } from '../../components/Stars';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Container, AuthorInfo, MovieInfo } from './styled';

import { FiClock } from 'react-icons/fi';

export function Details({ data }) {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <ButtonText title="Voltar" />

          <MovieInfo>
            <h1>{data.title}</h1>
            <Stars ratings={data.ratings} />
          </MovieInfo>

          <AuthorInfo>
            <div>
              <img src="https://github.com/m0nicavaz.png" />
              <span>Por {data.name}</span>
            </div>

            <div>
              <FiClock />
              <span>07/06/2022 15:59</span>
            </div>
          </AuthorInfo>

          <section className="tags">
            {data.tags && (
              <div>
                {data.tags.map((tag) => (
                  <Tag title={tag.name} key={tag.id} />
                ))}
              </div>
            )}
          </section>
        </header>

        <p>{data.description}</p>
      </main>
    </Container>
  );
}
