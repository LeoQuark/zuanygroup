import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'


const ModalService = (props) => {

    const [existText1, setExistText1] = useState(props.information.text1 ? true : false)
    const [existList, setExistList] = useState(props.information.list ? true : false)

    // console.log(props.information.title, existText1, existList)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
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
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <img src={props.imageUrl} className='modal-img' />
                            </div>
                            <div className="d-flex justify-content-center my-4">
                                <h5 className='modal-tittle'>{props.title}</h5>
                            </div>
                            {
                                props.type == 'provision' ?
                                    (
                                        <div className="my-4 mx-2">
                                            {props.information.text1.map((text1, index) => (
                                                <p key={index} className='modal-text'>
                                                    {text1}
                                                </p>
                                            ))}
                                        </div>
                                    ) :
                                    (
                                        <div>
                                            <div className="my-2 mx-2">
                                                <p className='modal-text'>
                                                    {props.information.text1}
                                                </p>
                                            </div>
                                            <ul className="list-group list-group-flush mx-2 mb-3">
                                                {props.information.list.map((text, index) => (
                                                    <li key={index} className="list-group-item list-group-item-action p-0 bg-transparent ">
                                                        {`${index != 0 ? `${index}. ` : ''} ${text}`}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                            }
                            {
                                props.type == 'engine' || props.type == 'chemical' ?
                                    (
                                        <div className="d-flex justify-content-center my-4 mx-2">
                                            <p className=''>{props.information.text2}</p>
                                        </div>
                                    ) :
                                    props.type != 'provision' && (
                                        (
                                            <div>
                                                <div className="d-flex justify-content-center mx-2">
                                                    <p className=''>{props.information.text2}</p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-2">
                                                    <p className=''>{props.information.text3}</p>
                                                </div>
                                            </div>
                                        )
                                    )
                            }
                        </div>
                        <div className="d-flex justify-content-around">
                            <Link
                                to="Contacts"
                                spy={true}
                                smooth={true}
                                duration={100}
                                type='button'
                                className='btn-zg-md btn_white_zg'
                                onClick={() => props.onHide()}
                            >{props.infoButton.buttons.contacts2}</Link>
                            <LinkRouter
                                to="/all-products"
                                type='button'
                                className='btn-zg-md btn_pink_zg'
                                onClick={() => props.onHide()}
                            >{props.infoButton.buttons.allproducts}</LinkRouter>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalService