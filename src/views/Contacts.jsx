import React, { useState, useEffect } from 'react';

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
                            <div className="d-flex justify-content-center">
                                <i class="bi bi-geo-alt-fill icon-contact"></i>
                                <div className='mx-4'>
                                    <strong>Address</strong>
                                    <p className='text-contact'>Esperidión Vera 1522 San Antonio, Chile</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-center">
                                <i class="bi bi-telephone-fill icon-contact"></i>
                                <div className='mx-4'>
                                    <strong>Phones</strong>
                                    <p className='text-contact m-0'>(56) - (35) - 2232030</p>
                                    <p className='text-contact m-0'>(56) - (35) - 2235629</p>
                                    <p className='text-contact m-0'>Fax: (56) - (35) - 2233952</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-start mx-2 mx-lg-5">
                        <div className="col-6">
                            <div className="d-flex justify-content-center">
                                <i class="bi bi-envelope-fill icon-contact"></i>
                                <div className='mx-4'>
                                    <strong>Email</strong>
                                    <p className='text-contact'>zuanygroup@zuanygroup.cl
                                        zuanydominguez@zuanygroup.cl
                                        secretaria@zuanygroup.cl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 mx-2">
                        <div className="d-flex justify-content-center mb-3">
                            <input type="text" className='form-control' placeholder='Name' />
                        </div>
                        <div className="row d-flex justify-content-center mb-3 p-0">
                            <div className="col-6">
                                <input type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className="col-6">
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
                <div className="col-12 col-md-6 col-lg-6 bg-warning">
                    <div className="row d-flex justify-content-center">
                        {/* <div style={{ height: 'auto', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyAYRJNQ-6bSMSaKb9aEEdjpme-649NB59E" }}
                                defaultCenter={defaultMaps.center}
                                defaultZoom={defaultMaps.zoom}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts