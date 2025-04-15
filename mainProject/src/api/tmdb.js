const APIKEY = import.meta.env.VITE_TMDB_API_KEY;
export const fetchTrendingMovies = async () =>
{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?apikey=${APIKEY}`)
    return await res.json()  
}
export const fetchPopularMovies = async () => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?apikey=${APIKEY}`,
	)
	return await res.json()
}
export const fetchMovieData = async (id) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?apikey=${APIKEY}`,
	)
	return await res.json()
}