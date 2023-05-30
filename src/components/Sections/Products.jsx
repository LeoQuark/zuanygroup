import React, { useState, useEffect } from 'react';
import CardProduct from '../CardProduct'
import { Link } from 'react-router-dom'

// IMG
import Product1 from '../../assets/img/product1.png'
import Product2 from '../../assets/img/Product2.png'

const ProductMockup = [
    {
        tittle: 'Name Products 1',
        // price: '149.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'engines',
        image: Product1
    },
    {
        tittle: 'Name Products 2',
        // price: '149.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    }
]

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
                    <CardProduct info={ProductMockup[0]} />
                    <CardProduct info={ProductMockup[1]} />
                    <CardProduct info={ProductMockup[0]} />
                    <CardProduct info={ProductMockup[1]} />
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className='mt-2'>
                        <Link
                            to='/all-products'
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