import { fetchMovieGenres, fetchMoviesByTitle, fetchUpcomingMovies } from '../services/tmdbApi.js';
import { useQuery } from 'react-query';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { MovieList } from '../components/MovieList.jsx';
import { useEffect, useState } from 'react';

const fetchData = async () => {
  try {
    const [upcomingMovies, movieGenres] = await Promise.all([
      fetchUpcomingMovies(),
      fetchMovieGenres(),
    ]);
    return {
      upcomingMovies: upcomingMovies.results,
      genres: movieGenres.genres,
    };
  } catch (error) {
    throw new Error('Failed to fetch data' + error);
  }
};

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const { data, error, isLoading } = useQuery(['movies'], fetchData);
  const {
    data: searchData,
    refetch: searchMoviesByTitle,
    isLoading: searchIsLoading,
  } = useQuery(['searchMoviesByTitle', searchTitle], () => fetchMoviesByTitle(searchTitle), {
    enabled: false,
  });

  const handleSearchMovieSubmit = async (event) => {
    event.preventDefault();
    if (searchTitle.trim()) {
      await searchMoviesByTitle();
    }
  };

  useEffect(() => {
    if (searchData) {
      setMovies(searchData.results);
    } else if (data) {
      setMovies(data.upcomingMovies);
      setGenres(data.genres);
    }
  }, [data, searchData]);

  return (
    <>
      <h1>React Movies</h1>
      <form onSubmit={handleSearchMovieSubmit}>
        <input
          type="text"
          onChange={({ target: { value } }) => setSearchTitle(value)}
          value={searchTitle}
        />
        <button type="submit" disabled={!searchTitle.trim()}>
          Rechercher
        </button>
      </form>
      <br />
      {(isLoading || searchIsLoading) && <Dots />}
      {error && (
        <p>
          {searchTitle ? 'Erreur lors de la recherche.' : 'Erreur lors du chargement des données.'}
        </p>
      )}
      {movies.length > 0 && <MovieList movies={movies} genres={genres} />}
    </>
  );
};
