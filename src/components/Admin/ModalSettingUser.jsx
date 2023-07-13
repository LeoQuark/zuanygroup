import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const ModalSettingUser = ({ showSetting }) => {

    return (
        <div id='modal-user' className='btn-setting-user-modal shadow'>
            <ul>
                <li>
                    <Link to='/auth/user-setting'>
                        <i class="fa-solid fa-user"></i>
                        <p>View Profile</p>
                    </Link>
                </li>
                <li>
                    <Link to='/auth/inventory'>
                        <i class="fa-solid fa-box"></i>
                        <p>View Inventory</p>
                    </Link>
                </li>
                <li>
                    <Link to='/zg'>
                        <i class="fa-regular fa-newspaper"></i>
                        <p>Go To Landing Page</p>
                    </Link>
                </li>
                <hr className='mx-4' />
                <li>
                    <Link to='/admin'>
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <p>Log Out</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ModalSettingUser