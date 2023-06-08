import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiSearchAlt2 } from "react-icons/bi";

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

import "./HomeBanner.css";

function HomeBanner() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [moviesFilter, setMoviesFilter] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/Search?q=${search}`);
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);

    const searchURLMovie = `${searchURL}?${apiKey}&query=${search}`;
    getSearchMovie(searchURLMovie);
  };

  const getSearchMovie = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      setMoviesFilter(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container-carrossel" data-aos="fade-in">
      <Swiper modules={[Navigation, Pagination]} navigation pagination loop>
        <SwiperSlide>
          <div className="banner img1">
            <div className="searchFilter">
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
              <div className="filter-container">
                {search !== "" &&
                  moviesFilter.map((movie) => (
                    <p
                      key={movie.id}
                      onClick={() => {
                      setSearch(movie.title);
                      setMoviesFilter([]);
                      navigate(`/Search?q=${movie.title}`);
                      }}>
                      {movie.title}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner img2">
            <h2>
              <a href="#top_rated">MELHORES FILMES</a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner img3">
            <h2>
              <a href="#upcoming">EM BREVE</a>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeBanner;
