import React, { useState, useEffect, useContext } from 'react';

import CardProduct from './CardProduct'

// IMG
import Product1 from '../assets/img/product1.png'
import Product2 from '../assets/img/Product2.png'

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

const AllProducts = () => {

    return (
        <div className='container-fluid p-0'>
            <div className="row d-flex justify-content-center mt-2 px-0 px-sm-5">
                <CardProduct info={ProductMockup[0]} />
                <CardProduct info={ProductMockup[1]} />
                <CardProduct info={ProductMockup[0]} />
                <CardProduct info={ProductMockup[1]} />
                <CardProduct info={ProductMockup[0]} />
                <CardProduct info={ProductMockup[1]} />
            </div>
            <div className="row d-flex justify-content-center my-4 px-5">
                <CardProduct info={ProductMockup[0]} />
                <CardProduct info={ProductMockup[1]} />
                <CardProduct info={ProductMockup[0]} />
                <CardProduct info={ProductMockup[1]} />
                <CardProduct info={ProductMockup[0]} />
                <CardProduct info={ProductMockup[1]} />

            </div>
        </div >
    )
}

export default AllProducts
