import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const NavProduct = () => {

    return (
        <div className='container-fluid nav-product p-0 m-0'>
            <div className="row d-flex justify-content-between my-3 my-md-3 mx-0 mx-md-5 w-100">
                <div className="col-12 col-md-8">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-md-6">
                            <input type="text" className='form-control w-100' placeholder='Search Product' />
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Category
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Order By
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <Link to='/shoppingCart' className='text-dark'>My Order</Link>
                </div>
            </div>
        </div>
    )
}

export default NavProduct