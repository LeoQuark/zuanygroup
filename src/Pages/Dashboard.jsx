import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIURL } from '../utils/apiData'
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
        <div className='admin-div'>
            {/* <SidebarAdmin /> */}
            <form onSubmit={uploadFile}>
                <button className='btn btn-primary'>Load Excel</button>
                <div className='d-flex justify-content-center gap-5 py-5 px-5'>
                    <input
                        // name={file}
                        onChange={handleFileUpload}
                        type="file"
                        className='form-control'
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    />
                </div>
            </form>
        </div>
    )
}

export default Dashboard