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
      <div className={'p-3 pt-7 bg-[#060D2C] w-72 grow rounded-lg relative'}>
        <img src={imagePath} alt={title} className={'rounded-3xl w-8/12 m-auto'} />
        <p className={'my-2.5 font-extrabold text-lg'}>{title}</p>
        <p className={'my-2.5 text-xs text-gray-500'}>
          Sorti le :
          {typeof releaseDate === 'string' ? releaseDate : dateFormatter.format(releaseDate)}
        </p>
        <p className={'my-2.5 text-sm font-semibold'}>{voteAvg}/10⭐</p>
        <div className={'my-2.5 flex flex-wrap gap-1 text-xs'}>
          {genres.map((genre, index) => (
            <p key={index} className={'bg-[#212040] rounded-full p-1.5'}>
              {genre}
            </p>
          ))}
        </div>
        <p className={'font-semibold mt-4 mb-2'}>Synopsis</p>
        <p className={'text-sm line-clamp-6 text-gray-500'}>{overview}</p>
        <div className={'flex justify-center'}>
          <button
            className={
              'bg-[#546FE4] text-sm p-2 rounded-full transition hover:scale-110 my-5' +
              (isFavorite ? ' bg-red-400' : '')
            }
            onClick={() => (isFavorite ? onRemoveFromFavorites() : onAddInFavorites())}
          >
            {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
      </div>
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
