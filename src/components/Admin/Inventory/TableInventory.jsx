import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import InfoModal from './InfoModal';


const TableInventory = ({ products }) => {


    return (
        <div className="w-100 my-4">
            <Table className='table table-hover table-striped' responsive>
                <thead>
                    <tr>
                        <th>Nº</th>
                        <th>Image</th>
                        <th>Name Products</th>
                        <th>Category</th>
                        <th>Weight</th>
                        <th>Measure</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>
                                <p>{index + 1}</p>
                            </td>
                            <td>
                                <img src={product.image} alt="" width={50} height={50} />
                            </td>
                            <td>
                                <p>{product.title}</p>
                            </td>
                            <td>
                                <p>{product.category}</p>
                            </td>
                            <td>
                                <p>{product.weight}</p>
                            </td>
                            <td>
                                <p>{product.measure}</p>
                            </td>
                            <td>
                                <div className='d-flex justify-content-start gap-2'>
                                    <button
                                        className='btn btn-sm btn-secondary'
                                    >
                                        <i class="fa-solid fa-circle-info"></i>
                                    </button>
                                    <button
                                        className='btn btn-sm btn-primary'
                                    >
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        className='btn btn-sm btn-danger'
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableInventory