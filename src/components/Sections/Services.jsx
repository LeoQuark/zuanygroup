import React, { useState, useEffect } from 'react';
import CircleService from '../CircleService'

// IMG
import ProvisionImg from '../../assets/img/provision_service.png'
import EngineImg from '../../assets/img/engine_service.jpg'
import RepairsImg from '../../assets/img/repairs_service.jpg'
import LaundryImg from '../../assets/img/laundry_service.jpg'
import ChemicalImg from '../../assets/img/chemical_service.jpg'

const Services = ({ translation }) => {

    return (
        <section className='container-fluid' id='Services' >
            <div className="row bg-zg-pink mx-0">
                <div className='d-flex justify-content-center my-4'>
                    <h2 className='tittle-section text-white'>{translation.services.title}</h2>
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <h2 className='text-section-services text-white text-center w-75'>
                        {translation.services.text}
                    </h2>
                </div>
            </div>
            <div className="row bg-white justify-content-center justify-content-md-start mt-4 mx-0">
                <CircleService
                    type='provision'
                    title={translation.services.provision.title}
                    imgUrl={ProvisionImg}
                    information={translation.services.provision}
                    infoButton={translation}
                />
                <CircleService
                    type='engine'
                    title={translation.services.engines.title}
                    imgUrl={EngineImg}
                    information={translation.services.engines}
                    infoButton={translation}
                />
                <CircleService
                    type='repair'
                    title="Repairs"
                    imgUrl={RepairsImg}
                    information={translation.services.repairs}
                    infoButton={translation}
                />
            </div>
            <div className="row bg-white justify-content-center mx-md-2 mx-0">
                <CircleService
                    type='laundry'
                    title="Laundry"
                    imgUrl={LaundryImg}
                    information={translation.services.laundry}
                    infoButton={translation}
                />
                <CircleService
                    type='chemical'
                    title="Chemical"
                    imgUrl={ChemicalImg}
                    information={translation.services.chemical}
                    infoButton={translation}
                />
            </div>
        </section>
    )
}

export default Services