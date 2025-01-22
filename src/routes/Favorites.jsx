import { NavBar } from '../components/NavBar.jsx';
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList.jsx';
import { fetchMovieGenres } from '../services/tmdbApi.js';
import { useQuery } from 'react-query';
import { Dots } from 'react-activity';
import {
  fetchFavoriteMoviesFromLocalStorage,
  isMovieInFavorite,
} from '../services/favoriteMoviesServices.js';

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

  const onRemoveFavoriteMovieFromDisplay = (movie) => {
    const favIndex = isMovieInFavorite(favMovies, movie);
    if (favIndex !== -1) {
      const updatedFavoriteMovie = [...favMovies];
      updatedFavoriteMovie.splice(favIndex, 1);
      setFavMovies(updatedFavoriteMovie);
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={'font-bold text-3xl my-5 text-center -mt-10'}>Favoris</h1>
      {isLoading && <Dots />}
      {error && <p>Erreur lors du chargement des données</p>}
      {data && (favMovies.length > 0 ? (
        <MovieList
          movies={favMovies}
          genres={genres}
          areFavorites={true}
          onRemoveFavoriteMovieFromDisplay={onRemoveFavoriteMovieFromDisplay}
        />
      ) : (
        <p className="text-center">Aucun film en favoris</p>
      ))}
    </>
  );
};
