import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";


const MovieCard = ({ id, movie, rating, image, imdb_url, handleFavorite, favorites }) => {
    const isFavorite = favorites.some((fav) => fav.id === id);
  return (
  
    <div className='w-[270px] h-[300px] flex flex-col justify-center items-center rounded-2xl border border-gray-300'>
        <div className='w-full h-[200px] flex justify-center items-center border border-gray-200 relative'>
            <img src={image} alt={movie} className='w-auto h-auto object-contain' />
            <button onClick={() => handleFavorite({id, movie, rating, image, imdb_url })}>
            <FaHeart className={`absolute bottom-0 right-0 mr-4 mb-4 hover:text-red-400 ${isFavorite ? 'text-red-400' : 'text-gray-400'}`} />
            </button>
        </div>
        <div className='w-full px-4'>
        <p>{movie}</p>
        <div className='flex items-center justify-between w-full'>
        <p>{rating}</p>
        <Link to={imdb_url}><FaExternalLinkAlt /></Link>
        </div>
       
        </div>
    </div>
  )
}

export default MovieCard