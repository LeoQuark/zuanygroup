import React, { useState, useEffect } from 'react';

import User from '../../../assets/img/img-user-1.jpeg'

const CardEditPhoto = () => {

    return (
        <div className='row d-flex justify-content-center shadow-sm rounded h-100 p-4'>
            <p className='title-user'>Edit Your Photo</p>
            <div className='d-flex justify-content-center w-100'>
                <img src={User} className='img-user-setting ' />
            </div>
            <div>
                <form>
                    <input type='file' />
                </form>
            </div>
        </div>
    )
}

export default CardEditPhoto