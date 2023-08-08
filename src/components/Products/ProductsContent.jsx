import React, { useState, useEffect } from 'react';
// import Pagination from 'react-bootstrap/Pagination';

import CardProduct from './CardProduct'

const DivProduct = ({ product }) => {
    return (
        <div className='col-6 col-sm-6 col-md-3 col-lg-3 my-3 my-lg-4'>
            <CardProduct product={product} />
        </div>
    )
}

const ProductsContent = ({
    allProducts
}) => {

    const totalProduct = allProducts.length
    const [productos, setProductos] = useState([])
    const [pageSize, setPageSize] = useState(24)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * pageSize
    const firstIndex = lastIndex - pageSize


    const onPreviusPage = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const onNextPage = () => setCurrentPage(currentPage + 1)

    const onSpecificPage = (page) => setCurrentPage(page)

    const filterData = () => allProducts.slice(firstIndex, lastIndex)

    let items = [];
    for (let number = 1; number <= Math.ceil(totalProduct / pageSize); number++) {
        items.push(
            <button
                key={number}
                className={`btn-pagination-page ${number == currentPage ? 'btn-pagination-active' : ''}`}
                onClick={() => onSpecificPage(number)}
            >
                {number}
            </button>
        );
    }

    useEffect(() => {

    }, [])

    return (
        <div className='p-0'>
            <div className="row d-flex justify-content-around justify-content-md-center my-0 mx-0 px-0">
                {allProducts.length > 0 && filterData().map((product, index) => (
                    <DivProduct key={index} product={product} />
                ))}
            </div>
            <div className='d-flex justify-content-center py-5'>
                <button
                    className={`btn-pagination-move ${currentPage == 1 ? 'btn-pagination-disabled' : ''}`}
                    onClick={onPreviusPage}
                    disabled={currentPage == 1 ? true : false}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                {items}
                <button
                    className={`btn-pagination-move ${currentPage >= items.length ? 'btn-pagination-disabled' : ''}`}
                    onClick={onNextPage}
                    disabled={currentPage >= items.length ? true : false}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>

            </div>
        </div>
    )
}

export default ProductsContent
