import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../component/MovieCard';
import { removeFavorite } from '../utils/reduxslice/favouriteSlice';


const FavouriteMovie = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleFavorite = (movie) => {
    dispatch(removeFavorite(movie));
  };


  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
             handleFavorite={handleFavorite}
            favorites={favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default FavouriteMovie
