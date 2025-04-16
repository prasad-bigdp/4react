import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieData } from '../api/tmdb'
function Movie ()
{
  const { id } = useParams();
  const [movieData,setMovieData]= useState({})
  console.log(id)
  useEffect(() =>
  {
    async function getData ()
    {
      const movie = await fetchMovieData(id);
      setMovieData(movie)
      console.log(movie)
    }
    getData()
  },[])
  return (
		<div className='bg-gray-100 dark:bg-gray-800 py-8'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4'>
						<div className='h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4'>
							<img
								className='w-full h-full object-fill'
								src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
								alt='Product Image'
							/>
						</div>
						<div className='flex -mx-2 mb-4'>
							<div className='w-1/2 px-2'>
								<button className='w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700'>
									watch Now
								</button>
							</div>
							<div className='w-1/2 px-2'>
								<button className='w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600'>
									Add to Wishlist
								</button>
							</div>
						</div>
					</div>
					<div className='md:flex-1 px-4'>
						<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
							{movieData.title}
						</h2>
						<p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
							{movieData.overview}
						</p>
						<div className='flex mb-4'>
							<div className='mr-4'>
								<span className='font-bold text-gray-700 dark:text-gray-300'>
									Release Data:
								</span>
								<span className='text-gray-600 dark:text-gray-300'>
									{movieData.release_date}
								</span>
							</div>
							<div>
								<span className='font-bold text-gray-700 dark:text-gray-300'>
									Availability:
								</span>
								<span className='text-gray-600 dark:text-gray-300'>
									{movieData.status}
								</span>
							</div>
						</div>
						<div className='mb-4'>
							<span className='font-bold text-gray-700 dark:text-gray-300'>
								Genres
							</span>
							<div className='flex items-center mt-2 gap-2'>
								{movieData.genres && movieData?.genres.map((v, i) => (
                  <button key={i} className='w-20 h-10 bg-gray-400 rounded-3xl mr-2'>{v.name}</button>
								))}
	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Movie
