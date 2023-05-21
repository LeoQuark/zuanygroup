import React, { useState, useEffect } from 'react';

// IMG
import CarruselImg1 from '../assets/img/carrusel1.png'
import CarruselImg2 from '../assets/img/carrusel2.jpg'
import CarruselImg3 from '../assets/img/carrusel3.jpg'

const Logistics = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [CarruselImg1, CarruselImg2, CarruselImg3]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia la imagen cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container-fluid p-0" id='Logistics'>
            <div className='bg-zg-gray px-4'>
                <div className="d-flex justify-content-center">
                    <div className='mt-2 pb-3 pb-md-5'>
                        <h2 className='tittle-logistics'>Logistics</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className='text-section text-center'>
                        <p>"We are experts in logistics services for the import of industrial products, ensuring an efficient management."</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-4 py-5">
                    <div className='carrusel-zg'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    images.map((image, index) => (
                                        <div key={index} className={`carousel-item carrusel-item ${index === activeIndex ? 'active' : ''}`}
                                        >
                                            <img src={image} className="d-block w-100 img-carrusel img-fluid" />
                                        </div>
                                    ))
                                }
                            </div>
                            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logistics