import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const CardProducts = ({ title, amount, icon, color }) => {

    return (
        <div className="card-product-admin rounded shadow-sm animate__animated animate__fadeIn">
            <p className='title-card-product'>{title}</p>
            <div>
                <i className={icon} />
                <p style={{ color: `${color}` }}>{amount}</p>
            </div>
        </div>
    )
}

export default CardProducts