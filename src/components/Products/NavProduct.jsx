import React, { useState, useEffect, useContext } from 'react';
import CardOrder from './CardOrder'

const NavProduct = ({
    cart,
    searchProduct,
    handleSearch,
    categories,
    selectCategories,
    handleCategory
}) => {

    const [showCanvas, setShowCanvas] = useState(false)

    const handleClose = () => setShowCanvas(false);
    const handleShow = () => setShowCanvas(true);

    useEffect(() => {

    }, [])

    // console.log(searchProduct)
    // console.log(selectCategories)

    return (
        // <div className='container-fluid nav-product p-0 m-0'>
        //     <div className="row" id='np-1'>
        //         <div className="col-12 col-md-6">
        //             <input
        //                 value={searchProduct}
        //                 onChange={(event) => handleSearch(event)}
        //                 type="text"
        //                 className='form-control w-100'
        //                 placeholder='Search Product'
        //             />
        //         </div>
        //         <div className="col-6 col-md-3">
        //             <div className="dropdown">
        //                 <button
        //                     className="btn btn-secondary dropdown-toggle" type="button"
        //                     data-bs-toggle="dropdown"
        //                     aria-expanded="false"
        //                     value={selectCategories}
        //                     onChange={(event) => handleCategory(event)}
        //                 >
        //                     Select Category
        //                 </button>
        //                 <ul className="dropdown-menu">
        //                     {categories.length != 0 ? (
        //                         categories.map((category, index) => (
        //                             <li key={index}>
        //                                 <p className="dropdown-item m-0">
        //                                     {category}
        //                                 </p>
        //                             </li>
        //                         ))
        //                     ) : (
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                     )}
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="col-6 col-md-3">
        //             <div className="dropdown">
        //                 <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                     Order By
        //                 </button>
        //                 <ul className="dropdown-menu">
        //                     <li><a className="dropdown-item" href="#">Action</a></li>
        //                     /                             <li><a className="dropdown-item" href="#">Another action</a></li>
        //                     <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row" id='np-2'>
        //         asa
        //     </div>
        // </div >
        <div className='container-fluid nav-product p-0 m-0'>
            <div className="row d-flex justify-content-between my-3 my-md-3 mx-0 mx-md-5 w-100">
                <div className="col-12 col-sm-8">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-md-6">
                            <input
                                value={searchProduct}
                                onChange={(event) => handleSearch(event)}
                                type="text"
                                className='form-control w-100 py-1'
                                placeholder='Search Product'
                            />
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    value={selectCategories}
                                    onChange={(event) => handleCategory(event)}
                                >
                                    Select Category
                                </button>
                                <ul className="dropdown-menu">
                                    {categories.length != 0 ? (
                                        categories.map((category, index) => (
                                            <li key={index}>
                                                <p className="dropdown-item m-0">
                                                    {category}
                                                </p>
                                            </li>
                                        ))
                                    ) : (
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Order By
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="d-flex justify-content-end">
                        <button
                            className='btn-order bg-zg-white'
                            onClick={() => handleShow()}
                        >
                            My Order <span class="badge bg-danger text-bg-secondary">{cart.shoppingCart.length}</span>
                        </button>
                    </div>
                </div>
            </div>
            <CardOrder
                cart={cart}
                show={showCanvas}
                onHide={handleClose}
            />
        </div >
    )
}

export default NavProduct