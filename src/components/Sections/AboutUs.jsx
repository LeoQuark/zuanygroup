import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

import ImgCompany from '../../assets/img/img-company.png'
import Certification from '../../assets/img/certificacion.png'

const AboutUs = ({ translation }) => {

    return (
        <section className='container text-center card-aboutus animate__animated animate__fadeIn' id='AboutUs' >
            <div className="row align-items-center justify-content-center">
                <div className="row d-flex justify-content-center py-5 gap-4">
                    <div className="col-12 col-md-5 col-lg-5">
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <img src={ImgCompany} alt="" className='img-fluid img-company' />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 my-md-0">
                        <div className='row align-items-center justify-content-center h-100 text-center text-md-start text-white'>
                            <h2 className='fs-our-company mb-4 mb-md-4'>{translation.about.title}</h2>
                            <div className='pl-5'>
                                <p style={{ fontSize: '.8rem' }}>
                                    {translation.about.text1}
                                    <br />
                                    <br />
                                    {translation.about.text2}
                                    <br />
                                    <br />
                                    {translation.about.text3}
                                    <br />
                                    <br />
                                    {translation.about.text4}
                                </p>
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
                                >
                                    {translation.buttons.contacts2}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs