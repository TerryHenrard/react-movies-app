import { NavBar } from '../components/NavBar.jsx';
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList.jsx';
import { fetchFavoriteMoviesFromLocalStorage, fetchMovieGenres } from '../services/tmdbApi.js';
import { useQuery } from 'react-query';
import { Dots } from 'react-activity';

// TODO: Retirer un film des favoris depuis acceuil et favoris

const fetchData = async () => {
  try {
    const [favoriteMovies, movieGenres] = await Promise.all([
      fetchFavoriteMoviesFromLocalStorage(),
      fetchMovieGenres(),
    ]);

    return { favoriteMovies, movieGenres };
  } catch (error) {
    throw new Error('Failed to fetch favorite movies ' + error);
  }
};

export const Favorites = () => {
  const [favMovies, setFavMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const { data, error, isLoading } = useQuery(['favorite movies'], fetchData);

  useEffect(() => {
    if (data) {
      setFavMovies(data.favoriteMovies);
      setGenres(data.movieGenres);
    }
  }, [data]);

  return (
    <>
      <NavBar />
      <h1>Favoris</h1>
      {isLoading && <Dots />}
      {error && <p>Erreur lors du chargement des données</p>}
      {data && <MovieList movies={favMovies} genres={genres} />}
    </>
  );
};
