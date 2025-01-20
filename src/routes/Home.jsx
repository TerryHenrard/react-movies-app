import { fetchMovieGenres, fetchUpcomingMovies } from '../services/tmdbApi.js';
import { useQuery } from 'react-query';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { MovieList } from '../components/MovieList.jsx';

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
  const { data, error, isLoading } = useQuery(['movies'], fetchData);

  return (
    <>
      <p>Home</p>
      {isLoading && <Dots />}
      {error && <p>Error while fetching Data</p>}
      {data && <MovieList movies={data.upcomingMovies} genres={data.genres} />}
    </>
  );
};
