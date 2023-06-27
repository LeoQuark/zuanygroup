import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

import ShoppingCart from './ShoppingCart'

const NavProduct = ({
    searchProduct,
    handleSearch,
    categories,
    orderBy,
    selectCategories,
    handleCategory
}) => {

    const { cart, clearCart, deleteProduct } = useContext(CartContext)

    const [showCanvas, setShowCanvas] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleClose = () => setShowCanvas(false);
    const handleShow = () => setShowCanvas(true);

    useEffect(() => {
        // Función para actualizar las dimensiones de la pantalla cuando se cambia el tamaño de la ventana
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log('CAMBIOSSS', cart.shoppingCart)
    }, [cart])

    return (
        <div className='container-fluid nav-product p-0 m-0'>
            <div className="filter-grid">
                <div className="item-1">
                    <input
                        value={searchProduct}
                        onChange={(event) => handleSearch(event)}
                        type="text"
                        className='form-control w-100'
                        placeholder='Search Product'
                    />
                </div>
                <div className="item-2">
                    <select className='form-select'>
                        {categories.length != 0 ? (
                            categories.map((category, index) => (
                                <option key={index}>
                                    {category}
                                </option>
                            ))
                        ) : (
                            <li><a className="dropdown-item" href="#">Action</a></li>
                        )}
                    </select>
                </div>
                <div className="item-3">
                    <select className='form-select'>
                        {orderBy && orderBy.map((order, index) => (
                            <option key={index}>
                                {order}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="item-4">
                    <div className="d-flex justify-content-end">
                        <div>
                            <button
                                className='btn-order'
                                onClick={() => handleShow()}
                            >
                                {
                                    screenWidth >= 768 ?
                                        (
                                            <p className='m-0'>My Order</p>
                                        ) :
                                        (
                                            <div>
                                                <i className="fa-solid fa-cart-shopping mx-2"></i>
                                            </div>
                                        )
                                }
                                <span className="badge bg-danger text-bg-secondary">
                                    {cart.shoppingCart.length}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ShoppingCart
                cart={cart}
                show={showCanvas}
                onHide={handleClose}
                deleteProduct={deleteProduct}
                clearCart={clearCart}
            />
        </div >
    )
}

export default NavProduct