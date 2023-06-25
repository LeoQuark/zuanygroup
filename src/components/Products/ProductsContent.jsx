import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

import CardProduct from './CardProduct'

const DivProduct = ({ product }) => {
    return (
        <div className='col-6 col-sm-6 col-md-3 col-lg-3 my-3 my-lg-4'>
            <CardProduct product={product} />
        </div>
    )
}

const ProductsContent = ({
    ProductMockup
}) => {
    console.log('ProductMockup', ProductMockup)

    const totalProduct = ProductMockup.length
    console.log(totalProduct)


    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(8)

    const totalPage = totalProduct / pageSize

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    // const firstPage = () => setCurrentPage(1)
    // const netxPage = () => setCurrentPage(1)

    // const filterData = () => {
    //     if (filtro.length === 0) {
    //         return ventas.slice(paginacion, paginacion + 5);
    //     }
    //     //si hay un nombre para filtrar
    //     const productoFiltrado = ventas.filter((prod) => {
    //         return prod.fecha.includes(filtro);
    //     });
    //     return productoFiltrado.slice(paginacion, paginacion + 5);
    // }

    //funciones para la paginacion
    const nextPage = () => {
        setPaginacion(paginacion + 5);
    };

    const backPage = () => {
        if (paginacion > 0) setPaginacion(paginacion - 5);
    };



    // const previusPage = () => {
    //     if (pagActive > 0) setCurrentPage()
    // }
    // console.log('ProductMockup')

    useEffect(() => {
        console.log('ProductMockup', ProductMockup)
    }, [])


    let items = [];
    for (let number = 1; number <= (totalProduct / 3); number++) {
        items.push(
            <button
                key={number}
                className={`btn-pagination-page ${number == currentPage ? 'btn-pagination-active' : ''}`}
            >
                {number}
            </button>
        );
    }

    // useEffect(() => {
    //     let items = [];
    //     for (let number = 1; number <= (totalProduct / 3); number++) {
    //         items.push(
    //             <Pagination.Item key={number} active={number === pagActive}>
    //                 {number}
    //             </Pagination.Item>,
    //         );
    //     }
    // }, [])

    return (
        <div className='p-0'>
            <div className="row d-flex justify-content-around justify-content-md-center my-0 mx-0 px-0">
                {ProductMockup && ProductMockup.map((product, index) => (
                    <DivProduct key={index} product={product} />
                ))}
            </div>
            <div className='d-flex justify-content-center py-5'>
                {/* <Pagination>
                    <Pagination.First onClick={firstPage} />
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination> */}
                <button className='btn-pagination-move'>
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                {items}
                <button className='btn-pagination-move'>
                    <i class="fa-solid fa-angle-right"></i>
                </button>

            </div>
        </div>
    )
}

export default ProductsContent
