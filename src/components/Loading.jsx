import React, { useState, useEffect } from 'react';

const Loading = ({ text = 'Loading' }) => {

    return (
        <div className='d-block justify-content-center align-items-center p-3'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className='m-0'>{text}</p>
        </div>
    )
}

export default Loading