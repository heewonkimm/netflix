import axios from 'axios';

const API_URL = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c6f8dac2683fdc0a0915476e424a8dca',
  },
});

// const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export { API_URL };
