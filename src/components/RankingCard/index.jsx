import { Stars } from '../Stars';
import { Tag } from '../Tag';
import { Container } from './styled';

export function RankingCard({ data, ...rest }) {
  return (
    <Container data={data} to={`/details/${data.id}`} {...rest}>
      <header>
        <h3>{data.title}</h3>
        <Stars ratings={data.rating} />
      </header>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag title={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}
