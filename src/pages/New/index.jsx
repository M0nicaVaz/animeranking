import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { NewTag } from '../../components/NewTag';
import { Snackbar } from '../../components/Snackbar';
import { Textarea } from '../../components/Textarea';

import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { ButtonText, Container, Form } from './styled';

export function New() {
  const { slug, id } = useParams();
  const titleFromParam = slug ? slug.split('_').join(' ') : '';

  const [data, setData] = useState([]);

  const [title, setTitle] = useState(titleFromParam);
  const [description, setDescription] = useState('');

  const [rating, setRating] = useState([]);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function handleAddTag() {
    if (newTag.trim().length === 0) {
      return null;
    }

    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function validateRating(e) {
    if (e.target.value.length >= 1 || !/[0-5]/.test(e.key)) {
      e.returnValue = false;
      e.preventDefault();
    }
  }

  async function handleNewAnime() {
    if (!title) {
      setIsOpen(true);
      setAlertMessage('Digite o título!');

      return null;
    }

    if (rating < 0 || rating > 5 || rating.length === 0) {
      setIsOpen(true);
      setAlertMessage('Digite uma nota de 0 a 5!');

      return null;
    }

    if (newTag) {
      setIsOpen(true);
      setAlertMessage('Ops! Você esqueceu de adicionar a tag!');

      return null;
    }

    try {
      await api.post('/animes', {
        title,
        description,
        tags,
        rating,
      });
    } catch (e) {
      alert(e.message);
    }

    navigate('/');
    return null;
  }

  async function handleUpdateAnime() {
    if (rating < 0 || rating > 5) {
      setIsOpen(true);
      setAlertMessage('Digite uma nota de 0 a 5!');

      return null;
    }

    if (newTag) {
      setIsOpen(true);
      setAlertMessage('Ops! Você esqueceu de adicionar a tag!');

      return null;
    }

    const updated = {
      title,
      description,
      rating,
      tags,
      id,
    };

    const animeUpdated = Object.assign(data, updated);

    try {
      await api.put(`/animes/${id}`, animeUpdated);
    } catch (e) {
      alert(e.message);
    }

    navigate('/');
    return null;
  }

  useEffect(() => {
    if (id) {
      async function getAnimeFromDB() {
        const response = await api.get(`/animes/${id}`);
        const { tags } = response.data;

        const newTags = tags.map((tag) => tag.name);

        setData(response.data);
        setTags(newTags);
      }
      getAnimeFromDB();
    }
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText type="button" onClick={handleGoBack}>
              <FiArrowLeft />
              Voltar
            </ButtonText>
            <h1>{id ? 'Editar Anime' : 'Novo Anime'}</h1>
          </header>

          <div className="header-input">
            <input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={data.title || title}
              minLength="1"
            />
            <input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onKeyPress={validateRating}
              onChange={(e) => setRating(e.target.value)}
              defaultValue={data.rating || rating}
              min={0}
              max={5}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={data.description || description}
          />

          <section>
            <span>Tags</span>
            <div className="tags">
              {tags.map((tag, index) => (
                <NewTag
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <NewTag
                isNew
                maxLength={30}
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </section>

          <Button
            title="Salvar Alterações"
            onClick={!id ? handleNewAnime : handleUpdateAnime}
          />
        </Form>
      </main>
      <Snackbar isOpen={isOpen} setIsOpen={setIsOpen}>
        {alertMessage}
      </Snackbar>
    </Container>
  );
}
