import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast'
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ModalProducts = (props) => {

    const [amount, setAmount] = useState(1)

    // controladores para aumentar la cantidad de un producto
    const higherAmount = () => setAmount(amount + 1)
    const smallerAmount = () => amount > 0 && setAmount(amount - 1)

    const toggleShow = () => setShowCanvas(!showCanvas);

    // console.log(props)

    const BtnAddProduct = (product, amount) => {
        // console.log('add product', product, amount)
        const dataProduct = {
            ...product,
            amount
        }
        props.addProduct(dataProduct)
    }


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='p-0'
        >
            <Modal.Body>
                <div className="container h-100 modal-body">
                    <div className='btn-modal-close d-flex justify-content-end'>
                        <button
                            type='button'
                            onClick={() => props.onHide()}
                        >
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="d-flex justify-content-center">
                                <img src={props.product.image} className='img-product-modal' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className='modal-body-information'>
                                <div className="div-info d-block justify-content-start my-4">
                                    <h5 className='modal-tittle'>{props.product.title}</h5>
                                    <p className='modal-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus. Curabitur cursus vehicula volutpat. Nam lacus nibh, tincidunt vitae nibh a, suscipit fringilla turpis. Vivamus mollis imperdiet sem in tempor.
                                    </p>
                                    {/* <h5>{props.product.price}</h5> */}
                                    <p>Category: <strong>{props.product.category}</strong></p>
                                </div>
                                <div className="div-buttons">
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <button
                                                type='button'
                                                className='btn-zg-amount'
                                                onClick={() => smallerAmount()}
                                            ><i className="fa-solid fa-minus"></i></button>
                                            <span className='product-amount'>
                                                {amount}
                                            </span>
                                            <button
                                                type='button'
                                                className='btn-zg-amount'
                                                onClick={() => higherAmount()}
                                            ><i className="fa-solid fa-plus"></i></button>
                                        </div>
                                        <button
                                            id="openToast"
                                            type='button'
                                            className='btn-zg-md btn_blue_zg_product text-button-product'
                                            onClick={() => BtnAddProduct(props.product, amount)}
                                        >Add to <i className="fa-solid fa-cart-shopping text-white "></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            {/* <Toast show={openToast} animation={false} className=''>
                <div className='d-flex justify-content-center py-2'>
                    <Spinner animation="border" variant="success" />
                </div>
                <Toast.Body>Adding product to quote</Toast.Body>
            </Toast> */}
        </Modal>
    )
}

export default ModalProducts