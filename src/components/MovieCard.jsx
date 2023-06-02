import React from 'react'
import { Link } from 'react-router-dom'

import './MovieCard.css'

function MovieCard({id, img, title, lancamento}) {
  return (
  <Link key={id} to={`/movie/${id}`}>
      <div data-aos="fade-up" className="card">
        <img src={img} alt="Poster" />
        <h3>{title}</h3>
        <p>{lancamento.substr(0, 4)}</p>
        </div>
      </Link>
  )
}

export default MovieCard