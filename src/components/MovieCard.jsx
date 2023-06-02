import React from 'react'
import { Link } from 'react-router-dom'

import './MovieCard.css'

function MovieCard({id, img, title, lancamento}) {
  return (
  <Link data-aos="zoom-in-up" key={id} to={`/movie/${id}`}>
      <div className="card">
        <img src={img} alt="Poster" />
        <h3>{title}</h3>
        <p>{lancamento.substr(0, 4)}</p>
        </div>
      </Link>
  )
}

export default MovieCard