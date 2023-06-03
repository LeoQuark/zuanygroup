import React, { useState, useEffect, useContext } from 'react';

const NavProduct = ({
    cart,
    openOrder,
    handleOpenOrder
}) => {

    // const { cart } = useContext(CartContext)

    // console.log('navbar', cart)

    return (
        <div className='container-fluid nav-product p-0 m-0'>
            <div className="row d-flex justify-content-between my-3 my-md-3 mx-0 mx-md-5 w-100">
                <div className="col-12 col-sm-8">
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
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-2">
                    <button
                        className={`btn-order ${!openOrder ? 'bg-zg-white' : 'bg-zg-red'}`}
                        onClick={() => handleOpenOrder()}
                    >
                        My Order <span className='amount-cart'>{cart.shoppingCart.length}</span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default NavProduct