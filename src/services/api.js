import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://anime-ranking-1.herokuapp.com',
});
