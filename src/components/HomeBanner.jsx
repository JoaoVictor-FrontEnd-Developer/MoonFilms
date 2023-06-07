import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BiSearchAlt2 } from 'react-icons/bi'

import './HomeBanner.css'

function HomeBanner() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return
      
      navigate(`/Search?q=${search}`)
      
    }

  return (
    <div className='home-container-carrossel' data-aos="fade-in">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                    loop
                >
                <SwiperSlide>
                    <div className="banner">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}/>
                            <button type="submit"><BiSearchAlt2/></button>
                        </form>
                        <img src={banner1} alt={banner1} /> 
                    </div>
                </SwiperSlide>
               <SwiperSlide>
               <div className="banner">
                        <h2><a href="#top_rated">MELHORES FILMES</a></h2>
                        <img src={banner2} alt={banner2} /> 
                    </div>
                </SwiperSlide>
               <SwiperSlide>
               <div className="banner">
                        <h2><a href="#upcoming">EM BREVE</a></h2>
                        <img src={banner3} alt={banner3} /> 
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
  )
}

export default HomeBanner