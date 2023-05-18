import React, { useState, useEffect } from 'react';
import CircleService from '../components/CircleService'

const Services = () => {

    return (
        <section className='container-fluid' id='Services' >
            <div className="row bg-zg-pink">
                <div className='d-flex justify-content-center my-4'>
                    <h2 className='tittle-logistics text-white'>Services</h2>
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <h2 className='text-section-services text-white text-center w-75'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </h2>
                </div>
            </div>
            <div className="row bg-white justify-content-center justify-content-md-start mt-4">
                <CircleService
                    tittle="Provisions"
                    imgUrl='../public/img/provision_service.png'
                />
                <CircleService
                    tittle="Engines"
                    imgUrl='../public/img/engine_service.png'
                />
                <CircleService
                    tittle="Repairs"
                    imgUrl='../public/img/repairs_service.png'
                />
            </div>
            <div className="row bg-white justify-content-center mx-md-2">
                <CircleService
                    tittle="Laundry"
                    imgUrl='../public/img/laundry_service.png'
                />
                <CircleService
                    tittle="Chemical"
                    imgUrl='../public/img/chemical_service.png'
                />
            </div>
        </section>
    )
}

export default Services