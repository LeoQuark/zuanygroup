import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-scroll'

import ModalProducts from './ModalProducts'

const CardProduct = ({
    tittle,
    description,
    imgUrl
}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    return (
        <div className="col-5 col-sm-4 col-lg-2 my-3 my-lg-0">
            <div className='card-product' onClick={() => setShow(true)}>
                <div className='d-block'>
                    <div className="d-flex justify-content-center">
                        <img src={imgUrl} alt="" className='img-product-card img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5 className='tittle-product-card'><strong>{tittle}</strong></h5>
                        <hr />
                    </div>
                    <div className='w-100'>
                        <p className='p-0 m-0'>
                            {description}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center mt-2 mt-md-3'>
                        <Link
                            // to="Products-section"
                            spy={true}
                            smooth={true}
                            duration={100}
                            type='button'
                            className='btn-zg-md btn_blue_zg_product text-button-product'
                        >Add to <i class="fa-solid fa-cart-shopping text-white "></i></Link>
                    </div>
                </div>
            </div>
            <ModalProducts
                show={show}
                onHide={handleClose}
                tittle={tittle}
                imageUrl={imgUrl}
            />
        </div>

    )
}

export default CardProduct