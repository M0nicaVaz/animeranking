import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { RankingCard } from '../../components/RankingCard';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Container, LinkButton, Button } from './styled';

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

      <Section>
        <div>
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
      </Section>
    </Container>
  );
}
