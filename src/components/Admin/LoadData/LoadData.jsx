import React, { useState, useEffect } from 'react';

import BreadCrumb from '../BreadCrumb';

const LoadData = () => {

    return (
        <div className='container-fluid h-100'>
            <div className="d-flex justify-content-start p-0">
                <BreadCrumb section='Load Data' />
            </div>
        </div>
    )
}

export default LoadData