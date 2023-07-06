import React, { useState } from 'react';
import ModalService from './ModalService'

const CircleService = ({
    title,
    imgUrl,
    translation
}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    return (
        <div className="col-6 col-md-4 col-lg-4 my-lg-4">
            <div className="d-flex justify-content-center">
                <button className='circle-service shadow' onClick={() => setShow(true)}>
                    <div>
                        <img src={imgUrl} className='img-circle-service' />
                        <h5 className='text-circle-services'>{translation.services.title}</h5>
                    </div>
                </button>
            </div>
            <ModalService
                show={show}
                onHide={handleClose}
                title={title}
                imageUrl={imgUrl}
            />
        </div>
    )
}

export default CircleService