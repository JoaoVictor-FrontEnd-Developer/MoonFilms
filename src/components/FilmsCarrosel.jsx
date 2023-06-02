import React from 'react'

import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import { useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import './FilmsCarrosel.css'

function FilmsCarrosel({category, title}) {
    const [topMovies, setTopMovies] = useState([])
    const carrosel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
        
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        //'offsetWidth = tamanho do scroll'
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }

    const getTopRatedMovies = async (url) => {
        const res = await axios.get(url);
        const data = await res.data

        console.log(data.results)
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = (`${moviesURL}${category}?${apiKey}`);
        getTopRatedMovies(topRatedUrl);
    }, [])

    return (
        <div id={`${category}`} className="movies-container">
            <h1 data-aos="fade-right" className="title">{title}</h1>
            <div data-aos="fade-up" className="carrossel-container">
                <button onClick={handleLeftClick} className="arrow-left"><BsArrowLeftCircle className="icon" /></button>
                <button onClick={handleRightClick} className="arrow-right"><BsArrowRightCircle className="icon" /></button>
                <div className="films-carrossel" ref={carrosel}>
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    
                    {topMovies.length > 0 && (topMovies.map(movie => (
                        <Link className="img-container" key={movie.id} to={`/movie/${category}/${movie.id}`}>
                            <img
                                className="item current_item"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="" />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date.substr(0,4)}</p>
                        </Link>
                    )))}
                    </div>
                </div>
        </div>
  )
}

export default FilmsCarrosel