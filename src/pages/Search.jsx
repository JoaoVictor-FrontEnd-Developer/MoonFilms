import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import "./Search.css";

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

import MovieCard from "../components/MovieCard";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState([]);

  const query = searchParams.get("q");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/Search?q=${search}`);
    setMoviesFilter([]);
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);

    const searchURLMovieFilter = `${searchURL}?${apiKey}&query=${search}`;
    getSearchMovieFilter(searchURLMovieFilter);
  };

  const getSearchMovieFilter = async (url) => {
    const res = await axios.get(url);
    const data = res.data;

    setMoviesFilter(data.results);
  };

  const getSearchMovie = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const searchURLMovie = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovie(searchURLMovie);
  }, [query]);

  return (
    <>
      <div className="search_navgate">
        <h1>
          Resultados para: <span>{query}</span>
        </h1>
        <div className="searchFilter2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Busque um filme"
              value={search}
              onChange={handleFilter}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
          <div className="filter-container2">
            {search !== "" &&
              moviesFilter.map((movie) => (
                <p
                  onClick={() => {
                    setSearch(movie.title);
                    setMoviesFilter([]);
                    navigate(`/Search?q=${movie.title}`);
                  }}
                >
                  {movie.title}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="search-container">
        {movies.length === 0 && <div className="custom-loader"></div>}
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              id={movie.id}
              title={movie.title}
              lancamento={movie.release_date}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
      </div>
    </>
  );
}

export default Search;
