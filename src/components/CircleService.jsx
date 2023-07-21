import React, { useState } from 'react';

import ModalService from './ModalService';

const CircleService = ({
    type,
    title,
    imgUrl,
    information,
    infoButton
}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    return (
        <div className="col-6 col-md-4 col-lg-4 my-lg-4">
            <div className="d-flex justify-content-center">
                <button className='circle-service shadow' onClick={() => setShow(true)}>
                    <div>
                        <img src={imgUrl} className='img-circle-service' />
                        <h5 className='text-circle-services'>
                            {title}
                        </h5>
                    </div>
                </button>
            </div>
            <ModalService
                type={type}
                show={show}
                onHide={handleClose}
                title={title}
                imageUrl={imgUrl}
                information={information}
                infoButton={infoButton}
            />
        </div>
    )
}

export default CircleService