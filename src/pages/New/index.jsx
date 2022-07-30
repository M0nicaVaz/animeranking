import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { NewTag } from '../../components/NewTag';
import { FiArrowLeft } from 'react-icons/fi';
import { Snackbar } from '../../components/Snackbar';

import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Container, Form, ButtonText } from './styled';

export function New() {
  const [title, setTitle] = useState('');
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
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleClose(event) {
    event.preventDefault();
    setIsOpen(!isOpen);

    return null;
  }

  async function handleNewMovie() {
    if (!title) {
      setIsOpen(true);
      setAlertMessage('Digite o título!');

      return null;
    }

    if (rating > 5) {
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
      await api.post('/movies', {
        title,
        description,
        tags,
        rating,
      });
    } catch (e) {
      alert(e.message);
    }

    navigate(-1);
    return null;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, [isOpen]);

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText onClick={handleGoBack}>
              <FiArrowLeft />
              Voltar
            </ButtonText>
            <h1>Novo Filme</h1>
          </header>

          <div className="header-input">
            <input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
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
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </section>

          <Snackbar isOpen={isOpen} onClose={handleClose}>
            {alertMessage}
          </Snackbar>

          <Button title="Salvar Alterações" onClick={handleNewMovie} />
        </Form>
      </main>
    </Container>
  );
}
