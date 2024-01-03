import React, { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// IMG
import CarruselImg1 from '../../assets/img/carrusel1.png'
import CarruselImg2 from '../../assets/img/carrusel2.jpg'
import CarruselImg3 from '../../assets/img/carrusel3.jpg'



const Logistics = ({ translation }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [CarruselImg1, CarruselImg2, CarruselImg3]

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Cambia la imagen cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container-fluid" id='Logistics'>
            <div className='bg-zg-gray px-4'>
                <div className="d-flex justify-content-center">
                    <div className='mt-2 pb-3 pb-md-5'>
                        <h2 className='tittle-section'>{translation.logistics.title}</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className='text-section text-center'>
                        <p>"{translation.logistics.text}"</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-4 py-5">
                    {/* <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} height="18rem" width="30rem" />
                                </SwiperSlide>
                            ))
                        }
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper> */}
                    <div className='carrusel-zg'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    images.map((image, index) => (
                                        <div key={index} className={`carousel-item carrusel-item ${index === activeIndex ? 'active' : ''}`}
                                        >
                                            <img src={image} className="d-block w-100 img-carrusel img-fluid rounded-4" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logistics