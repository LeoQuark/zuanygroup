import React, { useState, useEffect, useContext } from 'react';
import NavProduct from '../components/NavProduct'
import CardProduct from '../components/CardProduct'

// IMG
import Product1 from '../assets/img/product1.png'
import Product2 from '../assets/img/product2.png'


const AllProducts = () => {

    return (
        <div className='all-products container-fluid'>
            <NavProduct />
            <nav className='breadcumb-product pt-3 mx-3 mx-md-5' aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
            <div className='container'>
                <div className="row d-flex justify-content-center mt-2 ">
                    <CardProduct
                        tittle='Name Product 1'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                    <CardProduct
                        tittle='Name Product 1'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                    <CardProduct
                        tittle='Name Product 1'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                </div>
                <div className="row d-flex justify-content-center">
                    <CardProduct
                        tittle='Name Product 1'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                    <CardProduct
                        tittle='Name Product 1'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                    <CardProduct
                        tittle='Name Product 1'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                </div>
            </div >
        </div >
    )
}

export default AllProducts