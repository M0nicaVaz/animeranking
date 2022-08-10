import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { RankingCard } from '../../components/RankingCard';

import { Button, Container, LinkButton } from './styled';

export function Home() {
  const [search, setSearch] = useState('');
  const [rankingList, setRankingList] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function getRankingList() {
      const response = await api.get(`/animes/?title=${search}`);

      setRankingList(response.data);
    }

    getRankingList();
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
          {rankingList.map((anime) => (
            <RankingCard
              key={String(anime.id)}
              data={anime}
              onClick={() => {
                handleDetails(anime.id);
              }}
            />
          ))}
        </main>
      </section>
    </Container>
  );
}
