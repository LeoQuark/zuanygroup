import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import ListInfo from './ListInfo'

const LoadSpinner = () => {
    return (
        <div className='d-flex justify-content-center mx-5'>
            <Spinner animation="border" variant="success" />
        </div>
    )
}

const AddCompleted = () => {
    return (
        <div className='d-flex justify-content-center mx-5'>
            <i className="fa-regular fa-thumbs-up bg-succes"></i>
        </div>
    )
}

const ModalProducts = (props) => {

    const [amount, setAmount] = useState(1)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)


    // controladores para aumentar la cantidad de un producto
    const higherAmount = () => setAmount(amount + 1)
    const smallerAmount = () => amount > 0 && setAmount(amount - 1)

    const btnAddProduct = (product, amount) => {
        setLoading(true)

        const dataProduct = {
            ...product,
            amount
        }
        props.addProduct(dataProduct)
        // setPressBtnAdd(true)
        setTimeout(() => {
            setLoading(false)
            setCompleted(true)
        }, 800)
        setTimeout(() => {
            setCompleted(false)
        }, 5000)
    }

    useEffect(() => {
        setLoading(false)
        setCompleted(false)
    }, [])


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
                                <img src={props.product.image_url} className='img-product-modal' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className='modal-body-information'>
                                <div className="div-info d-block justify-content-start my-4">
                                    <p className='text-muted modal-text m-0'>ID: {props.product.id}</p>
                                    <h5 className='modal-tittle'>{props.product.name}</h5>
                                    <p className='modal-text m-0 mb-3'>
                                        {props.descriptionProduct != undefined ? props.descriptionProduct : "Not found"}
                                    </p>
                                    <p className='modal-text mb-1'>Additional Information</p>
                                    <ListInfo product={props.product} />
                                </div>
                                {/* <div className="div-buttons">
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
                                        <div className='d-flex'>
                                            {
                                                loading && (<LoadSpinner />)
                                            }
                                            <button
                                                id="openToast"
                                                type='button'
                                                className={`btn-zg-md btn_blue_zg_product text-button-product ${completed ? 'btn-add-succes' : ''}`}
                                                onClick={() => btnAddProduct(props.product, amount)}
                                            >
                                                {!completed ? (
                                                    <p className='m-0'>
                                                        <div>
                                                            Add to <i className="fa-solid fa-cart-shopping text-white"></i>
                                                        </div>
                                                    </p>
                                                ) : (
                                                    <p className='m-0'>Success !</p>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal >
    )
}

export default ModalProducts