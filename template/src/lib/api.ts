import axios from 'axios';
import { BASE_URL } from './constants';

const instance = axios.create({
  headers: {
    // Authorization: `Bearer ${token}`,
  },
  baseURL: BASE_URL,
});

export default {
  instance,
  getPosts: () => instance.get('/posts'),
};
