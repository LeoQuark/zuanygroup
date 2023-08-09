import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

import ShoppingCart from './ShoppingCart'
import { getCartLocalStorage, setCartLocalStorage } from '../../utils/storage'

// ['Order By', 'Most Popular', 'A-Z', 'Z-A']

const selectOrder = [
    {
        name: 'Order By',
        value: 'reset'
    },
    {
        name: 'Most Popular',
        value: 'popular'
    },
    {
        name: 'A-Z',
        value: 'asc'
    },
    {
        name: 'Z-A',
        value: 'desc'
    }
]

const NavProduct = ({
    searchProduct,
    handleSearch,
    categories,
    orderBy,
    selectCategories,
    handleCategory,
    handleOrder
}) => {

    const { cart, cleanCart, deleteProduct, addFromLocalStorage } = useContext(CartContext)

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

        console.log(cart)

        if (cart.shoppingCart.length > 0) {
            const cartShopping = JSON.stringify(cart.shoppingCart)
            setCartLocalStorage(cartShopping)
            // console.log(getCartLocalStorage())
            console.log('localstorage entra')
        }
        else if (cart.shoppingCart.length === 0) {
            console.log('vamoss', cart.shoppingCart.length)
            // const cartShopping = JSON.stringify(cart.shoppingCart)
            // setCartLocalStorage(cartShopping)
        }
    }, [cart])

    useEffect(() => {
        console.log('CAMBIOSSS', cart.shoppingCart)
        const dataLS = getCartLocalStorage()
        console.log('Local Storage: ', dataLS)

        console.log('data cart:', cart)

        addFromLocalStorage(dataLS)

    }, [])

    console.log('CARTRT', cart)

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
                    <select
                        className='form-select'
                        value={selectCategories}
                        onChange={(event) => handleCategory(event)}
                    >
                        <option value='reset'>
                            Select a Category
                        </option>
                        {categories && categories.length != 0 && (
                            categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        )}
                    </select>
                </div>
                <div className="item-3">
                    <select
                        className='form-select'
                        value={orderBy}
                        onChange={(event) => handleOrder(event)}
                    >
                        {selectOrder && selectOrder.map((order, index) => (
                            <option key={index} value={order.value}>
                                {order.name}
                            </option>
                        ))}
                    </select>
                    {/* <button className='btn btn-secondary'>
                        <i className="fa-solid fa-delete-left"></i>
                    </button> */}
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
                cleanCart={cleanCart}
            />
        </div >
    )
}

export default NavProduct