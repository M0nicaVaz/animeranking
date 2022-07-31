import axios from 'axios';

export const anime = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});
