import React from 'react'

function MovieCard ({ id, title, posterPath })
{
  const link = `https://image.tmdb.org/t/p/w500/${posterPath}`
  return (
    <>
      <img src={link}  alt={title} className=' rounded-2xl'/>
      <h2 className=' text-2xl font-bold'>{title}</h2>
    </>
  )
}

export default MovieCard
