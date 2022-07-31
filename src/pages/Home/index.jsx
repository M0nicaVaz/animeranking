import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { MovieCard } from '../../components/MovieCard';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Container, LinkButton, Button } from './styled';

export function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
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
          {movies.map((movie) => (
            <MovieCard
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
