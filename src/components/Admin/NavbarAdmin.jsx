import React, { useState, useEffect } from 'react';

import User from '../../assets/img/img-user-1.jpeg'

const NavbarAdmin = ({ openSidebar, handleOpenSidebar }) => {



    return (
        <nav className="navbar border-bottom shadow-sm test">
            <div className="container-fluid">
                <div className="d-flex justify-content-between w-100">
                    <button
                        className='sidebar-btn'
                        onClick={() => handleOpenSidebar()}
                    >
                        {/* {openSidebar ?
                                    <i className="fa-solid fa-chevron-left fa-lg text-white"></i> :
                                    <i className="fa-solid fa-chevron-right fa-lg text-white"></i>} */}
                        {
                            openSidebar ? <div>open</div> : <div>b</div>
                        }
                    </button>
                    <div className='d-flex justify-content-center align-items-center h-100 mx-2'>
                        <img src={User} className='img-user' />
                        <a href="" className='navbar-user-name'>User</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAdmin