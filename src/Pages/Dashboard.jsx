import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIURL } from '../utils/apiData'
import { Button } from 'react-bootstrap';
// import Button from 'bootstrap';
// import { read, utils, writeFile } from 'xlsx';

import SidebarAdmin from '../components/Admin/SidebarAdmin'

const Dashboard = () => {

    const [excelData, setExcelData] = useState()
    const [isError, setIsError] = useState(false)

    const handleFileUpload = (event) => {
        // event.preventDefault()
        const selectedFile = event.target.files[0]
        // console.log(selectedFile)

        if (!selectedFile) {
            setIsError(true)
            console.log('error')
        }
        setExcelData(selectedFile)
        // const file = event.target.files[0];
        // const reader = new FileReader();
        // reader.onload = (e) => {
        //     const data = new Uint8Array(e.target.result);
        //     const workbook = XLSX.read(data, { type: 'array' });
        //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        //     // Aquí puedes enviar jsonData al backend usando una solicitud HTTP (por ejemplo, con axios)
        //     console.log(jsonData)
        // };
        // reader.readAsArrayBuffer(file);
    }

    const uploadFile = async (event) => {
        event.preventDefault()
        const formData = new FormData()

        formData.append('file', excelData)
        // console.log(formData)

        await fetch(`${APIURL}/file/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use href="#bootstrap" /></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use href="#home" /></svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use href="#speedometer2" /></svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use href="#table" /></svg>
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use href="#grid" /></svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use href="#people-circle" /></svg>
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" />sa</li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard

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