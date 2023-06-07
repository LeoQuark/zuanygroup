import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalProducts = (props) => {

    const [amount, setAmount] = useState(0)
    // controladores para aumentar la cantidad de un producto
    const higherAmount = () => setAmount(amount + 1)
    const smallerAmount = () => amount > 0 && setAmount(amount - 1)



    // console.log(props)


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
                        <button
                            type='button'
                            onClick={() => props.onHide()}
                        >
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="d-flex justify-content-center">
                                <img src={props.info.image} className='img-modal-product' />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className='modal-body-information'>
                                <div className="div-info d-block justify-content-start my-4">
                                    <h5 className='modal-tittle'>{props.info.title}</h5>
                                    <p className='modal-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus. Curabitur cursus vehicula volutpat. Nam lacus nibh, tincidunt vitae nibh a, suscipit fringilla turpis. Vivamus mollis imperdiet sem in tempor.
                                    </p>
                                    {/* <h5>{props.info.price}</h5> */}
                                    <p><strong>{props.info.category}</strong></p>
                                </div>
                                <div className="div-buttons">
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <button
                                                type='button'
                                                className='btn-zg-amount'
                                                onClick={() => smallerAmount()}
                                            ><i class="fa-solid fa-minus"></i></button>
                                            <span className='product-amount'>
                                                {amount}
                                            </span>
                                            <button
                                                type='button'
                                                className='btn-zg-amount'
                                                onClick={() => higherAmount()}
                                            ><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                        <button
                                            type='button'
                                            className='btn-zg-md btn_blue_zg_product text-button-product'
                                            onClick={() => props.addProduct(props.info, amount)}
                                        >Add to <i className="fa-solid fa-cart-shopping text-white "></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalProducts