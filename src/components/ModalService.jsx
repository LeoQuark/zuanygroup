import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalService = (props) => {

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // style={{ width: '100vw' }}
        >
            <Modal.Body>
                <div className="container h-100 modal-body">
                    <div className='btn-modal-close d-flex justify-content-end'>
                        <button className=''
                            onClick={() => props.onHide()}
                        >
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>
                    <div className="row my-2">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <img src={props.imgUrl} className='modal-img' />
                            </div>
                            <div className="d-flex justify-content-center my-4">
                                <h5 className='modal-tittle'>{props.tittle}</h5>
                            </div>
                            <div className="d-flex justify-content-center my-4 mx-2">
                                <p className='modal-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus. Curabitur cursus vehicula volutpat. Nam lacus nibh, tincidunt vitae nibh a, suscipit fringilla turpis. Vivamus mollis imperdiet sem in tempor. Nulla lobortis dapibus ipsum in varius. Morbi nisi tortor, molestie ac urna vitae, facilisis imperdiet ligula. Maecenas bibendum lobortis odio, sit amet dignissim nunc ornare sit amet. Aenean porta sem ullamcorper rhoncus tempus. Cras sit amet nisl vehicula, venenatis augue id, accumsan tortor. Nam ultrices dapibus imperdiet.
                                    <br /><br />
                                    Donec ac volutpat nibh, sed congue velit. Duis ut magna felis. Fusce viverra venenatis lorem, vitae fringilla odio consectetur vitae. Donec convallis dictum dolor at pretium. Etiam scelerisque aliquet quam. Suspendisse sed semper tortor. Etiam rutrum tempus nulla vel feugiat. Suspendisse nec lectus at quam vestibulum mattis mollis sit amet enim. Nunc sit amet sodales felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce pellentesque massa at aliquam feugiat. Vivamus libero mauris, hendrerit ultricies magna ac, eleifend ultrices tortor.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex justify-content-center my-4 mx-2">
                                <p className='modal-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus. Curabitur cursus vehicula volutpat. Nam lacus nibh, tincidunt vitae nibh a, suscipit fringilla turpis. Vivamus mollis imperdiet sem in tempor. Nulla lobortis dapibus ipsum in varius. Morbi nisi tortor, molestie ac urna vitae, facilisis imperdiet ligula. Maecenas bibendum lobortis odio, sit amet dignissim nunc ornare sit amet. Aenean porta sem ullamcorper rhoncus tempus. Cras sit amet nisl vehicula, venenatis augue id, accumsan tortor. Nam ultrices dapibus imperdiet.
                                </p>
                                <br />
                            </div>
                            <div className="d-flex justify-content-around">
                                <a href="#Contacts" className='btn-zg-lg _btn-white-tt' onClick={() => props.onHide()}>Contact Us !</a>
                                <a href='' className='btn-zg-lg _btn-pink-tt' onClick={() => props.onHide()}>View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalService