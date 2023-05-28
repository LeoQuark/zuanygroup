import React, { useState, useEffect } from 'react';
import CardProduct from '../components/CardProduct'
import { Link } from 'react-router-dom'

// IMG
import Product1 from '../assets/img/product1.png'
import Product2 from '../assets/img/product2.png'

const Products = () => {

    return (
        <section className="container-fluid" id='Products-section'>
            <div className='px-0 px-sm-5 px-md-0'>
                <div className="d-flex justify-content-center">
                    <div className='mt-2 pb-3 pb-md-5'>
                        <h2 className='tittle-logistics'>Products</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-2">
                    <div className='text-section text-center'>
                        <p>Discover excellence in maritime logistics with us</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-4">
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
                        tittle='Name Product 3'
                        description=' Description of product here'
                        imgUrl={Product1}
                    />
                    <CardProduct
                        tittle='Name Product 4'
                        description=' Description of product here'
                        imgUrl={Product2}
                    />
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className='mt-2'>
                        <Link
                            // to='/products'
                            className='btn-zg-lg btn_pink_zg'
                        >
                            All Product
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products