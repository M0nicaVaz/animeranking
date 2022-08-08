import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { RankingCard } from '../../components/RankingCard';

import { Button, Container, LinkButton } from './styled';

export function Home() {
  const [search, setSearch] = useState('');
  const [anime, setAnime] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchAnime() {
      const response = await api.get(`/animes/?title=${search}`);
      setAnime(response.data);
    }

    fetchAnime();
  }, [search]);

  return (
    <Container>
      <Header />

      <section>
        <div className="btnWrapper">
          <Button to="/explore">
            Explorar Animes
            <FiArrowRight />
          </Button>
        </div>

        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="add-anime">
          <h2>Meus Animes</h2>
          <LinkButton to="/new">
            <FiPlus />
            Novo Anime
          </LinkButton>
        </div>

        <main>
          {anime.map((movie) => (
            <RankingCard
              key={String(movie.id)}
              data={movie}
              onClick={() => {
                handleDetails(movie.id);
              }}
            />
          ))}
        </main>
      </section>
    </Container>
  );
}
