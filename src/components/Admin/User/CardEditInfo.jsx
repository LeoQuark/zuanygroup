import React, { useState, useEffect } from 'react';


const CardEditInfo = () => {

    return (
        <div className='shadow-sm rounded p-4 h-100'>
            <p className='title-admin'>Edit Your Personal Information</p>
            <form className='user-form'>
                <div className='d-flex justify-content-between w-100 gap-4'>
                    <div className='w-50'>
                        <label>Full Name</label>
                        <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div className='w-50'>
                        <label>Phone</label>
                        <input type="text" className='form-control' placeholder='Phone' />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" className='form-control' placeholder='Email' />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" className='form-control' placeholder='Address' />
                </div>
                <div className='d-flex justify-content-end pt-1'>
                    <button type='submit' className='btn btn-sm btn-primary'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default CardEditInfo