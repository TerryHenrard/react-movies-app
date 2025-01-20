import PropTypes from 'prop-types';
import { MovieCard } from './MovieCard.jsx';
import { useMemo } from 'react';
import { buildMoviePosterPath } from '../services/tmdbApi.js';

/**
 * MovieList component renders a list of movies.
 *
 * @param {Object[]} movies - Array of movie objects.
 * @param {Object[]} genres - Array of genre objects.
 * @returns {JSX.Element} The rendered list of movies.
 */
export const MovieList = ({ movies, genres }) => {
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
      release_date: new Date(movie.release_date),
      genres: genres
        .filter((genre) => movie.genre_ids.includes(genre.id))
        .map((genre) => genre.name),
    }));
  }, [genres, movies]);

  return (
    <>
      {processedMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          imagePath={movie.poster_path}
          title={movie.original_title}
          releaseDate={movie.release_date}
          dateFormatter={dateFormatter}
          voteAvg={movie.vote_average}
          genres={movie.genres}
          overview={movie.overview}
        />
      ))}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};
