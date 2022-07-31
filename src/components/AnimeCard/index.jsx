import { Container } from './styled';

export function AnimeCard({ data, ...rest }) {
  return (
    <Container data={data}>
      <div>
        <strong> {data.title}</strong>
        <span>{data.title_english}</span>
      </div>

      <img src={data.images.jpg.large_image_url} alt="Foto do anime" />

      <div>
        <a href={data.url} target="_blank">
          Saber mais
        </a>
        <a href={data.trailer.url} target="_blank">
          Ver o trailer
        </a>
      </div>
    </Container>
  );
}
