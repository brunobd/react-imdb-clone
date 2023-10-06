/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MoviesGrid.css'
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopRatedMovies(URL) {
    const res = await fetch(URL);

    const data = await res.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedMoviesURL = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedMoviesURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top Rated Movies</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default Home;
