import { fetchMovieGenres, fetchMoviesByTitle, fetchUpcomingMovies } from '../services/tmdbApi.js';
import { useQuery } from 'react-query';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { MovieList } from '../components/MovieList.jsx';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar.jsx';

const fetchData = async () => {
  try {
    const [upcomingMovies, movieGenres] = await Promise.all([
      fetchUpcomingMovies(),
      fetchMovieGenres(),
    ]);
    return {
      upcomingMovies: upcomingMovies.results,
      genres: movieGenres,
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
  } = useQuery(['searchMoviesByTitle'], () => fetchMoviesByTitle(searchTitle), {
    enabled: false,
  });

  const handleSearchMovieSubmit = async (event) => {
    event.preventDefault();
    if (searchTitle.trim()) {
      await searchMoviesByTitle();
    }
  };

  const handleSortMoviesFromTop = () => {
    setMovies([...movies].sort((a, b) => b.vote_average - a.vote_average));
  };

  const handleSortMoviesFromFlop = () => {
    setMovies([...movies].sort((a, b) => a.vote_average - b.vote_average));
  };

  useEffect(() => {
    if (searchData) {
      console.log('searchData: ', searchData);
      setMovies(searchData.results);
    } else if (data) {
      setMovies(data.upcomingMovies);
      setGenres(data.genres);
    }
  }, [searchData, data]);

  return (
    <>
      <NavBar />
      <h1 className={'font-bold text-3xl my-5 text-center -mt-10'}>React Movies</h1>
      <form
        onSubmit={handleSearchMovieSubmit}
        className={'flex flex-col w-2/6 min-w-36 max-w-60 m-auto'}
      >
        <input
          type="text"
          onChange={({ target: { value } }) => setSearchTitle(value)}
          value={searchTitle}
          className={'text-black rounded-t-xl px-4 py-2 outline-0'}
        />
        <input
          type="submit"
          disabled={!searchTitle.trim()}
          value={'Rechercher'}
          className={
            'bg-[#546FE4] hover:bg-[#7891ff] transition-colors px-4 py-2 rounded-b-xl hover:cursor-pointer'
          }
        />
      </form>
      <div className={'w-2/6 min-w-36 max-w-60 m-auto flex my-1.5 text-sm h-7'}>
        <button
          onClick={handleSortMoviesFromTop}
          className={'w-1/2 bg-[#546FE4] hover:bg-[#7891ff] transition-colors rounded-l-xl '}
        >
          Top
        </button>
        <button
          onClick={handleSortMoviesFromFlop}
          className={'w-1/2 bg-[#546FE4] hover:bg-[#7891ff] transition-colors rounded-r-xl'}
        >
          Flop
        </button>
      </div>
      <br />
      {(isLoading || searchIsLoading) && <Dots />}
      {error && (
        <p>
          {searchTitle ? 'Erreur lors de la recherche.' : 'Erreur lors du chargement des données.'}
        </p>
      )}
      {movies.length > 0 ? (
        <MovieList movies={movies} genres={genres} areFavorites={false} />
      ) : (
        !(isLoading || searchIsLoading) && <p>Aucun résultat</p>
      )}
    </>
  );
};
