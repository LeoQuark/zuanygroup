import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import ModalSettingUser from './ModalSettingUser'

import User from '../../assets/img/img-user-1.jpeg'

const NavbarAdmin = ({ openSidebar, handleOpenSidebar }) => {

    const [showSetting, setShowSetting] = useState(false)

    const handleShowSetting = () => setShowSetting(!showSetting)
    console.log(showSetting)

    const closeModal = () => setShowSetting(false);

    // const handleOutsideClick = (event) => {
    //     console.log(event.target.id)
    //     if (event.target.id === 'modal-user') {
    //         console.log(event.target.id)
    //         // closeModal();
    //     }
    // };

    // useEffect(() => {
    //     if (showSetting) {
    //         const handleOutsideClick = (event) => {
    //             if (showSetting && !event.target.closest('.btn-setting-user-modal')) {
    //                 closeModal();
    //             }
    //         };

    //         window.addEventListener('click', handleOutsideClick);

    //         return () => {
    //             window.removeEventListener('click', handleOutsideClick);
    //         };
    //     } else {
    //         setShowSetting(false)
    //     }
    // }, [showSetting]);

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
                        <img src={User} className='img-user mx-2' />
                        <button
                            className='btn-setting-user btn btn-sm btn-outline-secondary'
                            onClick={handleShowSetting}
                        >
                            <div className='d-flex justify-content-start align-items-center'>
                                <i class="fa-solid fa-gear"></i>
                                <p className='m-0 p-1'>User</p>
                            </div>
                        </button>
                        {
                            showSetting &&
                            <ModalSettingUser
                                showSetting={showSetting}
                            />
                        }
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavbarAdmin