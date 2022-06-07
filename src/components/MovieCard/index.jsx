import { Stars } from '../Stars';
import { Tag } from '../Tag';
import { Container } from './styled';

export function MovieCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <h3>{data.title}</h3>
        <Stars ratings={data.ratings} />
      </div>

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
