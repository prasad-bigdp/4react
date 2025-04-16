import React, { useEffect, useState } from 'react'
import { fetchTrendingMovies } from '../../api/tmdb'
import MovieCard from '../movie/MovieCard'
import {Link} from 'react-router-dom'
function Row ()
{
  const [Trending,setTrending]= useState([])
  useEffect(() =>
  {
   async function getData() {
     const m = await fetchTrendingMovies()
			setTrending(m.results)
    }
    getData()
  },[])
  return (
		<div>
			<h2 className=' text-3xl text-center my-5'>Trending Movies</h2>
			<div className=' max-w-5xl m-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{Trending.map((v, i) => (
					<div
						key={i}
						className=' p-5 shadow shadow-amber-300 rounded-2xl flex flex-col justify-center items-center gap-2'>
            <Link to={`/movie/${v.id}`}>
							<MovieCard
								id={v.id}
								title={v.title}
								posterPath={v.poster_path}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Row
