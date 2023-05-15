import React, { useState } from 'react';
import ModalService from './ModalService'

const CircleService = ({
    tittle,
    imgUrl
}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    return (
        <div className="col-6 col-md-4 col-lg-4 gap-4 my-lg-4" >
            <div className="d-flex justify-content-center" onClick={() => setShow(true)}>
                <div className='circle-service shadow'>
                    <img src={imgUrl} className='img-circle-service' />
                    <h5 className='text-circle-services'>{tittle}</h5>
                </div>
            </div>
            <ModalService
                show={show}
                onHide={handleClose}
                tittle={tittle}
                imgUrl={imgUrl}
            // infoService='ss'
            />
        </div>
    )
}

export default CircleService