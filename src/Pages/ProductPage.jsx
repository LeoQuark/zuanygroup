import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes } from "react-router-dom";

import NavProduct from '../components/NavProduct'

import ShoppingCart from '../components/ShoppingCart';
import AllProducts from '../components/AllProducts';

const ProductPage = () => {

    return (
        <div className='all-products container-fluid'>
            <NavProduct />
            <div className='breadcumb-product pt-3 mx-3 mx-md-5' aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </div>
            <Routes>
                <Route path="/all" element={<AllProducts />} />
                <Route path="/shoppingCart" element={<ShoppingCart />} />
            </Routes>
        </div >
    )
}

export default ProductPage