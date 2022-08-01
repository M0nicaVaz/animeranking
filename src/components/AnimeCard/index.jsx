import { Link } from 'react-router-dom';
import { Container } from './styled';
import { FiPlus } from 'react-icons/fi';

export function AnimeCard({ data, ...rest }) {
  const slug = data.title.split(' ').join('_');

  return (
    <Container data={data}>
      <div className="header">
        <strong> {data.title}</strong>
        <span>{data.title_english}</span>
      </div>

      <img src={data.images.jpg.large_image_url} alt="Foto do anime" />

      <Link className="save-btn" to={`/new/${slug}`}>
        <FiPlus /> Adicionar
      </Link>

      <a href={data.url} target="_blank">
        Ver mais
      </a>
    </Container>
  );
}
