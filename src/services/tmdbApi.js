import axios from 'axios';

const theMovieDatabaseApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_ENDPOIT,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READONLY_TOKEN}`,
    Accept: 'application/json',
  },
});

const theMovieDatabaseImagesApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_IMAGES_API_ENDPOIT,
  timeout: 1000,
});

export const fetchUpcomingMovies = async () => {
  const { data } = await theMovieDatabaseApi.get('/3/movie/upcoming');
  console.log('fetchUpcomingMovies: ', data);
  return data;
};

export const buildMoviePosterPath = (posterPath) => {
  return `${theMovieDatabaseImagesApi.getUri()}/t/p/original${posterPath}`;
};
