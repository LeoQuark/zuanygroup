import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'

import Logo from '../../assets/img/logo_zuany_group.png'

const navLinkSidebar = [
    {
        to: '/auth/user-setting',
        name: 'User Setting',
        icon: 'fa-solid fa-user-gear fa-lg'
    },
    {
        to: '/auth/dashboard',
        name: 'Dashboard',
        icon: 'fa-solid fa-table-cells-large fa-lg'
    },
    {
        to: '/auth/inventory',
        name: 'Inventory',
        icon: 'fa-solid fa-box fa-lg'
    },
    {
        to: '/auth/load-data',
        name: 'Load Data',
        icon: 'fa-solid fa-upload fa-lg'
    }
]

const SidebarAdmin = ({ openSidebar }) => {

    return (
        <div className={`sidebar-zg ${openSidebar ? 'sidebar-expand' : 'sidebar-hidden'}`}>
            <div className='d-block justify-content-center py-5 w-100'>
                <div className='d-flex justify-content-center pb-2'>
                </div>
                <p className='sidebar-title text-center'>Zuany Group</p>
            </div>
            <ul>
                {
                    navLinkSidebar && navLinkSidebar.map((linkSidebar, index) => (
                        <li key={index}>
                            <NavLink
                                to={linkSidebar.to}
                                className={`d-flex ${openSidebar ? 'justify-content-start' : 'justify-content-center'}`}
                            >
                                <i className={linkSidebar.icon}></i>
                                {openSidebar && (<p>{linkSidebar.name}</p>)}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* <div className='sidebar-footer'>
                footer
            </div> */}
        </div >
    )
}

export default SidebarAdmin