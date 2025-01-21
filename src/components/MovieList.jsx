import PropTypes from 'prop-types';
import { MovieCard } from './MovieCard.jsx';
import { useEffect, useMemo, useState } from 'react';
import { buildMoviePosterPath } from '../services/tmdbApi.js';
import {
  fetchFavoriteMoviesFromLocalStorage,
  isMovieInFavorite,
} from '../services/favoriteMoviesServices.js';

/**
 * MovieList component renders a list of movies.
 *
 * @param {Object[]} movies - Array of movie objects.
 * @param {Object[]} genres - Array of genre objects.
 * @param {Boolean} areFavorites - Either the movies props is a set of favorite movies or not
 * @param {Function | undefined} onRemoveFavoriteMovieFromDisplay - Remove the film from the list
 * @returns {JSX.Element} The rendered list of movies.
 */
export const MovieList = ({ movies, genres, areFavorites, onRemoveFavoriteMovieFromDisplay }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(fetchFavoriteMoviesFromLocalStorage);

  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(navigator.language, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, []);

  const processedMovies = useMemo(() => {
    return movies.map((movie) => ({
      ...movie,
      poster_path: buildMoviePosterPath(movie.poster_path),
      release_date: movie.release_date ? new Date(movie.release_date) : 'inconnue',
      genres: genres
        .filter((genre) => movie.genre_ids.includes(genre.id))
        .map((genre) => genre.name),
      isFavorite: areFavorites ? true : isMovieInFavorite(favoriteMovies, movie) !== -1,
    }));
  }, [areFavorites, favoriteMovies, genres, movies]);

  const onAddInFavorites = (movie) => {
    const favIndex = isMovieInFavorite(favoriteMovies, movie);

    if (favIndex === -1) {
      const updatedFavorites = [...favoriteMovies];
      const updatedMovie = { ...movie, isFavorite: true };
      updatedFavorites.push(updatedMovie);
      setFavoriteMovies(updatedFavorites);
    }
  };

  const removeFromFavorites = (movie) => {
    const favIndex = isMovieInFavorite(favoriteMovies, movie);

    if (favIndex !== -1) {
      const updatedFavorites = [...favoriteMovies];
      updatedFavorites.splice(favIndex, 1);
      setFavoriteMovies(updatedFavorites);

      if (onRemoveFavoriteMovieFromDisplay) {
        onRemoveFavoriteMovieFromDisplay(movie);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('favorite movies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <>
      <div className={'flex flex-wrap'}>
        {processedMovies.map((movie) => (
          <div key={movie.id} className={'w-60 grow'}>
            <MovieCard
              imagePath={movie.poster_path}
              title={movie.original_title}
              releaseDate={movie.release_date}
              dateFormatter={dateFormatter}
              voteAvg={movie.vote_average}
              genres={movie.genres}
              overview={movie.overview}
              isFavorite={movie.isFavorite}
              onAddInFavorites={() => onAddInFavorites(movie)}
              onRemoveFromFavorites={() => removeFromFavorites(movie)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  areFavorites: PropTypes.bool.isRequired,
  onRemoveFavoriteMovieFromDisplay: PropTypes.func,
};
