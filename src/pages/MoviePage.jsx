import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../utils/reduxslice/MovieSlice';
import { addFavorite, removeFavorite } from '../utils/reduxslice/favouriteSlice';
import MovieCard from '../component/MovieCard';

const MoviePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);
  const favorites = useSelector((state) => state.favorites.favorites);

  console.log(movies)
  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  const handleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };



  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            handleFavorite={handleFavorite}
            favorites={favorites || []}
          />
        ))}
      </div>

    </div>
  )
}

export default MoviePage