import { fetchUpcomingMovies } from '../services/tmdbApi.js';
import { useQuery } from 'react-query';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { MovieList } from '../components/MovieList.jsx';

export const Home = () => {
  const { data, error, isLoading } = useQuery(['movies'], fetchUpcomingMovies);
  return (
    <>
      <p>Home</p>
      {isLoading && <Dots />}
      {error && <p>Error while fetching Data</p>}
      {data && <MovieList movies={data.results} />}
    </>
  );
};
