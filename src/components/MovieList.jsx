import PropTypes from 'prop-types';
import { MovieCard } from './MovieCard.jsx';
import { useMemo } from 'react';
import { buildMoviePosterPath } from '../services/tmdbApi.js';

export const MovieList = ({ movies }) => {
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
    }));
  }, [movies]);

  const genres = ['SF', 'Date'];
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
          genres={genres}
          overview={movie.overview}
        />
      ))}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
