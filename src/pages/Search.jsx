import { useEffect,useState } from "react"
import {useSearchParams} from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css"

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies,setMovies] = useState([])
  const query = searchParams.get('q')

  async function getSearchedMovies(URL) {
    const res = await fetch(URL);
    const data = await res.json();
    setMovies(data.results);
  }

  useEffect(() => {
    const searchQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    getSearchedMovies(searchQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Results for: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  )
}

export default Search