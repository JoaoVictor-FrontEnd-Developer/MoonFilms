import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {BsPencilFill, BsCalendarFill, BsStarFill} from 'react-icons/bs'
import axios from 'axios';

import './Movie.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {

  const params = useParams();
  const [movie, setMovie] = useState([])
  
  const getMovie = async(url) => {
    const response = await axios.get(url);
    const data = await response.data;
    
    setMovie(data)
    
  }

  useEffect(() => {
    getMovie(`${moviesURL}${params.id}?${apiKey}`)
  }, [])
  
  

  return (
      <div className="movie-container" >
        <img data-aos="fade-right" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster_film" />
        
      <div className="descrition" data-aos="fade-up" >

          <div className='title-movie'>
            <h1>{`${movie.title}`}</h1>
         </div>
        
        <div className="info">
          <div className="info-title">
            Descrição
            <div className="icon-info"><BsPencilFill /></div>
          </div>
              <p>{`${movie.overview}`}</p>
        </div>
          <div className="info">
          <div className="info-title">
            Data de Lançamento
            <div className="icon-info"><BsCalendarFill /></div></div>
            <p>{`${movie.release_date}`}</p>
        </div>
        
          <div className="info">
          <div className="info-title">
            Média de Votos
            <div className="icon-info"><BsStarFill /></div>
          </div>
            <p>{`${movie.vote_average}`}</p>
          </div>
        </div>
        </div>
      
  )
}

export default Movie