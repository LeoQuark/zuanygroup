import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'

import Logo from '../../assets/img/logo_zuany_group.png'


const SidebarAdmin = ({ openSidebar }) => {

    return (
        <div
            className={`sidebar-zg ${openSidebar ? 'sidebar-expand' : 'sidebar-hidden'}`}
        >
            <div className='d-block justify-content-center py-5 w-100'>
                <div className='d-flex justify-content-center pb-2'>
                    {/* <img src={Logo} alt="" /> */}
                </div>
                <p className='sidebar-title text-center'>Zuany Group</p>
            </div>
            <ul>
                <NavLink to='/auth/user-setting'>
                    <li>
                        <i className="fa-solid fa-user-gear fa-lg"></i>
                        <p>User Setting</p>
                    </li>
                </NavLink>
                <li>
                    <NavLink to='/auth/dashboard'>
                        <i className="fa-solid fa-table-cells-large fa-lg"></i>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/auth/inventory'>
                        <i className="fa-solid fa-box fa-lg"></i>
                        Inventory
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/auth/load-data'>
                        <i className="fa-solid fa-upload fa-lg"></i>
                        Load Data
                    </NavLink>
                </li>
            </ul>
            <div className='sidebar-footer'>
                footer
            </div>
        </div>
    )
}

export default SidebarAdmin