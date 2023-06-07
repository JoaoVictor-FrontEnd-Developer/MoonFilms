import { useEffect, useState } from 'react';
import axios from 'axios'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi'
import './Search.css'

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

import MovieCard from '../components/MovieCard';

function Search() {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return
      
      navigate(`/Search?q=${search}`)
      
    }

  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q')

  const getSearchMovie = async (url) => {
    const res = await axios.get(url);
    const data = res.data
    
    console.log(data.results)
    setMovies(data.results)
  }

  useEffect(() => {
    const searchURLMovie = `${searchURL}?${apiKey}&query=${query}`
    getSearchMovie(searchURLMovie)
  }, [query])


  return (<>
    <div className="search_navgate">
    <h1>Resultados para: <span>{query}</span></h1>
    <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>
    </div>
    <div className="search-container"> 
    {movies.length === 0 && (<div className="custom-loader"></div>)}
      {movies.length > 0 && (
        movies.map(movie => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            lancamento={movie.release_date}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`
            } />
        ))
      )}
    </div>
    </>
  )
}

export default Search