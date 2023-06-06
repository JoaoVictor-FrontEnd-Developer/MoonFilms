import FilmsCarrosel from '../components/FilmsCarrosel';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import lobo1 from '../img/lobo1.jpg'
import lobo2 from '../img/lobo2.jpg'
import lobo3 from '../img/lobo3.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Home.css'

function Home() {


    return (
        <>
            <div className='home-container-carrossel' data-aos="fade-in">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                    loop
                >
               <SwiperSlide>
                    <img src={lobo1} alt={lobo1} />
                </SwiperSlide>
               <SwiperSlide>
                    <img src={lobo2} alt={lobo2} />
                </SwiperSlide>
               <SwiperSlide>
                    <img src={lobo3} alt={lobo3} />
                </SwiperSlide>
            </Swiper>
            </div>
            
            <FilmsCarrosel title="Melhores Filmes" category="top_rated" /> 
            <FilmsCarrosel title="Em Breve" category="upcoming" /> 
        </>
  )
}

export default Home