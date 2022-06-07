import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Container, AuthorInfo, MovieInfo, ButtonText } from './styled';

import { FiClock, FiArrowLeft } from 'react-icons/fi';

export function Details(data) {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <ButtonText to="/">
            <FiArrowLeft />
            Voltar
          </ButtonText>

          <MovieInfo>
            <h1>{data.title || 'Tenki No Ko'} </h1>
            <Stars ratings={data.ratings || 4} />
          </MovieInfo>

          <AuthorInfo>
            <div>
              <img src="https://github.com/m0nicavaz.png" />

              <span>Por {data.name || 'Monica Vaz'}</span>
            </div>

            <div>
              <FiClock />
              <span>{data.updated_at || '07/06/2022 15:59'}</span>
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

        <p>
          {data.description ||
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet veritatis facilis enim ad? Magni nostrum obcaecati, provident velit blanditiis aut neque iste cupiditate aperiam dolorem animi labore, nisi magnam doloribus praesentium perspiciatis ea debitis dolore tempore sapiente nobis quis? Mollitia doloremque, accusamus a eos laborum nam enim adipisci similique facilis rem veritatis quisquam, ex, rerum deleniti quae est modi officiis eveniet minima consectetur! Dolorem dolorum placeat impedit quas molestiae libero molestias nemo! Tempora dignissimos non mollitia rem autem ad necessitatibus.Aesentium perspiciatis ea debitis dolore tempore sapiente nobis quis? Mollitia doloremque, accusamus a eos laborum nam enim adipisci similique facilis rem veritatis quisquam, ex, rerum deleniti quae est modi officiis eveniet minima consectetur! Dolorem dolorum placeat impedit quas molestiae libero molestias nemo! Tempora dignissimos non mollitia rem autem ad necessitatibus'}
        </p>
      </main>
    </Container>
  );
}
