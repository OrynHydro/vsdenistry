import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import background from './../../images/img/Background.svg'

import './slider.css'

const Slider = () => {
    return ( 
        <div className="home__sliderBlock">
            <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination
                loop={true}
                speed={900}
                allowTouchMove={false}
                autoplay={{ delay: 3500 }}
            >
                <SwiperSlide>
                    <img src={background} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={background} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={background} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={background} alt="" />
                </SwiperSlide>
                <div className="home__sliderBlock-container">
                    <div className="home__sliderBlock-content">
                        <h1 className="home__sliderBlock-title">Мы занимаемся вашей улыбкой</h1>
                        <p className="home__sliderBlock-text">Применяя новейшие технологии мы делаем все -  безболезненно, качественно и с гарантией</p>
                        <button>Наши услуги</button>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default Slider;