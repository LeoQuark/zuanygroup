import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Footer = ({ translation }) => {

    const getDateYear = () => {
        return new Date().getFullYear()
    }

    return (
        <footer className='bg-zg-blue'>
            <div className="container pt-4 pt-md-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-5">
                        <div className="d-block d-md-flex justify-content-center align-items-center gap-4">
                            <div className="d-flex justify-content-center">
                                <h3 className='text-center'>Zuany Group Chile</h3>
                            </div>
                        </div>
                        <div className='my-4'>
                            <p className='fst-italic text-center'>“{translation.footer.text1}”</p>
                        </div>
                        <div className="d-flex justify-content-around my-4">
                            <a href="/#Services" className='btn-zg-md btn_pink_zg'>
                                {translation.buttons.services}
                            </a>
                            <Link
                                to="/all-products"
                                className='btn-zg-md btn_pink_zg'
                            >{translation.buttons.products}</Link>
                            <a href="/#AboutUs" className='btn-zg-md btn_pink_zg'>
                                {translation.buttons.contacts1}
                            </a>
                        </div>
                    </div>
                    <div className="col-1 text-center divider-footer"></div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <p>{translation.footer.text2}</p>
                        </div>
                        <div className='row d-flex justify-content-between my-2'>
                            <div className="col-5">
                                <ul className='footer-menu'>
                                    <li>
                                        <a href="/#Home">{translation.buttons.home}</a>
                                    </li>
                                    <li>
                                        <a href="/#AboutUs">{translation.buttons.company}</a>
                                    </li>
                                    <li>
                                        <a href="/#Logistics">{translation.buttons.logistics}</a>
                                    </li>
                                    <li>
                                        <a href="/#Contacts">{translation.buttons.contacts1}</a>
                                    </li>
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
                                                <strong>{translation.contact.address}</strong>
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
                                                <strong>{translation.contact.email}</strong>
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
                <p className='text-center font-sm'>Copyright <i class="fa-regular fa-copyright"></i> {getDateYear()}  - {translation.footer.rights} <strong>Zuany Group</strong></p>
            </div>
        </footer >
    )
}

export default Footer