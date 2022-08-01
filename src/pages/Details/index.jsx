import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { Container, AuthorInfo, MovieInfo } from './styled';
import { ButtonText } from '../../components/ButtonText';

import { FiClock } from 'react-icons/fi';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Details() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleModal() {
    setIsOpen(!isOpen);
  }

  function handleGoBack() {
    navigate('/');
  }

  async function handleRemove() {
    await api.delete(`/animes/${params.id}`);
    navigate('/');
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/animes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <header>
            <div className="action-btn">
              <ButtonText title="Voltar" onClick={handleGoBack} />

              <ButtonText title="Excluir Anime" onClick={handleModal} noIcon />
            </div>

            <MovieInfo>
              <h1>{data.title} </h1>
              <Stars ratings={data.rating} />
            </MovieInfo>

            <AuthorInfo>
              <div>
                <img src={avatarUrl} />

                <span>Por {user.name}</span>
              </div>

              <div>
                <FiClock />
                <span>{data.updated_at}</span>
              </div>
            </AuthorInfo>

            <section className="tags">
              {data.tags && (
                <div>
                  {data.tags.map((tag) => (
                    <Tag title={tag.name} key={tag.id} />
                  ))}
                </div>
              )}
            </section>
          </header>

          <p>{data.description}</p>
        </main>
      )}

      <Modal isOpen={isOpen}>
        <button onClick={handleModal}>Cancelar</button>
        <button onClick={handleRemove}>Excluir</button>
      </Modal>
    </Container>
  );
}
