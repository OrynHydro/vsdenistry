import { slides } from '../../helpers/slidesList';

import { useState } from 'react';

import { Achievements, Details, Request, Services, SlickSlider, Slider, Comment, HeaderBottom} from '../../components/index';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { services } from '../../helpers/services';

import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {

    let [commentActive, setCommentActive] = useState(false);

    return ( 
        <>

            <main>
                <HeaderBottom />
                <Slider />
                <Request />

                <div className='home__servicesBlock'>
                    <div className="wrap">
                        <div className="home__servicesBlock-container">
                            <h2 className="home__servicesBlock-title">Наши услуги</h2>
                            <div className="home__servicesBlock-content">
                                {services.map((item, index) => {
                                    return <Services imgCommon={item.img} imgWhite={item.imgWhite} key={index} title={item.title} text={item.text} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <Details />
                <Achievements />

                <h2 className="home__slickSlider-title">Отзывы</h2>
                <div className="sliderWrap">

                    <div className="home__slickSlider-container">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={3}
                            navigation={{ clickable: true }}
                            loop={true}
                            allowTouchMove={false}
                            >
                                {slides.map((slide, index) => {
                                    return <SwiperSlide key={index}>
                                        <SlickSlider name={slide.name} review={slide.review} photo={slide.photo} /> 
                                    </SwiperSlide> 
                                })}
                        </Swiper>
                        <p onClick={() => setCommentActive(true)} className="comment">Оставить комментарий</p>
                    </div>
                </div>

            </main>

            <Comment active={commentActive} setActive={setCommentActive} />

        </>
    );
}

export default Home;