import React, { useState, useEffect } from 'react';

import BreadCrumb from '../BreadCrumb';


const Dashboard = () => {

    return (
        <div className='container-fluid h-100'>
            <div className="d-flex justify-content-start p-0">
                <BreadCrumb section='Dashboard' />
            </div>
        </div>
    )
}

export default Dashboard