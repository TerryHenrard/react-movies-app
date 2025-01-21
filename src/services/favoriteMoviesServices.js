export const fetchFavoriteMoviesFromLocalStorage = () => {
  const favoriteMovies = localStorage.getItem('favorite movies');
  return favoriteMovies ? JSON.parse(favoriteMovies) : [];
};

export const isMovieInFavorite = (favoriteMovies, movie) => {
  return favoriteMovies.findIndex((favMovie) => favMovie.id === movie.id);
};
