import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

import ModalProducts from './ModalProducts'

const CardProduct = ({
    info,
    clearCart
}) => {

    const { addProduct } = useContext(CartContext)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    // useEffect(() => {

    // }, [])

    return (
        <div>
            <div
                className='card-product'
                onClick={() => setShow(true)}
            >
                <div className='d-block'>
                    <div className="d-flex justify-content-center">
                        <img src={info.image} alt="" className='img-product-card img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5 className='tittle-product-card'><strong>{info.title}</strong></h5>
                        <hr />
                    </div>
                    <div className='w-100'>
                        <p className='card-description p-0 m-0'>
                            {info.description}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center mt-2 mt-md-3'>
                        <button
                            type='button'
                            className='btn-zg-md btn_blue_zg_product text-button-product'
                        // onClick={() => addProduct(info)}
                        >Add to <i className="fa-solid fa-cart-shopping text-white "></i></button>
                    </div>
                </div>
            </div>
            <ModalProducts
                info={info}
                show={show}
                onHide={handleClose}
                addProduct={addProduct}
            />
        </div >

    )
}

export default CardProduct