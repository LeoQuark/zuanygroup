import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cart/CartContext';

import Navbar from '../components/Navbar'
import NavProduct from '../components/Products/NavProduct'
import AllProducts from '../components/Products/AllProducts';

const ProductPage = () => {

    const { cart, clearCart } = useContext(CartContext)

    const [openOrder, setOpenOrder] = useState(false)

    const handleOpenOrder = () => setOpenOrder(!openOrder)
    console.log(cart)
    return (
        <div>
            <Navbar />
            <div className='all-products container-fluid mt-4 mt-md-0'>
                <NavProduct
                    cart={cart}
                    openOrder={openOrder}
                    handleOpenOrder={() => handleOpenOrder()}
                />
                <div className='breadcumb-product pt-3 mx-3 mx-md-5' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </div>
                <div className="container">
                    <AllProducts
                        openOrder={openOrder}
                        cart={cart}
                        clearCart
                    />
                </div>
            </div >
        </div>
    )
}

export default ProductPage