import React from 'react';
import CertificationImg from '../assets/img/certificacion.png'

const Certification = () => {

    return (
        <div className='container-fluid w-100 bg-zg-blue mt-5'>
            <div className='d-flex justify-content-center pt-4'>
                <h4 className='tittle-certification'>Certification</h4>
            </div>
            <div className='d-flex justify-content-center py-4'>
                <div className="img-fluid">
                    <div className='img-certification-content'>
                        <img src={CertificationImg} alt="" className='img-certification' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification