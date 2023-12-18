import React from 'react';

import MaintenanceSVG from '../assets/img/maintenance.svg'

const Maintenance = () => {
    const getDateYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className='maintenance-div container-fluid p-0'>
            <div className='d-flex justify-content-center align-items-center h-75'>
                <img src={MaintenanceSVG} className='img-maintenance' />
            </div>
            <div className="d-flex justify-content-center mx-2">
                <h5 className='title-maintenance'>Website under maintenance ...</h5>
            </div>
            <div className="d-flex justify-content-center mx-2">
                <a href="" className='btn'>Go to Page</a>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <p className='text-center font-sm'>Copyright <i class="fa-regular fa-copyright"></i> {getDateYear()}  - All rights reserver by <strong>Zuany Group</strong></p>
                {/* <p>{import.meta.env.VITE_APP_API_PROD_URL}</p> */}
            </div>
        </div>
    )
}

export default Maintenance