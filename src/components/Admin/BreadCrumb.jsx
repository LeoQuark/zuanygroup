import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const BreadCrumb = ({ section }) => {

    return (
        <div aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to='/auth/dashboard' className='text-dark'>
                        <strong>Home</strong>
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {section}
                </li>
            </ol>
        </div>
    )
}

export default BreadCrumb