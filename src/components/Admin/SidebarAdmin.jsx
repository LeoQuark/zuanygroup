import React, { useState, useEffect } from 'react';

import Logo from '../../assets/img/logo_zuany_group.png'

const SidebarAdmin = () => {

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpenSidebar = () => setOpenSidebar(!openSidebar)

    return (
        <div className='sidebar-zg' style={{ width: openSidebar ? '8rem' : '15rem' }}>
            <button
                className='sidebar-btn'
                onClick={() => handleOpenSidebar()}
                style={{ left: openSidebar ? '6.5rem' : '13.5rem' }}
            >
                <i className="fa-solid fa-chevron-left fa-lg text-white"></i>
            </button>
            <div className='d-block justify-content-center py-5 w-100'>
                <div className='d-flex justify-content-center pb-2'><img src={Logo} alt="" /></div>
                <p className='sidebar-title text-center'>Zuany Group</p>
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default SidebarAdmin