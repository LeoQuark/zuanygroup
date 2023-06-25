import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

import ModalProducts from './ModalProducts'

const CardProduct = ({
    product
}) => {
    // console.log('sa', product)

    const { addProduct } = useContext(CartContext)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    useEffect(() => {
        console.log('aa', product)
    }, [])

    return (
        <div>
            <div
                className='card-product'
                onClick={() => setShow(true)}
            >
                <div className='d-block'>
                    <div className="d-flex justify-content-center">
                        <img src={product.image} alt="" className='img-product-card' />
                    </div>
                    <div className='my-2'>
                        <h5 className='tittle-product-card'><strong>{product.title}</strong></h5>
                        <hr />
                    </div>
                    <div className='w-100'>
                        <p className='card-description p-0 m-0'>
                            {product.description}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center mt-2 mt-md-3'>
                        <button
                            type='button'
                            className='btn-zg-md btn_blue_zg_product text-button-product'
                        // onClick={() => addProduct(product)}
                        >Add to <i className="fa-solid fa-cart-shopping text-white "></i></button>
                    </div>
                </div>
            </div>
            <ModalProducts
                product={product}
                show={show}
                onHide={handleClose}
                addProduct={addProduct}
            />
        </div >

    )
}

export default CardProduct