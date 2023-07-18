import React, { useState, useEffect } from 'react';

import BreadCrumb from '../BreadCrumb';
import CardProducts from '../CardProducts';

const LoadData = () => {

    return (
        <div className='container-fluid h-100'>
            <div className="d-flex justify-content-start p-0">
                <BreadCrumb section='Load Data' />
            </div>
            <div className="row d-flex justify-content-between w-100 m-0">
                <div className="col-12 col-md-4 px-0 px-md-4 my-2 my-md-0">
                    <CardProducts
                        title='title 1'
                        amount='250'
                        icon='fa-solid fa-box-open'
                        color='green'
                    />
                </div>
                <div className="col-12 col-md-4 px-0 px-md-4 my-2 my-md-0">
                    <CardProducts
                        title='title 2'
                        amount='100'
                        icon='fa-solid fa-cart-shopping'
                        color='green'
                    />
                </div>
                <div className="col-12 col-md-4 px-0 px-md-4 my-2 my-md-0">
                    <CardProducts
                        title='title 3'
                        amount='15'
                        icon='fa-solid fa-filter'
                        color='black'
                    />
                </div>
            </div>
            <div className="row d-flex w-100 mt-3 shadow-sm rounded m-0 mx-sm-2">
                <div className="col-12 p-4">
                    <p className='title-admin'>upload your database</p>
                    {/* <hr /> */}
                    <div className="row d-flex justify-content-center gap-5 pt-4">
                        <div className='col-12 col-md-5 card p-4'>
                            <p className='text-center title-admin'>Load Provision</p>
                            <input type="file" className='form-control my-4' />
                            <button className='btn btn-success'>Upload File Provision</button>
                            <p className='text-muted m-0 mt-3'>* Remember that the <strong>Provision</strong> file must maintain the defined structure</p>
                        </div>
                        <div className='col-12 col-md-5 card p-4'>
                            <p className='text-center title-admin'>Load Bonded</p>
                            <input type="file" className='form-control my-4' />
                            <button className='btn btn-success'>Upload File Bonded</button>
                            <p className='text-muted m-0 mt-3'>* Remember that the <strong>Bonded</strong> file must maintain the defined structure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadData