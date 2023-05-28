import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

import ImgCompany from '../assets/img/img-company.png'
import Certification from '../assets/img/certificacion.png'

const AboutUs = () => {

    const [seeMore, setSeeMore] = useState(false)
    const [show, setShow] = useState(false)
    console.log(show)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            // console.log(width)

            if (width <= 576) {
                setSeeMore(true)
            } else {
                setSeeMore(false)
            }
        };

        // Llamar la función inicialmente para establecer la clase correcta
        handleResize();

        // Agregar el evento de cambio de tamaño de ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='container text-center card-aboutus' id='AboutUs' >
            <div className="row align-items-center justify-content-center">
                <div className="row d-flex justify-content-center py-5 gap-4">
                    <div className="col-12 col-md-5 col-lg-5">
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <img src={ImgCompany} alt="" className='img-fluid img-company' />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 my-md-0">
                        <div className='row align-items-center justify-content-center h-100 text-center text-md-start text-white'>
                            <h2 className='fs-our-company mb-4 mb-md-4'>Our Company</h2>
                            <div className='pl-5'>
                                <p>ZUANY GROUP is a shipchandler company , dedicated to supply from the most varied to even the most basic products and services required for proper human and technical functioning of merchant vessels transiting across chilean ports.

                                    <br /><br />
                                    Since its inception in San Antonio port 1992, ZUANY GROUP has been in proximity, understanding the needs of its customers with responsibility and honesty, which has led win through the years the prestige necessary to position ZUANY GROUP on the market.
                                    <br />
                                </p>
                                <p>In 30 years of experience, efficiency is reached through the implementation of a modern adequate infrastructure and the formation of a team of professionals committed to the satisfaction of those who prefer ZUANY GROUP.
                                    <br />
                                    <br />
                                    The ZUANY GROUP concern is its customers receive the services and products according to the formality request, considering the quality, weight and prompt delivery, supplying 365 days a year, 24/7 a week.
                                </p>
                                {/* {seeMore ? (
                                    <div>
                                        <div onClick={() => setShow(!show)}>See More {show ? (<i className="fa-solid fa-angle-down"></i>) : (<i className="fa-solid fa-angle-up"></i>)} </div>
                                        <p className={`${show ? '' : 'd-none'}`}>In 20 years of experience, efficiency is reached through the implementation of a modern adequate infrastructure and the formation of a team of professionals committed to the satisfaction of those who prefer ZUANY GROUP.
                                            <br />
                                            <br />
                                            The ZUANY GROUP concern is its customers receive the services and products according to the formality request, considering the quality, weight and prompt delivery, supplying 365 days a year, 24/7 a week.
                                        </p>
                                    </div>
                                ) : (
                                    <p>In 20 years of experience, efficiency is reached through the implementation of a modern adequate infrastructure and the formation of a team of professionals committed to the satisfaction of those who prefer ZUANY GROUP.
                                        <br />
                                        <br />
                                        The ZUANY GROUP concern is its customers receive the services and products according to the formality request, considering the quality, weight and prompt delivery, supplying 365 days a year, 24/7 a week.
                                    </p>)} */}
                            </div>
                            <div className='d-flex justify-content-center py-2'>
                                <a href='https://shipsupply.org/' target="_blank" className="img-fluid">
                                    <div className='img-certification-content'>
                                        <img src={Certification} alt="" className='img-certification' />
                                    </div>
                                </a>
                            </div>
                            <div className='mt-5 mt-md-3'>
                                <Link
                                    to='Contacts'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    type='button'
                                    className='btn-zg-lg btn_white_zg'
                                >Contact Us!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs