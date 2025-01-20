import axios from 'axios';

const theMovieDatabaseApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_ENDPOIT,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READONLY_TOKEN}`,
    Accept: 'application/json',
  },
  params: {
    language: navigator.language,
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

export const fetchMovieGenres = async () => {
  const { data } = await theMovieDatabaseApi.get('/3/genre/movie/list');
  return data;
};

export const fetchMoviesByTitle = async (title) => {
  const { data } = await theMovieDatabaseApi(
    `3/search/movie?query=${encodeURIComponent(title)}&include_adult=false`
  );
  console.log('fetchMoviesByTitle: ', data);
  return data;
};
