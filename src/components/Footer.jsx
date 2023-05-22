import React, { useState } from 'react';
import { Link } from 'react-scroll'

const Footer = () => {

    const getDateYear = () => {
        return new Date().getFullYear()
    }

    return (
        <footer className='bg-zg-blue'>
            <div className="container pt-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-center">
                            <h3>Zuany Group Chile</h3>
                        </div>
                        <div className='my-4'>
                            <p className='fst-italic text-center'>“Connecting your business with the world: quality shipping and integrated cargo management”</p>
                        </div>
                        <div className="d-flex justify-content-around my-4">
                            <Link
                                to="Services"
                                spy={true}
                                smooth={true}
                                duration={100}
                                type='button'
                                className='btn-zg-md btn_pink_zg'
                            >Services</Link>
                            <Link
                                to="Products-section"
                                spy={true}
                                smooth={true}
                                duration={100}
                                type='button'
                                className='btn-zg-md btn_pink_zg'
                            >Products</Link>
                            <Link
                                to="AboutUs"
                                spy={true}
                                smooth={true}
                                duration={100}
                                type='button'
                                className='btn-zg-md btn_pink_zg'
                            >About Us</Link>
                        </div>
                    </div>
                    <div className="col-1 text-center divider-footer"></div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <p>Keep browsing in our website!</p>
                        </div>
                        <div className='row d-flex justify-content-between my-2'>
                            <div className="col-5">
                                <ul className='footer-menu'>
                                    <li><Link
                                        to="Home"
                                        spy={true}
                                        smooth={true}
                                        duration={100}>Home</Link></li>
                                    <li><Link
                                        to="AboutUs"
                                        spy={true}
                                        smooth={true}
                                        duration={100}>Company</Link></li>
                                    <li><Link
                                        to="Logistics"
                                        spy={true}
                                        smooth={true}
                                        duration={100}>Logistics</Link></li>
                                    <li><Link
                                        to="Contacts"
                                        spy={true}
                                        smooth={true}
                                        duration={100}>Contacts</Link></li>
                                </ul>
                            </div>
                            <div className='col-7'>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="d-flex justify-content-center pt-2">
                                                    <i className="fa-solid fa-location-dot text-white fa-2x"></i>
                                                </div>
                                            </div>
                                            <div className="col-10">
                                                <strong>Address</strong>
                                                <p className='font-sm'>Esperidión Vera 1522 San Antonio, Chile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="d-flex justify-content-center pt-2">
                                                    <i className="fa-solid fa-envelope text-white fa-2x"></i>
                                                </div>
                                            </div>
                                            <div className="col-10">
                                                <strong>Email</strong>
                                                <p className='font-sm'>zuanygroup@zuanygroup.cl
                                                    <br />
                                                    zuanydominguez@zuanygroup.cl
                                                    <br />
                                                    secretaria@zuanygroup.cl</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <p className='text-center font-sm'>Copyright <i class="fa-regular fa-copyright"></i> {getDateYear()}  - All rights reserver by <strong>Zuany Group</strong></p>
            </div>
        </footer>
    )
}

export default Footer