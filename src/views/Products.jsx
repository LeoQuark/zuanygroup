import React, { useState, useEffect } from 'react';
import CardProduct from '../components/CardProduct'

const Products = () => {

    return (
        <section className="container-fluid p-0" id='Products-section'>
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
                        urlImg='/img/Rectangle 20.png'
                    />
                    <CardProduct
                        tittle='Name Product 2'
                        description=' Description of product here'
                        urlImg='/img/Rectangle 19.png'
                    />
                    <CardProduct
                        tittle='Name Product 3'
                        description=' Description of product here'
                        urlImg='/img/Rectangle 20.png'
                    />
                    <CardProduct
                        tittle='Name Product 4'
                        description=' Description of product here'
                        urlImg='/img/Rectangle 19.png'
                    />
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className='mt-2'>
                        <a href='' className='btn-zg-pink'>All products</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products