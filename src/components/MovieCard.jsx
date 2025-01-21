import PropTypes from 'prop-types';

export const MovieCard = ({
  imagePath,
  title,
  releaseDate,
  dateFormatter,
  voteAvg,
  genres,
  overview,
  isFavorite,
  onAddInFavorites,
  onRemoveFromFavorites,
}) => {
  return (
    <>
      <img src={imagePath} alt={title} width={200} />
      <p>{title}</p>
      <p>
        Sorti le :
        {typeof releaseDate === 'string' ? releaseDate : dateFormatter.format(releaseDate)}
      </p>
      <p>{voteAvg}/10⭐</p>
      {genres.map((genre, index) => (
        <p key={index}>{genre}</p>
      ))}
      <p className={''}>Synopsis</p>
      <p>{overview}</p>
      <button onClick={() => (isFavorite ? onRemoveFromFavorites() : onAddInFavorites())}>
        {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </button>
      <p>------------</p>
    </>
  );
};

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  dateFormatter: PropTypes.instanceOf(Intl.DateTimeFormat).isRequired,
  voteAvg: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  overview: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onAddInFavorites: PropTypes.func.isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
};
