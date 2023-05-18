import React, { useState, useEffect } from 'react';
import GoogleMapsContact from '../components/GoogleMapsContact'


const Contacts = () => {

    return (
        <section className='container-fluid' id='Contacts' >
            <div className="row bg-zg-blue mx-2 mx-lg-5 rounded-4">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="d-flex justify-content-center my-5">
                        <h2 className='fs-contact'>Contact Us</h2>
                    </div>
                    <div className="row d-flex justify-content-between mx-2 mx-lg-5">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-lg-4">
                                    <div className="d-flex justify-content-center pt-2">
                                        <i class="fa-solid fa-location-dot text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div className="col-10 col-lg-8">
                                    <strong>Address</strong>
                                    <p className='text-contact'>Esperidión Vera 1522 San Antonio, Chile</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-lg-4">
                                    <div className="d-flex justify-content-center pt-2">
                                        <i class="fa-solid fa-phone text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div className="col-10 col-lg-8">
                                    <strong>Phones</strong>
                                    <p className='text-contact m-0'>(56) - (35) - 2232030</p>
                                    <p className='text-contact m-0'>(56) - (35) - 2235629</p>
                                    <p className='text-contact m-0'>Fax: (56) - (35) - 2233952</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mx-lg-5">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2">
                                    <div className="d-flex justify-content-center pt-2">
                                        <i class="fa-solid fa-envelope text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <strong>Email</strong>
                                    <p className='text-contact'>zuanygroup@zuanygroup.cl
                                        <br />
                                        zuanydominguez@zuanygroup.cl
                                        <br />
                                        secretaria@zuanygroup.cl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-md-5 mx-2">
                        <div className="d-flex justify-content-center mb-3">
                            <input type="text" className='form-control' placeholder='Name' />
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <div className="col-6">
                                <input type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className="col-5">
                                <input type="text" className='form-control' placeholder='Phone' />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <textarea type="text" className='form-control' placeholder='Write your message ...' />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className='btn-zg-pink'>Send <i class="bi bi-send-fill"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="d-flex justify-content-center align-items-center h-100 w-100 ">
                        {/* <div className='gmaps-contact'>
                            <GoogleMapsContact />
                        </div> */}
                        <iframe src="https://maps.google.cl/maps?q=-33.592927,-71.611596&num=1&t=h&ie=UTF8&ll=-33.592449,-71.61365&spn=0.004022,0.009645&z=17&output=embed" frameborder="0" className='iframe-gmaps'></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts