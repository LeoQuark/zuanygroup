import React, { useState, useEffect, useContext } from 'react';

import CardProduct from './CardProduct'
import CardOrder from './CardOrder'

// IMG
import Product1 from '../assets/img/product1.png'
import Product2 from '../assets/img/Product2.png'

const ProductMockup = [
    {
        title: 'Name Products 1',
        // price: '149.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        // price: '149.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    }
]

const DivProduct = ({ info, clearCart }) => {
    return (
        <div className='col-6 col-sm-6 col-md-3 col-lg-3 my-3 my-lg-4'>
            <CardProduct info={info} clearCart />
        </div>
    )
}

const AllProducts = ({ cart, openOrder, clearCart }) => {

    return (
        <div>
            {!openOrder ? (
                <div className="row d-flex justify-content-around justify-content-md-center my-0 my-md-4 mx-0 px-0">
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                    <DivProduct info={ProductMockup[0]} clearCart />
                </div>
            ) : (
                <CardOrder cart={cart} clearCart />
            )
            }
        </div>
    )
}

export default AllProducts
