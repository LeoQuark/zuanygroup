import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { sendMailSubmit } from '../../utils/functionFormat'

const ModalEmail = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    // const [file, setFile] = useState(false)

    const handleName = (event) => setName(event.target.value)
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePhone = (event) => setPhone(event.target.value)
    const handleMessage = (event) => setMessage(event.target.value)

    console.log(props.cart)

    const handleSubmit = async () => {
        event.preventDefault()
        console.log('send email')
        console.log(name, email, phone, message)

        const customerData = { name, email, phone, message }
        const productData = props.cart

        sendMailSubmit(customerData, productData)
    }

    useEffect(() => {
        console.log('correo')

    }, [])




    return (
        <Modal
            {...props}
            size="md"
            // aria-labelledby="contained-modal-title-vcenter"
            // centered
            className='p-0'
        >
            <Modal.Header closeButton>
                <Modal.Title>Send Quoty By Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className='form-control' placeholder='Name'
                                        onChange={(event) => handleName(event)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        className='form-control' placeholder='+569 9934 7809'
                                        onChange={(event) => handlePhone(event)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className='form-control' placeholder='example@gmail.com'
                                    onChange={(event) => handleEmail(event)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label>Message</label>
                                <textarea
                                    type="text"
                                    className='form-control' placeholder='Write your message ...'
                                    onChange={(event) => handleMessage(event)}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type='submit'
                                className='btn-zg-lg btn_pink_zg py-2 py-sm-1'
                            >
                                Send <i class="fa-solid fa-paper-plane text-white"></i>
                            </button>
                        </div>
                    </form>
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

export default ModalEmail