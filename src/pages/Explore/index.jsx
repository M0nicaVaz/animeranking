import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { AnimeCard } from '../../components/AnimeCard';
import { ButtonText } from '../../components/ButtonText';

import { FiSearch } from 'react-icons/fi';

import { Container, Button } from './styled';
import { anime } from '../../services/jinkan';

import { useState, useEffect } from 'react';

export function Explore() {
  const [search, setSearch] = useState('');
  const [animes, setAnimes] = useState([]);
  const [topAnimes, setTopAnimes] = useState([]);

  async function fetchAnimesFromMAL() {
    if (search.length > 0) {
      const response = await anime.get(
        `/anime?q=${search}&order_by=popularity&sort=asc&limit=8&sfw`
      );

      setAnimes(response.data.data);
    } else {
      setAnimes([]);
    }
  }

  function HandleSearch(e) {
    e.preventDefault();

    fetchAnimesFromMAL(search);
  }

  async function fetchTopAnimes() {
    const response = await anime.get(`/top/anime`);

    setTopAnimes(response.data.data);
  }

  useEffect(() => {
    fetchTopAnimes();
  }, []);

  return (
    <Container>
      <Header />

      <Section>
        <ButtonText title="Voltar" />
        <h2>Explorar Animes</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Digite o anime para pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={HandleSearch}>
            <FiSearch />
            Buscar Anime
          </Button>
        </div>

        <main>
          {animes.length > 0
            ? animes.map((anime) => (
                <AnimeCard data={anime} key={anime.mal_id} />
              ))
            : topAnimes.map((anime) => (
                <AnimeCard data={anime} key={anime.mal_id} />
              ))}
        </main>
      </Section>
    </Container>
  );
}
