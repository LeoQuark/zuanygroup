import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { Button } from 'react-bootstrap';
// import Button from 'bootstrap';


import NavbarAdmin from '../components/Admin/NavbarAdmin'
import SidebarAdmin from '../components/Admin/SidebarAdmin'

import Dashboard from '../components/Admin/Dashboard/Dashbard'
import UserSetting from '../components/Admin/User/UserSetting'
import Inventory from '../components/Admin/Inventory/Inventory'
import LoadData from '../components/Admin/LoadData/LoadData'


const AdminPage = () => {

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpenSidebar = () => setOpenSidebar(!openSidebar)
    console.log(openSidebar)

    return (
        <div className='page-admin'>
            <NavbarAdmin
                openSidebar={openSidebar}
                handleOpenSidebar={handleOpenSidebar}
            />
            <div className='div-admin'>
                <SidebarAdmin
                    openSidebar={openSidebar}
                />
                <div className={`page-principal ${openSidebar ? 'page-expand' : 'page-hidden'}`}>
                    <Routes>
                        <Route path='/user-setting' element={<UserSetting />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/inventory' element={<Inventory />} />
                        <Route path='/load-data' element={<LoadData />} />
                        <Route path="/" element={<Navigate to="/auth/dashboard" />} />
                    </Routes>
                </div>
                {/* <div className='footer-admin'>asa</div> */}
            </div>
        </div>
    )
}

export default AdminPage


// <div classNameNameName='admin-div'>
//             <div classNameNameName="btn btn-primary">das</div>
//             <div classNameNameName="btn btn-secondary">das</div>


//             <form onSubmit={uploadFile}>
//                 <button classNameNameName='btn btn-primary'>Load Excel</button>
//                 <Button variant='primary'>ss</Button>

//                 <div classNameNameName='d-flex justify-content-center gap-5 py-5 px-5'>
//                     <input
//                         onChange={handleFileUpload}
//                         type="file"
//                         classNameNameName='form-control'
//                         accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//                     />
//                 </div>
//             </form>
//         </div>