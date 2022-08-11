import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonText } from '../../components/ButtonText';
import { Error404 } from '../../components/Error404';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';
import { AnimeInfo, AuthorInfo, Container } from './styled';

import { AiOutlineEdit } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);
  const [dateFormatted, setDateFormatted] = useState(null);

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

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
    async function getRankedAnimeAndSetDate() {
      const response = await api.get(`/animes/${params.id}`);

      setData(response.data);

      const updatedAt = new Date(response.data.updated_at);
      const utcDate = zonedTimeToUtc(updatedAt, 'Etc/GMT');
      const publishedDateFormatted = format(utcDate, "d'/'LL'/'yyyy  hh:mm:ss");

      setDateFormatted(publishedDateFormatted);
    }

    getRankedAnimeAndSetDate();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          {data.title ? (
            <div>
              <header>
                <div className="action-btn">
                  <ButtonText title="Voltar" onClick={handleGoBack} />

                  <ButtonText
                    title="Excluir Anime"
                    onClick={handleModal}
                    noIcon
                  />
                </div>

                <AnimeInfo>
                  <h1>{data.title || 'Nada aqui :('} </h1>
                  <Stars ratings={data.rating} />
                </AnimeInfo>

                <AuthorInfo>
                  <div>
                    <img src={avatarUrl} />

                    <span>Por {user.name}</span>
                  </div>

                  <div>
                    <FiClock />
                    <span>{dateFormatted}</span>
                  </div>

                  <button onClick={() => handleEdit(data.id)} className="edit">
                    <AiOutlineEdit size={18} />
                    <span>Editar</span>
                  </button>
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
            </div>
          ) : (
            <Error404 />
          )}
        </main>
      )}

      <Modal isOpen={isOpen}>
        <button onClick={handleModal}>Cancelar</button>
        <button onClick={handleRemove}>Excluir</button>
      </Modal>
    </Container>
  );
}
