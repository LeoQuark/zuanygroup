import React, { useState, useEffect } from 'react';
import { read, utils, writeFile } from 'xlsx';
import axios from 'axios';
import { APIURL } from '../../../utils/apiData'

import BreadCrumb from '../BreadCrumb';
import CardProducts from '../CardProducts';

const LoadData = () => {

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

        console.log('leo', excelData)
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
        <div className='container-fluid h-100'>
            <div className="d-flex justify-content-start p-0">
                <BreadCrumb section='Load Data' />
            </div>
            <div className="row d-flex justify-content-between w-100 m-0">
                <div className="col-12 col-md-4 px-0 px-md-4 my-2 my-md-0">
                    <CardProducts
                        title='title 1'
                        amount='250'
                        icon='fa-solid fa-box-open'
                        color='green'
                    />
                </div>
                <div className="col-12 col-md-4 px-0 px-md-4 my-2 my-md-0">
                    <CardProducts
                        title='title 2'
                        amount='100'
                        icon='fa-solid fa-cart-shopping'
                        color='green'
                    />
                </div>
                <div className="col-12 col-md-4 px-0 px-md-4 my-2 my-md-0">
                    <CardProducts
                        title='title 3'
                        amount='15'
                        icon='fa-solid fa-filter'
                        color='black'
                    />
                </div>
            </div>
            <div className="row d-flex w-100 mt-3 shadow-sm rounded m-0 mx-sm-2">
                <div className="col-12 p-4">
                    <p className='title-admin'>upload your database</p>
                    {/* <hr /> */}
                    <form onSubmit={uploadFile}>
                        <div className="row d-flex justify-content-center gap-5 pt-4">
                            <div className='col-12 col-md-5 card p-4'>
                                <p className='text-center title-admin'>Load Provision</p>
                                <input
                                    type="file"
                                    className='form-control my-4'
                                    onChange={handleFileUpload}
                                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                />
                                <button
                                    className='btn btn-success'
                                    type='submit'
                                >
                                    Upload File Provision
                                </button>
                                <p className='text-muted m-0 mt-3'>* Remember that the <strong>Provision</strong> file must maintain the defined structure</p>
                            </div>
                            <div className='col-12 col-md-5 card p-4'>
                                <p className='text-center title-admin'>Load Bonded</p>
                                <input
                                    type="file"
                                    className='form-control my-4'
                                    onChange={handleFileUpload}
                                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                />
                                <button
                                    type='submit'
                                    className='btn btn-success'
                                >
                                    Upload File Bonded
                                </button>
                                <p className='text-muted m-0 mt-3'>* Remember that the <strong>Bonded</strong> file must maintain the defined structure</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoadData