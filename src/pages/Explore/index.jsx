import { FiSearch } from 'react-icons/fi';
import { AnimeCard } from '../../components/AnimeCard';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Snackbar } from '../../components/Snackbar';

import { anime } from '../../services/jinkan';
import { Button, Container } from './styled';

import { useEffect, useState } from 'react';

export function Explore() {
  const [search, setSearch] = useState('');
  const [animes, setAnimes] = useState([]);
  const [topAnimes, setTopAnimes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const isThereAnimeSearched = animes.length > 0;
  const isTopAnimesLoaded = topAnimes.length > 0;

  async function getSearchedAnime() {
    const searchInputIsNotEmpty = search.trim().length > 0;

    if (searchInputIsNotEmpty) {
      const response = await anime.get(
        `/anime?q=${search}&order_by=popularity&sort=asc&limit=8&sfw`
      );

      const animeNotFound = response.data.data.length === 0;

      if (animeNotFound) {
        setIsOpen(true);
        setAlertMessage('Desculpe, não encontramos esse anime :(');
        return null;
      }

      setAnimes(response.data.data);
    }
  }

  function handleSearch(e) {
    e.preventDefault();

    getSearchedAnime(search);
    setSearch('');
  }

  function handleSearchInputChange(e) {
    setSearch(e.target.value);
  }

  async function getTopAnimes() {
    const response = await anime.get(`/top/anime`);

    setTopAnimes(response.data.data);
  }

  useEffect(() => {
    getTopAnimes();
  }, []);

  return (
    <Container>
      <Header />

      <Section>
        <ButtonText title="Voltar" />
        <h2>Explorar Animes</h2>
        <form className="search" onSubmit={handleSearch}>
          <input
            required
            type="text"
            placeholder="Digite o anime para pesquisar"
            onChange={handleSearchInputChange}
            value={search}
          />
          <Button>
            <FiSearch />
            Buscar Anime
          </Button>
        </form>

        <main>
          {isThereAnimeSearched ? (
            animes.map((anime) => <AnimeCard data={anime} key={anime.mal_id} />)
          ) : isTopAnimesLoaded ? (
            topAnimes.map((anime) => (
              <AnimeCard data={anime} key={anime.mal_id} />
            ))
          ) : (
            <span className="loading">Carregando... </span>
          )}
        </main>
      </Section>

      <Snackbar isOpen={isOpen} setIsOpen={setIsOpen}>
        {alertMessage}
      </Snackbar>
    </Container>
  );
}
