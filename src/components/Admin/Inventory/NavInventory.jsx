import React, { useState, useEffect } from 'react';

import BreadCrumb from '../BreadCrumb';

const NavInventory = () => {

    const [btnProvision, setBtnProvision] = useState(true)
    const [btnBounded, setBtnBounded] = useState(false)
    const [btnCategory, setBtnCategory] = useState(false)

    const handleButton = (event) => {
        console.log(event.target.name)
        const btnClick = event.target.name
        if (btnClick === 'provision') {
            setBtnProvision(true)
            setBtnBounded(false)
            setBtnCategory(false)
        }
        else if (btnClick === 'bounded') {
            setBtnProvision(false)
            setBtnBounded(true)
            setBtnCategory(false)
        }
        else if (btnClick === 'category') {
            setBtnProvision(false)
            setBtnBounded(false)
            setBtnCategory(true)
        }
    }

    return (
        <div className="d-flex justify-content-start w-100 m-0 rounded shadow-sm p-4 gap-3">
            <button
                name='provision'
                className={`btn ${btnProvision ? 'btn-primary' : 'btn-secondary'}`}
                onClick={handleButton}
            >
                Provision
            </button>
            <button
                name='bounded'
                className={`btn ${btnBounded ? 'btn-primary' : 'btn-secondary'}`}
                onClick={handleButton}
            >
                Bounded
            </button>
            <button
                name='category'
                className={`btn ${btnCategory ? 'btn-primary' : 'btn-secondary'}`}
                onClick={handleButton}
            >
                Category
            </button>
        </div>
    )
}

export default NavInventory