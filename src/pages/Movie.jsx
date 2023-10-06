/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill

}from "react-icons/bs"

import MovieCard from "../components/MovieCard"
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
import './Movie.css'
import '../components/MovieCard.css'
const Movie = () => {
  const {id} = useParams()

  const [movie,setMovie]= useState(null)

  async function getMovie(URL){

    const res = await fetch(URL);

    const data = await res.json();
    setMovie(data);
  }

  useEffect(()=>{
    const movieURL = `${moviesURL}${id}?api_key=${apiKey}`
    getMovie(movieURL)
  },[])
  function formatCurrency(number){
    return number.toLocaleString("en-US",{
      style:"currency",
      currency:"USD",
    })
  }
  return (
    <div className="movie-page">
      {movie && <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3><BsWallet2/>Budget:</h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3><BsGraphUp/>Revenue:</h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3><BsHourglassSplit/>Runtime:</h3>
          <p>{movie.runtime} minutes</p>
        </div>
        <div className="info description">
          <h3><BsFillFileEarmarkTextFill/>Overview:</h3>
          <p>{movie.overview}</p>
        </div>
      </>}
    </div>
  )
}

export default Movie