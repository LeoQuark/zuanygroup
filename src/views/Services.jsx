import React, { useState, useEffect } from 'react';
import CircleService from '../components/CircleService'

// IMG
import ProvisionImg from '../assets/img/provision_service.png'
import EngineImg from '../assets/img/engine_service.png'
import RepairsImg from '../assets/img/repairs_service.png'
import LaundryImg from '../assets/img/laundry_service.png'
import ChemicalImg from '../assets/img/chemical_service.png'


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
                    imgUrl={ProvisionImg}
                />
                <CircleService
                    tittle="Engines"
                    imgUrl={EngineImg}
                />
                <CircleService
                    tittle="Repairs"
                    imgUrl={RepairsImg}
                />
            </div>
            <div className="row bg-white justify-content-center mx-md-2">
                <CircleService
                    tittle="Laundry"
                    imgUrl={LaundryImg}
                />
                <CircleService
                    tittle="Chemical"
                    imgUrl={ChemicalImg}
                />
            </div>
        </section>
    )
}

export default Services