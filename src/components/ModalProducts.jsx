import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-scroll'

const ModalProducts = ({
    info,
    show,
    onHide,
    addProduct,
    ...props
}) => {

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="container modal-body">
                    <div className='btn-modal-close d-flex justify-content-end'>
                        <button className=''
                            onClick={() => onHide()}
                        >
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="d-flex justify-content-center">
                                <img src={info.image} className='img-modal-product' />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="d-block justify-content-start my-4">
                                <h5 className='modal-tittle'>{info.title}</h5>
                                <p className='modal-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus. Curabitur cursus vehicula volutpat. Nam lacus nibh, tincidunt vitae nibh a, suscipit fringilla turpis. Vivamus mollis imperdiet sem in tempor.
                                </p>
                                {/* <h5>{info.price}</h5> */}
                                <p><strong>{info.category}</strong></p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button
                                    type='button'
                                    className='btn-zg-md btn_blue_zg_product text-button-product'
                                    onClick={() => addProduct(info)}
                                >Add to <i className="fa-solid fa-cart-shopping text-white "></i></button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='btn-modal-close d-flex justify-content-end'>
                        <button className=''
                            onClick={() => onHide()}
                        >
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>
                    <div className="row my-2">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <img src={imageUrl} className='modal-img' />
                            </div>
                            <div className="d-flex justify-content-center my-4">
                                <h5 className='modal-tittle'>{tittle}</h5>
                            </div>
                            <div className="d-flex justify-content-center my-4 mx-2">
                                <p className='modal-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus. Curabitur cursus vehicula volutpat. Nam lacus nibh, tincidunt vitae nibh a, suscipit fringilla turpis. Vivamus mollis imperdiet sem in tempor. Nulla lobortis dapibus ipsum in varius. Morbi nisi tortor, molestie ac urna vitae, facilisis imperdiet ligula. Maecenas bibendum lobortis odio, sit amet dignissim nunc ornare sit amet. Aenean porta sem ullamcorper rhoncus tempus. Cras sit amet nisl vehicula, venenatis augue id, accumsan tortor. Nam ultrices dapibus imperdiet.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalProducts